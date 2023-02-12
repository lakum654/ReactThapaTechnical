import $ from 'jquery';


const toggleThemeBtn = $('.header__theme-button');
const storiesContent = $('.stories__content');
const storiesLeftButton = $('.stories__left-button');
const storiesRightButton = $('.stories__right-button');
const posts = $('.post');
const postsContent = $('.post__content');

document.onload = setInitialTheme(localStorage.getItem('theme'));
function setInitialTheme(themeKey) {
  if (themeKey === 'dark') {
    document.documentElement.classList.add('darkTheme');
  } else {
    document.documentElement.classList.remove('darkTheme');
  }
}

// Toggle theme button
$('.header__theme-button').on('click', () => {
  // Toggle root class
  document.documentElement.classList.toggle('darkTheme');

  // Saving current theme on LocalStorage
  if (document.documentElement.classList.contains('darkTheme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

$(document).on('click','.header__theme-button',function() {
  // Toggle root class
  document.documentElement.classList.toggle('darkTheme');

  // Saving current theme on LocalStorage
  if (document.documentElement.classList.contains('darkTheme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
})


// Scrolling stories content
$(document).on('click','.stories__left-button',function() {
  // $('.stories__content').scrollLeft(320);
   var leftPos = $('.stories__content').scrollLeft();
   $(".stories__content").animate({scrollLeft: leftPos - 200}, 100);

});

$(document).on('click','.stories__right-button',function() {
  var leftPos = $('.stories__content').scrollLeft();
  $(".stories__content").animate({scrollLeft: leftPos + 200}, 100);
});




