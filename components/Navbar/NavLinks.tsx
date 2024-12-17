
const NavLinks = () => {
  const links = ['Home', 'About', 'Our Services', 'Benifits', 'Blogs', 'Contact'];
  
  return (
    <div className="hidden md:flex space-x-8">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;