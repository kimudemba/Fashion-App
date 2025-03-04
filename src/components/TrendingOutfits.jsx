import React from "react";

const TrendingOutfits = () => {
    return (
        <section className="trending-outfits">
            <h2>Trending Outfits</h2>
            <section className="p-10 bg-white shadow-md">
            <p className="mt-4 text-gray-600">Explore the latest styles curated just for you.</p>
        </section>
            <div className="outfit-grid">
                <div className="outfit-card"> Outfit 1</div>
                <div className="outfit-card"> Outfit 2</div>
                <div className="outfit-card"> Outfit 3</div>    
            </div>
        </section>
    );
};

export default TrendingOutfits;