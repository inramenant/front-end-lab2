import "../styles/Header.css";
import logo from "../assets/logo.png"

const Header = () => {
    return(
        <header className="header">
        <div className="logo-container">
          <img src={logo} alt="IITU Logo" className="logo" />
        </div>
        <nav>
          <a href="#about">About us</a>
          <a href="#course-info">Course Information</a>
          <a href="#enrollment">Enrollment</a>
          <a href="#faculty">Faculty</a>
          <a href="#contact">Contacts</a>
        </nav>
      </header>
    );
};

export default Header