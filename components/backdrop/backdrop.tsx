import css from './backdrop.module.css';

export function Backdrop(props: { show: boolean; setShow: (show: boolean) => void }) {
  if (props.show) return <div className={css.backdrop} onClick={() => props.setShow(false)}></div>;
  else return null;
}
