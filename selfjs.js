(() => {
  const selfjs_current = document.currentScript.src;
  const selfjs_params = new URLSearchParams(new URL(selfjs_current).search);
  if (selfjs_params.has("expr")) {
    eval(selfjs_params.get("expr"));
  }
})();
