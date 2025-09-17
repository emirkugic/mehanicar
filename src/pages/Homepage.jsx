import React, { useState, useEffect } from "react";
import "./Homepage.css";

const Homepage = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const testimonialTimer = setInterval(() => {
			setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 5000);

		return () => clearInterval(testimonialTimer);
	}, []);

	const services = [
		{
			icon: "🔧",
			title: "Mehanički Popravci",
			description:
				"Kompletni mehanički radovi na svim tipovima vozila. Dijagnostika, popravke motora, transmisije i svih mehaničkih sistema.",
			price: "Od 50 KM",
		},
		{
			icon: "⚙️",
			title: "Servis Motora",
			description:
				"Profesionalni servis motora, zamena ulja, filtera, svećica. Redovno održavanje po preporuci proizvođača.",
			price: "Od 80 KM",
		},
		{
			icon: "🚗",
			title: "Kočnice i Suspenzija",
			description:
				"Popravka i zamena kočionog sistema, amortizera, opruga. Garancija na sve radove i delove.",
			price: "Od 120 KM",
		},
		{
			icon: "🔋",
			title: "Električni Sistem",
			description:
				"Dijagnostika i popravka električnih sistema, alternatora, akumulatora, žažbene instalacije.",
			price: "Od 60 KM",
		},
		{
			icon: "🛞",
			title: "Gume i Felne",
			description:
				"Balansiranje, menjanje guma, popravka felni. Veliki izbor letnih i zimskih guma svih dimenzija.",
			price: "Od 30 KM",
		},
		{
			icon: "❄️",
			title: "Klima Uređaj",
			description:
				"Servis klima uređaja, dopunjavanje freon gasa, popravka kompresorovapirena sistema.",
			price: "Od 100 KM",
		},
		{
			icon: "🔍",
			title: "Dijagnostika",
			description:
				"Kompjuterska dijagnostika vozila, čitanje grešaka, resetovanje servisa. Najmoderniji uređaji.",
			price: "Od 40 KM",
		},
		{
			icon: "🎨",
			title: "Lakiranje i Farba",
			description:
				"Profesionalno lakiranje, uklanjanje ogrebotina, poliranje. Vraćamo originalnu boju vozila.",
			price: "Od 200 KM",
		},
	];

	const testimonials = [
		{
			name: "Marko Petrović",
			text: "Najbolji servis u gradu! Uvek pošteni sa cenama i rade kvalitetno. Preporučujem svima.",
			rating: 5,
		},
		{
			name: "Stefan Nikolić",
			text: "Brza usluga, profesionalni pristup. Moj auto radi kao nov nakon servisa kod njih.",
			rating: 5,
		},
		{
			name: "Milica Jovanović",
			text: "Konačno serviser koji poštuje rokove! Završili su posao pre vremena i auto radi savršeno.",
			rating: 5,
		},
		{
			name: "Aleksandar Stojanović",
			text: "Fer cene, dobri majstori. Već 3 godine servisiram ovde i nikad nisam imao problem.",
			rating: 5,
		},
	];

	const teamMembers = [
		{
			name: "Miloš Radić",
			position: "Vlasnik i Glavni Mehaničar",
			experience: "15 godina iskustva",
			specialty: "Dijagnostika i popravke motora",
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
		},
		{
			name: "Dragan Milić",
			position: "Mehaničar Specijalis",
			experience: "12 godina iskustva",
			specialty: "Kočnice i suspenzija",
			image:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
		},
		{
			name: "Nikola Pavlović",
			position: "Elektromehaničar",
			experience: "8 godina iskustva",
			specialty: "Električni sistemi i klima",
			image:
				"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
		},
		{
			name: "Bojan Marković",
			position: "Lakirer",
			experience: "10 godina iskustva",
			specialty: "Lakiranje i poliranje",
			image:
				"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=300&h=300&fit=crop&crop=face",
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
						<div className="logo-icon">🔧</div>
						<div className="logo-text">
							<span className="logo-main">AutoServis</span>
							<span className="logo-sub">Republika</span>
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
						<a href="#team" onClick={() => scrollToSection("team")}>
							Tim
						</a>
						<a href="#contact" onClick={() => scrollToSection("contact")}>
							Kontakt
						</a>
					</nav>

					<div className="header-actions">
						<div className="phone-header">
							<span className="phone-icon">📞</span>
							<span className="phone-number">051/234-567</span>
						</div>
						<button
							className="menu-toggle"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<span></span>
							<span></span>
							<span></span>
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
						alt="Auto servis"
						className="hero-image"
					/>
				</div>

				<div className="container">
					<div className="hero-content">
						<div className="hero-badge">
							<span className="badge-icon">⭐</span>
							<span>Najbolji u Republici Srpskoj</span>
						</div>

						<h1 className="hero-title">
							Vaš <span className="highlight-red">Pouzdan</span> Partner
							<br />
							Za <span className="highlight-blue">Sve</span> Auto Potrebe
						</h1>

						<p className="hero-description">
							Sa preko 15 godina iskustva u servisiranju vozila, pružamo
							vrhunske usluge mehaničkih popravki, održavanja i dijagnostike.
							Vaš auto je u sigurnim rukama naših stručnih mehaničara.
						</p>

						<div className="hero-stats">
							<div className="stat">
								<div className="stat-number">1500+</div>
								<div className="stat-label">Zadovoljnih Klijenata</div>
							</div>
							<div className="stat">
								<div className="stat-number">15</div>
								<div className="stat-label">Godina Iskustva</div>
							</div>
							<div className="stat">
								<div className="stat-number">24/7</div>
								<div className="stat-label">Hitne Intervencije</div>
							</div>
						</div>

						<div className="hero-buttons">
							<button
								className="btn-primary"
								onClick={() => scrollToSection("services")}
							>
								Naše Usluge
							</button>
							<button
								className="btn-secondary"
								onClick={() => scrollToSection("contact")}
							>
								<span className="btn-icon">📞</span>
								Pozovi Sada
							</button>
						</div>
					</div>
				</div>

				<div className="scroll-indicator">
					<div className="scroll-arrow"></div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="services">
				<div className="container">
					<div className="section-header">
						<div className="section-badge">Naše Usluge</div>
						<h2 className="section-title">Kompletne Auto Usluge</h2>
						<p className="section-description">
							Nudimo širok spektar profesionalnih usluga za sve tipove vozila.
							Koristi moderne uređaje i originaline delove.
						</p>
					</div>

					<div className="services-grid">
						{services.map((service, index) => (
							<div key={index} className="service-card">
								<div className="service-icon">{service.icon}</div>
								<h3 className="service-title">{service.title}</h3>
								<p className="service-description">{service.description}</p>
								<div className="service-price">{service.price}</div>
								<button className="service-btn">Saznaj Više</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="about">
				<div className="container">
					<div className="about-content">
						<div className="about-text">
							<div className="section-badge">O Nama</div>
							<h2 className="section-title">AutoServis Republika</h2>
							<p className="about-description">
								Osnovan 2008. godine u srcu Banje Luke, naš servis je odrastao
								uz naše vernike mišterije i postao pouzdan partner za održavanje
								i popravke vozila. Ponosno služimo našu zajednicu već više od
								decenije.
							</p>

							<div className="about-features">
								<div className="feature">
									<div className="feature-icon">🏆</div>
									<div className="feature-text">
										<h4>Sertifikovani Majstori</h4>
										<p>Svi naši mehaničari imaju oficijalne sertifikate</p>
									</div>
								</div>

								<div className="feature">
									<div className="feature-icon">⚡</div>
									<div className="feature-text">
										<h4>Brza Usluga</h4>
										<p>Većinu radova završavamo u roku od 24 časa</p>
									</div>
								</div>

								<div className="feature">
									<div className="feature-icon">🛡️</div>
									<div className="feature-text">
										<h4>Garancija na Radove</h4>
										<p>Pružamo garanciju na sve izvedene radove</p>
									</div>
								</div>
							</div>

							<div className="about-values">
								<h3>Naše Vrednosti</h3>
								<ul>
									<li>Poštovanje tradicije i moderne tehnologije</li>
									<li>Fer cene i transparentnost u radu</li>
									<li>Predanost našoj lokalnoj zajednici</li>
									<li>Kontinuiano usavršavanje i edukacija</li>
								</ul>
							</div>
						</div>

						<div className="about-visual">
							<div className="about-image">
								<img
									src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=800&fit=crop"
									alt="Naš servis"
								/>
								<div className="image-overlay">
									<div className="overlay-content">
										<span className="overlay-title">Moderni Servis</span>
										<span className="overlay-subtitle">
											Tradicionalne Vrednosti
										</span>
									</div>
								</div>
							</div>

							<div className="about-stats">
								<div className="about-stat">
									<div className="stat-icon">👥</div>
									<div className="stat-info">
										<div className="stat-number">1500+</div>
										<div className="stat-label">Mušterija</div>
									</div>
								</div>

								<div className="about-stat">
									<div className="stat-icon">🔧</div>
									<div className="stat-info">
										<div className="stat-number">5000+</div>
										<div className="stat-label">Popravki</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section id="team" className="team">
				<div className="container">
					<div className="section-header">
						<div className="section-badge">Naš Tim</div>
						<h2 className="section-title">Stručni Mehaničari</h2>
						<p className="section-description">
							Upoznajte naš tim iskusnih stručnjaka koji brinu o vašem vozilu sa
							pažnjom i profesionalizmom.
						</p>
					</div>

					<div className="team-grid">
						{teamMembers.map((member, index) => (
							<div key={index} className="team-card">
								<div className="team-image">
									<img src={member.image} alt={member.name} />
									<div className="team-overlay">
										<div className="social-links">
											<a href="#" className="social-link">
												📧
											</a>
											<a href="#" className="social-link">
												📞
											</a>
										</div>
									</div>
								</div>

								<div className="team-info">
									<h3 className="team-name">{member.name}</h3>
									<p className="team-position">{member.position}</p>
									<p className="team-experience">{member.experience}</p>
									<p className="team-specialty">{member.specialty}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="testimonials">
				<div className="container">
					<div className="section-header">
						<div className="section-badge">Mišljenja Klijenata</div>
						<h2 className="section-title">Šta Kažu Naši Klijenti</h2>
					</div>

					<div className="testimonial-slider">
						<div className="testimonial-card active">
							<div className="testimonial-content">
								<div className="stars">
									{[...Array(testimonials[currentTestimonial].rating)].map(
										(_, i) => (
											<span key={i} className="star">
												⭐
											</span>
										)
									)}
								</div>
								<p className="testimonial-text">
									"{testimonials[currentTestimonial].text}"
								</p>
								<div className="testimonial-author">
									<span className="author-name">
										{testimonials[currentTestimonial].name}
									</span>
								</div>
							</div>
						</div>

						<div className="testimonial-indicators">
							{testimonials.map((_, index) => (
								<button
									key={index}
									className={`indicator ${
										index === currentTestimonial ? "active" : ""
									}`}
									onClick={() => setCurrentTestimonial(index)}
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="contact">
				<div className="container">
					<div className="contact-content">
						<div className="contact-info">
							<div className="section-badge">Kontakt</div>
							<h2 className="section-title">Posetite Nas ili Pozovite</h2>
							<p className="contact-description">
								Spremni smo da odgovorimo na sva vaša pitanja i zakazšemo termin
								za servisiranje vašeg vozila.
							</p>

							<div className="contact-items">
								<div className="contact-item">
									<div className="contact-icon">📍</div>
									<div className="contact-details">
										<h4>Adresa</h4>
										<p>
											Krajišnicka BB
											<br />
											78000 Banja Luka
										</p>
									</div>
								</div>

								<div className="contact-item">
									<div className="contact-icon">📞</div>
									<div className="contact-details">
										<h4>Telefon</h4>
										<p>
											051/234-567
											<br />
											065/123-4567
										</p>
									</div>
								</div>

								<div className="contact-item">
									<div className="contact-icon">⏰</div>
									<div className="contact-details">
										<h4>Radno Vreme</h4>
										<p>
											Pon-Pet: 07:00-19:00
											<br />
											Subota: 08:00-14:00
										</p>
									</div>
								</div>

								<div className="contact-item">
									<div className="contact-icon">📧</div>
									<div className="contact-details">
										<h4>Email</h4>
										<p>
											info@autoservistrepublika.rs
											<br />
											servis@autoservistrepublika.rs
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="contact-form">
							<form className="form">
								<h3>Pošaljite Upit</h3>
								<div className="form-row">
									<div className="form-group">
										<input type="text" placeholder="Vaše ime" required />
									</div>
									<div className="form-group">
										<input type="tel" placeholder="Telefon" required />
									</div>
								</div>

								<div className="form-group">
									<input type="email" placeholder="Email adresa" required />
								</div>

								<div className="form-group">
									<select required>
										<option value="">Izaberite uslugu</option>
										<option value="mehanic">Mehanički popravci</option>
										<option value="motor">Servis motora</option>
										<option value="kocnice">Kočnice i suspenzija</option>
										<option value="elektro">Električni sistem</option>
										<option value="gume">Gume i felne</option>
										<option value="klima">Klima uređaj</option>
										<option value="dijagnostika">Dijagnostika</option>
										<option value="lakiranje">Lakiranje</option>
									</select>
								</div>

								<div className="form-group">
									<textarea
										placeholder="Opišite problem ili upit..."
										rows="4"
										required
									></textarea>
								</div>

								<button type="submit" className="btn-primary full-width">
									Pošaljite Upit
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
						<div className="footer-section">
							<div className="footer-logo">
								<div className="logo-icon">🔧</div>
								<div className="logo-text">
									<span className="logo-main">AutoServis</span>
									<span className="logo-sub">Republika</span>
								</div>
							</div>
							<p className="footer-description">
								Pouzdan partner za sve auto potrebe u Banjoj Luci i šire.
								Ponosno služimo našu zajednicu već preko 15 godina.
							</p>
							<div className="social-links">
								<a href="#" className="social-link">
									📘
								</a>
								<a href="#" className="social-link">
									📷
								</a>
								<a href="#" className="social-link">
									📱
								</a>
							</div>
						</div>

						<div className="footer-section">
							<h4>Brze Veze</h4>
							<ul className="footer-links">
								<li>
									<a href="#home">Početna</a>
								</li>
								<li>
									<a href="#services">Usluge</a>
								</li>
								<li>
									<a href="#about">O Nama</a>
								</li>
								<li>
									<a href="#team">Naš Tim</a>
								</li>
								<li>
									<a href="#contact">Kontakt</a>
								</li>
							</ul>
						</div>

						<div className="footer-section">
							<h4>Usluge</h4>
							<ul className="footer-links">
								<li>
									<a href="#">Mehanički Popravci</a>
								</li>
								<li>
									<a href="#">Servis Motora</a>
								</li>
								<li>
									<a href="#">Kočnice i Suspenzija</a>
								</li>
								<li>
									<a href="#">Dijagnostika</a>
								</li>
								<li>
									<a href="#">Lakiranje</a>
								</li>
							</ul>
						</div>

						<div className="footer-section">
							<h4>Kontakt Info</h4>
							<div className="contact-info-footer">
								<p>📍 Krajišnicka BB, Banja Luka</p>
								<p>📞 051/234-567</p>
								<p>📧 info@autoservistrepublika.rs</p>
								<p>⏰ Pon-Pet: 07:00-19:00</p>
							</div>
						</div>
					</div>

					<div className="footer-bottom">
						<div className="footer-divider"></div>
						<div className="footer-bottom-content">
							<p>&copy; 2024 AutoServis Republika. Sva prava zadržana.</p>
							<div className="footer-bottom-links">
								<a href="#">Privatnost</a>
								<a href="#">Uslovi korišćenja</a>
								<a href="#">Mapa sajta</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Homepage;
