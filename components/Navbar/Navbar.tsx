import Logo from './Logo';
import JoinButton from './JoinButton';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <nav className="fixed pt-[32px] w-full z-50">
      <div className="max-w-[1100px] mx-auto pl-6 pr-[0.7rem] border border-[#262626] rounded-[77px] backdrop-blur-[100px] bg-[rgba(15,15,15,0.65)]">
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