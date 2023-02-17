import $ from 'jquery';

$(document).ready(function () {
  const posts = document.querySelectorAll('.post');
  const postsContent = document.querySelectorAll('.post__content');
  console.log(postsContent)

  document.onload = setInitialTheme(localStorage.getItem('theme'));

  function setInitialTheme(themeKey) {
    if (themeKey === 'dark') {
      document.documentElement.classList.add('darkTheme');
    } else {
      document.documentElement.classList.remove('darkTheme');
    }
  }



  // Scrolling stories content  
  $(document).on('click', '.stories__left-button', function () {
    // $('.stories__content').scrollLeft(320);
    var leftPos = $('.stories__content').scrollLeft();
    $(".stories__content").animate({
      scrollLeft: leftPos - 200
    }, 0);
  });

  $(document).on('click', '.stories__right-button', function () {
    var leftPos = $('.stories__content').scrollLeft();
    $(".stories__content").animate({
      scrollLeft: leftPos + 200
    }, 0);
  });

  posts.forEach((post) => {
    if (post.querySelectorAll('.post__media').length > 1) {
      const leftButtonElement = document.createElement('button');
      leftButtonElement.classList.add('post__left-button');
      leftButtonElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="#fff" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"></path>
        </svg>
      `;

      const rightButtonElement = document.createElement('button');
      rightButtonElement.classList.add('post__right-button');
      rightButtonElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="#fff" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
        </svg>
      `;

      post.querySelector('.post__content').appendChild(leftButtonElement);
      post.querySelector('.post__content').appendChild(rightButtonElement);

      post.querySelectorAll('.post__media').forEach(function () {
        const postMediaIndicatorElement = document.createElement('div');
        postMediaIndicatorElement.classList.add('post__indicator');

        post
          .querySelector('.post__indicators')
          .appendChild(postMediaIndicatorElement);
      });

      // Observer to change the actual media indicator
      const postMediasContainer = post.querySelector('.post__medias');
      const postMediaIndicators = post.querySelectorAll('.post__indicator');
      const postIndicatorObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Removing all the indicators
              postMediaIndicators.forEach((indicator) =>
                indicator.classList.remove('post__indicator--active')
              );
              // Adding the indicator that matches the current post media
              postMediaIndicators[
                Array.from(postMedias).indexOf(entry.target)
              ].classList.add('post__indicator--active');
            }
          });
        }, {
          root: postMediasContainer,
          threshold: 0.5
        }
      );

      // Calling the observer for every post media
      const postMedias = post.querySelectorAll('.post__media');
      postMedias.forEach((media) => {
        postIndicatorObserver.observe(media);
      });
    }
  });

  // console.log(postsContent)
  // Adding buttons features on every post with multiple medias
  postsContent.forEach((post) => {
    if (post.querySelectorAll('.post__media').length > 1) {
      const leftButton = post.querySelector('.post__left-button');
      const rightButton = post.querySelector('.post__right-button');
      const postMediasContainer = post.querySelector('.post__medias');

      // Functions for left and right buttons
      leftButton.addEventListener('click', () => {
        postMediasContainer.scrollLeft -= 400;
      });
      rightButton.addEventListener('click', () => {
        postMediasContainer.scrollLeft += 400;
      });

      //     // Observer to hide button if necessary
      const postButtonObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach((entry) => {
            if (entry.target === post.querySelector('.post__media:first-child')) {
              leftButton.style.display = entry.isIntersecting ? 'none' : 'unset';
            } else if (
              entry.target === post.querySelector('.post__media:last-child')
            ) {
              rightButton.style.display = entry.isIntersecting ? 'none' : 'unset';
            }
          });
        }, {
          root: postMediasContainer,
          threshold: 0.5
        }
      );

      if (window.matchMedia('(min-width: 1024px)').matches) {
        postButtonObserver.observe(
          post.querySelector('.post__media:first-child')
        );
        postButtonObserver.observe(post.querySelector('.post__media:last-child'));
      }
    }
  });


})


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

$(document).on('click', '.header__theme-button', function () {
  // Toggle root class
  document.documentElement.classList.toggle('darkTheme');

  // Saving current theme on LocalStorage
  if (document.documentElement.classList.contains('darkTheme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
})
