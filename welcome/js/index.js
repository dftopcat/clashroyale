// for heading

$(window).scroll(function() {
  const 
    a = $(this).scrollTop(),
    b = 800;
  $("h1").css({
    backgroundPosition: "center " + a / 2 + "px" 
  });
  $(".parallax").css({ 
    top: a / 1.6 + "px", 
    opacity: 1 - a / b 
  });
});

// parallax scrolling

document.addEventListener("scroll", () => {
  const 
    top = window.pageYOffset,
    one = document.querySelector(".one"),
    two = document.querySelector(".two"),
    three = document.querySelector(".three"),
    four = document.querySelector(".four"),
    five = document.querySelector(".five");

  one.style.bottom = -(top * 0.1) + "px";
  two.style.bottom = -(top * 0.2) + "px";
  three.style.bottom = -(top * 0.3) + "px";
  four.style.bottom = -(top * 0.4) + "px";
  five.style.bottom = -(top * 0.5) + "px";
});

/*
// mouse dependency

const currentX = '';
const currentY = '';
const movementConstant = 0.015;
$(document).mousemove(function(e) {
  if (currentX == '') currentX = e.pageX;
  const xdiff = e.pageX - currentX;
  currentX = e.pageX;
  if (currentY == '') currentY = e.pageY;
  const ydiff = e.pageY - currentY;
  currentY = e.pageY;
$('.parallax div').each(function(i, el) {
    const movement = (i + 1) * (xdiff * movementConstant);
    const movementy = (i + 1) * (ydiff * movementConstant);
    const newX = $(el).position().left + movement;
    const newY = $(el).position().top + movementy;
    $(el).css('left', newX + 'px');
    $(el).css('top', newY + 'px');
  });
});
*/