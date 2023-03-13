import React from "react";
import Nav from "../components/Navbar/Nav";
import Icon from "../assets/verified.png";
import Icon2 from "../assets/chat.png";
import Icon3 from "../assets/inspection.png";
import Profile from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import Verified from "../components/Verified";

const DriverMoreDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className=" bg-cover h-screen bg-center  py-4 md:px-24 px-4">
        <Nav />
        <div className="w-full  h-auto  p-4 text-center bg-white border border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="w-screen h-auto  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-neutral-900 dark:border-gray-700">
              {/* // */}
              {/* driver rating div starts  */}
              <article>
                <div className="flex items-center mb-4 space-x-4 mt-8">
                  <img className="w-10 h-10 rounded-full" src={Profile} alt="" />
                  <div className="space-y-1 font-medium dark:text-white">
                    <p>
                      Smeet Gadhiya{" "}
                      <time
                        datetime="2014-08-16 19:00"
                        className="block text-sm text-gray-500 dark:text-gray-400"
                      >
                        31 Y/r - <h3>Experience Level : Expert</h3>
                      </time>
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Rating star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                    4.95
                  </p>
                  <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                  >
                    73 reviews
                  </a>
                  {/* rating more details page  */}
                  <div className=" ml-10 inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <button
                      onClick={() => navigate("")}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {/* <span className="sr-only">Icon description</span> */}
                    </button>
                  </div>
                  {/* rating more details page ends  */}
                </div>

                <div className="flex items-center">
                  <svg
                    fill="#d04343"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.01,9.01,0,0,1,12,21ZM12,4a8.006,8.006,0,0,0-7.908,6.851l0,.007,0,.032c-.022.159-.041.317-.054.478C4.012,11.588,4,11.8,4,12a8,8,0,0,0,.08,1.067c.012.089.025.177.04.266a8.111,8.111,0,0,0,.226.989c0,.014.006.028.01.042l0,0a8.039,8.039,0,0,0,5.274,5.273l0,0c.01,0,.02,0,.03.006a7.953,7.953,0,0,0,1,.23c.087.015.174.028.262.04A8.028,8.028,0,0,0,12,20a8.028,8.028,0,0,0,1.069-.08c.088-.012.175-.025.262-.04a7.953,7.953,0,0,0,1-.23c.01,0,.02,0,.03-.006l0,0a8.039,8.039,0,0,0,5.274-5.273l0,0c0-.014.005-.028.01-.042a8.111,8.111,0,0,0,.226-.989c.015-.089.028-.177.04-.266A8,8,0,0,0,20,12c0-.2-.012-.412-.032-.632-.013-.161-.032-.319-.054-.478l0-.032,0-.007A8.006,8.006,0,0,0,12,4Zm0,2a6,6,0,0,1,5.65,4H6.35A6,6,0,0,1,12,6ZM6.906,15.155a2.993,2.993,0,0,1,1.939,1.939A6.046,6.046,0,0,1,6.906,15.155Zm8.249,1.939a2.993,2.993,0,0,1,1.939-1.939A6.046,6.046,0,0,1,15.155,17.094Zm2.77-4.193c0,.034-.01.067-.016.1A5,5,0,0,0,13,17.909l-.1.017a6.2,6.2,0,0,1-1.794,0l-.1-.017A5,5,0,0,0,6.091,13c-.006-.034-.011-.067-.016-.1A6.029,6.029,0,0,1,6,12H18A6.029,6.029,0,0,1,17.925,12.9Z"></path>
                    </g>
                  </svg>
                  <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                    3/3
                  </p>
                  <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                  <h3 className="text-sm font-medium text-gray-900  dark:text-white">
                    Good Driving Skills
                  </h3>
                </div>
              </article>
              {/* driver rating div ends  */}
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mt-16">
                Smeet, has a Verified Profile
              </h5>
              <Verified icon={Icon} text="Verified ID" />
              <Verified icon={Icon} text="Confirmed email" />
              <Verified icon={Icon} text="Confirmed phone number" />

              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mt-16">
                About Smeet
              </h5>

              <Verified
                icon={Icon2}
                text="I’m chatty when I feel comfortable"
              />

              <Verified icon={Icon3} text="6 Rides Published" />
              <aside>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  19 people found this helpful
                </p>
                <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                  <a
                    href="#"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    Helpful
                  </a>
                  <a
                    href="#"
                    className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Report abuse
                  </a>
                </div>
              </aside>

              {/* // */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DriverMoreDetails;
