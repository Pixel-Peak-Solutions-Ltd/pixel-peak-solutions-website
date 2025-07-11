import Link from 'next/link';

/*

Selected link style:
 bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900
 
*/

export const Header = () => {
  return (
    <section className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="/" className="nav-item">
          Home
        </Link>
        <Link href="#projects" className="nav-item">
          Projects
        </Link>
        <Link href="#about" className="nav-item">
          About
        </Link>
        <Link href="#contact" className="nav-item">
          Contact
        </Link>
      </nav>
    </section>
  );
};
