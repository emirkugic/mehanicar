import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faEnvelope,
	faMapMarkerAlt,
	faAward,
	faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-main">
						<div className="bosch-logo">
							<span className="bosch-text">BOSCH</span>
							<span className="car-service">CAR SERVICE</span>
						</div>
						<p className="footer-description">
							Ovlašćeni Bosch Car Service centar u Banjoj Luci. Kvalitet,
							pouzdanost i profesionalnost u servisu automobila.
						</p>
						<div className="footer-certifications">
							<div className="cert-badge">
								<FontAwesomeIcon icon={faAward} />
								<span>Bosch Partner</span>
							</div>
							<div className="cert-badge">
								<FontAwesomeIcon icon={faShieldAlt} />
								<span>ISO Sertifikat</span>
							</div>
						</div>
					</div>

					<div className="footer-links">
						<div className="footer-column">
							<h4>Usluge</h4>
							<ul>
								<li>
									<Link to="/usluge">Dijagnostika</Link>
								</li>
								<li>
									<Link to="/usluge">Redovni Servis</Link>
								</li>
								<li>
									<Link to="/usluge">Kočni Sistem</Link>
								</li>
								<li>
									<Link to="/usluge">Elektrika</Link>
								</li>
							</ul>
						</div>

						<div className="footer-column">
							<h4>Informacije</h4>
							<ul>
								<li>
									<Link to="/o-nama">O Nama</Link>
								</li>
								<li>
									<Link to="/zasto-mi">Zašto Mi</Link>
								</li>
								<li>
									<Link to="/kontakt">Kontakt</Link>
								</li>
								<li>
									<a href="#">Cenovnik</a>
								</li>
							</ul>
						</div>

						<div className="footer-column">
							<h4>Kontakt</h4>
							<div className="footer-contact">
								<div className="contact-item">
									<FontAwesomeIcon icon={faMapMarkerAlt} />
									<span>Krajišnika 15, Banja Luka</span>
								</div>
								<div className="contact-item">
									<FontAwesomeIcon icon={faPhone} />
									<span>051/234-567</span>
								</div>
								<div className="contact-item">
									<FontAwesomeIcon icon={faEnvelope} />
									<span>info@boschservice-bl.rs</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<div className="footer-divider"></div>
					<div className="footer-bottom-content">
						<p>&copy; 2024 Bosch Car Service Banja Luka. Sva prava zadržana.</p>
						<div className="footer-links-small">
							<a href="#">Privatnost</a>
							<a href="#">Uslovi</a>
							<a href="#">Cookies</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
