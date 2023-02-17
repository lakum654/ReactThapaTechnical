import React, { useEffect, useState } from 'react';
import useExternalScripts from '../useExternalScripts';
import Custom from './js/script';
import './css/style.css';
import $ from 'jquery';
const Home = () => {  
  
  const [Auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')));
  const [leftStyle,setLeftStyle] = useState({})
  const [rightStyle,setRightStyle] = useState({});
  const toggleThemeBtn = document.querySelector('.header__theme-button');
  const storiesContent = document.querySelector('.stories__content');
  const storiesLeftButton = document.querySelector('.stories__left-button');
  const storiesRightButton = document.querySelector('.stories__right-button');
  const posts = document.querySelectorAll('.post');
  const postsContent = document.querySelectorAll('.post__content');

    useEffect(() => {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        // Observer to hide buttons when necessary
        const storiesObserver = new IntersectionObserver(
          function (entries) {
            entries.forEach((entry) => {
              if (entry.target === document.querySelector('.story:first-child')) {
                  if(entry.isIntersecting) {
                    setLeftStyle({display: "none"});
                  } else {
                    setLeftStyle({display: "unset"});
                  }
              } else if (entry.target === document.querySelector('.story:last-child')) {
                if(entry.isIntersecting) {
                  setRightStyle({display: "none"});
              } else {
                    setRightStyle({display: "unset"});
              }
              }
            });
          },
          { root: storiesContent, threshold: 1 }
        );
      
        // Calling the observer with the first and last stories
        storiesObserver.observe(document.querySelector('.story:first-child'));
        storiesObserver.observe(document.querySelector('.story:last-child'));
      }
    },[])
        
    return (
        <>
            <Navabar/>
            <Main leftStyle={leftStyle} rightStyle={rightStyle}/>
            <Footer/>
        </>
    )
}


const Navabar = () => {
    return (<>
      <header className="header">
      <nav className="header__content">
        <div className="header__buttons">
          <a href="index.html" className="header__home">
            <svg
              width="104"
              height="30"
              viewBox="0 0 104 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.34906 0.103386C3.22375 1.01086 0.881358 3.5683 0.144313 6.78057C-0.789613 10.8488 3.10259 12.5709 3.42568 12.0089C3.7942 11.3437 2.72397 11.1169 2.50185 9.00802C2.2141 6.28043 3.46606 3.23316 5.03607 1.89772C5.32887 1.65022 5.31372 1.99568 5.31372 2.63504C5.31372 3.7797 5.25314 14.0456 5.25314 16.1853C5.25314 19.0831 5.13703 20.0009 4.92501 20.9032C4.70793 21.821 4.36465 22.4397 4.62716 22.6769C4.91996 22.945 6.16688 22.3108 6.88373 21.2848C7.74698 20.0576 8.04987 18.5829 8.10541 16.9845C8.17103 15.051 8.16599 11.9934 8.17103 10.2455C8.17103 8.64193 8.19627 3.95501 8.14579 1.13461C8.1256 0.448846 6.2426 -0.273011 5.34906 0.103386ZM103.522 15.3294C103.214 15.3294 103.073 15.6543 102.957 16.1957C102.553 18.088 102.129 18.5159 101.579 18.5159C100.968 18.5159 100.418 17.5775 100.276 15.7007C100.165 14.226 100.18 11.5087 100.322 8.80693C100.352 8.25007 100.201 7.70352 98.7367 7.16212C98.1056 6.9301 97.1868 6.58464 96.7325 7.70867C95.4452 10.8694 94.9404 13.3804 94.8192 14.4013C94.8142 14.4529 94.7485 14.4632 94.7384 14.3446C94.6627 13.5248 94.4961 12.0398 94.4709 8.92036C94.4658 8.31194 94.3396 7.79117 93.6783 7.36837C93.2492 7.09509 91.9468 6.60526 91.4773 7.1879C91.0734 7.66227 90.5989 8.93583 90.1092 10.4466C89.7104 11.6737 89.4378 12.5039 89.4378 12.5039C89.4378 12.5039 89.4428 9.18848 89.4479 7.93554C89.4479 7.46118 89.1298 7.3065 89.0339 7.27556C88.5998 7.14666 87.7416 6.93525 87.3781 6.93525C86.9288 6.93525 86.8228 7.1879 86.8228 7.55915C86.8228 7.60555 86.7521 11.9212 86.7521 14.9376V15.3655C86.5047 16.7525 85.7021 18.6345 84.8287 18.6345C83.9503 18.6345 83.5414 17.8508 83.5414 14.2518C83.5414 12.1533 83.602 11.2406 83.6323 9.72472C83.6474 8.85333 83.6828 8.17788 83.6828 8.02835C83.6777 7.55915 82.8801 7.32712 82.5116 7.23947C82.138 7.15181 81.8149 7.11572 81.5625 7.13119C81.2041 7.15181 80.9517 7.38899 80.9517 7.71899C80.9517 7.89429 80.9517 8.22944 80.9517 8.22944C80.4923 7.49727 79.7552 6.98682 79.2605 6.83729C77.9379 6.44027 76.5546 6.79088 75.5097 8.27585C74.6817 9.45144 74.182 10.7869 73.9851 12.705C73.8387 14.1074 73.8892 15.5305 74.1416 16.7319C73.8336 18.088 73.2581 18.6448 72.6321 18.6448C71.7235 18.6448 71.0621 17.1341 71.1379 14.5199C71.1883 12.8029 71.5266 11.5964 71.8951 9.84847C72.0516 9.10598 71.9254 8.71412 71.6023 8.34288C71.3095 8.00257 70.6785 7.82726 69.7748 8.03867C69.1337 8.19335 68.2099 8.35835 67.3719 8.48209C67.3719 8.48209 67.4224 8.27585 67.4627 7.91492C67.6798 6.01231 65.6454 6.16699 64.9941 6.77541C64.6054 7.1415 64.3429 7.56946 64.242 8.33772C64.0855 9.55972 65.0648 10.1372 65.0648 10.1372C64.7417 11.6325 63.9542 13.5867 63.1414 14.9994C62.7073 15.7574 62.3691 16.3194 61.94 16.9124C61.94 16.6906 61.94 16.4689 61.9349 16.2472C61.9248 13.102 61.9652 10.627 61.9854 9.73503C62.0005 8.86365 62.0359 8.20882 62.0359 8.05413C62.0308 7.71383 61.8339 7.58493 61.425 7.41993C61.0616 7.27556 60.6375 7.17759 60.1933 7.1415C59.638 7.09509 59.2997 7.39931 59.3098 7.75508C59.3098 7.82211 59.3098 8.2346 59.3098 8.2346C58.8504 7.50243 58.1134 6.99197 57.6187 6.84244C56.296 6.44542 54.9128 6.79604 53.8678 8.281C53.0399 9.4566 52.4997 11.1117 52.3432 12.6946C52.2019 14.1693 52.2271 15.4222 52.424 16.4792C52.212 17.5363 51.6062 18.6448 50.9247 18.6448C50.0513 18.6448 49.5515 17.8611 49.5515 14.2621C49.5515 12.1636 49.6121 11.2509 49.6424 9.73503C49.6626 8.86365 49.6929 8.18819 49.6929 8.03867C49.6879 7.56946 48.8902 7.33743 48.5217 7.24978C48.133 7.15697 47.7998 7.12603 47.5423 7.14666C47.2041 7.17244 46.9668 7.4818 46.9668 7.70867V8.23975C46.5075 7.50758 45.7654 6.99713 45.2757 6.8476C43.953 6.45058 42.5799 6.81151 41.5299 8.28616C40.8433 9.25036 40.288 10.3177 40.0053 12.6792C39.9195 13.3598 39.8841 13.9991 39.8892 14.5973C39.6166 16.2988 38.4101 18.253 37.4256 18.253C36.8501 18.253 36.2999 17.1134 36.2999 14.6901C36.2999 11.4572 36.4968 6.85791 36.5321 6.41449C36.5321 6.41449 37.779 6.39386 38.0213 6.38871C38.6423 6.38355 39.2077 6.39902 40.0356 6.35261C40.4495 6.33199 40.8484 4.81609 40.4243 4.63047C40.2274 4.54281 38.8543 4.47063 38.3091 4.46031C37.8749 4.43453 36.5977 4.33657 36.5977 4.33657C36.5977 4.33657 36.7138 1.28414 36.7391 0.959303C36.7593 0.691184 36.416 0.551969 36.2242 0.469471C35.7446 0.263226 35.3205 0.165259 34.8157 0.0621369C34.114 -0.0873908 33.801 0.0569808 33.7354 0.660248C33.6395 1.56773 33.594 4.2386 33.594 4.2386C33.0791 4.2386 31.3274 4.13548 30.8175 4.13548C30.3379 4.13548 29.828 6.21855 30.4843 6.24433C31.2415 6.27527 32.5642 6.30105 33.4426 6.32683C33.4426 6.32683 33.4022 11.0034 33.4022 12.4472C33.4022 12.5967 33.4022 12.7462 33.4022 12.8906C32.9226 15.448 31.2213 16.8247 31.2213 16.8247C31.5848 15.1335 30.8427 13.8651 29.4999 12.7926C29.0052 12.3956 28.0309 11.648 26.9354 10.823C26.9354 10.823 27.5664 10.1888 28.1318 8.91521C28.5306 8.01289 28.5458 6.9765 27.5715 6.74963C25.9611 6.37324 24.6283 7.57461 24.2346 8.86365C23.9266 9.85878 24.0932 10.5961 24.694 11.3644C24.7343 11.4211 24.7848 11.4778 24.8353 11.5345C24.4718 12.2512 23.9721 13.2103 23.548 13.9527C22.3718 16.0204 21.4833 17.6548 20.8119 17.6548C20.2767 17.6548 20.2818 15.9946 20.2818 14.4426C20.2818 13.102 20.3777 11.0911 20.4585 9.00286C20.4837 8.31194 20.1455 7.92007 19.575 7.5643C19.2318 7.34774 18.4947 6.91979 18.0656 6.91979C17.4245 6.91979 15.5819 7.00744 13.8402 12.1326C13.6231 12.7771 13.189 13.9579 13.189 13.9579L13.2243 7.79633C13.2243 7.65196 13.1486 7.51274 12.977 7.41477C12.6842 7.24978 11.8966 6.91979 11.2 6.91979C10.8668 6.91979 10.7002 7.07963 10.7002 7.39415L10.6396 17.0361C10.6396 17.7683 10.6598 18.6242 10.7305 18.9954C10.8012 19.3667 10.9173 19.676 11.0586 19.8565C11.2 20.037 11.3666 20.1762 11.6341 20.2329C11.8865 20.2845 13.2698 20.4649 13.3404 19.9287C13.4263 19.2842 13.4313 18.5881 14.1583 15.9946C15.2891 11.9522 16.7632 9.98253 17.4548 9.28129C17.5759 9.15755 17.7173 9.15239 17.7072 9.35348C17.6769 10.2403 17.5759 12.4575 17.5052 14.3343C17.3185 19.3667 18.2171 20.2999 19.5044 20.2999C20.4888 20.2999 21.877 19.3048 23.3663 16.7886C24.2951 15.2212 25.1937 13.6795 25.845 12.5709C26.2943 12.9937 26.8041 13.4526 27.309 13.9373C28.4852 15.0716 28.8689 16.1493 28.6164 17.1702C28.4196 17.9539 27.6825 18.7583 26.37 17.9745C25.9863 17.7477 25.8248 17.5723 25.4411 17.3094C25.2341 17.1702 24.9161 17.1289 24.7293 17.2784C24.2396 17.6548 23.9569 18.1344 23.7954 18.7273C23.6389 19.3048 24.2093 19.609 24.7949 19.8771C25.3048 20.1092 26.3952 20.3154 27.0919 20.3412C29.8028 20.434 31.9735 19.0109 33.488 15.3397C33.7606 18.5108 34.9116 20.3051 36.9107 20.3051C38.2485 20.3051 39.5913 18.5469 40.1769 16.8195C40.3435 17.5259 40.596 18.1395 40.914 18.6551C42.4588 21.1404 45.4473 20.6041 46.9517 18.4953C47.4161 17.8456 47.4868 17.6084 47.4868 17.6084C47.7039 19.5987 49.284 20.2948 50.1876 20.2948C51.1973 20.2948 52.2423 19.8101 52.9743 18.1344C53.0601 18.3148 53.156 18.4901 53.257 18.6551C54.7967 21.1404 57.7903 20.6041 59.2896 18.4953C59.3603 18.3973 59.4209 18.3097 59.4764 18.2272L59.5218 19.5368C59.5218 19.5368 58.6636 20.336 58.1386 20.8259C55.8215 22.9863 54.0596 24.6259 53.9284 26.5337C53.7618 28.9674 55.7054 29.8697 57.1744 29.9883C58.7343 30.112 60.0721 29.2407 60.8899 28.0135C61.6118 26.9359 62.0864 24.6105 62.051 22.3211C62.0359 21.4033 62.0157 20.2381 61.9955 18.9851C62.8083 18.0261 63.727 16.8092 64.5701 15.3913C65.4889 13.8393 66.4783 11.7614 66.9832 10.1424C66.9832 10.1424 67.8414 10.1475 68.7551 10.0908C69.0479 10.0753 69.1287 10.1321 69.0782 10.3486C69.0126 10.6116 67.9221 14.886 68.9166 17.7322C69.5982 19.6812 71.1328 20.3102 72.0415 20.3102C73.1067 20.3102 74.1264 19.4956 74.6716 18.2787C74.7373 18.4128 74.8079 18.5417 74.8837 18.6654C76.4234 21.1507 79.4069 20.6093 80.9214 18.5056C81.2647 18.0312 81.4565 17.6187 81.4565 17.6187C81.7796 19.6812 83.3597 20.3154 84.2633 20.3154C85.2023 20.3154 86.0958 19.9235 86.8228 18.1808C86.8531 18.949 86.9035 19.5781 86.9742 19.774C87.0197 19.8926 87.2872 20.0473 87.4841 20.1195C88.3474 20.4443 89.2207 20.2896 89.5488 20.2226C89.776 20.1762 89.9476 19.9906 89.9729 19.5214C90.0335 18.2787 89.9981 16.1853 90.3667 14.6334C90.9876 12.0244 91.5681 11.0138 91.8458 10.5136C91.9972 10.2352 92.1739 10.1888 92.179 10.4827C92.1941 11.0859 92.2244 12.8442 92.4617 15.216C92.6384 16.9588 92.8756 17.99 93.0574 18.3148C93.5773 19.2481 94.2185 19.2893 94.7384 19.2893C95.0716 19.2893 95.7632 19.1965 95.7027 18.6036C95.6724 18.3148 95.7279 16.5308 96.3387 13.9579C96.7426 12.2822 97.409 10.7663 97.6513 10.2146C97.7421 10.0083 97.7825 10.1733 97.7825 10.2042C97.7321 11.3592 97.6159 15.1335 98.0804 17.2011C98.7064 20.0009 100.524 20.3102 101.155 20.3102C102.503 20.3102 103.608 19.2687 103.982 16.5205C104.052 15.845 103.921 15.3294 103.522 15.3294ZM46.9668 13.6331C46.8911 15.0871 46.6084 16.3039 46.1642 17.1856C45.3514 18.784 43.7511 19.2893 43.0443 16.9794C42.5345 15.314 42.7061 13.0453 42.9181 11.8181C43.2311 9.99799 44.0187 8.70896 45.2504 8.83271C46.5175 8.96161 47.1284 10.6116 46.9668 13.6331ZM59.3098 13.6537C59.2391 15.0252 58.8858 16.4071 58.5071 17.1856C57.7196 18.7943 56.0688 19.2996 55.3873 16.9794C54.9229 15.3965 55.0339 13.3495 55.2611 12.0604C55.559 10.3847 56.2859 8.83271 57.5934 8.83271C58.8656 8.83271 59.4916 10.2506 59.3098 13.6537ZM59.6329 23.0224C59.6178 25.5282 59.229 27.7196 58.3961 28.359C57.2148 29.2613 55.6296 28.5858 55.9578 26.7606C56.2506 25.1415 57.6186 23.4916 59.6329 21.4755C59.638 21.4704 59.638 21.9293 59.6329 23.0224ZM80.9365 13.6692C80.8659 15.1747 80.5377 16.3555 80.1339 17.1856C79.3463 18.7943 77.7056 19.2945 77.014 16.9794C76.6354 15.7213 76.6203 13.6124 76.8929 11.8542C77.1705 10.065 77.9429 8.70896 79.2252 8.83271C80.4822 8.95646 81.0728 10.6116 80.9365 13.6692Z"
                fill="var(--text-dark)"
              />
            </svg>
          </a>

          <button className="header__theme-button" title="Toggle Theme">
            <svg
              className="header__theme-button-moon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="var(--text-dark)"
              viewBox="0 0 16 16"
            >
              <path
                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
              />
            </svg>
            <svg
              className="header__theme-button-sun"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="var(--text-dark)"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
              />
            </svg>
          </button>
        </div>

        <div className="header__search">
          <input type="text" placeholder="Search" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.669 21.6543C21.8625 21.4622 21.863 21.1494 21.6703 20.9566L17.3049 16.5913C18.7912 14.9327 19.7017 12.7525 19.7017 10.3508C19.7017 5.18819 15.5135 1 10.3508 1C5.18819 1 1 5.18819 1 10.3508C1 15.5135 5.18819 19.7017 10.3508 19.7017C12.7624 19.7017 14.9475 18.7813 16.606 17.2852L20.9739 21.653C21.1657 21.8449 21.4765 21.8454 21.669 21.6543ZM1.9843 10.3508C1.9843 5.7394 5.7394 1.9843 10.3508 1.9843C14.9623 1.9843 18.7174 5.7394 18.7174 10.3508C18.7174 14.9623 14.9623 18.7174 10.3508 18.7174C5.7394 18.7174 1.9843 14.9623 1.9843 10.3508Z"
              fill="#A5A5A5"
              stroke="#A5A5A5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="header__buttons header__buttons--mobile">
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="var(--text-dark)"
                strokeWidth="1.8"
              />
              <line
                x1="12.1"
                y1="6.9"
                x2="12.1"
                y2="17.1"
                stroke="var(--text-dark)"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <line
                x1="6.9"
                y1="11.8"
                x2="17.1"
                y2="11.8"
                stroke="var(--text-dark)"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
                fill="var(--text-dark)"
                stroke="var(--text-dark)"
                strokeWidth="0.6"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.81038 19.7478C5.83176 19.4539 5.70787 19.1681 5.47873 18.9827C3.2792 17.2037 1.9 14.5525 1.9 11.5868C1.9 6.27627 6.38748 1.9 12.0098 1.9C17.6196 1.9 22.1078 6.27565 22.1078 11.5868C22.1078 16.8966 17.6092 21.2735 11.998 21.2735C11.0656 21.2735 10.1798 21.1544 9.32697 20.9277C9.15685 20.8825 8.97721 20.8882 8.81028 20.944L5.64643 22.0022L5.81038 19.7478Z"
                stroke="var(--text-dark)"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M10.1498 8.7952C10.2222 8.80563 10.2825 8.81606 10.3548 8.82649C11.428 9.05591 12.5252 10.0362 13.3693 10.6202C13.8396 10.9539 14.2375 10.9226 14.7078 10.6097C15.7086 9.92147 16.7456 9.26448 17.7705 8.58664C18.0478 8.39893 18.3372 8.20079 18.6748 8.45107C19.0486 8.7222 18.8195 9.0142 18.6266 9.28534C17.6137 10.6827 16.6129 12.0801 15.588 13.4671C14.8886 14.4265 13.8999 14.5621 12.8388 13.8842C12.1032 13.4045 11.3436 12.9561 10.6201 12.4556C10.1378 12.1219 9.73984 12.1636 9.28163 12.4764C8.26876 13.1647 7.24382 13.8217 6.21889 14.4995C5.94156 14.6872 5.65216 14.8854 5.31454 14.6247C4.97691 14.3744 5.15778 14.0928 5.33865 13.8321C6.3877 12.393 7.42469 10.9539 8.47374 9.51476C8.82343 9.02463 9.47456 8.73263 10.1498 8.7952Z"
                fill="var(--text-dark)"
              />
            </svg>
          </a>
        </div>

        <div className="header__buttons header__buttons--desktop">
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.45307 11.751L11.9773 2.02175L21.5015 11.751C21.7906 12.0463 21.9545 12.4468 21.9545 12.8711V20.4556C21.9545 20.7747 21.7037 21 21.4427 21H15.964C15.713 21 15.4721 20.7849 15.4721 20.476V15.8886C15.4721 13.9497 13.9267 12.34 11.9773 12.34C10.0279 12.34 8.48244 13.9497 8.48244 15.8886V20.476C8.48244 20.7849 8.24157 21 7.99053 21H2.51187C2.25085 21 2 20.7747 2 20.4556V12.8711C2 12.4468 2.16397 12.0463 2.45307 11.751Z"
                stroke="var(--text-dark)"
                strokeWidth="2"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.81038 19.7478C5.83176 19.4539 5.70787 19.1681 5.47873 18.9827C3.2792 17.2037 1.9 14.5525 1.9 11.5868C1.9 6.27627 6.38748 1.9 12.0098 1.9C17.6196 1.9 22.1078 6.27565 22.1078 11.5868C22.1078 16.8966 17.6092 21.2735 11.998 21.2735C11.0656 21.2735 10.1798 21.1544 9.32697 20.9277C9.15685 20.8825 8.97721 20.8882 8.81028 20.944L5.64643 22.0022L5.81038 19.7478Z"
                stroke="var(--text-dark)"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M10.1498 8.7952C10.2222 8.80563 10.2825 8.81606 10.3548 8.82649C11.428 9.05591 12.5252 10.0362 13.3693 10.6202C13.8396 10.9539 14.2375 10.9226 14.7078 10.6097C15.7086 9.92147 16.7456 9.26448 17.7705 8.58664C18.0478 8.39893 18.3372 8.20079 18.6748 8.45107C19.0486 8.7222 18.8195 9.0142 18.6266 9.28534C17.6137 10.6827 16.6129 12.0801 15.588 13.4671C14.8886 14.4265 13.8999 14.5621 12.8388 13.8842C12.1032 13.4045 11.3436 12.9561 10.6201 12.4556C10.1378 12.1219 9.73984 12.1636 9.28163 12.4764C8.26876 13.1647 7.24382 13.8217 6.21889 14.4995C5.94156 14.6872 5.65216 14.8854 5.31454 14.6247C4.97691 14.3744 5.15778 14.0928 5.33865 13.8321C6.3877 12.393 7.42469 10.9539 8.47374 9.51476C8.82343 9.02463 9.47456 8.73263 10.1498 8.7952Z"
                fill="var(--text-dark)"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 2.8H7C5.23269 2.8 3.8 4.23269 3.8 6V17C3.8 18.7673 5.23269 20.2 7 20.2H18C19.7673 20.2 21.2 18.7673 21.2 17V6C21.2 4.23269 19.7673 2.8 18 2.8ZM7 1C4.23858 1 2 3.23858 2 6V17C2 19.7614 4.23858 22 7 22H18C20.7614 22 23 19.7614 23 17V6C23 3.23858 20.7614 1 18 1H7Z"
                fill="var(--text-dark)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 7.99995H3V6.19995H22V7.99995Z"
                fill="var(--text-dark)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 6.99989L6 1.99989L7.57349 1.12573L11.5735 6.12573L10 6.99989Z"
                fill="var(--text-dark)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5 6.99989L12.5 1.99989L14.0735 1.12573L18.0735 6.12573L16.5 6.99989Z"
                fill="var(--text-dark)"
              />
              <path
                d="M15.75 13.0671C16.0833 13.2595 16.0833 13.7407 15.75 13.9331L10.5 16.9642C10.1667 17.1566 9.75 16.9161 9.75 16.5312L9.75 10.469C9.75 10.0841 10.1667 9.84354 10.5 10.036L15.75 13.0671Z"
                fill="var(--text-dark)"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
                fill="var(--text-dark)"
                stroke="var(--text-dark)"
                strokeWidth="0.6"
              />
            </svg>
          </a>
          <button className="profile-button">
            <div className="profile-button__border"></div>
            <div className="profile-button__picture">
              <img src="assets/default-user.png" alt="User Picture" />
            </div>
          </button>
        </div>
      </nav>
    </header>
        
    </>)
}

const Stories = ({leftStyle,rightStyle}) => {
  return (
    <>
        <div className="stories">
        <button className="stories__left-button" style={leftStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="#fff"
              d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"
            ></path>
          </svg>
        </button>
        <div className="stories__content">
          <button className="story story--has-story">
            <div className="story__avatar">
              <div className="story__border">
                <svg
                  width="64"
                  height="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="31" cy="32" cx="32" />
                  <defs>
                    <linearGradient
                      y2="0"
                      x2="1"
                      y1="1"
                      x1="0"
                      id="--story-gradient"
                    >
                      <stop offset="0" stopColor="#f09433" />
                      <stop offset="0.25" stopColor="#e6683c" />
                      <stop offset="0.5" stopColor="#dc2743" />
                      <stop offset="0.75" stopColor="#cc2366" />
                      <stop offset="1" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="story__picture">
                <img src="assets/default-user.png" alt="User Picture" />
              </div>
            </div>
            <span className="story__user">usernick1</span>
          </button>
          <button className="story story--has-story">
            <div className="story__avatar">
              <div className="story__border">
                <svg
                  width="64"
                  height="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="31" cy="32" cx="32" />
                </svg>
              </div>
              <div className="story__picture">
                <img src="assets/default-user.png" alt="User Picture" />
              </div>
            </div>
            <span className="story__user">usernick2</span>
          </button>
          <button className="story story--has-story">
            <div className="story__avatar">
              <div className="story__border">
                <svg
                  width="64"
                  height="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="31" cy="32" cx="32" />
                </svg>
              </div>
              <div className="story__picture">
                <img src="assets/default-user.png" alt="User Picture" />
              </div>
            </div>
            <span className="story__user">usernick3</span>
          </button>
          <button className="story">
            <div className="story__avatar">
              <div className="story__border">
                <svg
                  width="64"
                  height="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="31" cy="32" cx="32" />
                </svg>
              </div>
              <div className="story__picture">
                <img src="assets/default-user.png" alt="User Picture" />
              </div>
            </div>
            <span className="story__user">usernick4</span>
          </button>
          <button className="story">
            <div className="story__avatar">
              <div className="story__border">
                <svg
                  width="64"
                  height="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="31" cy="32" cx="32" />
                </svg>
              </div>
              <div className="story__picture">
                <img src="assets/default-user.png" alt="User Picture" />
              </div>
            </div>
            <span className="story__user">usernick5</span>
          </button>
          <button className="story">
            <div className="story__avatar">
              <div className="story__border">
                <svg
                  width="64"
                  height="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="31" cy="32" cx="32" />
                </svg>
              </div>
              <div className="story__picture">
                <img src="assets/default-user.png" alt="User Picture" />
              </div>
            </div>
            <span className="story__user">usernick6</span>
          </button>
          <button className="story">
            <div className="story__avatar">
              <div className="story__border">
                <svg
                  width="64"
                  height="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="31" cy="32" cx="32" />
                </svg>
              </div>
              <div className="story__picture">
                <img src="assets/default-user.png" alt="User Picture" />
              </div>
            </div>
            <span className="story__user">usernick7</span>
          </button>
          <button className="story">
            <div className="story__avatar">
              <div className="story__border">
                <svg
                  width="64"
                  height="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="31" cy="32" cx="32" />
                </svg>
              </div>
              <div className="story__picture">
                <img src="assets/default-user.png" alt="User Picture" />
              </div>
            </div>
            <span className="story__user">usernick8</span>
          </button>
          <button className="story">
            <div className="story__avatar">
              <div className="story__border">
                <svg
                  width="64"
                  height="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="31" cy="32" cx="32" />
                </svg>
              </div>
              <div className="story__picture">
                <img src="assets/default-user.png" alt="User Picture" />
              </div>
            </div>
            <span className="story__user">usernick9</span>
          </button>
          <button className="story">
            <div className="story__avatar">
              <div className="story__border">
                <svg
                  width="64"
                  height="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="31" cy="32" cx="32" />
                </svg>
              </div>
              <div className="story__picture">
                <img src="assets/default-user.png" alt="User Picture" />
              </div>
            </div>
            <span className="story__user">usernick10</span>
          </button>
          <button className="story">
            <div className="story__avatar">
              <div className="story__border">
                <svg
                  width="64"
                  height="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="31" cy="32" cx="32" />
                </svg>
              </div>
              <div className="story__picture">
                <img src="assets/default-user.png" alt="User Picture" />
              </div>
            </div>
            <span className="story__user">usernick11</span>
          </button>
          <button className="story">
            <div className="story__avatar">
              <div className="story__border">
                <svg
                  width="64"
                  height="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="31" cy="32" cx="32" />
                </svg>
              </div>
              <div className="story__picture">
                <img src="assets/default-user.png" alt="User Picture" />
              </div>
            </div>
            <span className="story__user">usernick12</span>
          </button>
          <button className="story">
            <div className="story__avatar">
              <div className="story__border">
                <svg
                  width="64"
                  height="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="31" cy="32" cx="32" />
                </svg>
              </div>
              <div className="story__picture">
                <img src="assets/default-user.png" alt="User Picture" />
              </div>
            </div>
            <span className="story__user">usernick13</span>
          </button>
          <button className="story">
            <div className="story__avatar">
              <div className="story__border">
                <svg
                  width="64"
                  height="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="31" cy="32" cx="32" />
                </svg>
              </div>
              <div className="story__picture">
                <img src="assets/default-user.png" alt="User Picture" />
              </div>
            </div>
            <span className="story__user">usernick14</span>
          </button>
          <button className="story">
            <div className="story__avatar">
              <div className="story__border">
                <svg
                  width="64"
                  height="64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle r="31" cy="32" cx="32" />
                </svg>
              </div>
              <div className="story__picture">
                <img src="assets/default-user.png" alt="User Picture" />
              </div>
            </div>
            <span className="story__user">usernick15</span>
          </button>
        </div>
        <button className="stories__right-button" style={rightStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="#fff"
              d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"
            ></path>
          </svg>
        </button>
        </div>
    </>
  )
}


const Posts = () => {
   return (<>
      <div className="posts">
            <article className="post">
              <div className="post__header">
                <div className="post__profile">
                  <a
                    href="https://github.com/leocosta1"
                    target="_blank"
                    className="post__avatar"
                  >
                    <img src="assets/default-user.png" alt="User Picture" />
                  </a>
                  <a
                    href="https://github.com/leocosta1"
                    target="_blank"
                    className="post__user"
                    >leocosta1</a
                  >
                </div>

                <button className="post__more-options">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.5"
                      cy="11.5"
                      r="1.5"
                      fill="var(--text-dark)"
                    />
                    <circle cx="12" cy="11.5" r="1.5" fill="var(--text-dark)" />
                    <circle
                      cx="17.5"
                      cy="11.5"
                      r="1.5"
                      fill="var(--text-dark)"
                    />
                  </svg>
                </button>
              </div>

              <div className="post__content">
                <div className="post__medias">
                  <img
                    className="post__media"
                    src="assets/insta-clone.png"
                    alt="Post Content"
                  />
                </div>
              </div>

              <div className="post__footer">
                <div className="post__buttons">
                  <button className="post__button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.6"
                      />
                    </svg>
                  </button>
                  <button className="post__button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.2959 20.8165L20.2351 16.8602C20.1743 16.6385 20.2047 16.3994 20.309 16.1907C21.2351 14.3342 21.5438 12.117 20.9742 9.80402C20.2003 6.67374 17.757 4.16081 14.6354 3.33042C13.7833 3.10869 12.9442 3 12.1312 3C6.29665 3 1.74035 8.47365 3.31418 14.5647C4.04458 17.3819 7.05314 20.2992 9.88344 20.9861C10.6486 21.173 11.4008 21.26 12.1312 21.26C13.7006 21.26 15.1701 20.8557 16.4614 20.1601C16.6049 20.0818 16.7657 20.0383 16.9222 20.0383C17.0005 20.0383 17.0787 20.047 17.157 20.0688L21.009 21.0991C21.0307 21.1035 21.0525 21.1078 21.0699 21.1078C21.2177 21.1078 21.3351 20.9687 21.2959 20.8165ZM19.0178 17.1863L19.6178 19.4253L17.4831 18.8558C17.3005 18.8079 17.1135 18.7819 16.9222 18.7819C16.557 18.7819 16.1875 18.8775 15.8571 19.0558C14.6963 19.6818 13.4441 19.9992 12.1312 19.9992C11.4834 19.9992 10.8269 19.9166 10.1791 19.7601C7.78354 19.1775 5.14453 16.6037 4.53586 14.2473C3.90111 11.7865 4.40109 9.26057 5.90536 7.31719C7.40964 5.3738 9.6791 4.26081 12.1312 4.26081C12.8529 4.26081 13.5876 4.35646 14.3137 4.5521C16.9961 5.26511 19.0786 7.39544 19.7525 10.1084C20.2264 12.0213 20.0308 13.9299 19.183 15.6298C18.9395 16.1168 18.8787 16.6689 19.0178 17.1863Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.7"
                      />
                    </svg>
                  </button>
                  <button className="post__button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.8555 3.44542C22.6978 3.16703 22.3962 3 22.0714 3L2.91369 3.01392C2.52859 3.01392 2.19453 3.25055 2.05997 3.60781C1.96254 3.86764 1.98574 4.14603 2.11565 4.37338C2.16669 4.45689 2.23165 4.53577 2.31052 4.60537L9.69243 10.9712L11.4927 20.5338C11.5623 20.9096 11.8499 21.188 12.2304 21.2483C12.6062 21.3086 12.9774 21.1323 13.1723 20.8029L22.8509 4.35018C23.0179 4.06715 23.0179 3.72381 22.8555 3.44542ZM4.21748 4.39194H19.8164L10.4255 9.75089L4.21748 4.39194ZM12.6248 18.9841L11.1122 10.948L20.5171 5.58436L12.6248 18.9841Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.3"
                      />
                    </svg>
                  </button>

                  <div className="post__indicators"></div>

                  <button className="post__button post__button--align-right">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.875 2H4.125C3.50625 2 3 2.44939 3 3.00481V22.4648C3 23.0202 3.36563 23.1616 3.82125 22.7728L11.5444 16.1986C11.7244 16.0471 12.0225 16.0471 12.2025 16.1936L20.1731 22.7879C20.6287 23.1666 21 23.0202 21 22.4648V3.00481C21 2.44939 20.4994 2 19.875 2ZM19.3125 20.0209L13.3444 15.0827C12.9281 14.7394 12.405 14.5677 11.8763 14.5677C11.3363 14.5677 10.8019 14.7444 10.3856 15.0979L4.6875 19.9502V3.51479H19.3125V20.0209Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="post__infos">
                  <div className="post__likes">
                    <a href="#" className="post__likes-avatar">
                      <img src="assets/default-user.png" alt="User Picture" />
                    </a>

                    <span
                      >Liked by
                      <a className="post__name--underline" href="#">user123</a> and
                      <a href="#">73 others</a></span
                    >
                  </div>

                  <div className="post__description">
                    <span>
                      <a
                        className="post__name--underline"
                        href="https://github.com/leocosta1"
                        target="_blank"
                        >leocosta1</a
                      >
                      Responsive clone of Instagram UI. Made with ❤ for study
                      purposes.
                    </span>
                  </div>

                  <span className="post__date-time">30 minutes ago</span>
                </div>
              </div>
            </article>
            <article className="post">
              <div className="post__header">
                <div className="post__profile">
                  <a href="#" className="post__avatar">
                    <img src="assets/default-user.png" alt="User Picture" />
                  </a>
                  <a href="#" className="post__user">usernick1</a>
                </div>

                <button className="post__more-options">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.5"
                      cy="11.5"
                      r="1.5"
                      fill="var(--text-dark)"
                    />
                    <circle cx="12" cy="11.5" r="1.5" fill="var(--text-dark)" />
                    <circle
                      cx="17.5"
                      cy="11.5"
                      r="1.5"
                      fill="var(--text-dark)"
                    />
                  </svg>
                </button>
              </div>

              <div className="post__content">
                <div className="post__medias">
                  <img
                    className="post__media"
                    src="assets/insta-clone.png"
                    alt="Post Content"
                  />
                  <img
                    className="post__media"
                    src="assets/insta-clone.png"
                    alt="Post Content"
                  />
                  <img
                    className="post__media"
                    src="assets/insta-clone.png"
                    alt="Post Content"
                  />
                </div>
              </div>

              <div className="post__footer">
                <div className="post__buttons">
                  <button className="post__button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.6"
                      />
                    </svg>
                  </button>
                  <button className="post__button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.2959 20.8165L20.2351 16.8602C20.1743 16.6385 20.2047 16.3994 20.309 16.1907C21.2351 14.3342 21.5438 12.117 20.9742 9.80402C20.2003 6.67374 17.757 4.16081 14.6354 3.33042C13.7833 3.10869 12.9442 3 12.1312 3C6.29665 3 1.74035 8.47365 3.31418 14.5647C4.04458 17.3819 7.05314 20.2992 9.88344 20.9861C10.6486 21.173 11.4008 21.26 12.1312 21.26C13.7006 21.26 15.1701 20.8557 16.4614 20.1601C16.6049 20.0818 16.7657 20.0383 16.9222 20.0383C17.0005 20.0383 17.0787 20.047 17.157 20.0688L21.009 21.0991C21.0307 21.1035 21.0525 21.1078 21.0699 21.1078C21.2177 21.1078 21.3351 20.9687 21.2959 20.8165ZM19.0178 17.1863L19.6178 19.4253L17.4831 18.8558C17.3005 18.8079 17.1135 18.7819 16.9222 18.7819C16.557 18.7819 16.1875 18.8775 15.8571 19.0558C14.6963 19.6818 13.4441 19.9992 12.1312 19.9992C11.4834 19.9992 10.8269 19.9166 10.1791 19.7601C7.78354 19.1775 5.14453 16.6037 4.53586 14.2473C3.90111 11.7865 4.40109 9.26057 5.90536 7.31719C7.40964 5.3738 9.6791 4.26081 12.1312 4.26081C12.8529 4.26081 13.5876 4.35646 14.3137 4.5521C16.9961 5.26511 19.0786 7.39544 19.7525 10.1084C20.2264 12.0213 20.0308 13.9299 19.183 15.6298C18.9395 16.1168 18.8787 16.6689 19.0178 17.1863Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.7"
                      />
                    </svg>
                  </button>
                  <button className="post__button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.8555 3.44542C22.6978 3.16703 22.3962 3 22.0714 3L2.91369 3.01392C2.52859 3.01392 2.19453 3.25055 2.05997 3.60781C1.96254 3.86764 1.98574 4.14603 2.11565 4.37338C2.16669 4.45689 2.23165 4.53577 2.31052 4.60537L9.69243 10.9712L11.4927 20.5338C11.5623 20.9096 11.8499 21.188 12.2304 21.2483C12.6062 21.3086 12.9774 21.1323 13.1723 20.8029L22.8509 4.35018C23.0179 4.06715 23.0179 3.72381 22.8555 3.44542ZM4.21748 4.39194H19.8164L10.4255 9.75089L4.21748 4.39194ZM12.6248 18.9841L11.1122 10.948L20.5171 5.58436L12.6248 18.9841Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.3"
                      />
                    </svg>
                  </button>

                  <div className="post__indicators"></div>

                  <button className="post__button post__button--align-right">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.875 2H4.125C3.50625 2 3 2.44939 3 3.00481V22.4648C3 23.0202 3.36563 23.1616 3.82125 22.7728L11.5444 16.1986C11.7244 16.0471 12.0225 16.0471 12.2025 16.1936L20.1731 22.7879C20.6287 23.1666 21 23.0202 21 22.4648V3.00481C21 2.44939 20.4994 2 19.875 2ZM19.3125 20.0209L13.3444 15.0827C12.9281 14.7394 12.405 14.5677 11.8763 14.5677C11.3363 14.5677 10.8019 14.7444 10.3856 15.0979L4.6875 19.9502V3.51479H19.3125V20.0209Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="post__infos">
                  <div className="post__likes">
                    <a href="#" className="post__likes-avatar">
                      <img src="assets/default-user.png" alt="User Picture" />
                    </a>

                    <span
                      >Liked by
                      <a className="post__name--underline" href="#">user123</a> and
                      <a href="#">73 others</a></span
                    >
                  </div>

                  <div className="post__description">
                    <span>
                      <a className="post__name--underline" href="#">usernick1</a>
                      Multiple media post example. This post has three images!
                    </span>
                  </div>

                  <span className="post__date-time">1 hour ago</span>
                </div>
              </div>
            </article>
            <article className="post">
              <div className="post__header">
                <div className="post__profile">
                  <a href="#" className="post__avatar">
                    <img src="assets/default-user.png" alt="User Picture" />
                  </a>
                  <a href="#" className="post__user">usernick2</a>
                </div>

                <button className="post__more-options">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.5"
                      cy="11.5"
                      r="1.5"
                      fill="var(--text-dark)"
                    />
                    <circle cx="12" cy="11.5" r="1.5" fill="var(--text-dark)" />
                    <circle
                      cx="17.5"
                      cy="11.5"
                      r="1.5"
                      fill="var(--text-dark)"
                    />
                  </svg>
                </button>
              </div>

              <div className="post__content">
                <div className="post__medias">
                  <img
                    className="post__media"
                    src="assets/insta-clone.png"
                    alt="Post Content"
                  />
                </div>
              </div>

              <div className="post__footer">
                <div className="post__buttons">
                  <button className="post__button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.6"
                      />
                    </svg>
                  </button>
                  <button className="post__button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.2959 20.8165L20.2351 16.8602C20.1743 16.6385 20.2047 16.3994 20.309 16.1907C21.2351 14.3342 21.5438 12.117 20.9742 9.80402C20.2003 6.67374 17.757 4.16081 14.6354 3.33042C13.7833 3.10869 12.9442 3 12.1312 3C6.29665 3 1.74035 8.47365 3.31418 14.5647C4.04458 17.3819 7.05314 20.2992 9.88344 20.9861C10.6486 21.173 11.4008 21.26 12.1312 21.26C13.7006 21.26 15.1701 20.8557 16.4614 20.1601C16.6049 20.0818 16.7657 20.0383 16.9222 20.0383C17.0005 20.0383 17.0787 20.047 17.157 20.0688L21.009 21.0991C21.0307 21.1035 21.0525 21.1078 21.0699 21.1078C21.2177 21.1078 21.3351 20.9687 21.2959 20.8165ZM19.0178 17.1863L19.6178 19.4253L17.4831 18.8558C17.3005 18.8079 17.1135 18.7819 16.9222 18.7819C16.557 18.7819 16.1875 18.8775 15.8571 19.0558C14.6963 19.6818 13.4441 19.9992 12.1312 19.9992C11.4834 19.9992 10.8269 19.9166 10.1791 19.7601C7.78354 19.1775 5.14453 16.6037 4.53586 14.2473C3.90111 11.7865 4.40109 9.26057 5.90536 7.31719C7.40964 5.3738 9.6791 4.26081 12.1312 4.26081C12.8529 4.26081 13.5876 4.35646 14.3137 4.5521C16.9961 5.26511 19.0786 7.39544 19.7525 10.1084C20.2264 12.0213 20.0308 13.9299 19.183 15.6298C18.9395 16.1168 18.8787 16.6689 19.0178 17.1863Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.7"
                      />
                    </svg>
                  </button>
                  <button className="post__button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.8555 3.44542C22.6978 3.16703 22.3962 3 22.0714 3L2.91369 3.01392C2.52859 3.01392 2.19453 3.25055 2.05997 3.60781C1.96254 3.86764 1.98574 4.14603 2.11565 4.37338C2.16669 4.45689 2.23165 4.53577 2.31052 4.60537L9.69243 10.9712L11.4927 20.5338C11.5623 20.9096 11.8499 21.188 12.2304 21.2483C12.6062 21.3086 12.9774 21.1323 13.1723 20.8029L22.8509 4.35018C23.0179 4.06715 23.0179 3.72381 22.8555 3.44542ZM4.21748 4.39194H19.8164L10.4255 9.75089L4.21748 4.39194ZM12.6248 18.9841L11.1122 10.948L20.5171 5.58436L12.6248 18.9841Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.3"
                      />
                    </svg>
                  </button>

                  <div className="post__indicators"></div>

                  <button className="post__button post__button--align-right">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.875 2H4.125C3.50625 2 3 2.44939 3 3.00481V22.4648C3 23.0202 3.36563 23.1616 3.82125 22.7728L11.5444 16.1986C11.7244 16.0471 12.0225 16.0471 12.2025 16.1936L20.1731 22.7879C20.6287 23.1666 21 23.0202 21 22.4648V3.00481C21 2.44939 20.4994 2 19.875 2ZM19.3125 20.0209L13.3444 15.0827C12.9281 14.7394 12.405 14.5677 11.8763 14.5677C11.3363 14.5677 10.8019 14.7444 10.3856 15.0979L4.6875 19.9502V3.51479H19.3125V20.0209Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="post__infos">
                  <div className="post__likes">
                    <a href="#" className="post__likes-avatar">
                      <img src="assets/default-user.png" alt="User Picture" />
                    </a>

                    <span
                      >Liked by
                      <a className="post__name--underline" href="#">user123</a> and
                      <a href="#">73 others</a></span
                    >
                  </div>

                  <div className="post__description">
                    <span>
                      <a className="post__name--underline" href="#">usernick2</a>
                      Single media post example.
                    </span>
                  </div>

                  <span className="post__date-time">3 hours ago</span>
                </div>
              </div>
            </article>
            <article className="post">
              <div className="post__header">
                <div className="post__profile">
                  <a href="#" className="post__avatar">
                    <img src="assets/default-user.png" alt="User Picture" />
                  </a>
                  <a href="#" className="post__user">usernick3</a>
                </div>

                <button className="post__more-options">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.5"
                      cy="11.5"
                      r="1.5"
                      fill="var(--text-dark)"
                    />
                    <circle cx="12" cy="11.5" r="1.5" fill="var(--text-dark)" />
                    <circle
                      cx="17.5"
                      cy="11.5"
                      r="1.5"
                      fill="var(--text-dark)"
                    />
                  </svg>
                </button>
              </div>

              <div className="post__content">
                <div className="post__medias">
                  <img
                    className="post__media"
                    src="assets/insta-clone.png"
                    alt="Post Content"
                  />
                  <img
                    className="post__media"
                    src="assets/insta-clone.png"
                    alt="Post Content"
                  />
                  <img
                    className="post__media"
                    src="assets/insta-clone.png"
                    alt="Post Content"
                  />
                  <img
                    className="post__media"
                    src="assets/insta-clone.png"
                    alt="Post Content"
                  />
                </div>
              </div>

              <div className="post__footer">
                <div className="post__buttons">
                  <button className="post__button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.6"
                      />
                    </svg>
                  </button>
                  <button className="post__button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.2959 20.8165L20.2351 16.8602C20.1743 16.6385 20.2047 16.3994 20.309 16.1907C21.2351 14.3342 21.5438 12.117 20.9742 9.80402C20.2003 6.67374 17.757 4.16081 14.6354 3.33042C13.7833 3.10869 12.9442 3 12.1312 3C6.29665 3 1.74035 8.47365 3.31418 14.5647C4.04458 17.3819 7.05314 20.2992 9.88344 20.9861C10.6486 21.173 11.4008 21.26 12.1312 21.26C13.7006 21.26 15.1701 20.8557 16.4614 20.1601C16.6049 20.0818 16.7657 20.0383 16.9222 20.0383C17.0005 20.0383 17.0787 20.047 17.157 20.0688L21.009 21.0991C21.0307 21.1035 21.0525 21.1078 21.0699 21.1078C21.2177 21.1078 21.3351 20.9687 21.2959 20.8165ZM19.0178 17.1863L19.6178 19.4253L17.4831 18.8558C17.3005 18.8079 17.1135 18.7819 16.9222 18.7819C16.557 18.7819 16.1875 18.8775 15.8571 19.0558C14.6963 19.6818 13.4441 19.9992 12.1312 19.9992C11.4834 19.9992 10.8269 19.9166 10.1791 19.7601C7.78354 19.1775 5.14453 16.6037 4.53586 14.2473C3.90111 11.7865 4.40109 9.26057 5.90536 7.31719C7.40964 5.3738 9.6791 4.26081 12.1312 4.26081C12.8529 4.26081 13.5876 4.35646 14.3137 4.5521C16.9961 5.26511 19.0786 7.39544 19.7525 10.1084C20.2264 12.0213 20.0308 13.9299 19.183 15.6298C18.9395 16.1168 18.8787 16.6689 19.0178 17.1863Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.7"
                      />
                    </svg>
                  </button>
                  <button className="post__button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.8555 3.44542C22.6978 3.16703 22.3962 3 22.0714 3L2.91369 3.01392C2.52859 3.01392 2.19453 3.25055 2.05997 3.60781C1.96254 3.86764 1.98574 4.14603 2.11565 4.37338C2.16669 4.45689 2.23165 4.53577 2.31052 4.60537L9.69243 10.9712L11.4927 20.5338C11.5623 20.9096 11.8499 21.188 12.2304 21.2483C12.6062 21.3086 12.9774 21.1323 13.1723 20.8029L22.8509 4.35018C23.0179 4.06715 23.0179 3.72381 22.8555 3.44542ZM4.21748 4.39194H19.8164L10.4255 9.75089L4.21748 4.39194ZM12.6248 18.9841L11.1122 10.948L20.5171 5.58436L12.6248 18.9841Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.3"
                      />
                    </svg>
                  </button>

                  <div className="post__indicators"></div>

                  <button className="post__button post__button--align-right">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.875 2H4.125C3.50625 2 3 2.44939 3 3.00481V22.4648C3 23.0202 3.36563 23.1616 3.82125 22.7728L11.5444 16.1986C11.7244 16.0471 12.0225 16.0471 12.2025 16.1936L20.1731 22.7879C20.6287 23.1666 21 23.0202 21 22.4648V3.00481C21 2.44939 20.4994 2 19.875 2ZM19.3125 20.0209L13.3444 15.0827C12.9281 14.7394 12.405 14.5677 11.8763 14.5677C11.3363 14.5677 10.8019 14.7444 10.3856 15.0979L4.6875 19.9502V3.51479H19.3125V20.0209Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="post__infos">
                  <div className="post__likes">
                    <a href="#" className="post__likes-avatar">
                      <img src="assets/default-user.png" alt="User Picture" />
                    </a>

                    <span
                      >Liked by
                      <a className="post__name--underline" href="#">user123</a> and
                      <a href="#">73 others</a></span
                    >
                  </div>

                  <div className="post__description">
                    <span>
                      <a className="post__name--underline" href="#">usernick3</a>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique laudantium consequuntur vitae impedit eaque?
                      Accusantium rerum vel ducimus perspiciatis nesciunt a
                      minus minima earum delectus. Doloremque consequuntur
                      ducimus illum placeat!
                    </span>
                  </div>

                  <span className="post__date-time">1 day ago</span>
                </div>
              </div>
            </article>
            <article className="post">
              <div className="post__header">
                <div className="post__profile">
                  <a href="#" className="post__avatar">
                    <img src="assets/default-user.png" alt="User Picture" />
                  </a>
                  <a href="#" className="post__user">usernick4</a>
                </div>

                <button className="post__more-options">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.5"
                      cy="11.5"
                      r="1.5"
                      fill="var(--text-dark)"
                    />
                    <circle cx="12" cy="11.5" r="1.5" fill="var(--text-dark)" />
                    <circle
                      cx="17.5"
                      cy="11.5"
                      r="1.5"
                      fill="var(--text-dark)"
                    />
                  </svg>
                </button>
              </div>

              <div className="post__content">
                <div className="post__medias">
                  <img
                    className="post__media"
                    src="assets/insta-clone.png"
                    alt="Post Content"
                  />
                  <img
                    className="post__media"
                    src="assets/insta-clone.png"
                    alt="Post Content"
                  />
                </div>
              </div>

              <div className="post__footer">
                <div className="post__buttons">
                  <button className="post__button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.6"
                      />
                    </svg>
                  </button>
                  <button className="post__button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.2959 20.8165L20.2351 16.8602C20.1743 16.6385 20.2047 16.3994 20.309 16.1907C21.2351 14.3342 21.5438 12.117 20.9742 9.80402C20.2003 6.67374 17.757 4.16081 14.6354 3.33042C13.7833 3.10869 12.9442 3 12.1312 3C6.29665 3 1.74035 8.47365 3.31418 14.5647C4.04458 17.3819 7.05314 20.2992 9.88344 20.9861C10.6486 21.173 11.4008 21.26 12.1312 21.26C13.7006 21.26 15.1701 20.8557 16.4614 20.1601C16.6049 20.0818 16.7657 20.0383 16.9222 20.0383C17.0005 20.0383 17.0787 20.047 17.157 20.0688L21.009 21.0991C21.0307 21.1035 21.0525 21.1078 21.0699 21.1078C21.2177 21.1078 21.3351 20.9687 21.2959 20.8165ZM19.0178 17.1863L19.6178 19.4253L17.4831 18.8558C17.3005 18.8079 17.1135 18.7819 16.9222 18.7819C16.557 18.7819 16.1875 18.8775 15.8571 19.0558C14.6963 19.6818 13.4441 19.9992 12.1312 19.9992C11.4834 19.9992 10.8269 19.9166 10.1791 19.7601C7.78354 19.1775 5.14453 16.6037 4.53586 14.2473C3.90111 11.7865 4.40109 9.26057 5.90536 7.31719C7.40964 5.3738 9.6791 4.26081 12.1312 4.26081C12.8529 4.26081 13.5876 4.35646 14.3137 4.5521C16.9961 5.26511 19.0786 7.39544 19.7525 10.1084C20.2264 12.0213 20.0308 13.9299 19.183 15.6298C18.9395 16.1168 18.8787 16.6689 19.0178 17.1863Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.7"
                      />
                    </svg>
                  </button>
                  <button className="post__button">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.8555 3.44542C22.6978 3.16703 22.3962 3 22.0714 3L2.91369 3.01392C2.52859 3.01392 2.19453 3.25055 2.05997 3.60781C1.96254 3.86764 1.98574 4.14603 2.11565 4.37338C2.16669 4.45689 2.23165 4.53577 2.31052 4.60537L9.69243 10.9712L11.4927 20.5338C11.5623 20.9096 11.8499 21.188 12.2304 21.2483C12.6062 21.3086 12.9774 21.1323 13.1723 20.8029L22.8509 4.35018C23.0179 4.06715 23.0179 3.72381 22.8555 3.44542ZM4.21748 4.39194H19.8164L10.4255 9.75089L4.21748 4.39194ZM12.6248 18.9841L11.1122 10.948L20.5171 5.58436L12.6248 18.9841Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.3"
                      />
                    </svg>
                  </button>

                  <div className="post__indicators"></div>

                  <button className="post__button post__button--align-right">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.875 2H4.125C3.50625 2 3 2.44939 3 3.00481V22.4648C3 23.0202 3.36563 23.1616 3.82125 22.7728L11.5444 16.1986C11.7244 16.0471 12.0225 16.0471 12.2025 16.1936L20.1731 22.7879C20.6287 23.1666 21 23.0202 21 22.4648V3.00481C21 2.44939 20.4994 2 19.875 2ZM19.3125 20.0209L13.3444 15.0827C12.9281 14.7394 12.405 14.5677 11.8763 14.5677C11.3363 14.5677 10.8019 14.7444 10.3856 15.0979L4.6875 19.9502V3.51479H19.3125V20.0209Z"
                        fill="var(--text-dark)"
                        stroke="var(--text-dark)"
                        strokeWidth="0.7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="post__infos">
                  <div className="post__likes">
                    <a href="#" className="post__likes-avatar">
                      <img src="assets/default-user.png" alt="User Picture" />
                    </a>

                    <span
                      >Liked by
                      <a className="post__name--underline" href="#">user123</a> and
                      <a href="#">73 others</a></span
                    >
                  </div>

                  <div className="post__description">
                    <span>
                      <a className="post__name--underline" href="#">usernick4</a>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus voluptates expedita ab vel dolore voluptatem rerum
                      repudiandae unde temporibus sed quos quis illo, dolores
                      facere officiis autem. Error, non quidem.
                    </span>
                  </div>

                  <span className="post__date-time">3 days ago</span>
                </div>
              </div>
            </article>
          </div>
</>)
}
const Main = ({leftStyle,rightStyle}) => {
    return (<>
      <main className="main-container">
      <section className="content-container">
        <div className="content">
          <Stories leftStyle={leftStyle} rightStyle={rightStyle}/>
          <Posts/>
        </div>

        <section className="side-menu">
          <div className="side-menu__user-profile">
            <a
              href="https://github.com/leocosta1"
              target="_blank"
              className="side-menu__user-avatar"
            >
              <img src="assets/default-user.png" alt="User Picture" />
            </a>
            <div className="side-menu__user-info">
              <a href="https://github.com/leocosta1" target="_blank"
                >leocosta1</a
              >
              <span>Leonardo Costa</span>
            </div>
            <button className="side-menu__user-button">Switch</button>
          </div>

          <div className="side-menu__suggestions-section">
            <div className="side-menu__suggestions-header">
              <h2>Suggestions for You</h2>
              <button>See All</button>
            </div>
            <div className="side-menu__suggestions-content">
              <div className="side-menu__suggestion">
                <a href="#" className="side-menu__suggestion-avatar">
                  <img src="assets/default-user.png" alt="User Picture" />
                </a>
                <div className="side-menu__suggestion-info">
                  <a href="#">usernick16</a>
                  <span>Followed by user1, user2 and 9 others</span>
                </div>
                <button className="side-menu__suggestion-button">Follow</button>
              </div>
              <div className="side-menu__suggestion">
                <a href="#" className="side-menu__suggestion-avatar">
                  <img src="assets/default-user.png" alt="User Picture" />
                </a>
                <div className="side-menu__suggestion-info">
                  <a href="#">usernick17</a>
                  <span>Followed by user1, user2 and 3 others</span>
                </div>
                <button className="side-menu__suggestion-button">Follow</button>
              </div>
              <div className="side-menu__suggestion">
                <a href="#" className="side-menu__suggestion-avatar">
                  <img src="assets/default-user.png" alt="User Picture" />
                </a>
                <div className="side-menu__suggestion-info">
                  <a href="#">usernick18</a>
                  <span>Followed by user1 and 9 others</span>
                </div>
                <button className="side-menu__suggestion-button">Follow</button>
              </div>
              <div className="side-menu__suggestion">
                <a href="#" className="side-menu__suggestion-avatar">
                  <img src="assets/default-user.png" alt="User Picture" />
                </a>
                <div className="side-menu__suggestion-info">
                  <a href="#">usernick19</a>
                  <span>Followed by user1 and 3 others</span>
                </div>
                <button className="side-menu__suggestion-button">Follow</button>
              </div>
              <div className="side-menu__suggestion">
                <a href="#" className="side-menu__suggestion-avatar">
                  <img src="assets/default-user.png" alt="User Picture" />
                </a>
                <div className="side-menu__suggestion-info">
                  <a href="#">usernick20</a>
                  <span>Followed by user1 and 6 others</span>
                </div>
                <button className="side-menu__suggestion-button">Follow</button>
              </div>
            </div>
          </div>

          <div className="side-menu__footer">
            <div className="side-menu__footer-links">
              <ul className="side-menu__footer-list">
                <li className="side-menu__footer-item">
                  <a className="side-menu__footer-link" href="#">About</a>
                </li>
                <li className="side-menu__footer-item">
                  <a className="side-menu__footer-link" href="#">Help</a>
                </li>
                <li className="side-menu__footer-item">
                  <a className="side-menu__footer-link" href="#">Press</a>
                </li>
                <li className="side-menu__footer-item">
                  <a className="side-menu__footer-link" href="#">API</a>
                </li>
                <li className="side-menu__footer-item">
                  <a className="side-menu__footer-link" href="#">Jobs</a>
                </li>
                <li className="side-menu__footer-item">
                  <a className="side-menu__footer-link" href="#">Privacy</a>
                </li>
                <li className="side-menu__footer-item">
                  <a className="side-menu__footer-link" href="#">Terms</a>
                </li>
                <li className="side-menu__footer-item">
                  <a className="side-menu__footer-link" href="#">Locations</a>
                </li>
                <li className="side-menu__footer-item">
                  <a className="side-menu__footer-link" href="#">Top Accounts</a>
                </li>
                <li className="side-menu__footer-item">
                  <a className="side-menu__footer-link" href="#">Hashtag</a>
                </li>
                <li className="side-menu__footer-item">
                  <a className="side-menu__footer-link" href="#">Language</a>
                </li>
              </ul>
            </div>

            <span className="side-menu__footer-copyright"
              >&copy; 2021 instagram from facebook</span
            >
          </div>
        </section>
      </section>
    </main>    
    </>)
}

const Footer = () => {
    return (<>
            <nav className="navbar">
      <a href="#" className="navbar__button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.45307 11.751L11.9773 2.02175L21.5015 11.751C21.7906 12.0463 21.9545 12.4468 21.9545 12.8711V20.4556C21.9545 20.7747 21.7037 21 21.4427 21H15.964C15.713 21 15.4721 20.7849 15.4721 20.476V15.8886C15.4721 13.9497 13.9267 12.34 11.9773 12.34C10.0279 12.34 8.48244 13.9497 8.48244 15.8886V20.476C8.48244 20.7849 8.24157 21 7.99053 21H2.51187C2.25085 21 2 20.7747 2 20.4556V12.8711C2 12.4468 2.16397 12.0463 2.45307 11.751Z"
            stroke="var(--text-dark)"
            strokeWidth="2"
          />
        </svg>
      </a>
      <a href="#" className="navbar__button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.669 21.6543C21.8625 21.4622 21.863 21.1494 21.6703 20.9566L17.3049 16.5913C18.7912 14.9327 19.7017 12.7525 19.7017 10.3508C19.7017 5.18819 15.5135 1 10.3508 1C5.18819 1 1 5.18819 1 10.3508C1 15.5135 5.18819 19.7017 10.3508 19.7017C12.7624 19.7017 14.9475 18.7813 16.606 17.2852L20.9739 21.653C21.1657 21.8449 21.4765 21.8454 21.669 21.6543ZM1.9843 10.3508C1.9843 5.7394 5.7394 1.9843 10.3508 1.9843C14.9623 1.9843 18.7174 5.7394 18.7174 10.3508C18.7174 14.9623 14.9623 18.7174 10.3508 18.7174C5.7394 18.7174 1.9843 14.9623 1.9843 10.3508Z"
            fill="var(--text-dark)"
            stroke="var(--text-dark)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a href="#" className="navbar__button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 2.8H7C5.23269 2.8 3.8 4.23269 3.8 6V17C3.8 18.7673 5.23269 20.2 7 20.2H18C19.7673 20.2 21.2 18.7673 21.2 17V6C21.2 4.23269 19.7673 2.8 18 2.8ZM7 1C4.23858 1 2 3.23858 2 6V17C2 19.7614 4.23858 22 7 22H18C20.7614 22 23 19.7614 23 17V6C23 3.23858 20.7614 1 18 1H7Z"
            fill="var(--text-dark)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 7.99995H3V6.19995H22V7.99995Z"
            fill="var(--text-dark)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 6.99989L6 1.99989L7.57349 1.12573L11.5735 6.12573L10 6.99989Z"
            fill="var(--text-dark)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.5 6.99989L12.5 1.99989L14.0735 1.12573L18.0735 6.12573L16.5 6.99989Z"
            fill="var(--text-dark)"
          />
          <path
            d="M15.75 13.0671C16.0833 13.2595 16.0833 13.7407 15.75 13.9331L10.5 16.9642C10.1667 17.1566 9.75 16.9161 9.75 16.5312L9.75 10.469C9.75 10.0841 10.1667 9.84354 10.5 10.036L15.75 13.0671Z"
            fill="var(--text-dark)"
          />
        </svg>
      </a>
      <a href="#" className="navbar__button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.6007 7.94185H6.47927C5.84559 7.94185 5.32113 8.43455 5.2816 9.06699L4.80842 16.638C4.6573 19.0559 6.57759 21.0999 9.00024 21.0999H15.0797C17.5023 21.0999 19.4226 19.0559 19.2715 16.638L18.7983 9.06699C18.7588 8.43455 18.2343 7.94185 17.6007 7.94185ZM6.47927 6.14185C4.89508 6.14185 3.58393 7.37361 3.48511 8.95471L3.01192 16.5257C2.79604 19.9799 5.53931 22.9 9.00024 22.9H15.0797C18.5406 22.9 21.2839 19.9799 21.068 16.5257L20.5948 8.95471C20.496 7.37361 19.1849 6.14185 17.6007 6.14185H6.47927Z"
            fill="var(--text-dark)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2761 2.8C11.0812 2.8 10.1125 3.76867 10.1125 4.96359V6.1419H8.3125V4.96359C8.3125 2.77456 10.0871 1 12.2761 1C14.4651 1 16.2397 2.77456 16.2397 4.96359V6.1419H14.4397V4.96359C14.4397 3.76867 13.471 2.8 12.2761 2.8Z"
            fill="var(--text-dark)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2757 12.3118C13.4706 12.3118 14.4393 11.3431 14.4393 10.1482L14.4393 9.91256C14.4393 9.41551 14.8422 9.01256 15.3393 9.01256C15.8363 9.01256 16.2393 9.41551 16.2393 9.91256L16.2393 10.1482C16.2393 12.3373 14.4647 14.1118 12.2757 14.1118C10.0866 14.1118 8.31208 12.3373 8.31208 10.1482L8.31208 9.91257C8.31208 9.41551 8.71502 9.01257 9.21208 9.01257C9.70913 9.01257 10.1121 9.41551 10.1121 9.91257L10.1121 10.1482C10.1121 11.3431 11.0807 12.3118 12.2757 12.3118Z"
            fill="var(--text-dark)"
          />
        </svg>
      </a>
      <button className="navbar__button profile-button">
        <div className="profile-button__border"></div>
        <div className="profile-button__picture">
          <img src="assets/default-user.png" alt="User Picture" />
        </div>
      </button>
    </nav>    
    </>)
}

export default Home
