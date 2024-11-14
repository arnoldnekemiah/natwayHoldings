import React from 'react';

const industries = [
  {
    title: 'Retail & E-commerce',
    description: 'Streamlined logistics solutions for modern retail',
    image: 'https://placehold.co/400x300',
  },
  {
    title: 'Manufacturing',
    description: 'Optimized supply chain for manufacturing excellence',
    image: 'https://placehold.co/400x300',
  },
  {
    title: 'Healthcare',
    description: 'Specialized logistics for medical supplies',
    image: 'https://placehold.co/400x300',
  },
  {
    title: 'Technology',
    description: 'Advanced solutions for tech industry logistics',
    image: 'https://placehold.co/400x300',
  },
];

const Industry = () => (
  <div className="py-16 px-5">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Industries We Serve</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {industries.map((industry) => (
          <div key={industry.title} className="group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-60">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Industry;
