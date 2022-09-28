import React from 'react';

const HeroBanner3 = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row container mx-auto">
                <img src="https://moafrikatours.com/wp-content/uploads/2022/02/mapofafrica-20200220133122.png" className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Countries Of Africa</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner3;