import React from 'react';
import { Link } from 'react-router-dom';

import styles from './css/FooterTwo.module.css';

const FooterTwo = () => {
  return (
    <footer className={styles.Container}>
      <div className={styles.Top}>
        <svg
          width="159"
          height="42"
          viewBox="0 0 159 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4_190)">
            <path
              d="M20.9998 41.9998C30.2024 41.9998 35.3163 41.9998 38.6579 38.6579C42 35.3164 42 30.2026 42 21C42 11.7977 42 6.68374 38.658 3.34195C35.3164 0 30.2026 0 21 0C11.7977 0 6.67734 0 3.34195 3.34179C0.00656265 6.68358 0 11.7976 0 20.9998C0 30.2024 0 35.3163 3.34179 38.6579C6.68358 42 11.7976 42 20.9998 42V41.9998Z"
              fill="#EF3939"
            />
            <path
              d="M34.6535 13.2288C33.6397 11.401 31.8959 9.90429 30.2541 8.61016C28.6124 7.31604 27.0008 6.53641 24.9864 5.97729C22.9719 5.41816 20.9132 5.4285 18.8393 5.69133C16.7652 5.95415 14.9806 6.42764 13.1693 7.47157C11.3582 8.5155 9.95155 9.79371 8.68466 11.4565C7.4181 13.1193 6.5763 14.7704 6.0508 16.7934C5.52548 18.8163 5.335 21.0577 5.63261 23.1264C5.93022 25.1952 6.29165 27.164 7.36609 28.9572L7.45469 29.1088L14.8523 41.9329C16.0801 41.9667 17.409 41.9815 18.8393 41.9772H20.9401C24.2949 42.0494 27.6513 41.9501 30.9959 41.6799C34.3434 41.3129 36.748 40.4905 38.5896 38.6369C41.2982 35.9289 41.8109 32.057 41.9057 25.7936L34.6535 13.2288Z"
              fill="url(#paint0_linear_4_190)"
            />
            <path
              d="M32.1247 9.85771C29.9224 7.65651 27.1167 6.15788 24.0626 5.55135C21.0085 4.94483 17.8431 5.25767 14.9667 6.4503C12.0902 7.64292 9.6319 9.66163 7.90254 12.2512C6.17294 14.8411 5.24982 17.8855 5.24982 20.9999C5.24982 24.1142 6.17294 27.1586 7.90254 29.7485C9.63188 32.3381 12.0902 34.3569 14.9667 35.5496C17.8431 36.7422 21.0085 37.055 24.0626 36.4484C27.1167 35.8419 29.9224 34.3432 32.1247 32.142C34.3326 29.9405 35.8367 27.1327 36.4461 24.075C37.0555 21.0172 36.7428 17.8473 35.5476 14.9676C34.7539 13.0557 33.5908 11.3192 32.1247 9.85771ZM31.1805 17.1085C28.584 21.627 25.9882 26.146 23.3932 30.6654C23.1886 31.0659 22.8838 31.4065 22.5085 31.6542C22.1332 31.9019 21.7001 32.0481 21.2515 32.0787C20.7563 32.134 20.2559 32.0383 19.816 31.8042C19.3762 31.5701 19.0173 31.2085 18.7866 30.7668C17.1455 27.94 15.5168 25.0944 13.8885 22.2548C12.8908 20.5295 11.8982 18.8014 10.9105 17.0704C10.6759 16.6814 10.5466 16.2381 10.5352 15.784C10.5238 15.3299 10.6307 14.8807 10.8455 14.4805C11.0603 14.0802 11.3755 13.7427 11.7601 13.5012C12.1448 13.2596 12.5857 13.1223 13.0395 13.1027C13.528 13.0727 14.0148 13.1849 14.4409 13.4256C14.8671 13.6663 15.2144 14.0253 15.4409 14.4592C16.1759 15.7267 16.8982 16.9943 17.6208 18.262C18.1466 19.1747 18.6534 20.0872 19.192 20.9872C19.5345 21.6091 20.0318 22.132 20.6358 22.5053C21.2397 22.8783 21.9297 23.0889 22.639 23.1167C23.7163 23.1836 24.7781 22.8331 25.604 22.1381C26.4299 21.443 26.9565 20.4566 27.0746 19.3837C27.0746 19.2126 27.0746 19.0414 27.1126 18.9527C27.1164 18.2746 26.9647 17.6046 26.6692 16.9943C26.4422 16.5732 26.335 16.0979 26.3591 15.6202C26.3833 15.1424 26.5379 14.6804 26.8062 14.2843C27.0744 13.8882 27.4461 13.5732 27.8808 13.3735C28.3155 13.1739 28.7966 13.0971 29.2718 13.1516C29.6512 13.1953 30.0163 13.3214 30.3417 13.5213C30.6671 13.7211 30.9448 13.9897 31.1553 14.3082C31.3659 14.6269 31.5043 14.9877 31.5607 15.3655C31.632 15.9725 31.4983 16.5861 31.1805 17.1085Z"
              fill="white"
            />
          </g>
          <path
            d="M55.535 9.884H52.133V29H63.662V25.922H55.535V9.884ZM72.236 15.716C68.294 15.716 65.189 18.497 65.189 22.52C65.189 26.57 68.267 29.324 72.236 29.324C76.205 29.324 79.283 26.57 79.283 22.52C79.283 18.47 76.205 15.716 72.236 15.716ZM68.429 22.52C68.429 20.306 70.049 18.632 72.209 18.632C74.423 18.632 76.043 20.279 76.043 22.52C76.043 24.68 74.504 26.408 72.236 26.408C70.049 26.408 68.429 24.761 68.429 22.52ZM80.5615 16.04L85.8535 29H89.3095L94.4125 16.04H91.0915L87.6085 25.112H87.5545L84.0985 16.04H80.5615ZM102.716 15.716C98.7474 15.716 95.6694 18.497 95.6694 22.52C95.6694 26.57 98.7474 29.324 102.716 29.324C104.93 29.324 106.793 28.46 108.197 26.732L105.875 24.977C104.957 26.111 103.85 26.732 102.392 26.732C100.529 26.732 99.1254 25.517 98.9094 23.654H108.791V22.736C108.791 18.821 106.82 15.716 102.716 15.716ZM98.9094 21.224C99.1524 19.388 100.313 18.146 102.23 18.146C104.147 18.146 105.524 19.199 105.551 21.224H98.9094ZM112.199 29H115.439V13.124H115.493L121.298 29H123.674L129.479 13.124H129.533V29H132.773V9.884H127.643L122.486 23.276L117.383 9.884H112.199V29ZM143.216 15.716C139.247 15.716 136.169 18.497 136.169 22.52C136.169 26.57 139.247 29.324 143.216 29.324C145.43 29.324 147.293 28.46 148.697 26.732L146.375 24.977C145.457 26.111 144.35 26.732 142.892 26.732C141.029 26.732 139.625 25.517 139.409 23.654H149.291V22.736C149.291 18.821 147.32 15.716 143.216 15.716ZM139.409 21.224C139.652 19.388 140.813 18.146 142.73 18.146C144.647 18.146 146.024 19.199 146.051 21.224H139.409Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_4_190"
              x1="13.1333"
              y1="7.38951"
              x2="33.1671"
              y2="42.1007"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0.2" />
              <stop offset="0.79" stopOpacity="0.05" />
            </linearGradient>
            <clipPath id="clip0_4_190">
              <rect width="42" height="42" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div>
          <ul>
            <li>Blog</li>
            <li>
              <Link to="/survey">Letter Generator</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/about">About LoveMe</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
        <ul className={styles.socials}>
          <li>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7681 8.75005C10.0642 8.75005 8.68296 10.2051 8.68296 12C8.68296 13.795 10.0642 15.25 11.7681 15.25C13.472 15.25 14.8533 13.795 14.8533 12C14.8533 10.2051 13.472 8.75005 11.7681 8.75005Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.80296 3.08151C10.0762 2.69614 13.4601 2.69614 16.7333 3.08151C18.5354 3.29369 19.9889 4.78947 20.2004 6.69452C20.5918 10.2195 20.5918 13.7806 20.2004 17.3056C19.9889 19.2106 18.5354 20.7064 16.7333 20.9186C13.4601 21.304 10.0762 21.304 6.80296 20.9186C5.00086 20.7064 3.54733 19.2106 3.33582 17.3056C2.94446 13.7806 2.94446 10.2195 3.33582 6.69452C3.54733 4.78947 5.00086 3.29369 6.80296 3.08151ZM16.5145 6.00005C15.9902 6.00005 15.5652 6.44776 15.5652 7.00005C15.5652 7.55233 15.9902 8.00005 16.5145 8.00005C17.0388 8.00005 17.4638 7.55233 17.4638 7.00005C17.4638 6.44776 17.0388 6.00005 16.5145 6.00005ZM7.25905 12C7.25905 9.37669 9.27783 7.25005 11.7681 7.25005C14.2584 7.25005 16.2772 9.37669 16.2772 12C16.2772 14.6234 14.2584 16.75 11.7681 16.75C9.27783 16.75 7.25905 14.6234 7.25905 12Z"
                fill="white"
              />
            </svg>
          </li>
          <li>
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0513 2.22724C19.1063 2.14647 19.0251 2.04218 18.9371 2.07811C18.3118 2.33344 17.6582 2.50571 16.9916 2.5906C17.7339 2.12348 18.3066 1.4124 18.6242 0.570533C18.6566 0.484774 18.5677 0.408187 18.491 0.452801C17.8012 0.854139 17.0572 1.14313 16.2843 1.30957C16.252 1.31654 16.2186 1.30494 16.1959 1.27969C15.6159 0.635016 14.8525 0.205781 14.0202 0.0574517C13.1705 -0.0939932 12.297 0.0559587 11.5369 0.48379C10.7767 0.911621 10.1729 1.59313 9.82007 2.42144C9.48459 3.209 9.39406 4.08691 9.55953 4.93003C9.57237 4.99545 9.52376 5.05721 9.46047 5.05307C7.95677 4.95469 6.48757 4.53336 5.14339 3.81446C3.80262 3.09739 2.61533 2.09983 1.65384 0.883296C1.61117 0.829305 1.53029 0.836293 1.4992 0.898445C1.20001 1.49651 1.04337 2.16311 1.04379 2.8406C1.04258 3.51498 1.19968 4.17922 1.50111 4.77416C1.80254 5.36911 2.23895 5.87631 2.77148 6.2506C2.20673 6.23441 1.65299 6.08734 1.1494 5.82067C1.0845 5.78631 1.00665 5.83524 1.01003 5.91167C1.0493 6.80091 1.35919 7.69364 1.89559 8.37857C2.46641 9.10744 3.2587 9.60624 4.13843 9.7906C3.79978 9.89917 3.44819 9.95641 3.09423 9.9606C2.90158 9.95823 2.70931 9.94325 2.51853 9.91578C2.44779 9.90559 2.39003 9.97637 2.41479 10.0469C2.67719 10.7944 3.14074 11.4467 3.75025 11.9228C4.40188 12.4318 5.18793 12.7142 5.99901 12.7306C4.6294 13.8659 2.93844 14.4855 1.19568 14.4906C1.0166 14.4912 0.837609 14.4851 0.659036 14.4723C0.558405 14.4651 0.512123 14.6063 0.598864 14.6605C2.2969 15.7221 4.23771 16.2831 6.21735 16.2806C7.67894 16.2966 9.1289 16.0056 10.4825 15.4247C11.8362 14.8437 13.0664 13.9845 14.1013 12.8971C15.1362 11.8097 15.955 10.516 16.5099 9.09151C17.0649 7.66702 17.3448 6.14033 17.3334 4.6006V4.12077C17.3334 4.0892 17.3475 4.05951 17.3715 4.04048C18.0153 3.52834 18.5816 2.91691 19.0513 2.22724Z"
                fill="white"
              />
            </svg>
          </li>
          <li>
            <svg
              width="11"
              height="20"
              viewBox="0 0 11 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.79853 0.875C6.63413 0.875 5.51741 1.36228 4.69405 2.22963C3.87069 3.09699 3.40814 4.27337 3.40814 5.5V8.075H1.05868C0.940719 8.075 0.845093 8.17574 0.845093 8.3V11.7C0.845093 11.8243 0.940719 11.925 1.05868 11.925H3.40814V18.9C3.40814 19.0243 3.50376 19.125 3.62172 19.125H6.84926C6.96722 19.125 7.06285 19.0243 7.06285 18.9V11.925H9.43311C9.53112 11.925 9.61655 11.8547 9.64032 11.7546L10.4472 8.35457C10.4809 8.21256 10.3789 8.075 10.24 8.075H7.06285V5.5C7.06285 5.29446 7.14036 5.09733 7.27832 4.95199C7.41629 4.80665 7.60342 4.725 7.79853 4.725H10.2666C10.3846 4.725 10.4802 4.62426 10.4802 4.5V1.1C10.4802 0.975736 10.3846 0.875 10.2666 0.875H7.79853Z"
                fill="white"
              />
            </svg>
          </li>
        </ul>
      </div>
      <div className={styles.Bottom}>
        <ul>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/privacypolicy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/termsofservice">Terms & conditions</Link>
          </li>
        </ul>
        <p className={styles.copy}>2022 &copy; Copyright All rights reserved</p>
      </div>
    </footer>
  );
};

export default FooterTwo;
