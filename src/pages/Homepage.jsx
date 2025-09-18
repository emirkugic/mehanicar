import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faWrench,
	faCog,
	faCar,
	faBolt,
	faOilCan,
	faSnowflake,
	faSearch,
	faTachometerAlt,
	faPhone,
	faEnvelope,
	faMapMarkerAlt,
	faClock,
	faBars,
	faTimes,
	faArrowRight,
	faCheckCircle,
	faUsers,
	faTools,
	faShieldAlt,
	faStar,
	faQuoteLeft,
	faPlay,
	faAward,
	faCalendarAlt,
	faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import "./Homepage.css";

const Homepage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeTab, setActiveTab] = useState("dijagnostika");

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const services = {
		dijagnostika: {
			icon: faSearch,
			title: "Bosch Dijagnostika",
			description:
				"Najnaprednija kompjuterska dijagnostika sa originalnim Bosch uređajima",
			features: [
				"ESI[tronic] dijagnostika",
				"Čitanje svih sistema",
				"Live data monitoring",
				"Programiranje ECU",
			],
			image:
				"https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&h=400&fit=crop",
		},
		motor: {
			icon: faCog,
			title: "Servis Motora",
			description:
				"Kompletni servis motora sa Bosch delovima i originalnim uljem",
			features: [
				"Bosch svećice",
				"Originalni filteri",
				"Bosch ulje",
				"Timing sistem",
			],
			image:
				"https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=400&fit=crop",
		},
		kocnice: {
			icon: faShieldAlt,
			title: "Kočni Sistem",
			description: "Bosch kočne komponente za maksimalnu bezbednost",
			features: [
				"Bosch diskovi",
				"Originalne pločice",
				"ABS dijagnostika",
				"ESP servis",
			],
			image:
				"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
		},
		elektrika: {
			icon: faBolt,
			title: "Bosch Elektrika",
			description: "Električni sistemi sa Bosch kvalitetom i garancijom",
			features: ["Bosch akumulatori", "Alternatori", "Starteri", "Senzori"],
			image:
				"https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=400&fit=crop",
		},
	};

	const testimonials = [
		{
			name: "Marko Stefanović",
			text: "Najbolji Bosch servis u gradu. Profesionalno, brzo i fer cene. Preporučujem!",
			rating: 5,
			service: "Dijagnostika motora",
		},
		{
			name: "Ana Milić",
			text: "Konačno servis koji koristi originalne Bosch delove. Kvalitet se oseti!",
			rating: 5,
			service: "Servis kočnica",
		},
		{
			name: "Stefan Jovanović",
			text: "Brzina usluge i stručnost majstora su na visokom nivou. Vrlo zadovoljan.",
			rating: 5,
			service: "Elektrika vozila",
		},
	];

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<div className="homepage">
			{/* Header */}
			<header className={`header ${isScrolled ? "scrolled" : ""}`}>
				<div className="container">
					<div className="logo">
						<div className="bosch-logo">
							<span className="bosch-text">BOSCH</span>
							<span className="car-service">Car Service</span>
						</div>
					</div>

					<nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
						<a href="#home" onClick={() => scrollToSection("home")}>
							Početna
						</a>
						<a href="#services" onClick={() => scrollToSection("services")}>
							Usluge
						</a>
						<a href="#about" onClick={() => scrollToSection("about")}>
							O Nama
						</a>
						<a
							href="#testimonials"
							onClick={() => scrollToSection("testimonials")}
						>
							Utisci
						</a>
						<a href="#contact" onClick={() => scrollToSection("contact")}>
							Kontakt
						</a>
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

			{/* Hero Section */}
			<section id="home" className="hero">
				<div className="hero-background">
					<div className="hero-overlay"></div>
					<img
						src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&h=1080&fit=crop"
						alt="Bosch Car Service"
						className="hero-image"
					/>
				</div>

				<div className="container">
					<div className="hero-content">
						<div className="hero-badge">
							<FontAwesomeIcon icon={faAward} className="badge-icon" />
							<span>Ovlašćeni Bosch Partner</span>
						</div>

						<h1 className="hero-title">
							<span className="highlight-red">Bosch</span> Kvalitet
							<br />
							Za Vaš <span className="highlight-blue">Automobil</span>
						</h1>

						<p className="hero-description">
							Ovlašćeni Bosch Car Service centar u Banjoj Luci. Originalni
							delovi, najnovija tehnologija i garantovani kvalitet za sve tipove
							vozila.
						</p>

						<div className="hero-features">
							<div className="hero-feature">
								<FontAwesomeIcon icon={faShieldAlt} />
								<span>2 Godine Garancije</span>
							</div>
							<div className="hero-feature">
								<FontAwesomeIcon icon={faTools} />
								<span>Originalni Bosch Delovi</span>
							</div>
							<div className="hero-feature">
								<FontAwesomeIcon icon={faCalendarAlt} />
								<span>Zakazivanje Online</span>
							</div>
						</div>

						<div className="hero-buttons">
							<button
								className="btn-primary"
								onClick={() => scrollToSection("services")}
							>
								<FontAwesomeIcon icon={faWrench} />
								Naše Usluge
							</button>
							<button
								className="btn-outline"
								onClick={() => scrollToSection("contact")}
							>
								<FontAwesomeIcon icon={faCalendarAlt} />
								Zakažite Termin
							</button>
						</div>
					</div>

					<div className="hero-stats">
						<div className="stat-card">
							<div className="stat-number">15+</div>
							<div className="stat-label">Godina Iskustva</div>
						</div>
						<div className="stat-card">
							<div className="stat-number">5000+</div>
							<div className="stat-label">Servisirani Automobili</div>
						</div>
						<div className="stat-card">
							<div className="stat-number">24/7</div>
							<div className="stat-label">Pomoć na Putu</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="services">
				<div className="section-divider top"></div>
				<div className="container">
					<div className="section-header">
						<div className="section-badge">Bosch Usluge</div>
						<h2 className="section-title">Profesionalne Auto Usluge</h2>
						<p className="section-description">
							Koristimo isključivo originalne Bosch delove i najnoviju
							dijagnostičku opremu
						</p>
					</div>

					<div className="services-tabs">
						<div className="tabs-navigation">
							{Object.entries(services).map(([key, service]) => (
								<button
									key={key}
									className={`tab-btn ${activeTab === key ? "active" : ""}`}
									onClick={() => setActiveTab(key)}
								>
									<FontAwesomeIcon icon={service.icon} />
									<span>{service.title}</span>
								</button>
							))}
						</div>

						<div className="tab-content">
							<div className="service-showcase">
								<div className="service-image">
									<img
										src={services[activeTab].image}
										alt={services[activeTab].title}
									/>
									<div className="image-overlay">
										<div className="play-button">
											<FontAwesomeIcon icon={faPlay} />
										</div>
									</div>
								</div>

								<div className="service-details">
									<div className="service-icon-large">
										<FontAwesomeIcon icon={services[activeTab].icon} />
									</div>
									<h3>{services[activeTab].title}</h3>
									<p>{services[activeTab].description}</p>

									<ul className="service-features">
										{services[activeTab].features.map((feature, index) => (
											<li key={index}>
												<FontAwesomeIcon icon={faCheckCircle} />
												<span>{feature}</span>
											</li>
										))}
									</ul>

									<div className="service-actions">
										<button className="btn-service">
											Saznaj Više
											<FontAwesomeIcon icon={faArrowRight} />
										</button>
										<button className="btn-quote">
											<FontAwesomeIcon icon={faCalendarAlt} />
											Zakažite
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-divider bottom"></div>
			</section>

			{/* About Section */}
			<section id="about" className="about">
				<div className="container">
					<div className="about-grid">
						<div className="about-content">
							<div className="section-badge">O Nama</div>
							<h2 className="section-title">Bosch Car Service Banja Luka</h2>
							<p className="about-text">
								Kao ovlašćeni Bosch partner, pružamo vrhunske usluge
								servisiranja vozila koristeći isključivo originalne Bosch delove
								i najmoderniju opremu. Naš tim sertifikovanih tehničara
								garantuje profesionalnost i kvalitet.
							</p>

							<div className="certifications">
								<div className="cert-item">
									<div className="cert-icon">
										<FontAwesomeIcon icon={faAward} />
									</div>
									<div className="cert-info">
										<h4>Bosch Sertifikat</h4>
										<p>Ovlašćeni servisni partner</p>
									</div>
								</div>
								<div className="cert-item">
									<div className="cert-icon">
										<FontAwesomeIcon icon={faShieldAlt} />
									</div>
									<div className="cert-info">
										<h4>ISO Kvalitet</h4>
										<p>Sertifikovani procesi</p>
									</div>
								</div>
							</div>
						</div>

						<div className="about-visual">
							<div className="bosch-showcase">
								<div className="showcase-header">
									<h3>Bosch Tehnologija</h3>
									<p>Najnaprednija oprema u regionu</p>
								</div>
								<div className="tech-items">
									<div className="tech-item">
										<FontAwesomeIcon icon={faSearch} />
										<span>ESI[tronic] Dijagnostika</span>
									</div>
									<div className="tech-item">
										<FontAwesomeIcon icon={faTachometerAlt} />
										<span>FSA Geometrija</span>
									</div>
									<div className="tech-item">
										<FontAwesomeIcon icon={faCog} />
										<span>KTS Testiranje</span>
									</div>
									<div className="tech-item">
										<FontAwesomeIcon icon={faOilCan} />
										<span>BEA Klimatizacija</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section id="testimonials" className="testimonials">
				<div className="container">
					<div className="section-header">
						<div className="section-badge">Utisci Klijenata</div>
						<h2 className="section-title">Šta Kažu Naši Klijenti</h2>
					</div>

					<div className="testimonials-grid">
						{testimonials.map((testimonial, index) => (
							<div key={index} className="testimonial-card">
								<div className="testimonial-header">
									<FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
									<div className="stars">
										{[...Array(testimonial.rating)].map((_, i) => (
											<FontAwesomeIcon key={i} icon={faStar} />
										))}
									</div>
								</div>
								<p className="testimonial-text">{testimonial.text}</p>
								<div className="testimonial-footer">
									<div className="client-info">
										<h4>{testimonial.name}</h4>
										<span>{testimonial.service}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="contact">
				<div className="container">
					<div className="contact-grid">
						<div className="contact-info">
							<div className="section-badge">Kontakt</div>
							<h2 className="section-title">Zakažite Svoj Termin</h2>
							<p className="contact-description">
								Kontaktirajte nas i zakažite termin za servisiranje vašeg
								vozila. Radimo sa terminima kako biste izbegali čekanje.
							</p>

							<div className="contact-methods">
								<div className="contact-method">
									<div className="method-icon">
										<FontAwesomeIcon icon={faPhone} />
									</div>
									<div className="method-info">
										<h4>Pozovite Nas</h4>
										<p>051/234-567</p>
										<span>Pon-Pet 07:00-19:00</span>
									</div>
								</div>

								<div className="contact-method">
									<div className="method-icon">
										<FontAwesomeIcon icon={faMapMarkerAlt} />
									</div>
									<div className="method-info">
										<h4>Posetite Nas</h4>
										<p>Krajišnika 15, Banja Luka</p>
										<span>Kod Bosch centra</span>
									</div>
								</div>

								<div className="contact-method">
									<div className="method-icon">
										<FontAwesomeIcon icon={faHeadset} />
									</div>
									<div className="method-info">
										<h4>24/7 Pomoć</h4>
										<p>065/123-456</p>
										<span>Hitna pomoć na putu</span>
									</div>
								</div>
							</div>

							<div className="working-hours">
								<h4>Radno Vreme</h4>
								<div className="hours-list">
									<div className="hours-item">
										<span>Ponedeljak - Petak</span>
										<span>07:00 - 19:00</span>
									</div>
									<div className="hours-item">
										<span>Subota</span>
										<span>08:00 - 16:00</span>
									</div>
									<div className="hours-item">
										<span>Nedelja</span>
										<span>Zatvoreno</span>
									</div>
								</div>
							</div>
						</div>

						<div className="contact-form-container">
							<div className="form-header">
								<h3>Zakazivanje Termina</h3>
								<p>Popunite formu i kontaktiraćemo vas u najkraćem roku</p>
							</div>

							<form className="appointment-form">
								<div className="form-row">
									<div className="form-group">
										<label>Ime i Prezime</label>
										<input type="text" placeholder="Vaše ime..." required />
									</div>
									<div className="form-group">
										<label>Telefon</label>
										<input type="tel" placeholder="Broj telefona..." required />
									</div>
								</div>

								<div className="form-row">
									<div className="form-group">
										<label>Email</label>
										<input
											type="email"
											placeholder="email@example.com"
											required
										/>
									</div>
									<div className="form-group">
										<label>Marka Vozila</label>
										<input
											type="text"
											placeholder="npr. Volkswagen Golf"
											required
										/>
									</div>
								</div>

								<div className="form-group">
									<label>Tip Usluge</label>
									<select required>
										<option value="">Izaberite uslugu...</option>
										<option value="dijagnostika">Bosch Dijagnostika</option>
										<option value="servis">Redovno Servisiranje</option>
										<option value="kocnice">Servis Kočnica</option>
										<option value="elektrika">Električni Sistemi</option>
										<option value="klima">Klimatizacija</option>
										<option value="ostalo">Ostalo</option>
									</select>
								</div>

								<div className="form-group">
									<label>Opis Problema</label>
									<textarea
										rows="4"
										placeholder="Opišite problem ili dodajte napomenu..."
										required
									></textarea>
								</div>

								<button type="submit" className="submit-btn">
									<FontAwesomeIcon icon={faCalendarAlt} />
									Pošaljite Zahtev
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="footer">
				<div className="container">
					<div className="footer-content">
						<div className="footer-main">
							<div className="bosch-logo">
								<span className="bosch-text">BOSCH</span>
								<span className="car-service">Car Service</span>
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
										<a href="#services">Dijagnostika</a>
									</li>
									<li>
										<a href="#services">Servis Motora</a>
									</li>
									<li>
										<a href="#services">Kočni Sistem</a>
									</li>
									<li>
										<a href="#services">Elektrika</a>
									</li>
								</ul>
							</div>

							<div className="footer-column">
								<h4>Informacije</h4>
								<ul>
									<li>
										<a href="#about">O Nama</a>
									</li>
									<li>
										<a href="#testimonials">Utisci</a>
									</li>
									<li>
										<a href="#contact">Kontakt</a>
									</li>
									<li>
										<a href="#">Cenovnik</a>
									</li>
								</ul>
							</div>

							<div className="footer-column">
								<h4>Kontakt</h4>
								<div className="footer-contact">
									<p>
										<FontAwesomeIcon icon={faMapMarkerAlt} />
										Krajišnika 15, Banja Luka
									</p>
									<p>
										<FontAwesomeIcon icon={faPhone} />
										051/234-567
									</p>
									<p>
										<FontAwesomeIcon icon={faEnvelope} />
										info@boschservice-bl.rs
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="footer-bottom">
						<div className="footer-divider"></div>
						<div className="footer-bottom-content">
							<p>
								&copy; 2024 Bosch Car Service Banja Luka. Sva prava zadržana.
							</p>
							<div className="footer-links-small">
								<a href="#">Privatnost</a>
								<a href="#">Uslovi</a>
								<a href="#">Cookies</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Homepage;
