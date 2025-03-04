import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TrendingOutfits from './components/TrendingOutfits'
import HowItWorks from './components/HowItWorks'
import Hero from './components/Hero'
import "./styles.css";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
             <header className="p-6 text-3xl font-bold">Akwa</header>
            <Navbar />
            <Hero />
            <TrendingOutfits />
            <h1 className="text-4xl font-semibold">Style Your Outfit,Shop with Ease</h1>
            <HowItWorks />
            <p className="mt-6 text-lg">Discover and create your style</p>
            <nav className="p-6 bg-white shadow-md w-full">
            </nav>
            <>
        <section className="p-10">
                <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
                    Get Started
                </button>
            </section></>
            <Footer />
        </div>
    );
}

export default HomePage;