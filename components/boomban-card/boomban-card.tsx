import { FaCheck, FaVideo } from 'react-icons/fa';
import css from './boomban-card.module.css';

export function BoombanCard() {
  return (
    <div className={css.card}>
      <h1>سبزوم</h1>
      <p>
        سبزوم تحریریه حوزه گل و گیاه، باغبانی و کشاورزی است. تیم سبزوم با بهره‌گیری از کارشناسان حوزه کشاورزی آخرین
        مقالات، اخبار و مطالب مفید و مرتبط را تهیه و جمع آوری می‌کند و آنها را به صورت رایگان در اختیار دوست داران گل و
        گیاه قرار می‌دهد. چنانچه به دنبال دریافت مشاوره برای خدمات باغبانی برای باغ، باغچه یا فضای سبز محل زندگی و کار
        خود هستید می‌توایند از کارشناسان ما کمک بگیرید.
      </p>
    </div>
  );
}
