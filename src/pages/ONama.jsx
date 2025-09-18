import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAward,
	faCertificate,
	faUsers,
	faTools,
	faHistory,
	faGraduationCap,
	faTrophy,
	faHandshake,
	faCheckCircle,
	faStar,
	faShieldAlt,
	faMedal,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ONama.css";

const ONama = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const milestones = [
		{
			year: "2009",
			title: "Osnivanje",
			description: "Početak rada kao nezavisna auto radionica",
		},
		{
			year: "2012",
			title: "Bosch Partner",
			description: "Postali smo ovlašćeni Bosch Car Service partner",
		},
		{
			year: "2015",
			title: "Proširenje",
			description: "Otvorili smo novi servisni centar sa najnovijom opremom",
		},
		{
			year: "2018",
			title: "ISO Sertifikat",
			description: "Dobili smo ISO 9001:2015 sertifikat kvaliteta",
		},
		{
			year: "2020",
			title: "Digitalizacija",
			description: "Uveli smo online zakazivanje i praćenje servisa",
		},
		{
			year: "2024",
			title: "15 Godina",
			description: "Proslavili smo 15 godina uspješnog rada",
		},
	];

	const teamMembers = [
		{
			name: "Marko Marković",
			position: "Direktor i glavni mehaničar",
			experience: "20+ godina iskustva",
			certifications: ["Bosch Master", "ASE Certified"],
			image:
				"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
		},
		{
			name: "Milan Jovanović",
			position: "Šef servisa",
			experience: "15+ godina iskustva",
			certifications: ["Bosch Expert", "Dijagnostičar"],
			image:
				"https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=400&h=400&fit=crop",
		},
		{
			name: "Stefan Petrović",
			position: "Elektromehaničar",
			experience: "12+ godina iskustva",
			certifications: ["Bosch Specialist", "Elektro sistemi"],
			image:
				"https://images.unsplash.com/photo-1558222218-b7b54eede3f3?w=400&h=400&fit=crop",
		},
		{
			name: "Nikola Stojanović",
			position: "Mehaničar specialist",
			experience: "10+ godina iskustva",
			certifications: ["Bosch Certified", "Motor specialist"],
			image:
				"https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=400&h=400&fit=crop",
		},
	];

	const values = [
		{
			icon: faShieldAlt,
			title: "Pouzdanost",
			description:
				"Garantujemo kvalitet svih izvršenih radova i ugrađenih delova",
		},
		{
			icon: faGraduationCap,
			title: "Stručnost",
			description: "Kontinuirano obrazovanje i praćenje najnovijih tehnologija",
		},
		{
			icon: faHandshake,
			title: "Poštenje",
			description: "Transparentne cene i iskreni saveti o potrebnim popravkama",
		},
		{
			icon: faTrophy,
			title: "Kvalitet",
			description: "Isključivo originalni Bosch delovi i profesionalna oprema",
		},
	];

	const stats = [
		{ number: "15+", label: "Godina iskustva" },
		{ number: "10,000+", label: "Zadovoljnih klijenata" },
		{ number: "25+", label: "Stručnih tehničara" },
		{ number: "50+", label: "Vrsta usluga" },
	];

	return (
		<div className="o-nama-page">
			<Header />

			{/* Hero Section */}
			<section className="o-nama-hero">
				<div className="hero-overlay"></div>
				<div className="container">
					<div className="hero-content">
						<h1>O Nama</h1>
						<p>
							Vaš pouzdan partner u održavanju vozila sa 15 godina tradicije i
							Bosch kvalitetom
						</p>
					</div>
				</div>
			</section>

			{/* Story Section */}
			<section className="story-section">
				<div className="container">
					<div className="story-grid">
						<div className="story-content">
							<div className="section-badge">Naša Priča</div>
							<h2>Od Male Radionice do Bosch Centra</h2>
							<p>
								Počeli smo kao mala porodična radionica 2009. godine sa jasnom
								vizijom - pružiti vrhunski servis automobila po fer cenama. Naš
								rad, posvećenost i konstantno usavršavanje doveli su nas do toga
								da postanemo ovlašćeni Bosch Car Service partner.
							</p>
							<p>
								Danas, sa timom od preko 25 stručnih tehničara i najmodernijom
								opremom, servisiramo sve tipove vozila održavajući najviše
								standarde kvaliteta. Naša misija ostaje ista - vaša sigurnost i
								zadovoljstvo su naš prioritet.
							</p>
							<div className="story-features">
								<div className="feature">
									<FontAwesomeIcon icon={faAward} />
									<span>Ovlašćeni Bosch Partner od 2012</span>
								</div>
								<div className="feature">
									<FontAwesomeIcon icon={faCertificate} />
									<span>ISO 9001:2015 Sertifikat</span>
								</div>
							</div>
						</div>
						<div className="story-image">
							<img
								src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop"
								alt="Naš servis"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="stats-section">
				<div className="container">
					<div className="stats-grid">
						{stats.map((stat, index) => (
							<div key={index} className="stat-card">
								<div className="stat-number">{stat.number}</div>
								<div className="stat-label">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="values-section">
				<div className="container">
					<div className="section-header">
						<div className="section-badge">Naše Vrijednosti</div>
						<h2>Principi Koji Nas Vode</h2>
					</div>
					<div className="values-grid">
						{values.map((value, index) => (
							<div key={index} className="value-card">
								<div className="value-icon">
									<FontAwesomeIcon icon={value.icon} />
								</div>
								<h3>{value.title}</h3>
								<p>{value.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Timeline Section */}
			<section className="timeline-section">
				<div className="container">
					<div className="section-header">
						<div className="section-badge">Naš Put</div>
						<h2>Ključni Momenti</h2>
					</div>
					<div className="timeline">
						{milestones.map((milestone, index) => (
							<div
								key={index}
								className={`timeline-item ${
									index % 2 === 0 ? "left" : "right"
								}`}
							>
								<div className="timeline-content">
									<div className="timeline-year">{milestone.year}</div>
									<h3>{milestone.title}</h3>
									<p>{milestone.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="team-section">
				<div className="container">
					<div className="section-header">
						<div className="section-badge">Naš Tim</div>
						<h2>Upoznajte Naše Stručnjake</h2>
						<p>Tim posvećenih profesionalaca sa dugogodišnjim iskustvom</p>
					</div>
					<div className="team-grid">
						{teamMembers.map((member, index) => (
							<div key={index} className="team-card">
								<div className="member-image">
									<img src={member.image} alt={member.name} />
									<div className="member-overlay">
										<div className="certifications">
											{member.certifications.map((cert, idx) => (
												<span key={idx} className="cert-badge">
													<FontAwesomeIcon icon={faCertificate} />
													{cert}
												</span>
											))}
										</div>
									</div>
								</div>
								<div className="member-info">
									<h3>{member.name}</h3>
									<p className="position">{member.position}</p>
									<p className="experience">{member.experience}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="o-nama-cta">
				<div className="container">
					<div className="cta-content">
						<h2>Pridružite se hiljadama zadovoljnih klijenata</h2>
						<p>
							Dozvolite našem timu da se pobrine za vaš automobil sa pažnjom
							koju zaslužuje
						</p>
						<button className="cta-btn">Zakažite termin danas</button>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default ONama;
