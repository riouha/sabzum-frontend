import { PropsWithChildren } from 'react';
import css from './modal.module.css';

export function Modal(props: PropsWithChildren<{ show: boolean }>) {
  if (!props.show) return null;
  return <div className={css.modal}>{props.children}</div>;
}
