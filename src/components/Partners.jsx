import React from 'react'
import Logos from './Logos'

const Partners = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">
            OUR CLIENTS AND PARTNERS
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Some organisations we've loved working with
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've had the joy of collaborating with these brands and many more over the last few years
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {Logos.map((logo) => (
            <div 
              key={logo.id}
              className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-full h-auto max-w-[160px] max-h-[80px] object-contain mx-auto"
              />
            </div>
          ))}
        </div>

        {/* Many More Text */}
        <div className="mt-12">
          <div className="inline-block px-6 py-2 rounded-full bg-gray-200 text-gray-600">
            ...and many more
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners