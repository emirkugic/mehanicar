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
	faShieldAlt,
	faTools,
	faCheckCircle,
	faGears,
	faBatteryFull,
	faFan,
	faRoad,
	faTruck,
	faClipboardList,
	faArrowRight,
	faClock,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Usluge.css";

const Usluge = () => {
	const [activeCategory, setActiveCategory] = useState("sve");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const allServices = [
		{
			id: 1,
			category: "osnovne",
			name: "Dijagnostika vozila",
			description: "Računarska dijagnostika svih sistema",
			icon: faSearch,
			details: [
				"Čitanje i brisanje grešaka",
				"Testiranje senzora",
				"Analiza performansi motora",
				"Provera elektronskih sistema",
			],
			price: "Od 50 KM",
			duration: "30-60 min",
			featured: true,
		},
		{
			id: 2,
			category: "osnovne",
			name: "Redovni servis",
			description: "Kompletna zamjena ulja i filtera",
			icon: faOilCan,
			details: [
				"Zamjena motornog ulja",
				"Zamjena filtera ulja",
				"Zamjena filtera vazduha",
				"Zamjena filtera kabine",
				"Provera nivoa tečnosti",
			],
			price: "Od 120 KM",
			duration: "60-90 min",
			featured: true,
		},
		{
			id: 3,
			category: "osnovne",
			name: "Servis kočnica",
			description: "Održavanje kočionog sistema",
			icon: faShieldAlt,
			details: [
				"Zamjena kočionih pločica",
				"Zamjena kočionih diskova",
				"Zamjena kočione tečnosti",
				"Provera ABS sistema",
				"Podešavanje ručne kočnice",
			],
			price: "Od 80 KM",
			duration: "90-120 min",
		},
		{
			id: 4,
			category: "osnovne",
			name: "Servis kvačila i mjenjača",
			description: "Održavanje transmisije",
			icon: faGears,
			details: [
				"Dijagnostika kvačila",
				"Zamjena seta kvačila",
				"Zamjena ulja u mjenjaču",
				"Popravka automatskog mjenjača",
				"Balansiranje zamajca",
			],
			price: "Od 200 KM",
			duration: "2-4 sata",
		},
		{
			id: 5,
			category: "osnovne",
			name: "Servis ovjesa",
			description: "Održavanje sistema ovjesa",
			icon: faRoad,
			details: [
				"Zamjena amortizera",
				"Zamjena opruga",
				"Zamjena stabilizatora",
				"Zamjena kuglastih zglobova",
				"Zamjena selena",
			],
			price: "Od 100 KM",
			duration: "2-3 sata",
		},
		{
			id: 6,
			category: "osnovne",
			name: "Zamjena i balansiranje guma",
			description: "Profesionalna ugradnja pneumatika",
			icon: faCar,
			details: [
				"Demontaža starih guma",
				"Montaža novih guma",
				"Balansiranje točkova",
				"Provera pritiska",
				"Vulkanizacija",
			],
			price: "Od 40 KM",
			duration: "30-45 min",
		},
		{
			id: 7,
			category: "osnovne",
			name: "Geometrija trapa",
			description: "Precizno podešavanje geometrije",
			icon: faTachometerAlt,
			details: [
				"3D merenje geometrije",
				"Podešavanje konvergencije",
				"Podešavanje nagiba točkova",
				"Provera centriranosti volana",
				"Izdavanje izveštaja",
			],
			price: "Od 60 KM",
			duration: "45-60 min",
		},
		{
			id: 8,
			category: "napredne",
			name: "Električarski radovi",
			description: "Servis električnih sistema",
			icon: faBolt,
			details: [
				"Zamjena akumulatora",
				"Popravka alternatora",
				"Zamjena anlasera",
				"Ugradnja dodatne opreme",
				"Dijagnostika instalacija",
			],
			price: "Od 70 KM",
			duration: "1-3 sata",
			featured: true,
		},
		{
			id: 9,
			category: "napredne",
			name: "Klimatizacija",
			description: "Servis klima sistema",
			icon: faSnowflake,
			details: [
				"Punjenje freonom",
				"Čišćenje sistema",
				"Dezinfekcija",
				"Zamjena filtera kabine",
				"Popravka kompresora",
			],
			price: "Od 80 KM",
			duration: "60-90 min",
		},
		{
			id: 10,
			category: "napredne",
			name: "Izduvni sistem",
			description: "Održavanje izduvnog sistema",
			icon: faFan,
			details: [
				"Zamjena auspuha",
				"Zamjena katalizatora",
				"Čišćenje DPF filtera",
				"Zamjena lambda sonde",
				"Popravka EGR ventila",
			],
			price: "Od 150 KM",
			duration: "2-3 sata",
		},
		{
			id: 11,
			category: "napredne",
			name: "Turbo punjač",
			description: "Servis turbo sistema",
			icon: faGears,
			details: [
				"Dijagnostika turba",
				"Regeneracija turba",
				"Zamjena turba",
				"Čišćenje interkulera",
				"Kalibracija pritiska",
			],
			price: "Od 300 KM",
			duration: "3-5 sati",
		},
		{
			id: 12,
			category: "napredne",
			name: "Popravka motora",
			description: "Kompleksne popravke motora",
			icon: faCog,
			details: [
				"Generalna popravka",
				"Zamjena brtvi glave",
				"Zamjena zupčastog kaiša",
				"Zamjena lanca",
				"Honovanje cilindara",
			],
			price: "Po dogovoru",
			duration: "1-5 dana",
		},
		{
			id: 13,
			category: "dodatne",
			name: "Priprema za tehnički",
			description: "Kompletna priprema vozila",
			icon: faClipboardList,
			details: [
				"Provera svih sistema",
				"Otklanjanje nedostataka",
				"Izdavanje potvrde",
				"Saveti za održavanje",
				"Praćenje rokova",
			],
			price: "Od 50 KM",
			duration: "60-90 min",
		},
		{
			id: 14,
			category: "dodatne",
			name: "Šlep služba 24/7",
			description: "Hitna pomoć na putu",
			icon: faTruck,
			details: [
				"Transport vozila",
				"Pomoć na putu",
				"Start vozila",
				"Zamjena točka",
				"Dostava goriva",
			],
			price: "Od 80 KM",
			duration: "30-60 min",
		},
	];

	const serviceCategories = {
		sve: { name: "Sve Usluge", icon: faTools, count: allServices.length },
		osnovne: {
			name: "Osnovne",
			icon: faWrench,
			count: allServices.filter((s) => s.category === "osnovne").length,
		},
		napredne: {
			name: "Naprednije",
			icon: faCog,
			count: allServices.filter((s) => s.category === "napredne").length,
		},
		dodatne: {
			name: "Dodatne",
			icon: faTools,
			count: allServices.filter((s) => s.category === "dodatne").length,
		},
	};

	const filteredServices =
		activeCategory === "sve"
			? allServices
			: allServices.filter((service) => service.category === activeCategory);

	return (
		<div className="usluge-page">
			<Header />

			{/* Hero Section */}
			<section className="usluge-hero">
				<div className="hero-overlay"></div>
				<div className="container">
					<div className="hero-content">
						<h1>Naše Usluge</h1>
						<p>
							Kompletan servis za vaš automobil sa Bosch kvalitetom i garancijom
						</p>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="usluge-main">
				<div className="container">
					{/* Category Filter */}
					<div className="category-filter">
						{Object.entries(serviceCategories).map(([key, category]) => (
							<button
								key={key}
								className={`filter-btn ${
									activeCategory === key ? "active" : ""
								}`}
								onClick={() => setActiveCategory(key)}
							>
								<FontAwesomeIcon icon={category.icon} />
								<span>{category.name}</span>
								<span className="count">{category.count}</span>
							</button>
						))}
					</div>

					{/* Services Grid */}
					<div className="services-detailed-grid">
						{filteredServices.map((service) => (
							<div
								key={service.id}
								className={`service-detailed-card ${
									service.featured ? "featured" : ""
								}`}
							>
								{service.featured && (
									<div className="featured-badge">
										<FontAwesomeIcon icon={faStar} />
										Preporučeno
									</div>
								)}
								<div className="service-header">
									<div className="service-icon-large">
										<FontAwesomeIcon icon={service.icon} />
									</div>
									<div className="service-title">
										<h3>{service.name}</h3>
										<p>{service.description}</p>
									</div>
								</div>
								<div className="service-details">
									<ul>
										{service.details.map((detail, index) => (
											<li key={index}>
												<FontAwesomeIcon icon={faCheckCircle} />
												<span>{detail}</span>
											</li>
										))}
									</ul>
								</div>
								<div className="service-footer">
									<div className="service-meta">
										<div className="meta-item">
											<FontAwesomeIcon icon={faClock} />
											<span>{service.duration}</span>
										</div>
										<div className="price">{service.price}</div>
									</div>
									<button className="book-btn">
										Zakažite termin
										<FontAwesomeIcon icon={faArrowRight} />
									</button>
								</div>
							</div>
						))}
					</div>

					{/* CTA Section */}
					<div className="services-cta">
						<div className="cta-content">
							<h2>Ne vidite uslugu koju tražite?</h2>
							<p>
								Kontaktirajte nas za sve dodatne informacije i specijalne
								zahtjeve
							</p>
							<button className="cta-btn">Pozovite nas: 051/234-567</button>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Usluge;
