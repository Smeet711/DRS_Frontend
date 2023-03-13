import React from "react";
import Nav from "../components/Navbar/Nav";
import Icon from "../assets/no.png";
import Icon2 from "../assets/no-smoking.png";
import Profile from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";

const RideOwnerDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className=" bg-cover h-screen bg-center  py-4 md:px-24 px-4">
        <Nav />

        <div class="w-full  h-auto  p-4 text-center bg-white border border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="flex justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="w-screen h-auto  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-neutral-900 dark:border-gray-700">
              <div class=" mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  15 MARCH 2023
                </h5>
              </div>
              <div class="flow-root">
                <ul
                  role="list"
                  class="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <span className="dark:text-white">05:00</span>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          MUMBAI
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          19km from your departure
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <button
                          onClick={() => navigate("/map")}
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-4 h-4"
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
                          {/* <span class="sr-only">Icon description</span> */}
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <span className="dark:text-white">08:00</span>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          PUNE
                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                          2.1km from your arrivial
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <button
                          onClick={() => navigate("/map")}
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-4 h-4"
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
                          {/* <span class="sr-only">Icon description</span> */}
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="py-3 sm:py-4">
                    <div class="flex justify-between items-center space-x-4">
                      <div class="flex-shrink-0">
                        <span className="dark:text-white">Maruti Suzuki</span>
                        <span className="dark:text-white">Grey</span>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Total Price for 1 Passenger
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        ₹100
                      </div>
                    </div>
                  </li>
                  {/* // */}

                  <article>
                    <div class="flex items-center mb-4 space-x-4 mt-8">
                      <img
                        class="w-10 h-10 rounded-full"
                        src={Profile}
                        alt=""
                      />
                      <div class="space-y-1 font-medium dark:text-white">
                        <p>
                          Smeet Gadhiya{" "}
                          <time
                            datetime="2014-08-16 19:00"
                            class="block text-sm text-gray-500 dark:text-gray-400"
                          >
                            Driver since Dec 2022
                          </time>
                        </p>
                      </div>
                    </div>

                    <div class="flex items-center">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Rating star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                        4.95
                      </p>
                      <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                      <a
                        href="#"
                        class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                      >
                        73 reviews
                      </a>
                    </div>

                    <p class="mb-2 font-light text-gray-500 dark:text-gray-400">
                      It’s request to you no heavy & trolley bags. Because I
                      have no boot space in my car. So You can carry only small
                      bag with you. if you want to take a big & trolley bags.
                      you will have to pay as much as one seat. And please come
                      to the on time. Do not make other passengers wait because
                      of you. enjoy the journey with your precious smile
                    </p>
                    {/* more details of driver  */}
                    <button
                    onClick={()=>navigate('/moredriverdetails')}
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      More about Smeet
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 ml-2 -mr-1"
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
                    </button>
                    <aside>
                      <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        19 people found this helpful
                      </p>
                      <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                        <a
                          href="#"
                          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        >
                          Helpful
                        </a>
                        <a
                          href="#"
                          class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                          Report abuse
                        </a>
                      </div>
                    </aside>
                  </article>

                  {/* // */}
                  <li class="pt-3 pb-0 sm:pt-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="w-8 h-8 rounded-full"
                                src={Icon}
                                alt="Neil image"
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                No Pets Allowed
                              </p>
                            </div>
                          </div>
                        </li>

                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="w-8 h-8 rounded-full"
                                src={Icon2}
                                alt="Neil image"
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                No Smoking
                              </p>
                            </div>
                          </div>
                        </li>
                        {/* // */}
                      </div>
                    </div>
                  </li>

                  {/* // */}
                  {/* // co travellers div   */}
                  
                    <h5 class="text-2xl font-bold leading-none text-gray-900 dark:text-white">
                      Co-Travellers
                    </h5>
                  
                  {/* // */}
                  <article>
                    <div class="flex items-center mb-4 space-x-4 mt-8">
                      <img
                        class="w-10 h-10 rounded-full"
                        src={Profile}
                        alt=""
                      />
                      <div class="space-y-1 font-medium dark:text-white">
                        <p>
                          Meet Gada{" "}
                          <time
                            datetime="2014-08-16 19:00"
                            class="block text-sm text-gray-500 dark:text-gray-400"
                          >
                            Mumbai --- Pune
                          </time>
                        </p>
                      </div>
                      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <button
                          onClick={() => navigate("/cotraveldetails")}
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          <svg
                            aria-hidden="true"
                            class="w-4 h-4"
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
                          {/* <span class="sr-only">Icon description</span> */}
                        </button>
                      </div>
                    </div>
                  </article>

                  {/* co-travellers div ends  */}
                  {/* // */}
                  {/* // */}
                  {/* // */}
                  <button
                    type="button"
                    class="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
                  >
                    <svg
                      class="w-4 h-4 mr-2 -ml-1 text-[#626890]"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="ethereum"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                      ></path>
                    </svg>
                    Pay with Ethereum
                  </button>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RideOwnerDetails;
