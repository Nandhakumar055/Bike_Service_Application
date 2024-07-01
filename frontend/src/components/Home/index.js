import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail, IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare, FaRegCopyright } from "react-icons/fa";
import { BsTwitterX, } from "react-icons/bs";


import './index.css'
import Header from '../Header'

const serviceDataList = [
	{id: 1, name: "General Service", imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/settings.png"},
	{id: 2, name: "Custom Service", imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/wrench-1.png"},
	{id: 3, name: "Bike Custom", imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/bike-1.png"},
	{id: 4, name: "Batteries", imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/battery.png"},
	{id: 5, name: "Engine Works", imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/piston.png"},
	{id: 6, name: "Spare Parts", imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/disc-brake.png"},
	{id: 7, name: "Maintenance", imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/exhaust.png"},
	{id: 8, name: "Foam Wash", imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/spray.png"},
	{id: 9, name: "Tyre & Wheel", imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/rim.png"},
	{id: 10, name: "Mileage Tuning", imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/speed.png"},
	{id: 11, name: "Electrical Check", imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/spark-plug.png"},
	{id: 12, name: "Oil Change", imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/lubricant.png"},
]

const Home = () => {

	const [serviceData] = useState([...serviceDataList])

	console.log(serviceData)

	
	return (
		<div className='home-main-container'>
			<Header />
			<div className='main-section-container'>
				<div id='HomeSection' className='main-container'>
					{/* <div className='banner-section'>
						<img src="https://i.ibb.co/4TGMSHJ/37117783-8463239-1-1.jpg" className='banner-image' alt="30122341-7655850"/>
					</div> */}
					<h1 className='main-heading'>
						Whatever may be your bike issue, We’ve got you covered!!
					</h1>
					<div className='banner-section-container'>
						<div className='carousel-image-container'> 
							<Carousel> 
								<Carousel.Item interval={1500}> 
								<img 
									className="d-block w-100 carousel-image"
									src="https://i.ibb.co/3BJsCyP/6086685-22484.jpg"
									alt="carousel"
								/> 
								</Carousel.Item> 
								<Carousel.Item interval={1000}> 
								<img 
									className="d-block w-100 carousel-image"
									src="https://i.ibb.co/LrDXyCb/10379047-17882259.jpg"
									alt="carousel"
								/> 
								</Carousel.Item> 
							</Carousel> 
						</div>
						<div className='text-container'>
							<p>
								As the best doorstep bike service in Coimbatore, technicians in ProMechanic have years of experience in the industry and are certified professionals, who can handle all kinds of bike issues and problems. We provide services for all leading bike manufacturers including the hero, honda, Suzuki, Yamaha, Bajaj, Tvs, Ktm, Royal Enfield, Harley Davidson, Benelli, Bbmw, Husqvarna, Aprilia, Kawasaki the list goes on! Servicing of all these high-end brands comes under one roof. We are the best bike workshop in Coimbatore who offer complete transparency as well as integrity in our work. Don’t hesitate, we guarantee your satisfaction!
							</p>
						</div> 			
					</div>
					
					<div id='ServiceSection' className='service-section'>
						<h1 className='section-heading'>Services</h1>
						<ul className='service-container'>
							{serviceData.map(eachService => (
								<Link to='/booking-service' className='link'>
									<li className='service-item' key={eachService.id}>
										<img src={eachService.imageUrl} alt={eachService.name} />
										<h4>{eachService.name}</h4>
									</li>
								</Link>
							))}
						</ul>
					</div>
					<div id='WorkShopSection' className='why-choose-us-section'>
						<h1 className='why-choose-us-heading'>Why Choose Us</h1>
						<ul className='our-service-item-container'>
							<li className='our-service-item'>
								<img src="https://www.tvsmotor.com/-/media/TVSv2/Care-Page-Images/20-03-23/Frame-24.png" alt='our service'/>
								<p>SERVICE WORKSHOP OPEN ALL 7 DAYS</p>
							</li>
							<li className='our-service-item'>
								<img src="https://www.tvsmotor.com/-/media/TVSv2/Care-Page-Images/20-03-23/Frame-25.png" alt='our-service'/>
								<p>SERVICE PICK-UP AND DROP FACILITY</p>
							</li>
							<li className='our-service-item'>
								<img src="https://www.tvsmotor.com/-/media/TVSv2/Care-Page-Images/20-03-23/Frame-26.png" alt='our-service'/>
								<p>GENUINE PARTS & OIL</p>
							</li>
							<li className='our-service-item'>
								<img src="https://www.tvsmotor.com/-/media/TVSv2/Care-Page-Images/20-03-23/Frame-27.png" alt='our-service'/>
								<p>LIVE SERVICE STATUS UPDATES</p>
							</li>
							<li className='our-service-item'>
								<img src="https://www.tvsmotor.com/-/media/TVSv2/Care-Page-Images/20-03-23/Frame-28.png" alt='our-service'/>
								<p>5 YEARS STANDARAD WARRANTY*</p>
							</li>
							<li className='our-service-item'>
								<img src="https://www.tvsmotor.com/-/media/TVSv2/Care-Page-Images/Care-Section/24x7.svg" alt='our-service'/>
								<p>24 X 7 ASSISTANCE</p>
							</li>
						</ul>
					</div>
					<div id='ContactUsSection' className='contact-us-section'>
						<h1 className='section-heading'>Contact Us</h1>
						<p className='contact-sub-heading'>Do you have a service you would like us to work on? Or perhaps a few qustions? Contact us and we will be more than happy to assist you.</p>
						<div className='contact-deatail-main-container'>
							<div className='contact-deatail-container'>
								<div>
									<h4>Our office</h4>
									<div className='details'>
										<FaPhoneAlt color='purple' size={17}/>
										<p>+2721 480 0420</p>
									</div>
									<div className='details'>
										<IoIosMail color='purple' size={20}/>
										<p>rabio@gmail.com</p>
									</div>
									<p className='address'>34 Bree Street, 3rd Floor, Coimbatore - 641114</p>
								</div>
							</div>
							<div className='contact-deatail-container'>
								<div>
									<h4>Services</h4>
									<p>Bike Service</p>
									<p>Cars Service</p>
									<p>Water Wash Service</p>
									<p>General Service</p>
								</div>
							</div>
							<div className='contact-deatail-container'>
								<div>
									<h4>Follow us</h4>
									<div className='details'>
										<RiInstagramFill size={20} color='purple'/>
										<p>Instagram</p>
									</div>
									<div className='details'>
										<FaFacebookSquare size={20} color='purple'/>
										<p>Facebook</p>
									</div>
									<div className='details'>
										<BsTwitterX size={17} color='purple'/>
										<p>Twitter</p>
									</div>
									<div className='details'>
										<IoLogoYoutube size={20} color='purple'/>
										<p>Youtube</p>
									</div>
								</div>
							</div>
							<div className='contact-deatail-container about-us-container'>
								<div>
									<h4>About Us</h4>
									<p>We are ProMechanic, the best two wheeler service center in Coimbatore. Our focus is to offer perfect repairing and after sales services of two wheeler for all leading brands. Our mission is to provide customers with the best experience possible when it comes to bike service and maintenance.</p>
									<p>Our team is well equipped with the latest technologies and diagnostic equipment to diagnose two wheeler problems in a quick and accurate manner. Our experts understand how important it is to have a reliable and efficient system when it comes to bike service and maintenance. We provide a comprehensive suite of services that includes everything from basic inspections, and tune-ups to complex engine, wheel, and fuel tank repairs.All this makes us the best two wheeler service center in Coimbatore. Our experienced mechanics and technicians are trained to work on all types of bikes from TVS, Hero, Honda, Bajaj, Aprilia, KTM, BMW, Kawasaki to Triumph wise brands. We are committed to provide nothing but the best and that too in a timely manner.</p>
									<p>We use state-of-the-art tools and specialized techniques to ensure accuracy and precision while servicing bikes. Additionally, we have a wide selection for branded parts and accessories that can be used to customize your bike’s look and performance. We also offer a variety of special offers and discounts to help you save money on your next bike service or repair. With ProMechanic, you can be assured that your bike will be serviced properly with the latest technology, quality spare parts, and expert technicians.</p>
								</div>
							</div>
						</div>
						<div className='footer-container'>
							<FaRegCopyright size={18} color='white'/>
							<p>2024 @Rabio_Services</p>
						</div>
					</div> 
				</div>
			</div>
		</div>
	);
};

export default Home;