// import Link from "next/link";

// const allStates = [
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Chhattisgarh",
//   "Goa",
//   "Gujarat",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jharkhand",
//   "Karnataka",
//   "Kerala",
//   "Madhya Pradesh",
//   "Maharashtra",
//   "Manipur",
//   "Meghalaya",
//   "Mizoram",
//   "Nagaland",
//   "Odisha",
//   "Punjab",
//   "Rajasthan",
//   "Sikkim",
//   "Tamil Nadu",
//   "Telangana",
//   "Tripura",
//   "Uttar Pradesh",
//   "Uttarakhand",
//   "West Bengal",
// ];

// export default function AllStates() {
//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

//         {/* Heading */}
//         <div className="mb-10">
//           <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
//             Discover Every Corner
//           </p>

//           <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
//             All States of India
//           </h2>

//           <p className="mt-2 max-w-2xl text-gray-600">
//             Explore destinations, culture, food, history and experiences
//             from every state of incredible India.
//           </p>
//         </div>

//         {/* States Grid */}
//         <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {allStates.map((state, index) => (
//             <Link
//               key={state}
//               href={`/states/${state
//                 .toLowerCase()
//                 .replaceAll(" ", "-")}`}
//               className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-md"
//             >
//               <div className="flex items-center gap-3">
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-sm font-semibold text-orange-500">
//                   {index + 1}
//                 </span>

//                 <span className="font-semibold text-gray-800 transition group-hover:text-orange-500">
//                   {state}
//                 </span>
//               </div>

//               <span className="text-gray-400 transition group-hover:translate-x-1 group-hover:text-orange-500">
//                 →
//               </span>
//             </Link>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }