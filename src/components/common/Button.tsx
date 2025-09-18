'use client';
import Link, { LinkProps } from 'next/link';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  JSX,
  ReactNode,
} from 'react';

type ButtonVariant = 'solid' | 'outlined' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: 'green' | 'red' | 'gray';
  className?: string;
}

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsLink = LinkProps & AnchorProps;

type ButtonProps = BaseProps & (ButtonAsButton | ButtonAsLink);

function Button(props: BaseProps & ButtonAsButton): JSX.Element;
function Button(props: BaseProps & ButtonAsLink): JSX.Element;
function Button({
  children,
  variant = 'solid',
  size = 'md',
  color = 'green',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'flex items-center justify-center transition-colors duration-300 cursor-pointer focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles =
    variant === 'solid'
      ? `bg-${color}-600 text-white hover:bg-${color}-700 rounded-lg`
      : variant === 'outlined'
      ? `border text-${color}-600 hover:bg-${color}-50 rounded-lg`
      : `text-${color}-600 hover:text-${color}-700`;

  let sizeStyles =
    size === 'sm'
      ? 'px-2 py-1 text-sm'
      : size === 'lg'
      ? 'px-6 py-3 text-lg'
      : 'px-4 py-2 text-base';

  sizeStyles += variant === 'text' && ' p-0!';

  const allClasses = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

  if ('href' in props && props.href) {
    const isExternal =
      typeof props.href === 'string' && /^(http|https):\/\//.test(props.href);

    if (isExternal) {
      const ancProps = props as AnchorProps;
      return (
        <a
          className={allClasses}
          {...ancProps}
          target='_blank'
          rel='noopener noreferrer'
        >
          {children}
        </a>
      );
    } else {
      const lnkProps = props as LinkProps;
      return (
        <Link className={allClasses} {...lnkProps}>
          {children}
        </Link>
      );
    }
  } else {
    const btnProps = props as ButtonAsButton;
    return (
      <button className={allClasses} {...btnProps}>
        {children}
      </button>
    );
  }
}

export default Button;
