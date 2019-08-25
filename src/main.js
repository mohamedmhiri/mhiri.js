// vanila JS example
async function* counter(input) {
  let state = 0
  yield {type: "VALUE", value: state}
  for await(const action of input) {
    switch (action.type) {
    case "INCREMENT":
      state++
      yield {type: "VALUE", value:state}
      break
    case "DECREMENT":
      state--
      yield {type: "VALUE", value:state}
      break
    }
    yield action
  }
}

// nano framework
function createStore(main) {
  let state;
  let callback;
  const queue = [];
  const producer = async function* producer() {
    for(;;) {
      while(queue.length)
        yield queue.shift();
      await new Promise(i => callback = i);
      callback = null;
    }
  }();
  (async function consumer() {
    for await(const i of main(producer)) {
      if (i.type === "VALUE")
        state = i.value
    }
  })()
  return {
    getState() { return state },
    dispatch(action) {
      if (callback)
        callback();
      queue.push(action);
    }
  }
}

function pipe(...args) {
  return function(i) {
    for(const f of args)
      i = f(i)
    return i
  }
}

var store = createStore(pipe(counter,render))

var valueEl = document.getElementById("value")

async function* render(input) {
  for await(const i of input) {
    if (i.type === "VALUE")
      valueEl.innerHTML = i.value.toString()
    yield i
  }
}

document.getElementById("increment")
  .addEventListener("click", function () {
    store.dispatch({ type: "INCREMENT" })
  })
document.getElementById("decrement")
  .addEventListener("click", function () {
    store.dispatch({ type: "DECREMENT" })
  })
document.getElementById("incrementIfOdd")
  .addEventListener("click", function () {
    if (store.getState() % 2 !== 0) {
      store.dispatch({ type: "INCREMENT" })
    }
  })
document.getElementById("incrementAsync")
  .addEventListener("click", function () {
    setTimeout(function () {
      store.dispatch({ type: "INCREMENT" })
    }, 1000)
  })
