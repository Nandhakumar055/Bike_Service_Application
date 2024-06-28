import { useState } from 'react';
import { GiTireIronCross } from "react-icons/gi";
import { HiMiniBars3 } from "react-icons/hi2";
import './index.css'

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

	const [toggleNav, setToggleNav] = useState(false)
	const [serviceData] = useState([...serviceDataList])


	console.log(serviceData)

	const handleToggleNav = () => {
		setToggleNav(!toggleNav)
	}

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	const isDisplayNavigationItems = toggleNav ? "navigation-items-container" : "not-display-navigation-items-container"


	return (
		<div id='HomeSection' className='main-container'>
			<nav className='navbar'>
			    <div className='logo-container'>
                    <img src="https://www.rapidbikeservice.com/extras/website/images/logo.png" alt="Logo" />
                    <h1>Bike Service</h1>
                </div>
				<div className='navbar-and-button-container'>
					<button className='logout-btn' onClick={handleLogout}>
						Logout
					</button>
					{toggleNav ? <GiTireIronCross className='nav-icon' size={25} color='white' onClick={handleToggleNav}/> : <HiMiniBars3 className='nav-icon' size={25} color='white' onClick={handleToggleNav}/>}
				</div>
			</nav>
			<div className={isDisplayNavigationItems}>
				<div className='sub-nav'>
					<a href='#HomeSection' className='nav-item'>Home</a>
					<a href='#ServiceSection' className='nav-item'>Service</a>
					<a href='#FooterSection' className='nav-item'>Footer</a>
				</div>
			</div>
	
			<div className='main-section-container'>
				<div className='banner-section'>
					<img src="https://i.ibb.co/4TGMSHJ/37117783-8463239-1-1.jpg" className='banner-image' alt="30122341-7655850"/>
				</div>
				<div id='ServiceSection' className='service-section'>
					<h1>Services</h1>
					<ul className='service-container'>
						{serviceData.map(eachService => (
							<li className='service-item' key={eachService.id}>
								<img src={eachService.imageUrl} alt={eachService.name} />
								<h4>{eachService.name}</h4>
							</li>
						))}
					</ul>
				</div>
				<div id='FooterSection' className='service-section'>
					Footer Section
				</div> 
			</div>
		</div>
	);
};

export default Home;