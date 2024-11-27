'use client';

import { scrollTo } from "@/scripts/scrollToFunctions"

export default function HomePageHero() {

      return (
            <div
                  className="hero min-h-screen z-10 animate-zoomIn"
                  style={{
                        backgroundImage: "url(https://www.mlive.com/resizer/v2/FMQCAKD32FCYFOVCKVFQGN5M4Q.JPG?auth=b456e11978ef9762d5a69a2e7190c2f1072a7fffcdee2eb537f1d0838aef22b8&width=1280&quality=90)",
                  }}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-center text-white glass rounded-md p-28">
                        <div className="max-w-md">
                              <h1 className="mb-5 text-5xl font-bold">Western High School</h1>
                              <p className="mb-5">
                                    Western High has a rich tradition of academic success, student opportunities and school spirit. We offer many courses and pathways in meeting the State of Michigan’s graduation requirements. Students choose additional courses from our curriculum and offered programs to meet their goals. Take a look at the unique programs and clubs we have to offer as well.
                              </p>
                              <button className="btn btn-ghost" onClick={() => scrollTo("OUR_MISSION_CONTAINER")}>Learn More</button>
                        </div>
                  </div>
            </div>
      )

}