import { ArrowRightIcon } from "@heroicons/react/solid";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <a href="#about" className="header_name">
          Benson Thomas
        </a>
        <nav className="nav_sections">
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a href="#resume" className="resume_btn">
          Resume
        </a>
      </div>
    </header>
  );
}

export default Navbar;
