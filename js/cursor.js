var e;

$(document).ready(function () {
  let cursor = document.getElementById("cursor");

  document.addEventListener("mousemove", (event) => {
    e = event;
  });

  function animate() {
    requestAnimationFrame(animate);

    if (!e) return;
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }

  function mouseEnter() {
    cursor.classList.add("hover");
  }

  function mouseOut() {
    cursor.classList.remove("hover");
  }

  var r = document.querySelectorAll(".hover-target");
  for (a = r.length - 1; a >= 0; a--) {
    r[a].addEventListener("mouseenter", mouseEnter),
      r[a].addEventListener("mouseout", mouseOut);
  }

  requestAnimationFrame(animate);
});
