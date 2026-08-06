import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <Link href='/'>
        <img src='/svgs/logo_l.svg' alt='logo' />
      </Link>
    </div>
  );
};

export default Header;
