
const NavLinks = () => {
  const links = ['Home', 'About', 'Our Services', 'Benefits', 'Blogs', 'Contact'];
  
  return (
    <div className="hidden md:flex space-x-8">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="text-[#96979C] hover:text-[#CC0000] transition-colors font-[family-name:var(--font-orbitron)] text-lg font-medium"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;