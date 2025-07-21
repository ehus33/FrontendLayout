import React from 'react';
import nftScreen from './assets/nft-screen.png';
import mobileApp from './assets/mobile-app.png';

function FeatureCard({ title, image, altText }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
      <img src={image} alt={altText} className="w-full h-auto" />
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
          Download Now
        </button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">EMEmory</div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-800 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-800 hover:text-blue-600">Features</a>
          <a href="#" className="text-gray-800 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="text-center py-12 px-6 bg-gray-50">
      <h1 className="text-5xl font-bold mb-4">Ememory</h1>
      <p className="text-gray-700 max-w-2xl mx-auto mb-6">
        Ememory is the only thing that remembers with you when you die. Capture,
        store, and share your memories forever.
      </p>
      <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700">
        Download Now
      </button>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FeatureCard
            title="NFT Showcase"
            image={nftScreen}
            altText="NFT Screen Showcase"
          />
          <FeatureCard
            title="Mobile App Preview"
            image={mobileApp}
            altText="Mobile App UI"
          />
        </div>
      </main>
      <footer className="bg-white shadow py-6">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2025 EMEmory. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
