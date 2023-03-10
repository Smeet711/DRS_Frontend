import React from 'react'
import Nav from '../components/Navbar/Nav'
import { GoogleAutoComplete } from "react-google-autocomplete";
import PlaceComponent from '../components/place.component';



const ServicesMap = () => {
  return (
    <>
     <section className=" bg-cover bg-center  py-4 md:px-24 px-4"> 
    <Nav/>
        
    

    <section className="section hero" id="home">
        <div className="container">

          <div className="hero-content">
            <h2 className="h1 hero-title">The easy way to Drift on the Road</h2>

            <p className="hero-text">
              Decentralized Ride - Safe & Secure
            </p>
          </div>

          <div className="hero-banner"></div>

          <form action="" className="hero-form">
          
            <div className="input-wrapper">
            <label htmlFor="input-1" className="input-label">Source</label>
            <PlaceComponent />
              {/* 
              <input type="text" name="car-model" id="input-1" className="input-field"
                placeholder="From Where?"/> */}
                
            </div>
            <div className="input-wrapper">
            <label htmlFor="input-2" className="input-label">Destination</label>
            <PlaceComponent />
              {/* 

              <input type="text" name="monthly-pay" id="input-2" className="input-field" placeholder="To Where?"/> */}
            </div>

            <div className="input-wrapper">
              <label htmlFor="input-3" className="input-label">When</label>

              {/* <input type="text" name="year" id="input-3" className="input-field" /> */}
              <input
                type="date"
                id="start"
                name="trip-start"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                min="1960-01-01"
                max="3000-12-31"
                required
              />
            </div>

            <button type="submit" className="btn">Search</button>

          </form>

        </div>
      </section>




</section>
    
    </>
  )
}

export default ServicesMap