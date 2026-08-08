import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex items-center px-[16px] sm:px-[24px] lg:px-[360px] h-[60px] border-b border-slate-200 '>
      <Link href='/'>
        <picture>
          <source media='(min-width: 768px)' srcSet='/images/logo_l.svg' />
          <img src='/images/logo_s.svg' alt='logo' />
        </picture>
      </Link>
    </header>
  );
};

export default Header;
