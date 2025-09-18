import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAward,
	faShieldAlt,
	faUsers,
	faMedal,
	faClock,
	faHandshake,
	faThumbsUp,
	faTools,
	faCertificate,
	faCheckCircle,
	faStar,
	faQuoteLeft,
	faChartLine,
	faGem,
	faTrophy,
	faRocket,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ZastoMi.css";

const ZastoMi = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const mainReasons = [
		{
			icon: faAward,
			title: "Ovlašćeni Bosch Partner",
			description:
				"Sertifikovani partner sa pristupom originalnim delovima i najnovijoj tehnologiji",
			details: [
				"Pristup Bosch tehničkoj podršci",
				"Originalni Bosch delovi",
				"Najnovija dijagnostička oprema",
				"Redovne obuke i sertifikacije",
			],
		},
		{
			icon: faShieldAlt,
			title: "2 Godine Garancije",
			description: "Puna garancija na sve izvršene radove i ugrađene delove",
			details: [
				"Garancija na radove",
				"Garancija na delove",
				"Besplatne kontrole",
				"Produžena garancija dostupna",
			],
		},
		{
			icon: faUsers,
			title: "Stručan Tim",
			description: "Sertifikovani tehničari sa dugogodišnjim iskustvom",
			details: [
				"25+ tehničara",
				"Kontinuirano usavršavanje",
				"Specijalizovani po brendovima",
				"Multilingualna podrška",
			],
		},
		{
			icon: faMedal,
			title: "Premium Kvalitet",
			description:
				"Koristimo isključivo originalne delove za maksimalni kvalitet",
			details: [
				"Originalni delovi",
				"Profesionalni alati",
				"Kontrola kvaliteta",
				"ISO 9001:2015 standard",
			],
		},
		{
			icon: faClock,
			title: "Brza Usluga",
			description: "Efikasno rešavanje problema uz poštovanje rokova",
			details: [
				"Zakazivanje istog dana",
				"Express servis dostupan",
				"Tačnost u rokovima",
				"Real-time praćenje",
			],
		},
		{
			icon: faHandshake,
			title: "Fer Cene",
			description: "Transparentno naplaćivanje bez skrivenih troškova",
			details: [
				"Besplatna procena",
				"Fiksne cene servisa",
				"Mogućnost plaćanja na rate",
				"Cenovnik unapred",
			],
		},
	];

	const testimonials = [
		{
			name: "Petar Petrović",
			car: "BMW 320d",
			rating: 5,
			text: "Odličan servis! Profesionalno osoblje, brza usluga i fer cene. Moj BMW je u sigurnim rukama.",
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
		},
		{
			name: "Ana Marković",
			car: "Audi A4",
			rating: 5,
			text: "Nakon godina traženja pouzdanog servisa, konačno sam ga našla. Preporučujem svima!",
			image:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
		},
		{
			name: "Marko Jovanović",
			car: "VW Golf 7",
			rating: 5,
			text: "Transparentnost i profesionalizam na najvišem nivou. Uvek objasne šta treba da se radi.",
			image:
				"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
		},
	];

	const achievements = [
		{
			icon: faTrophy,
			number: "15+",
			title: "Godina rada",
			description: "Dugogodišnje iskustvo u servisu",
		},
		{
			icon: faThumbsUp,
			number: "10,000+",
			title: "Zadovoljnih klijenata",
			description: "Povjerenje koje nas motiviše",
		},
		{
			icon: faCertificate,
			number: "50+",
			title: "Sertifikata",
			description: "Potvrda naše stručnosti",
		},
		{
			icon: faChartLine,
			number: "98%",
			title: "Stopa zadovoljstva",
			description: "Klijenti se vraćaju",
		},
	];

	const comparisons = [
		{ feature: "Originalni delovi", us: true, others: false },
		{ feature: "2 godine garancije", us: true, others: false },
		{ feature: "Bosch dijagnostika", us: true, others: false },
		{ feature: "Sertifikovani tehničari", us: true, others: true },
		{ feature: "Transparentne cene", us: true, others: false },
		{ feature: "Online zakazivanje", us: true, others: false },
		{ feature: "24/7 Podrška", us: true, others: false },
		{ feature: "Besplatna procena", us: true, others: false },
	];

	return (
		<div className="zasto-mi-page">
			<Header />

			{/* Hero Section */}
			<section className="zasto-mi-hero">
				<div className="hero-overlay"></div>
				<div className="container">
					<div className="hero-content">
						<h1>Zašto Izabrati Nas?</h1>
						<p>
							Kombinacija iskustva, tehnologije i posvećenosti vašoj sigurnosti
						</p>
					</div>
				</div>
			</section>

			{/* Main Reasons Section */}
			<section className="main-reasons">
				<div className="container">
					<div className="section-header">
						<div className="section-badge">Naše Prednosti</div>
						<h2>6 Razloga Zašto Smo Najbolji Izbor</h2>
					</div>

					<div className="reasons-grid">
						{mainReasons.map((reason, index) => (
							<div key={index} className="reason-card">
								<div className="reason-header">
									<div className="reason-icon">
										<FontAwesomeIcon icon={reason.icon} />
									</div>
									<h3>{reason.title}</h3>
								</div>
								<p className="reason-description">{reason.description}</p>
								<ul className="reason-details">
									{reason.details.map((detail, idx) => (
										<li key={idx}>
											<FontAwesomeIcon icon={faCheckCircle} />
											<span>{detail}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="testimonials-section">
				<div className="container">
					<div className="section-header">
						<div className="section-badge">Utisci</div>
						<h2>Šta Kažu Naši Klijenti</h2>
					</div>

					<div className="testimonials-grid">
						{testimonials.map((testimonial, index) => (
							<div key={index} className="testimonial-card">
								<div className="quote-icon">
									<FontAwesomeIcon icon={faQuoteLeft} />
								</div>
								<div className="rating">
									{[...Array(testimonial.rating)].map((_, i) => (
										<FontAwesomeIcon key={i} icon={faStar} />
									))}
								</div>
								<p className="testimonial-text">"{testimonial.text}"</p>
								<div className="testimonial-author">
									<div>
										<h4>{testimonial.name}</h4>
										<span>{testimonial.car}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="zasto-cta">
				<div className="container">
					<div className="cta-content">
						<FontAwesomeIcon icon={faRocket} className="cta-icon" />
						<h2>Ubedite Se Sami</h2>
						<p>
							Pridružite se hiljadama zadovoljnih vlasnika automobila koji nam
							veruju
						</p>
						<div className="cta-buttons">
							<button className="cta-primary">Zakažite Pregled</button>
							<button className="cta-secondary">Pozovite Nas</button>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default ZastoMi;
