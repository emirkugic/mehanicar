import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleNavClick = (path) => {
		navigate(path);
		setIsMenuOpen(false);
	};

	return (
		<header className={`header ${isScrolled ? "scrolled" : ""}`}>
			<div className="container">
				<Link to="/" className="logo">
					<div className="bosch-logo">
						<span className="bosch-text">BOSCH</span>
						<span className="car-service">CAR SERVICE</span>
					</div>
				</Link>

				<nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
					<Link to="/" onClick={() => setIsMenuOpen(false)}>
						Početna
					</Link>
					<Link to="/usluge" onClick={() => setIsMenuOpen(false)}>
						Usluge
					</Link>
					<Link to="/o-nama" onClick={() => setIsMenuOpen(false)}>
						O Nama
					</Link>
					<Link to="/zasto-mi" onClick={() => setIsMenuOpen(false)}>
						Zašto Mi
					</Link>
					<Link to="/kontakt" onClick={() => setIsMenuOpen(false)}>
						Kontakt
					</Link>
				</nav>

				<div className="header-actions">
					<div className="emergency-btn">
						<FontAwesomeIcon icon={faPhone} />
						<span>Hitno: 065/123-456</span>
					</div>
					<button
						className="menu-toggle"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
