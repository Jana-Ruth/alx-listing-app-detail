import React, { useState } from 'react';
import Image from 'next/image';
import { HERO_BACKGROUND, FILTERS, PROPERTY_LISTING_SAMPLE } from '@/constants';
import Pill from '@/components/common/Pill';
import Card from '@/components/common/Card';

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${HERO_BACKGROUND.src})`,
        }}
      >
        <div className="text-center bg-black/50 p-6 rounded">
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="mt-2 text-lg">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="p-6">
        <div className="flex flex-wrap gap-3">
          {FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(filter === activeFilter ? null : filter)}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PROPERTY_LISTING_SAMPLE.map((property) => (
          <Card
            key={property.id}
            title={property.name}
            description={`From ${property.price} - ⭐ ${property.rating}`}
            imageUrl={property.imageUrl}
            onClick={() => console.log('Clicked:', property.name)}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;

