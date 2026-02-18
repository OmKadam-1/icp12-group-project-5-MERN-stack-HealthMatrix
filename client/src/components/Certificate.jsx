import React from 'react'
import logo from "../assets/logo.png"

function Certificate() {

    const Certificate = () => {
        const certificates = [
            {
                id: 1,
                name: "Gvernment Approved",
                image: logo,
            },
            {
                id: 2,
                name: "Medical Commission",
                image: logo,
            },
            {
                id: 3,
                name: "NABH Accredited",
                image: logo,
            },
            {
                id: 4,
                name: "Medical Council",
                image: logo,
            }, {
                id: 5,
                name: "Quality Healthcare",
                image: logo,
            },
            {
                id: 6,
                name: "Ministry of Health",
                image: logo,
            },
        ]
    }

    return (
        <div className='bg-gray-50 py-16'>
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-16 h-[2px] bg-green-500">
                        <h2 className="text-3xl md:text-5xl font-bold text-green-500">
                            CERTIFIED & EXCELLENCE
                        </h2>
                        <div className="w-16 h-[2px] bg-green-500"></div>
                    </div>
                    <p className="text-gray-500 text-lg mb-6">
                        Government recognized and internationally accredited healthcare standards
                    </p>
                    <div className="inline-flex items-center gap-2 px-6 py-2 border border-green-400 rounded-full bg-green-50">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>

                        <span className="text-green-700 font-semibold">
                            OFFICIALLY CERTIFIED
                        </span>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Certificate