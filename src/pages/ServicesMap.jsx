import React, { useState } from "react";

import Nav from "../components/Navbar/Nav";
import { useNavigate } from "react-router-dom";

const ServicesMap = () => {
  const [counter, setcounter] = useState(0);
  const [ishown, setishown] = useState(false);
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const incr = () => {
    if (counter < 9) {
      setcounter(counter + 1);
    }
  };
  const decr = () => {
    if (counter >= 2) {
      setcounter(counter - 1);
    }
  };

  return (
    <>
      <section className=" bg-cover bg-center  py-4 md:px-24 px-4">
        <Nav />

        <section className="section hero" id="home">
          <div className="container">
            <div className="hero-content">
              <h2 className="h1 hero-title">
                The easy way to Drift on the Road
              </h2>

              <p className="hero-text">Decentralized Ride - Safe & Secure</p>
            </div>

            <div className="hero-banner"></div>

            <form action="" className="hero-form">
              <div className="input-wrapper">
                <label for="input-1" className="input-label">
                  Source
                </label>

                <input
                  type="text"
                  name="car-model"
                  id="input-1"
                  className="input-field"
                  placeholder="From Where?"
                />
              </div>

              <div className="input-wrapper">
                <label for="input-2" className="input-label">
                  Destination
                </label>

                <input
                  type="text"
                  name="monthly-pay"
                  id="input-2"
                  className="input-field"
                  placeholder="To Where?"
                />
              </div>

              <div className="input-wrapper">
                <label for="input-3" className="input-label">
                  When
                </label>

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

              <div className="input-wrapper">
                <label for="input-4" className="input-label">
                  Seats you Need
                </label>
                <h2>{counter}</h2>
                <div class="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    onClick={decr}
                    type="button"
                    class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                    -
                  </button>
                  <button
                    onClick={incr}
                    type="button"
                    class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn"
                onClick={() => navigate("/ridesmap")}
              >
                Search
              </button>
            </form>
          </div>
        </section>

        {/* // */}

        {/* // */}
      </section>
    </>
  );
};

export default ServicesMap;
