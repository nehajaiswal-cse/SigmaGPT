import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">Neha Jaiswal</h1>
        <div className="space-x-4">
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Neha 👋</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          MERN Stack Developer | Passionate about building scalable web apps and solving problems.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-16">
        <h3 className="text-2xl font-semibold mb-6">Projects</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-4 rounded-2xl shadow">
            <h4 className="font-bold">Chat App</h4>
            <p className="text-gray-400 text-sm">Realtime chat app using MERN + Socket.io</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-2xl shadow">
            <h4 className="font-bold">Job Tracker</h4>
            <p className="text-gray-400 text-sm">Track applications with CRUD features</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-2xl shadow">
            <h4 className="font-bold">AI Chatbot</h4>
            <p className="text-gray-400 text-sm">ChatGPT-like app using API</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-16 bg-gray-900">
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>
        <div className="flex flex-wrap gap-4">
          {["JavaScript", "React", "Node.js", "MongoDB", "Express", "DSA"].map(skill => (
            <span key={skill} className="px-4 py-2 bg-gray-800 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-16 text-center">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="text-gray-400">nehajaiswal@email.com</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
        © 2026 Neha Jaiswal
      </footer>
    </div>
  );
}
