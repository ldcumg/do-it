import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <Link href='/'>
        <img src='/images/logo_l.png' alt='Logo' />
      </Link>
    </div>
  );
};

export default Header;
