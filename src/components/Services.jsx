import React from 'react';

const services = [
  {
    title: 'Logistics Management',
    description: 'End-to-end logistics solutions tailored to your needs',
    icon: '🚚',
    features: ['Warehouse Management', 'Distribution Planning', 'Inventory Control'],
  },
  {
    title: 'Supply Chain Consulting',
    description: 'Expert guidance for supply chain optimization',
    icon: '📊',
    features: ['Process Optimization', 'Risk Management', 'Cost Reduction'],
  },
  {
    title: 'Technology Solutions',
    description: 'Digital transformation for modern logistics',
    icon: '💻',
    features: ['Cloud Solutions', 'IoT Integration', 'Analytics Platform'],
  },
  {
    title: 'Global Transportation',
    description: 'Worldwide shipping and transportation services',
    icon: '🌎',
    features: ['Air Freight', 'Ocean Freight', 'Ground Transportation'],
  },
];

const Services = () => (
  <div className="py-16 px-5">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-700">
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
