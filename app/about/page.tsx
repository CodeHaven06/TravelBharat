import AboutHero from "./AboutHero";
import WhoWeAre from "./WhoWeAre";
import WhatYouCanExplore from "./WhatYouCanExplore";
import WhyTravelBharat from "./WhyTravelBharat";
import IndiaGallery from "./IndiaGallery";
import AboutStats from "./AboutStats";
import OurMission from "./OurMission";
import AboutCTA from "./AboutCTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <WhatYouCanExplore />
      <WhyTravelBharat />
      <IndiaGallery />
      <AboutStats />
      <OurMission />
      <AboutCTA />
    </main>
  );
}




// import React from "react";
// import Image from "next/image";

// export default function About() {
//     const gallery = [
//         {
//             image: "/images/kashmir.jpg"
//         },
//         {
//             image: "/images/kedarnath.jpg"
//         },
//         {
//             image: "/images/gulmarg.jpg"
//         },
//         {
//             image: "/images/goa.jpg"
//         },
//         {
//             image: "/images/kerala.jpg"
//         }

//     ]
//     return (
//         <main className="min-h-screen bg-gray-100 p-5 flex flex-col gap-2 mt-5">
//             <div className=" lg:flex ">
//                 <div className="w-full lg:w-1/2  bg-white/70 shadow-md rounded-lg p-5 ">

//                     <div className="mb-4 bg-blue">
//                         <h1 className="text-3xl font-bold mb-2">
//                             About Travel Bharat
//                         </h1>
//                         <p className="text-gray-700 text-xl justify-evenly ">
//                             Travel Bharat is your ultimate guide to exploring the diverse and vibrant culture of India. We provide comprehensive information on various states, destinations, and categories to help you plan your perfect trip across the country. Whether you're looking for historical landmarks, natural wonders, or cultural experiences, TravelBharat has got you covered. Our mission is to inspire and empower travelers to discover the beauty and richness of India through our curated content and resources.
//                         </p>
//                     </div>

//                     <div className="flex flex-col text-xl gap-3">
//                         <li>Authentic Information</li>
//                         <li>Beautiful Destinations</li>
//                         <li>Easy to Explore</li>
//                         <li>Travel Inspiration</li>
//                     </div>
//                 </div>

//                 <div className="w-full lg:w-1/2 bg-white/70 shadow-md rounded-lg p-4 ">
//                     <div className="bg-pink flex flex-wrap justify-evenly">
//                         {gallery.map((place, index) => (
//                             <div
//                                 key={index}
//                                 className="relative w-50 h-40 rounded-xl overflow-hidden shadow-lg ">
//                                 <Image src={place.image} alt="India" height={200} width={200} className="w-full h-full object-cover border-sky-200 border-5 rounded-2xl" />
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//             </div>

//             <div className="w-full bg-orange py-4 rounded-lg shadow-md">
//                 <div className="flex justify-between">

//                     <div className="bg-white rounded-xl p-2 text-center shadow flex ">
//                         {/* <div className="bg-gray-200 border-2 rounded-full w-16 h-16 mx-autof">logo</div> */}
//                         <div className="bg-gray w-20 mx-auto">
//                             <h3 className="text-2xl font-bold text-orange-500">1000+</h3>
//                             <p className="text-xl"> Destinations </p>
//                         </div>

//                     </div>

//                     <div className="bg-white rounded-xl p-2 text-center shadow flex  ">
//                         {/* <div className="bg-gray-200 border-2 rounded-full w-16 h-16 mx-auto">logo</div> */}
//                         <div className="bg-gray w-20 mx-auto">
//                             <h3 className="text-2xl font-bold text-orange-500">28+</h3>
//                             <p className="text-xl">States & UTs</p>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-xl p-2 text-center shadow flex ">
//                         {/* <div className="bg-gray-200 border-2 rounded-full w-16 h-16 mx-auto">logo</div> */}
//                         <div className="bg-gray w-20 mx-auto">
//                             <h3 className="text-2xl font-bold text-orange-500">10M+</h3>
//                             <p className="text-xl">Happy Travellers</p>
//                         </div>
//                     </div>

//                     <div className="bg-white rounded-xl p-2 text-center shadow flex">
//                         {/* <div className="bg-gray-200 border-2 rounded-full w-16 h-16 mx-auto">logo</div> */}
//                         <div className="bg-gray w-20 mx-auto">
//                             <h3 className="text-2xl font-bold text-orange-500">50+</h3>
//                             <p className="text-xl"> Categories</p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </main>
//     );
// }