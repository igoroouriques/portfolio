const btn = document.getElementById("chaosBtn");
const toast = document.getElementById("toast");

btn.addEventListener("click", () => {
  toast.classList.add("show");
  document.body.animate(
    [{transform:"translateX(0)"},{transform:"translateX(-7px)"},{transform:"translateX(7px)"},{transform:"translateX(0)"}],
    {duration:260,iterations:2}
  );
  setTimeout(() => toast.classList.remove("show"), 2200);
});

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth"});
    }
  });
});
