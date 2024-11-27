'use client';

import React, { useEffect, useRef, useState } from "react";

export default function HomePageResources() {
      const [isVisible, setIsVisible] = useState(false);
      const resourcesContainerRef = useRef<HTMLDivElement>(null);

      useEffect(() => {
            const observer = new IntersectionObserver(
                  ([entry]) => {

                        setIsVisible(entry.isIntersecting);
                  },
                  {
                        threshold: 0.05,
                  }
            );

            if (resourcesContainerRef.current) {
                  observer.observe(resourcesContainerRef.current);
            }

            return () => {
                  if (resourcesContainerRef.current) {
                        observer.unobserve(resourcesContainerRef.current);
                  }
            };
      }, []);

      return (
            <div
                  id="RESOURCES_CONTAINER"
                  ref={resourcesContainerRef}
                  className={`relative flex justify-center items-center w-full pl-10 pr-10 pt-64 pb-64 bg-center bg-no-repeat transition-all transform ${isVisible
                        ? "scale-100 opacity-100 animate-zoomIn" // Apply zoom-in when visible
                        : "scale-90 opacity-0" // Reset scale and opacity when not visible
                        }`}
            >
                  <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm"
                        style={{
                              backgroundImage:
                                    "url('https://midmichigannow.com/resources/media2/original/full/1600/center/80/fed4c5f1-0a79-4311-87f0-e5dfdf7bd065-IMG_1999.jpeg')",
                        }}
                  ></div>

                  <div className="relative flex flex-row justify-center gap-60 items-center size-full">
                        <div className="flex justify-center items-center min-w-64 p-20 w-auto h-32 glass rounded-xl">
                              <span className="relative text-5xl font-bold text-base-100">Resources</span>
                        </div>

                        <div className="flex flex-col justify-start items-center size-96 glass scale-125 rounded-md shadow-md">
                              <div className="w-full h-auto pt-12 pl-8 pb-8">
                                    <span className="text-4xl text-base-100 font-bold drop-shadow-md">Staff</span>
                              </div>

                              <div className="w-full h-auto pl-8 text-white drop-shadow-md">
                                    <div className="grid-flow-col columns-2" >
                                          <li><a href="" className="btn btn-link no-underline font-light text-white duration-100 hover:text-primary hover:drop-shadow-lg hover:underline">Skyward</a></li>
                                          <li><a href="" className="btn btn-link no-underline font-light text-white duration-100 hover:text-primary hover:drop-shadow-lg hover:underline">Classlink</a></li>
                                          <li><a href="" className="btn btn-link no-underline font-light text-white duration-100 hover:text-primary hover:drop-shadow-lg hover:underline">Classroom</a></li>
                                          <li><a href="" className="btn btn-link no-underline font-light text-white duration-100 hover:text-primary hover:drop-shadow-lg hover:underline">Something</a></li>
                                          <li><a href="" className="btn btn-link no-underline font-light text-white duration-100 hover:text-primary hover:drop-shadow-lg hover:underline">Something</a></li>
                                          <li><a href="" className="btn btn-link no-underline font-light text-white duration-100 hover:text-primary hover:drop-shadow-lg hover:underline">Something</a></li>
                                    </div>

                              </div>

                        </div>

                        <div className="flex flex-col justify-start items-center size-96 glass scale-125 rounded-md shadow-md">
                              <div className="w-full h-auto pt-12 pl-8 pb-8">
                                    <span className="text-4xl text-base-100 font-bold drop-shadow-md">Student</span>
                              </div>

                              <div className="w-full h-auto pl-8 text-white drop-shadow-md">
                                    <div className="grid-flow-col columns-2" >
                                          <li><a href="" className="btn btn-link no-underline font-light text-white duration-100 hover:text-primary hover:drop-shadow-lg hover:underline">Skyward</a></li>
                                          <li><a href="" className="btn btn-link no-underline font-light text-white duration-100 hover:text-primary hover:drop-shadow-lg hover:underline">Classlink</a></li>
                                          <li><a href="" className="btn btn-link no-underline font-light text-white duration-100 hover:text-primary hover:drop-shadow-lg hover:underline">Classroom</a></li>
                                          <li><a href="" className="btn btn-link no-underline font-light text-white duration-100 hover:text-primary hover:drop-shadow-lg hover:underline">Something</a></li>
                                          <li><a href="" className="btn btn-link no-underline font-light text-white duration-100 hover:text-primary hover:drop-shadow-lg hover:underline">Something</a></li>
                                          <li><a href="" className="btn btn-link no-underline font-light text-white duration-100 hover:text-primary hover:drop-shadow-lg hover:underline">Something</a></li>
                                    </div>

                              </div>

                        </div>
                  </div>
            </div>
      );
}
