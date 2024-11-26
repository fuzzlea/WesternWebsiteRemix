export default function NavBar() {

      return (
            <div className="navbar bg-primary text-neutral">
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
                                    <li><a>About Us</a></li>
                                    <li><a>Resources</a></li>
                                    <li><a target="_blank" href="https://bcschools.net/en-US">BCPS</a></li>
                              </ul>
                        </div>
                  </div>
                  <div className="navbar-center">
                        <a href="/" className="btn btn-ghost text-xl">Bay City Western</a>
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