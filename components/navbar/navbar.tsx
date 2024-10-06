import { SearchBox } from '../serach-box/search-box';
import css from './navbar.module.css';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export function Navbar(props: { handleOpenSideMenu: (show: boolean) => void }) {
  const [fix, setFix] = useState(false);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 200) setFix(true);
      else setFix(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const getNavClasses = () => {
    if (fix) return [css.navbar, css.fixnavbar, 'fixnavbar'].join(' ');
    return css.navbar;
  };
  return (
    <nav className={getNavClasses()}>
      <div className={css.navItems}>
        <ul className={css.navList}>
          <li className={css.navListItem}>
            <span className={[css.navLink, css.active].join(' ')}>صفحه اصلی </span>
          </li>
          <li className={css.navListItem}>
            <span className={[css.navLink].join(' ')}>تماس با ما</span>
          </li>
          <li className={css.navListItem}>
            <span className={[css.navLink].join(' ')}>درباره ما</span>
          </li>
          <li className={css.navListItem}>
            <span className={[css.navLink].join(' ')}>بلاگ</span>
          </li>
        </ul>
      </div>
      <div className={css.navBtns}>
        <SearchBox />
        <button className={css.icon_btn} onClick={() => props.handleOpenSideMenu(true)}>
          <FaBars color='#FFF' />
        </button>
      </div>

      <style jsx>{`
        .fixnavbar {
        }

        @media (min-height: 300px) {
          .fixnavbar {
            width: 100%;
            z-index: 10;
            position: fixed;
            top: 0;
            transition: top 0.2s ease-in-out;
            border-bottom: 1px solid #ebebeb;
          }
        }
      `}</style>
    </nav>
  );
}
