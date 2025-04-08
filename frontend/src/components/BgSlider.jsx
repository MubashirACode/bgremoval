import React, { useState } from 'react';
import { assets } from '../assets/assets';

export const BgSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e) => {
        setSliderPosition(Number(e.target.value));
    };

    return (
        <div className="pb-10 md:py-20 mx-2  ">
            <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
                Remove Background With High <br /> Quality and Accuracy
            </h1>

            <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl aspect-video mb-20">
                {/* Background Image */}
                <img 
                    src={assets.image_w_bg} 
                    alt="With background" 
                    className="w-full h-full object-cover"
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0% 100%)` }} 
                />

                {/* Foreground Image */}
                <img 
                    src={assets.image_wo_bg} 
                    alt="Without background" 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }} 
                />

                {/* Slider line indicator */}
                <div 
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                    style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                />
                
                {/* Custom slider */}
                <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center">
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={sliderPosition} 
                        onChange={handleSliderChange}
                        className="slider w-full h-full opacity-0 cursor-ew-resize"
                    />
                    <div 
                        className="absolute w-8 h-8 bg-white rounded-full shadow-md pointer-events-none"
                        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
