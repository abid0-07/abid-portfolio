import React from "react";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800/95 to-gray-900"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-fade-in">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                Abdullah Al Abid
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
              Passionate Software Engineer | Machine Learning Enthusiast
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
              Building innovative solutions with cutting-edge technology.
              Specializing in machine learning, web development, and software
              design.
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-delay-3">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-300 hover:bg-gray-800 transition-colors duration-300"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/10w1zb6yG_xAdnqsbhdM1fFeZEcNO66pN/view?usp=sharing"
                target="_blank"
                download
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300"
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
