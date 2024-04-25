import React from "react";
import Section from "./Section";
import Heading from "./Heading";

import {
  service1,
  service2,
  service3,
  service4,
  service5,
  check,
} from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "../design/Services";

function Services() {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Projects and Experience."
          text="we have experience Producing well crafted world class 
        software solutions and services"
        />
        <div className="relative">
          <div
            className="relative z-1 flex item-center h-[39rem] mb-5
             p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]"
          >
            <div
              className="absolute top-0 left-0 w-full h-full
             pointer-events-none md:w-3/5 xl:w-auto"
            >
              <img
                src={service5}
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="smartest AI"
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Softwear Development</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                TechIcon unlocks the potential of a business by increasing the
                busness online presence improving branding{" "}
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                    key={index}
                  >
                    <img src={check} width={24} height={24} alt="" />
                    <p className="mg-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div
              className="relative min-h-[39rem] border border-n-1/10 
             rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
              <div
                className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b
               from-n-8/0 to-n-8/90 lg:p-15"
              >
                <h4 className="h4 mb-4">Cloud Computing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  levaraging on the cloud services to provide better service and
                  secure development
                </p>
              </div>
              <PhotoChatMessage
                className="absolute left-4 right-4 bottom-4
             border-n-1/10 lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2"
              />
            </div>
            <div
              className="p-4 bg-n-7 rounded-3xl overflow-hidden
             lg:min-h-[46rem] "
            >
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">
                  Data Science and Artificial Inteligence
                </h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  TechIcon help derive useful data and insight by analyzing
                  data, using machine learning and artificial inteligence models
                  to help derive better desicion that increase company
                  productivity{" "}
                </p>
                <ul className="flex item-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      className={`flex rounded-2xl items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15 "
                      }`}
                      key={index}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt="item" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="relative h-[20rem] bg-n-8 rounded-xl
               overflow-hidden md:h-[25rem]"
              >
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
}

export default Services;
