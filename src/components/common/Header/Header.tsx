'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import HeaderNav from './HeaderNav';
import Button from '../Button';
import Backdrop from '../Backdrop';

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className='w-full shadow py-4'>
      <div className='container mx-auto flex items-center lg:gap-6 px-4 relative'>
        <Button
          variant='text'
          color='gray'
          className='lg:hidden'
          aria-label='باز کردن منو'
          onClick={toggleSidebar}
        >
          <FaBars />
        </Button>

        <Button
          variant='text'
          href='/'
          className='absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0'
        >
          <Image src='/images/logo.png' alt='logo' width={60} height={44} />
        </Button>

        <HeaderNav className='hidden lg:block' />
      </div>

      <Backdrop
        open={sidebarOpen}
        onClick={toggleSidebar}
        ariaLabel='بستن منو'
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white transform transition-transform duration-400 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
        aria-label='منو'
      >
        <div className='flex items-center justify-between p-4 border-b border-gray-300'>
          <span className='font-bold'>منو</span>
          <Button
            variant='text'
            color='red'
            aria-label='بستن منو'
            onClick={toggleSidebar}
          >
            <FaTimes />
          </Button>
        </div>
        <HeaderNav className='p-4 flex-col' />
      </aside>
    </header>
  );
};

export default Header;
