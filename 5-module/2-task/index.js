function toggleText() {
  document.querySelector(".toggle-text-button").onclick = function () {
    const isHidden = document.getElementById("text");

    !isHidden.hasAttribute("hidden")
      ? isHidden.setAttribute("hidden", "true")
      : isHidden.removeAttribute("hidden");
  };
}
