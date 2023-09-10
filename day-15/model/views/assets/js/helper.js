function animate(tag, type, link) {
  if (!type) {
    let opacity = 1;
    const animated = setInterval(() => {
      tag.style.opacity = opacity;
      opacity -= 0.1;
      if (opacity <= 0) {
        clearInterval(animated);
        window.location.href = link || "/";
      }
    }, 50);
  } else {
    let opacity = 0;
    const animated = setInterval(() => {
      tag.style.opacity = opacity;
      opacity += 0.15;
      if (opacity >= 1) {
        clearInterval(animated);
        opacity = 1;
      }
    }, 50);
  }
}
