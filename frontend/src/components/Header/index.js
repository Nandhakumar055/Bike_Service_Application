import { useState } from "react"
import { GiTireIronCross } from "react-icons/gi";
import { HiMiniBars3 } from "react-icons/hi2";

import './index.css'

const Header = () => {
    const [toggleNav, setToggleNav] = useState(false)
    
	const handleToggleNav = () => {
		setToggleNav(!toggleNav)
	}

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

    const isDisplayNavigationItems = toggleNav ? "sm-nav-item-container" : "not-display-sm-nav-item-container"

    return(
        <>
			<nav className='navbar'>
			    <div className='logo-container'>
                    <img src="https://www.rapidbikeservice.com/extras/website/images/logo.png" alt="Logo" />
                    <h1>Bike Service</h1>
                </div>
				<div className='navbar-and-button-container'>
					<div className='lg-nav-item-container'>
						<a href='/#HomeSection' className='lg-nav-item'>Home</a>
						<a href='/#ServiceSection' className='lg-nav-item'>Service</a>
						<a href='/#WorkShopSection' className='lg-nav-item'>Workshop</a>
						<a href='/#ContactUsSection' className='lg-nav-item'>Contact Us</a>
					</div>
					<button className='logout-btn' onClick={handleLogout}>
						Logout
					</button>
					{toggleNav ? <GiTireIronCross className='nav-icon' size={25} color='white' onClick={handleToggleNav}/> : <HiMiniBars3 className='nav-icon' size={25} color='white' onClick={handleToggleNav}/>}
				</div>
			</nav>
			<div className={isDisplayNavigationItems}>
				<div className='sub-nav'>
					<a href='/#HomeSection' className='nav-item' onClick={handleToggleNav}>Home</a>
					<a href='/#ServiceSection' className='nav-item' onClick={handleToggleNav}>Service</a>
					<a href='#WorkShopSection' className='nav-item' onClick={handleToggleNav}>Workshop</a>
					<a href='/#ContactUsSection' className='nav-item' onClick={handleToggleNav}>Contact Us</a>
				</div>
			</div>

        </>
    )
}

export default  Header