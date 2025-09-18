'use client';
import { usePathname } from 'next/navigation';
import Button from '../Button';

const navLinks = [
  { href: '/', label: 'صفحه اصلی' },
  { href: '/contact', label: 'تماس با ما' },
  { href: '/about', label: 'درباره ما' },
];

const HeaderNav: React.FC<{ className?: string }> = ({ className = '' }) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className={className}>
      <ul className='flex flex-col lg:flex-row gap-4'>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Button
              variant='text'
              href={href}
              className={`!text-gray-600 ${
                isActive(href) ? '!text-green-700 font-bold' : ''
              }`}
              aria-current={isActive(href) ? 'page' : undefined}
            >
              {label}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
