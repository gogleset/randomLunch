/**
 * @gogleset Header를 담당할 컴포넌트입니다.
 */

import React from "react";

/**
 * @gogleset Header 컴포넌트입니다.
 */

const Header = () => {
  return (
    <div className='navbar bg-white/95 dark:bg-black sticky top-0 z-10'>
      <div className='flex-1 dark:text-white'>
        <a className='btn btn-ghost normal-case text-xl'>점메츄</a>
      </div>
      <div className='flex-none '>
        <ul className='menu menu-horizontal px-1 dark:text-white '>
          <li>
            <a className='dark:hover:bg-slate-400'>지역 추가</a>
          </li>
          <li>
            <details>
              <summary className='dark:hover:bg-slate-400'>목록</summary>
              <ul className='p-2 bg-base-100 dark:bg-black dark:text-white'>
                <li>
                  <a className='dark:hover:text-white dark:hover:bg-slate-600'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a className='dark:hover:text-white dark:hover:bg-slate-600'>
                    Link 2
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
