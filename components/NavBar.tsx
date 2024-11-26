'use client';

import { scrollTo } from "@/scripts/scrollToFunctions"

export default function NavBar() {

      return (
            <div className="navbar sticky top-0 z-50 h-20 bg-primary text-neutral shadow-lg">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor">
                                          <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                              </div>
                              <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content text-primary bg-base-100 rounded-box z-[1] mt-3 w-52 p-2">
                                    <li><a onClick={() => scrollTo("OUR_MISSION_CONTAINER")}>Our Mission</a></li>
                                    <li><a>Resources</a></li>
                                    <li><a>Academics</a></li>
                                    <li><a>Athletics</a></li>
                                    <li><a target="_blank" href="https://bcschools.net/en-US">BCPS</a></li>
                              </ul>
                        </div>
                  </div>
                  <div className="navbar-center">
                        <a href="/" className="btn btn-ghost text-2xl font-bold duration-100 hover:scale-110 active:scale-90"><img src="/LogoSquare.png" className="w-auto h-full scale-125 mr-4" />Bay City Western</a>
                  </div>
                  <div className="navbar-end">
                        <div className="dropdown">
                              <div tabIndex={1} role="button" className="btn">Login</div>
                              <ul tabIndex={1} className="menu menu-sm dropdown-content text-primary bg-base-100 rounded-box z-[1] -left-10 mt-3 w-auto p-2">

                                    <li><a href="#">Google</a></li>
                                    <li><a href="#">Office360</a></li>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Username</a></li>

                              </ul>
                        </div>
                  </div>
            </div>
      )

}