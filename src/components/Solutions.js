import React from 'react';
import './Solutions.css';

const solutions = [
  { title: "Supply Chain Solutions", description: "We don't just offer supply chain advisory, we put it into action.", icon: "🛒" },
  { title: "End-to-end Transportation", description: "Expertise from start to finish, total reliability customized for you.", icon: "🚛" },
  { title: "Contract Logistics", description: "Supply chain solutions that drive your business forward.", icon: "📍" },
  { title: "Digital Solutions", description: "Increase productivity with IT-powered supply chain solutions.", icon: "💻" },
];

const Solutions = () => {
  return (
    <div className="solutions">
      <h2>Our Solutions</h2>
      <div className="solution-cards">
        {solutions.map((solution, index) => (
          <div className="solution-card" key={index}>
            <div className="icon">{solution.icon}</div>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
