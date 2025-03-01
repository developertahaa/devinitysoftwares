import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20  bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">About Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <p className="text-xl leading-relaxed">
              We are a team of passionate developers and designers, dedicated to creating cutting-edge digital
              solutions. With years of experience and a commitment to innovation, we transform ideas into powerful,
              scalable applications.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <div className="aspect-square bg-white flex items-center justify-center">
              {/* Add content like an image */}
              <img src="/" alt="About Us" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
