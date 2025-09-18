import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faEnvelope,
	faMapMarkerAlt,
	faClock,
	faCalendarAlt,
	faHeadset,
	faCheckCircle,
	faCar,
	faUser,
	faMessage,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Kontakt.css";

const Kontakt = () => {
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		car: "",
		message: "",
		service: "",
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsFormSubmitted(true);

		setTimeout(() => {
			setIsFormSubmitted(false);
			setFormData({
				name: "",
				email: "",
				phone: "",
				car: "",
				message: "",
				service: "",
			});
		}, 3000);
	};

	const contactInfo = [
		{
			icon: faPhone,
			title: "Telefon",
			primary: "051/234-567",
			secondary: "Pon-Pet 07:00-19:00",
			action: "Pozovite",
		},
		{
			icon: faMapMarkerAlt,
			title: "Lokacija",
			primary: "Krajišnika 15",
			secondary: "Banja Luka 78000",
			action: "Navigacija",
		},
		{
			icon: faHeadset,
			title: "Hitna Pomoć",
			primary: "065/123-456",
			secondary: "24/7 Dostupno",
			action: "Pozovite",
		},
		{
			icon: faEnvelope,
			title: "Email",
			primary: "info@boschservice-bl.rs",
			secondary: "Odgovor u roku 24h",
			action: "Pošaljite",
		},
	];

	const workingHours = [
		{ day: "Ponedeljak", hours: "07:00 - 19:00" },
		{ day: "Utorak", hours: "07:00 - 19:00" },
		{ day: "Sreda", hours: "07:00 - 19:00" },
		{ day: "Četvrtak", hours: "07:00 - 19:00" },
		{ day: "Petak", hours: "07:00 - 19:00" },
		{ day: "Subota", hours: "08:00 - 16:00" },
		{ day: "Nedelja", hours: "Zatvoreno" },
	];

	const services = [
		"Redovni servis",
		"Dijagnostika",
		"Servis kočnica",
		"Elektrika",
		"Klimatizacija",
		"Geometrija trapa",
		"Ostalo",
	];

	return (
		<div className="kontakt-page">
			<Header />

			{/* Hero Section */}
			<section className="kontakt-hero">
				<div className="hero-overlay"></div>
				<div className="container">
					<div className="hero-content">
						<h1>Kontaktirajte Nas</h1>
						<p>
							Tu smo za vas 7 dana u nedelji. Zakažite termin ili nam pošaljite
							upit
						</p>
					</div>
				</div>
			</section>

			{/* Contact Info Section */}
			<section className="contact-info-section">
				<div className="container">
					<div className="contact-info-grid">
						{contactInfo.map((info, index) => (
							<div key={index} className="info-card">
								<div className="info-icon">
									<FontAwesomeIcon icon={info.icon} />
								</div>
								<h3>{info.title}</h3>
								<p className="info-primary">{info.primary}</p>
								<p className="info-secondary">{info.secondary}</p>
								<button className="info-action">
									{info.action}
									<FontAwesomeIcon icon={faArrowRight} />
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Main Contact Section */}
			<section className="contact-main">
				<div className="container">
					<div className="contact-grid">
						{/* Contact Form */}
						<div className="contact-form-wrapper">
							<div className="form-header">
								<h2>Pošaljite Nam Poruku</h2>
								<p>
									Popunite formu i kontaktiraćemo vas u najkraćem mogućem roku
								</p>
							</div>

							{!isFormSubmitted ? (
								<form className="contact-form" onSubmit={handleSubmit}>
									<div className="form-row">
										<div className="form-group">
											<label htmlFor="name">
												<FontAwesomeIcon icon={faUser} />
												Ime i Prezime
											</label>
											<input
												type="text"
												id="name"
												name="name"
												value={formData.name}
												onChange={handleInputChange}
												placeholder="Vaše ime..."
												required
											/>
										</div>
										<div className="form-group">
											<label htmlFor="email">
												<FontAwesomeIcon icon={faEnvelope} />
												Email
											</label>
											<input
												type="email"
												id="email"
												name="email"
												value={formData.email}
												onChange={handleInputChange}
												placeholder="email@example.com"
												required
											/>
										</div>
									</div>

									<div className="form-row">
										<div className="form-group">
											<label htmlFor="phone">
												<FontAwesomeIcon icon={faPhone} />
												Telefon
											</label>
											<input
												type="tel"
												id="phone"
												name="phone"
												value={formData.phone}
												onChange={handleInputChange}
												placeholder="06x/xxx-xxx"
												required
											/>
										</div>
										<div className="form-group">
											<label htmlFor="car">
												<FontAwesomeIcon icon={faCar} />
												Vozilo
											</label>
											<input
												type="text"
												id="car"
												name="car"
												value={formData.car}
												onChange={handleInputChange}
												placeholder="npr. VW Golf 7"
												required
											/>
										</div>
									</div>

									<div className="form-group">
										<label htmlFor="service">
											<FontAwesomeIcon icon={faCalendarAlt} />
											Usluga
										</label>
										<select
											id="service"
											name="service"
											value={formData.service}
											onChange={handleInputChange}
											required
										>
											<option value="">Izaberite uslugu...</option>
											{services.map((service, index) => (
												<option key={index} value={service}>
													{service}
												</option>
											))}
										</select>
									</div>

									<div className="form-group">
										<label htmlFor="message">
											<FontAwesomeIcon icon={faMessage} />
											Poruka
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											placeholder="Opišite problem ili pitanje..."
											rows="5"
											required
										></textarea>
									</div>

									<button type="submit" className="submit-btn">
										<FontAwesomeIcon icon={faCalendarAlt} />
										Pošaljite Zahtev
									</button>
								</form>
							) : (
								<div className="success-message">
									<div className="success-icon">
										<FontAwesomeIcon icon={faCheckCircle} />
									</div>
									<h3>Uspešno Poslano!</h3>
									<p>
										Hvala vam na interesovanju. Kontaktiraćemo vas u najkraćem
										roku.
									</p>
								</div>
							)}
						</div>

						{/* Side Info */}
						<div className="contact-side">
							{/* Working Hours */}
							<div className="working-hours-card">
								<h3>
									<FontAwesomeIcon icon={faClock} />
									Radno Vreme
								</h3>
								<div className="hours-list">
									{workingHours.map((item, index) => {
										const today = new Date().getDay();
										const isToday =
											(today === 0 && index === 6) || today === index + 1;

										return (
											<div
												key={index}
												className={`hours-item ${isToday ? "active" : ""}`}
											>
												<span className="day">{item.day}</span>
												<span className="hours">{item.hours}</span>
											</div>
										);
									})}
								</div>
							</div>

							{/* Quick Actions */}
							<div className="quick-actions">
								<h3>Brze Akcije</h3>
								<button className="action-btn primary">
									<FontAwesomeIcon icon={faCalendarAlt} />
									Online Zakazivanje
								</button>
								<button className="action-btn">
									<FontAwesomeIcon icon={faPhone} />
									Pozovite: 051/234-567
								</button>
								<button className="action-btn">
									<FontAwesomeIcon icon={faHeadset} />
									Hitno: 065/123-456
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="map-section">
				<div className="map-container">
					<div className="map-overlay">
						<div className="map-info">
							<h3>Pronađite Nas</h3>
							<p>Krajišnika 15, Banja Luka</p>
							<p>Kod Bosch centra</p>
							<button className="directions-btn">
								<FontAwesomeIcon icon={faMapMarkerAlt} />
								Uputstva
							</button>
						</div>
					</div>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.3614374566!2d17.191234!3d44.772096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDQ2JzE5LjYiTiAxN8KwMTEnMjguNCJF!5e0!3m2!1sen!2srs!4v1635959673451!5m2!1sen!2srs"
						width="100%"
						height="500"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
					></iframe>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Kontakt;
