import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white animate-fade-in-delay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="Man.png"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
            {/* <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-lg opacity-20"></div> */}
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Software Engineer currently pursuing my B.Sc. in
              Software Engineering at DIU. My journey in technology has been
              driven by a deep curiosity for solving complex problems and
              creating innovative solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong foundation in machine learning and web development,
              I've worked on various projects that combine cutting-edge
              technology with practical applications. I'm particularly
              interested in VR/AR technology and aspire to pursue a PhD in XR
              and Artificial Intelligence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond coding, I enjoy gaming, reading books, and watching
              cricket. I believe these diverse interests contribute to my
              creative problem-solving approach in software development.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Education Timeline
              </h3>
              <div className="border-l-2 border-blue-600 pl-4 space-y-4">
                <div className="relative">
                  <div className="absolute -left-6 mt-1 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <p className="font-semibold">2021 - Present</p>
                  <p className="text-gray-700">B.Sc. in Software Engineering</p>
                  <p className="text-gray-600">
                    Daffodil International University
                  </p>
                </div>
                {/* Add more timeline items as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
