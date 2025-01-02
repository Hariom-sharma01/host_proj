import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Contact from '../components/ContactModal';

const Technologies = () => {
  const technologies = [
    {
      title: 'Frontend Technologies',
      icon: 'fas fa-code',
      items: [
        { name: 'HTML5', icon: 'fab fa-html5 text-red-500' },
        { name: 'CSS3 & TailwindCSS', icon: 'fab fa-css3-alt text-blue-500' },
        { name: 'JavaScript (ES6+)', icon: 'fab fa-js text-yellow-500' },
        { name: 'React.js', icon: 'fab fa-react text-blue-400' },
        { name: 'Angular', icon: 'fab fa-angular text-red-600' },
      ],
    },
    {
      title: 'Backend Technologies',
      icon: 'fas fa-server',
      items: [
        { name: 'Node.js', icon: 'fab fa-node text-green-500' },
        { name: 'Spring Boot', icon: 'fas fa-leaf text-green-600' },
        { name: 'Django', icon: 'fab fa-python text-blue-500' },
        { name: 'Express.js', icon: 'fas fa-code text-gray-600' },
        { name: 'Ruby on Rails', icon: 'fas fa-gem text-red-500' },
      ],
    },
    {
      title: 'Databases',
      icon: 'fas fa-database',
      items: [
        { name: 'MySQL', icon: 'fas fa-database text-blue-500' },
        { name: 'PostgreSQL', icon: 'fas fa-database text-green-600' },
        { name: 'MongoDB', icon: 'fas fa-leaf text-green-500' },
        { name: 'SQLite', icon: 'fas fa-database text-gray-500' },
        { name: 'Firebase', icon: 'fas fa-fire text-yellow-500' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: 'fas fa-tools',
      items: [
        { name: 'Docker', icon: 'fab fa-docker text-blue-500' },
        { name: 'Kubernetes', icon: 'fab fa-google text-green-500' },
        { name: 'AWS', icon: 'fab fa-aws text-orange-500' },
        { name: 'Azure', icon: 'fab fa-microsoft text-blue-500' },
        { name: 'Git & GitHub', icon: 'fab fa-git-alt text-red-500' },
      ],
    },
    {
      title: 'Mobile Development',
      icon: 'fas fa-mobile-alt',
      items: [
        { name: 'Flutter', icon: 'fas fa-mobile-alt text-blue-400' },
        { name: 'React Native', icon: 'fab fa-react text-blue-500' },
        { name: 'Swift', icon: 'fab fa-apple text-gray-800' },
        { name: 'Kotlin', icon: 'fas fa-code text-orange-500' },
        { name: 'Java', icon: 'fab fa-java text-blue-600' },
      ],
    },
    {
      title: 'Emerging Technologies',
      icon: 'fas fa-lightbulb',
      items: [
        { name: 'Artificial Intelligence', icon: 'fas fa-brain text-purple-600' },
        { name: 'Machine Learning', icon: 'fas fa-robot text-gray-700' },
        { name: 'Blockchain', icon: 'fas fa-link text-green-500' },
        { name: 'IoT', icon: 'fas fa-network-wired text-blue-500' },
        { name: 'Augmented Reality (AR)', icon: 'fas fa-vr-cardboard text-teal-500' },
      ],
    },
  ];

  return (
    <>
    <Navbar/>
    <Contact/>
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Technologies We Work With</h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          At Excel IT Solutions, we leverage cutting-edge technologies to deliver modern, scalable, and efficient solutions tailored to your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 technology-card transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-center text-blue-600 mb-4">
                <i className={`${tech.icon} text-4xl`}></i>
              </div>
              <h2 className="text-xl font-semibold mb-4 text-blue-600">{tech.title}</h2>
              <ul className="list-disc list-inside text-gray-700">
                {tech.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} <i className={`${item.icon}`}></i>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Technologies;

