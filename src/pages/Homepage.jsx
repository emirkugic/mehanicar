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
	faCheck,
	faMedal,
	faThumbsUp,
	faHandshake,
	faCertificate,
	faClipboardList,
	faGears,
	faBatteryFull,
	faFan,
	faRoad,
	faTruck,
} from "@fortawesome/free-solid-svg-icons";
import "./Homepage.css";

const Homepage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeServiceCategory, setActiveServiceCategory] = useState("osnovne");
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const serviceCategories = {
		osnovne: {
			title: "Osnovne Usluge",
			icon: faWrench,
			services: [
				{
					name: "Dijagnostika vozila",
					description: "Računarska dijagnostika kvarova",
					icon: faSearch,
				},
				{
					name: "Redovni servis",
					description: "Ulje, filteri, svjećice",
					icon: faOilCan,
				},
				{
					name: "Servis kočnica",
					description: "Zamjena pločica, diskova, kočione tečnosti",
					icon: faShieldAlt,
				},
				{
					name: "Servis kvačila i mjenjača",
					description: "Kompletan servis transmisije",
					icon: faGears,
				},
				{
					name: "Servis ovjesa i amortizera",
					description: "Održavanje sistema ovjesa",
					icon: faRoad,
				},
				{
					name: "Zamjena i balansiranje guma",
					description: "Ugradnja i balansiranje pneumatika",
					icon: faCar,
				},
				{
					name: "Geometrija trapa",
					description: "Podešavanje geometrije vozila",
					icon: faTachometerAlt,
				},
			],
		},
		napredne: {
			title: "Naprednije Usluge",
			icon: faCog,
			services: [
				{
					name: "Električarski radovi",
					description: "Akumulator, alternator, instalacije",
					icon: faBolt,
				},
				{
					name: "Klimatizacija",
					description: "Punjenje, čišćenje, popravke klime",
					icon: faSnowflake,
				},
				{
					name: "Izduvni sistem",
					description: "Auspuh, katalizator",
					icon: faFan,
				},
				{
					name: "Ugradnja i servis turba",
					description: "Turbo punjač i injektori",
					icon: faGears,
				},
				{
					name: "Popravka motora",
					description: "Generalke, brtve, zupčasti kaiš/lanac",
					icon: faCog,
				},
			],
		},
		dodatne: {
			title: "Dodatne Usluge",
			icon: faTools,
			services: [
				{
					name: "Priprema za tehnički",
					description: "Priprema vozila za tehnički pregled",
					icon: faClipboardList,
				},
				{
					name: "Hitne intervencije",
					description: "Šlep služba 24/7",
					icon: faTruck,
				},
			],
		},
	};

	const whyChooseUs = [
		{
			icon: faAward,
			title: "Ovlašćeni Bosch Partner",
			description:
				"Sertifikovani partner sa pristupom originalnim delovima i najnovijoj tehnologiji.",
		},
		{
			icon: faShieldAlt,
			title: "Garancija Kvaliteta",
			description:
				"2 godine garancije na sve izvršene radove i ugrađene delove.",
		},
		{
			icon: faUsers,
			title: "Stručan Tim",
			description:
				"Sertifikovani tehničari sa dugogodišnjim iskustvom u auto servisu.",
		},
		{
			icon: faMedal,
			title: "Originalni Delovi",
			description:
				"Koristimo isključivo originalne Bosch delove za maksimalni kvalitet.",
		},
		{
			icon: faClock,
			title: "Brza Usluga",
			description:
				"Efikasno rešavanje problema uz poštovanje dogovorenih rokova.",
		},
		{
			icon: faHandshake,
			title: "Fer Cene",
			description:
				"Transparentno i pošteno naplaćivanje bez skrivenih troškova.",
		},
	];

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setIsFormSubmitted(true);

		// Reset form after 3 seconds
		setTimeout(() => {
			setIsFormSubmitted(false);
			e.target.reset();
		}, 3000);
	};

	return (
		<div className="homepage">
			{/* Header */}
			<header className={`header ${isScrolled ? "scrolled" : ""}`}>
				<div className="container">
					<div className="logo">
						<div className="bosch-logo">
							<span className="bosch-text">BOSCH</span>
							<span className="car-service">CAR SERVICE</span>
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
						<a href="#why-choose" onClick={() => scrollToSection("why-choose")}>
							Zašto Mi
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
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="services">
				<div className="container">
					<div className="section-header">
						<div className="section-badge">Naše Usluge</div>
						<h2 className="section-title">Kompletan Auto Servis</h2>
						<p className="section-description">
							Od osnovnih servisa do najsloženijih popravki - sve na jednom
							mestu
						</p>
					</div>

					<div className="services-container">
						<div className="service-categories">
							{Object.entries(serviceCategories).map(([key, category]) => (
								<button
									key={key}
									className={`category-btn ${
										activeServiceCategory === key ? "active" : ""
									}`}
									onClick={() => setActiveServiceCategory(key)}
								>
									<FontAwesomeIcon icon={category.icon} />
									<span>{category.title}</span>
								</button>
							))}
						</div>

						<div className="services-grid">
							{serviceCategories[activeServiceCategory].services.map(
								(service, index) => (
									<div key={index} className="service-card">
										<div className="service-icon">
											<FontAwesomeIcon icon={service.icon} />
										</div>
										<div className="service-info">
											<h4>{service.name}</h4>
											<p>{service.description}</p>
										</div>
										<div className="service-arrow">
											<FontAwesomeIcon icon={faArrowRight} />
										</div>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="about">
				<div className="container">
					<div className="about-content">
						<div className="about-text-section">
							<div className="section-badge">O Nama</div>
							<h2 className="section-title">
								Vaš Pouzdan Partner Za Automobil
							</h2>
							<div className="about-description">
								<p>
									Sa više od 15 godina iskustva u auto servisu, postali smo
									pouzdano ime u Banjoj Luci. Kao ovlašćeni Bosch partner,
									kombinujemo tradiciju kvaliteta sa najnovijim tehnologijama.
								</p>
								<p>
									Naš tim sertifikovanih tehničara kontinuirano se usavršava
									kako bi vašem vozilu pružio najbolju moguću negu i održavanje.
								</p>
							</div>
						</div>

						<div className="about-highlights">
							<div className="highlight-item">
								<FontAwesomeIcon icon={faCertificate} />
								<div>
									<h4>Sertifikovani Tehničari</h4>
									<p>Kontinuirano usavršavanje i praćenje novih tehnologija</p>
								</div>
							</div>
							<div className="highlight-item">
								<FontAwesomeIcon icon={faAward} />
								<div>
									<h4>Bosch Kvalitet</h4>
									<p>
										Isključivo originalni delovi i najnovija dijagnostička
										oprema
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section id="why-choose" className="why-choose">
				<div className="container">
					<div className="section-header">
						<div className="section-badge">Zašto Baš Mi</div>
						<h2 className="section-title">Vaši Razlozi Za Povjerenje</h2>
						<p className="section-description">
							Kombinujemo dugogodišnje iskustvo sa najmodernijom opremom i
							pristupom
						</p>
					</div>

					<div className="why-choose-grid">
						{whyChooseUs.map((item, index) => (
							<div key={index} className="why-choose-card">
								<div className="why-choose-icon">
									<FontAwesomeIcon icon={item.icon} />
								</div>
								<div className="why-choose-content">
									<h3>{item.title}</h3>
									<p>{item.description}</p>
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
							{!isFormSubmitted ? (
								<>
									<div className="form-header">
										<h3>Brzo Zakazivanje</h3>
										<p>Popunite formu i kontaktiraćemo vas u najkraćem roku</p>
									</div>

									<form
										className="appointment-form"
										onSubmit={handleFormSubmit}
									>
										<div className="form-row">
											<div className="form-group">
												<label>Ime i Prezime</label>
												<input type="text" placeholder="Vaše ime..." required />
											</div>
											<div className="form-group">
												<label>Telefon</label>
												<input
													type="tel"
													placeholder="Broj telefona..."
													required
												/>
											</div>
										</div>

										<div className="form-group">
											<label>Email</label>
											<input
												type="email"
												placeholder="email@example.com"
												required
											/>
										</div>

										<div className="form-group">
											<label>Marka i Model Vozila</label>
											<input
												type="text"
												placeholder="npr. Volkswagen Golf 7 R 2015"
												required
											/>
										</div>

										<div className="form-group">
											<label>Opis Problema ili Napomena</label>
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
								</>
							) : (
								<div className="success-message">
									<div className="success-icon">
										<FontAwesomeIcon icon={faCheckCircle} />
									</div>
									<h3>Uspješno Poslano!</h3>
									<p>
										Hvala vam na interesovanju. Kontaktiraćemo vas u najkraćem
										roku da potvrdimo termin.
									</p>
								</div>
							)}
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
										<a href="#services">Dijagnostika</a>
									</li>
									<li>
										<a href="#services">Redovni Servis</a>
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
										<a href="#why-choose">Zašto Mi</a>
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
