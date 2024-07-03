import { useState } from 'react'
import './index.css'
import Header from '../Header'
import yourBookigContext from '../../context/yourBookigContext'
import emailjs from '@emailjs/browser';

const serviceDataList = [
	{id: 1, name: "General Service", serviceCheckBox : false, imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/settings.png"},
	{id: 2, name: "Custom Service", serviceCheckBox : false, imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/wrench-1.png"},
	{id: 3, name: "Bike Custom", serviceCheckBox : false, imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/bike-1.png"},
	{id: 4, name: "Batteries", serviceCheckBox : false, imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/battery.png"},
	{id: 5, name: "Engine Works", serviceCheckBox : false, imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/piston.png"},
	{id: 6, name: "Spare Parts", serviceCheckBox : false, imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/disc-brake.png"},
	{id: 7, name: "Maintenance", serviceCheckBox : false, imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/exhaust.png"},
	{id: 8, name: "Foam Wash", serviceCheckBox : false, imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/spray.png"},
	{id: 9, name: "Tyre & Wheel", serviceCheckBox : false, imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/rim.png"},
	{id: 10, name: "Mileage Tuning", serviceCheckBox : false, imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/speed.png"},
	{id: 11, name: "Electrical Check", serviceCheckBox : false, imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/spark-plug.png"},
	{id: 12, name: "Oil Change", serviceCheckBox : false, imageUrl: "https://promechanic.co.in/wp-content/uploads/2023/02/lubricant.png"},
]

const BookingService = () => {

    const [serviceData, setServiceData]= useState([...serviceDataList])
    const [userData, setUserdata] = useState({
        name : '',
        email : '',
        phoneNumber: '',
        date : '',
        vehicleNumber: '',
        userSelectedServices : []
    })

    const [resultStaus, setResultStatus] = useState('')


    const handleOnChangeInput = (event) => {
        const {name, value} = event.target
        setUserdata({
            ...userData,
            [name] : value
        })
    }

    const handleOnChangeSelect = (event) => {
        const { name, checked } = event.target;

        setServiceData((prevServiceData) =>
            prevServiceData.map((service) =>
            service.name === name ? { ...service, serviceCheckBox: checked } : service
          )
        );

        setUserdata((prevUserData) => {
            const updatedServices = checked
              ? [...prevUserData.userSelectedServices, name]
              : prevUserData.userSelectedServices.filter(service => service !== name);
      
            return {
              ...prevUserData,
              userSelectedServices: updatedServices,
            };
        });

    };
    
    const renderSubmitBooking = () =>(
        <yourBookigContext.Consumer>
            {value => {        
                const {addBookingItem} = value


                const handleBookService = async event => {
                    event.preventDefault()    

                    if (userData.userSelectedServices.length > 0){
                        setResultStatus(true)
                        addBookingItem(userData)

                        // Email Send to User    
                        const templateParams = {
                            email: userData.email,
                            name : userData.name,
                            bookigDate : userData.date,
                            phoneNum : userData.phoneNumber,
                            bikeNum : userData.vehicleNumber,
                            services : `${userData.userSelectedServices}`
                        };

                        await emailjs.send("service_vmpxhul","template_d4ho3rn", templateParams, {
                            publicKey: "CNCuqPLXOlIXzzEdw",
                        }).then(
                            () => {
                            console.log('BOOKING SUCCESS!');
                            },
                            (error) => {
                            console.log('FAILED...', error.text);
                            // setResultStatus("Invalid Email")
                            },
                        );
                        console.log(templateParams)


                        setUserdata({
                            name : '',
                            email : '',
                            phoneNumber: '',
                            date : '',
                            vehicleNumber: '',
                            userSelectedServices : []
                        })
                        
                        window.location = "/";
                    }    
                    else{
                        setResultStatus(false)
                    }
                }

                return(
                    <form className='service-booking-container' onSubmit={handleBookService}>
                        <div className='service-form-main-container'>
                        <div className='service-form-container'>
                            <div className='input-containers'>
                                <label htmlFor='Name'>Name</label>
                                <input
                                    type='text' 
                                    placeholder='Type your name'
                                    id='Name' 
                                    name='name' 
                                    value={userData.name} 
                                    onChange={handleOnChangeInput}
                                    required
                                />
                            </div>    
                            <div className='input-containers'>
                                <label htmlFor='Email'>Email</label>
                                <input 
                                    type='email' 
                                    placeholder='Type your email'
                                    id='Email' 
                                    name='email' 
                                    value={userData.email} 
                                    onChange={handleOnChangeInput}
                                    required
                                />
                            </div>
                            <div className='input-containers'>
                                <label htmlFor='PhoneNo'>Phone Number</label>
                                <input 
                                    type='number' 
                                    placeholder='Type your phone number'
                                    id='PhoneNo' 
                                    name='phoneNumber' 
                                    value={userData.phoneNumber} 
                                    onChange={handleOnChangeInput}
                                    required
                                />
                            </div>
                            <div className='input-containers'>
                                <label htmlFor='VehicleNumber'>Vehicle Number</label>
                                <input 
                                    type='text' 
                                    placeholder='ex: TN99R8855'
                                    id='VehicleNumber' 
                                    name='vehicleNumber' 
                                    value={userData.vehicleNumber} 
                                    onChange={handleOnChangeInput}
                                    required
                                />
                            </div>
                            <div className='input-containers'>
                                <label htmlFor='Date'>Date</label>
                                <input 
                                    type='date' 
                                    placeholder='Type your date'
                                    id='Date' 
                                    name='date' 
                                    value={userData.date} 
                                    onChange={handleOnChangeInput}
                                    required
                                />
                            </div>    
                        </div>
                        </div>
                    
                        <div className='choose-your-service-container'>
                        <h4>Kindly select the services you require</h4>
                        <ul className='check-item-main-container'>
                            {serviceData.map(eachService => (
                                <li className={eachService.serviceCheckBox ? 'checked-style' : 'check-item-container'} key={eachService.id} >
                                    <label className='servie-name-item' htmlFor={eachService.name}>
                                        <img src={eachService.imageUrl} alt={eachService.name} />
                                        <h4>{eachService.name}</h4>
                                    </label> 
                                    <input type='checkbox' 
                                        name={eachService.name} 
                                        id={eachService.name} 
                                        checked={eachService.serviceCheckBox}
                                        onChange={handleOnChangeSelect}
                                    />
                                </li>
                            ))}
                        </ul>
                        </div>
                        <div className='err-con'>
                            {resultStaus === true && <h4 className='booking-success-msg'>Booking Successfully</h4>}
                            {resultStaus === false && <h4 className='booking-err-msg'>*Please choose your services</h4>}
                            {/* {resultStaus === "Invalid Email" && <h4 className='booking-err-msg'>Invalid Email - *Please fill correct email</h4>} */}
                        </div>
                        <div className='button-con'>
                            <button type='submit'>Book Service</button>
                        </div>
                    </form>
                )
            }}
        </yourBookigContext.Consumer>

    )



    return(
        <div className='service-booking-section-container'>
            <Header />
            <div className='service-booking-section-main-container'>
                <div className='service-booking-main-container'>
                <h1>Get Our Services</h1>
                <p>Simply fill out an online request form and what you need, and we'll offer support</p>
                {renderSubmitBooking()}
                </div>
            </div>
        </div>
    )
        
}
    

export default BookingService
