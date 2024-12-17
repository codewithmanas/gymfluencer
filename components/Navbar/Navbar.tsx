import Logo from './Logo';
// import NavLinks from './NavLinks';
import JoinButton from './JoinButton';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <NavLinks />
          <JoinButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;