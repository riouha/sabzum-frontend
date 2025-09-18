import React from 'react';

interface BackdropProps {
  open: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
}

const Backdrop: React.FC<BackdropProps> = ({
  open,
  onClick,
  className = '',
  children,
  ariaLabel = 'Backdrop',
}) => {
  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-40 bg-black opacity-40 ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      tabIndex={-1}
      role='presentation'
    >
      {children}
    </div>
  );
};

export default Backdrop;
