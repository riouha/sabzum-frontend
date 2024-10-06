import Image from 'next/image';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import css from './footer.module.css';

export function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.logo_nav}>
        <section>
          <Image src='/images/logo3.png' alt='logo' width={60} height={53} />
          <span>سبزوم</span>
        </section>
        <ul className={css.navlist}>
          <li>صفحه اصلی</li>
          <li>تماس با ما</li>
          <li>درباره ما</li>
          <li>بلاگ</li>
        </ul>
        <div className={css.social_icons}>
          <FaTwitter size={27} className={css.social_icon} />
          <FaInstagram size={27} className={css.social_icon} />
          <FaLinkedinIn size={27} className={css.social_icon} />
          <FaGithub size={27} className={css.social_icon} />
        </div>
      </div>
      <div className={css.contactus}>
        <section>
          <i>
            <FaMapMarkerAlt size={30} className={css.contactus_icon} />
          </i>
          <span>اسم شهر، خیابان اسم خیابان، بلوار اسم بلوار، کوچه اسم کوچه، شماره پلاک </span>
        </section>
        <section>
          <i>
            <FaPhone size={30} className={css.contactus_icon} />
          </i>
          <span>09123330011</span>
        </section>
        <section>
          <i>
            <FaEnvelope size={30} className={css.contactus_icon} />
          </i>
          <span>test1234@gmial.com</span>
        </section>
      </div>
      <div className={css.subscribe}>
        <p>عضویت در خبرنامه</p>
        <input placeholder='ایمیل خود را وارد کنید' />
        <button className='appbtn'>عضویت</button>
      </div>
    </footer>
  );
}
