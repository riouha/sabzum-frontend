import { useEffect, useState } from 'react';
import Image from 'next/image';
import css from './header.module.css';
import { FaBars, FaSearch } from 'react-icons/fa';
import { SearchBox } from '../serach-box/search-box';
import logo from '../../public/images/logo3.png';

export function Header(props: { handleOpenSideMenu: (show: boolean) => void }) {
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

  const getHeaderClasses = () => {
    if (fix) return [css.header, css.fixheader].join(' ');
    return css.header;
  };

  return (
    <header className={getHeaderClasses()}>
      <div className={css.brand}>
        <Image src={logo} alt='logo' width={50} height={44} />
        <span>سبزوم</span>
      </div>
      <nav className={css.desktop}>
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
          </ul>
        </div>
      </nav>

      <div className={css.navBtns}>
        <SearchBox className={css.desktop} />
        <button className={[css.icon_btn, css.mobile].join(' ')}>
          <FaSearch color='#FFF' />
        </button>
        <button className={css.icon_btn} onClick={() => props.handleOpenSideMenu(true)}>
          <FaBars color='#FFF' />
        </button>
      </div>
    </header>
  );
}
