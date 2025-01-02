import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      imgSrc: "https://randomuser.me/api/portraits/women/1.jpg",
      text: `"Excel IT Solutions transformed our website and increased our online presence significantly. The team is professional, creative, and efficient!"`,
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
      text: `"They delivered a robust e-commerce platform for our business. Exceptional work, delivered on time and beyond expectations."`,
      name: "James Smith",
      role: "Founder, ShopEase",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/women/3.jpg",
      text: `"The IT consulting services we received helped us streamline our operations. We highly recommend their expertise!"`,
      name: "Emily Davis",
      role: "Operations Manager, BizSolutions",
    },
  ];

  return (
    <section className="py-16 px-8 bg-gray-100 text-center" id="testimonials">
      <h2 className="text-4xl font-semibold text-blue-600 mb-8 uppercase tracking-wider">What Our Clients Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md transition-transform transform hover:bg-blue-200 hover:translate-y-[-10px] hover:shadow-lg text-center"
          >
            <img
              src={testimonial.imgSrc}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 mx-auto border-4 border-blue-600"
            />
            <p className="text-gray-600 mb-4">{testimonial.text}</p>
            <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
