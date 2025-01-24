import React from "react";
import { Menu, Github, Linkedin, Youtube, Mail } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">
                <a href="#hero">Portfolio</a>
              </span>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 px-3 py-2"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-700 hover:text-gray-900 px-3 py-2"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-gray-900 px-3 py-2"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 px-3 py-2"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:hidden bg-white border-t`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#skills"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex space-x-6">
              <a
                href="https://github.com/abid0-07"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/alabid/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <Linkedin className="h-6 w-6" />
              </a>

              <a
                href="mailto:abdullahalabid2001@google.com"
                className="hover:text-gray-400"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400">
              © 2025 Abdullah Al Abid. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
