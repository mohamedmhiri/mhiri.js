export default {
  navigate(state, payload) {
    const newState = state.mapping.filter(url => {
      return url.href === payload.href
    });
    console.log(newState);
    
    window.history.pushState({ url: `/${newState[0].href}` }, `${newState[0].label}`, `/${newState[0].href}`);
    return state;
  },
};