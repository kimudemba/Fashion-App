import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <><header className="p-6 text-3xl font-bold">Welcme to the Fashion App</header><section className="p-10">
                <h1 className="text-4xl font-semibold">Style Your Outfit,Shop with Ease</h1>
                <p className="mt-6 text-lg">Discover and create your style</p>
                <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
                    Get Started
                </button>
            </section></>
        </div>
    );
}

export default HomePage;