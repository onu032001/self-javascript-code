(() => {
  const selfjs_current = (x => x.slice(x.indexOf("?")))(navigator.location.href);
  const selfjs_params = new URLSearchParams(selfjs_current);
  if (selfjs_params.has("expr")) {
    eval(selfjs_params.get("expr"));
  }
})();
