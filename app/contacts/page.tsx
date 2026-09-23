import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import ContactFAQ from "./ContactFAQ";
import ContactCTA from "./ContactCTA";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <ContactHero />

      {/* Contact Information + Form */}
      <section className="bg-[#fffaf3] py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      {/* FAQ */}
      <ContactFAQ />

      {/* CTA */}
      <ContactCTA />
    </main>
  );
}

// export default function Contact() {
//   return (
//     <main
//       className="min-h-screen bg-cover bg-center bg-blue-100 bg-no-repeat px"
//       style={{
//         backgroundImage: "url()",
//       }}>     

//       <div className="max-w-6xl mx-auto mt-10 flex flex-col lg:flex-row gap-8">

//  {/* Left Side */}
//         <div className="w-full lg:w-1/3">
//           <div className="bg-white/90  shadow-lg rounded-xl p-6 mb-5">
//             <h1 className="text-4xl font-bold text-gray-800 mb-3">
//               Contact Us
//             </h1>

//             <p className="text-gray-600 text-xl font-semibold ">
//               We'd love to hear from you!
//             </p>
//           </div>

//           <div className="bg-white/90 shadow-lg rounded-xl p-6 flex flex-col gap-3">
//             <h3 className="text-lg font-semibold">📧 Email</h3>
//             <p>info@travelbharat.com</p>

//             <h3 className="text-lg font-semibold">📞 Call Us</h3>
//             <p>+91 1234567890</p>

//             <h3 className="text-lg font-semibold">📍 Office Address</h3>
//             <p>
//               123, Incredible India Street,
//               <br />
//               New Delhi, India - 110001
//             </p>

//             <h3 className="text-lg font-semibold">🕧 Working Hours</h3>
//             <p>Mon - Sat (9:00 AM - 6:00 PM)</p>
//           </div>
//         </div>

// {/* Right Side */}
//         <div className="w-full lg:w-2/3 bg-white/90 shadow-lg rounded-xl p-8">
//           <form className="flex flex-col gap-5">

//             <div>
//               <label className="block text-gray-700 font-semibold mb-1">
//                 Your Name
//               </label>

//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
//                 placeholder="Enter your name"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-semibold mb-1">
//                 Subject
//               </label>

//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
//                 placeholder="Enter subject"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-semibold mb-1">
//                 Your Message
//               </label>

//               <textarea
//                 rows={6}
//                 className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
//                 placeholder="Write your message here..."
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
//             >
//               Send Message
//             </button>

//           </form>
//         </div>

//       </div>
//     </main>
//   );
// }