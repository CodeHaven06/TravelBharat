"use client";

import { useEffect, useState } from "react";

// import Sidebar from "./sidebar"; 
import DashboardHeader from "./dashboardheader";
import StatsCards from "./statscards";
import DestinationTable, {Destination,} from "./destinationtable";
import DestinationForm from "./destinationform";

const STORAGE_KEY = "travelBharatDestinations";

const defaultDestinations: Destination[] = [
  {
    id: 1,
    destination: "Taj Mahal",
    state: "Uttar Pradesh",
    category: "Heritage",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
    status: "Approved",
  },
  {
    id: 2,
    destination: "Goa",
    state: "Goa",
    category: "Beaches",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
    status: "Approved",
  },
  {
    id: 3,
    destination: "Kerala",
    state: "Kerala",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    status: "Approved",
  },
  {
    id: 4,
    destination: "Amer Fort",
    state: "Rajasthan",
    category: "Heritage",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    status: "Approved",
  },
];

type FormData = {
  destination: string;
  state: string;
  category: string;
  image: string;
  status: string;
};

const initialForm: FormData = {
  destination: "",
  state: "",
  category: "",
  image: "",
  status: "Pending",
};

export default function Dashboard() {
  const [destinations, setDestinations] =
    useState<Destination[]>([]);

  const [formData, setFormData] =
    useState<FormData>(initialForm);

  const [editId, setEditId] =
    useState<number | null>(null);

  const [isLoaded, setIsLoaded] =
    useState(false);

  // LOAD
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        setDestinations(JSON.parse(saved));
      } catch {
        setDestinations(defaultDestinations);
      }
    } else {
      setDestinations(defaultDestinations);
    }

    setIsLoaded(true);
  }, []);

  // SAVE
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(destinations)
    );
  }, [destinations, isLoaded]);

  // DYNAMIC STATS
  const totalStates = new Set(
    destinations
      .map((item) => item.state.trim().toLowerCase())
      .filter(Boolean)
  ).size;

  const totalCategories = new Set(
    destinations
      .map((item) => item.category.trim().toLowerCase())
      .filter(Boolean)
  ).size;

  const totalImages = destinations.filter(
    (item) => item.image.trim() !== ""
  ).length;

  // FORM CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // RESET
  const resetForm = () => {
    setFormData(initialForm);
    setEditId(null);
  };

  // ADD
  const handleAdd = () => {
    if (
      !formData.destination.trim() ||
      !formData.state.trim() ||
      !formData.category.trim()
    ) {
      alert(
        "Please fill Destination, State and Category"
      );
      return;
    }

    const newItem: Destination = {
      id: Date.now(),
      destination: formData.destination.trim(),
      state: formData.state.trim(),
      category: formData.category.trim(),
      image: formData.image.trim(),
      status: "Pending",
    };

    setDestinations((prev) => [
      ...prev,
      newItem,
    ]);

    resetForm();
  };

  // EDIT
  const handleEdit = (item: Destination) => {
    setFormData({
      destination: item.destination,
      state: item.state,
      category: item.category,
      image: item.image,
      status: item.status,
    });

    setEditId(item.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // UPDATE
  const handleUpdate = () => {
    if (
      !formData.destination.trim() ||
      !formData.state.trim() ||
      !formData.category.trim()
    ) {
      alert(
        "Please fill Destination, State and Category"
      );
      return;
    }

    setDestinations((prev) =>
      prev.map((item) =>
        item.id === editId
          ? {
              ...item,
              destination:
                formData.destination.trim(),
              state: formData.state.trim(),
              category:
                formData.category.trim(),
              image: formData.image.trim(),
              status: formData.status,
            }
          : item
      )
    );

    resetForm();
  };

  // DELETE
  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this destination?"
    );

    if (!confirmDelete) return;

    setDestinations((prev) =>
      prev.filter((item) => item.id !== id)
    );

    if (editId === id) {
      resetForm();
    }
  };

// ========================================

  return (
    <div className="min-h-screen bg-gray-100">

      {/* LEFT SIDEBAR */}
      {/* <Sidebar  lg:ml-64/> */}

      {/* MAIN CONTENT */}
      <main className="w-full">
        <div className="p-6">

            {/* HEADER */}
            <DashboardHeader />

            {/* STATS */}
            <StatsCards
              totalDestinations={destinations.length}
              totalStates={totalStates}
              totalCategories={totalCategories}
              totalImages={totalImages}
            />

            {/* TABLE + FORM */}
            <div className="flex flex-col gap-6 lg:flex-row">

              <div className="w-full lg:w-2/3">
                <DestinationTable
                  destinations={destinations}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>

              <DestinationForm
                formData={formData}
                editId={editId}
                onChange={handleChange}
                onAdd={handleAdd}
                onUpdate={handleUpdate}
                onCancel={resetForm}
              />

            </div>


        </div>
      </main>

    </div>
  );
}






// "use client";

// import { useEffect, useState } from "react";

// export default function Dashboard() {
//   // ==========================================
//   // DEFAULT DESTINATIONS
//   // ==========================================

//   const defaultDestinations = [
//     {
//       id: 1,
//       destination: "Taj Mahal",
//       state: "Uttar Pradesh",
//       category: "Heritage",
//       image:
//         "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
//       status: "Approved",
//     },
//     {
//       id: 2,
//       destination: "Goa",
//       state: "Goa",
//       category: "Beaches",
//       image:
//         "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
//       status: "Approved",
//     },
//     {
//       id: 3,
//       destination: "Kerala",
//       state: "Kerala",
//       category: "Nature",
//       image:
//         "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
//       status: "Approved",
//     },
//     {
//       id: 4,
//       destination: "Amer Fort",
//       state: "Rajasthan",
//       category: "Heritage",
//       image:
//         "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
//       status: "Approved",
//     },
//   ];

//   // ==========================================
//   // STATES
//   // ==========================================

//   const [destinations, setDestinations] = useState([]);

//   const [newDestination, setNewDestination] = useState({
//     destination: "",
//     state: "",
//     category: "",
//     image: "",
//     status: "Pending",
//   });

//   const [editId, setEditId] = useState(null);

//   // ==========================================
//   // LOAD DATA FROM LOCAL STORAGE
//   // ==========================================

//   useEffect(() => {
//     const savedDestinations =
//       localStorage.getItem("travelBharatDestinations");

//     if (savedDestinations) {
//       setDestinations(JSON.parse(savedDestinations));
//     } else {
//       setDestinations(defaultDestinations);

//       localStorage.setItem(
//         "travelBharatDestinations",
//         JSON.stringify(defaultDestinations)
//       );
//     }
//   }, []);

//   // ==========================================
//   // SAVE DATA TO LOCAL STORAGE
//   // ==========================================

//   useEffect(() => {
//     if (destinations.length > 0) {
//       localStorage.setItem(
//         "travelBharatDestinations",
//         JSON.stringify(destinations)
//       );
//     }
//   }, [destinations]);

//   // ==========================================
//   // TOTAL STATES
//   // ==========================================

//   const totalStates = new Set(
//     destinations
//       .map((item) => item.state.trim().toLowerCase())
//       .filter(Boolean)
//   ).size;

//   // ==========================================
//   // TOTAL CATEGORIES
//   // ==========================================

//   const totalCategories = new Set(
//     destinations
//       .map((item) => item.category.trim().toLowerCase())
//       .filter(Boolean)
//   ).size;

//   // ==========================================
//   // TOTAL IMAGES
//   // ==========================================

//   const totalImages = destinations.filter(
//     (item) => item.image && item.image.trim() !== ""
//   ).length;

//   // ==========================================
//   // ADD DESTINATION
//   // ==========================================

//   const handleAddDestination = () => {
//     if (
//       !newDestination.destination.trim() ||
//       !newDestination.state.trim() ||
//       !newDestination.category.trim()
//     ) {
//       alert("Please fill Destination, State and Category");
//       return;
//     }

//     const destinationToAdd = {
//       id: Date.now(),

//       destination: newDestination.destination.trim(),

//       state: newDestination.state.trim(),

//       category: newDestination.category.trim(),

//       image: newDestination.image.trim(),

//       status: "Pending",
//     };

//     setDestinations((prev) => [
//       ...prev,
//       destinationToAdd,
//     ]);

//     resetForm();
//   };

//   // ==========================================
//   // EDIT DESTINATION
//   // ==========================================

//   const handleEdit = (item) => {
//     setNewDestination({
//       destination: item.destination,
//       state: item.state,
//       category: item.category,
//       image: item.image || "",
//       status: item.status,
//     });

//     setEditId(item.id);

//     // Scroll to form
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   // ==========================================
//   // UPDATE DESTINATION
//   // ==========================================

//   const handleUpdate = () => {
//     if (
//       !newDestination.destination.trim() ||
//       !newDestination.state.trim() ||
//       !newDestination.category.trim()
//     ) {
//       alert("Please fill Destination, State and Category");
//       return;
//     }

//     setDestinations((prev) =>
//       prev.map((item) =>
//         item.id === editId
//           ? {
//               ...item,

//               destination:
//                 newDestination.destination.trim(),

//               state:
//                 newDestination.state.trim(),

//               category:
//                 newDestination.category.trim(),

//               image:
//                 newDestination.image.trim(),

//               status:
//                 newDestination.status,
//             }
//           : item
//       )
//     );

//     resetForm();
//   };

//   // ==========================================
//   // DELETE DESTINATION
//   // ==========================================

//   const handleDelete = (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this destination?"
//     );

//     if (!confirmDelete) {
//       return;
//     }

//     setDestinations((prev) =>
//       prev.filter((item) => item.id !== id)
//     );

//     if (editId === id) {
//       resetForm();
//     }
//   };

//   // ==========================================
//   // RESET FORM
//   // ==========================================

//   const resetForm = () => {
//     setNewDestination({
//       destination: "",
//       state: "",
//       category: "",
//       image: "",
//       status: "Pending",
//     });

//     setEditId(null);
//   };

//   // ==========================================
//   // UI
//   // ==========================================

//   return (
//     <main className="min-h-screen bg-gray-200 py-8 px-4">

//       <div className="flex flex-col md:flex-row gap-5">

//         {/* ======================================
//             SIDEBAR
//         ====================================== */}

//         <aside className="w-full md:w-1/4 bg-blue-950 rounded-xl p-6">

//           <h2 className="text-xl md:text-3xl font-extrabold">
//             <span className="text-blue-500">
//               Travel
//             </span>

//             <span className="text-orange-500">
//               Bharat
//             </span>
//           </h2>

//           <p className="text-sm text-gray-400 font-medium mt-1">
//             Explore India
//           </p>

//         </aside>

//         {/* ======================================
//             MAIN CONTENT
//         ====================================== */}

//         <section className="w-full md:w-3/4 rounded-xl p-5 flex flex-col gap-5">

//           <h1 className="text-2xl font-bold">
//             Dashboard
//           </h1>

//           {/* ======================================
//               STATS
//           ====================================== */}

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

//             {/* DESTINATIONS */}

//             <div className="bg-white rounded-xl p-5 text-center shadow">

//               <p className="text-gray-500">
//                 Total Destinations
//               </p>

//               <h3 className="text-3xl font-bold mt-1">
//                 {destinations.length}
//               </h3>

//             </div>

//             {/* STATES */}

//             <div className="bg-white rounded-xl p-5 text-center shadow">

//               <p className="text-gray-500">
//                 Total States
//               </p>

//               <h3 className="text-3xl font-bold mt-1">
//                 {totalStates}
//               </h3>

//             </div>

//             {/* CATEGORIES */}

//             <div className="bg-white rounded-xl p-5 text-center shadow">

//               <p className="text-gray-500">
//                 Total Categories
//               </p>

//               <h3 className="text-3xl font-bold mt-1">
//                 {totalCategories}
//               </h3>

//             </div>

//             {/* IMAGES */}

//             <div className="bg-white rounded-xl p-5 text-center shadow">

//               <p className="text-gray-500">
//                 Total Images
//               </p>

//               <h3 className="text-3xl font-bold mt-1">
//                 {totalImages}
//               </h3>

//             </div>

//           </div>

//           {/* ======================================
//               TABLE + FORM
//           ====================================== */}

//           <div className="flex flex-col lg:flex-row gap-6">

//             {/* ==================================
//                 TABLE
//             ================================== */}

//             <div className="bg-white p-4 w-full lg:w-2/3 rounded-xl shadow overflow-x-auto">

//               <div className="flex justify-between items-center px-4 py-3 bg-purple-300 rounded-t-xl">

//                 <h2 className="text-xl md:text-2xl font-bold">
//                   Recent Destinations
//                 </h2>

//                 <span className="text-sm font-medium">
//                   {destinations.length} Total
//                 </span>

//               </div>

//               <table className="w-full mt-4 border-collapse min-w-[850px]">

//                 <thead>

//                   <tr className="bg-pink-300">

//                     <th className="border p-2">
//                       Image
//                     </th>

//                     <th className="border p-2">
//                       Destination
//                     </th>

//                     <th className="border p-2">
//                       State
//                     </th>

//                     <th className="border p-2">
//                       Category
//                     </th>

//                     <th className="border p-2">
//                       Status
//                     </th>

//                     <th className="border p-2">
//                       Actions
//                     </th>

//                   </tr>

//                 </thead>

//                 <tbody>

//                   {destinations.length > 0 ? (

//                     destinations.map((item) => (

//                       <tr
//                         key={item.id}
//                         className="hover:bg-gray-50"
//                       >

//                         {/* IMAGE */}

//                         <td className="border p-2">

//                           {item.image ? (

//                             <img
//                               src={item.image}
//                               alt={item.destination}
//                               className="w-16 h-12 object-cover rounded-md mx-auto"
//                             />

//                           ) : (

//                             <div className="w-16 h-12 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-500 mx-auto">
//                               No Image
//                             </div>

//                           )}

//                         </td>

//                         {/* DESTINATION */}

//                         <td className="border p-2 font-medium">
//                           {item.destination}
//                         </td>

//                         {/* STATE */}

//                         <td className="border p-2">
//                           {item.state}
//                         </td>

//                         {/* CATEGORY */}

//                         <td className="border p-2">
//                           {item.category}
//                         </td>

//                         {/* STATUS */}

//                         <td className="border p-2 text-center">

//                           <span
//                             className={`px-3 py-1 rounded-full text-sm font-medium ${
//                               item.status === "Approved"
//                                 ? "bg-green-100 text-green-700"
//                                 : "bg-yellow-100 text-yellow-700"
//                             }`}
//                           >
//                             {item.status}
//                           </span>

//                         </td>

//                         {/* ACTIONS */}

//                         <td className="border p-2">

//                           <div className="flex gap-2 justify-center">

//                             <button
//                               onClick={() =>
//                                 handleEdit(item)
//                               }
//                               className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
//                             >
//                               Edit
//                             </button>

//                             <button
//                               onClick={() =>
//                                 handleDelete(item.id)
//                               }
//                               className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//                             >
//                               Delete
//                             </button>

//                           </div>

//                         </td>

//                       </tr>

//                     ))

//                   ) : (

//                     <tr>

//                       <td
//                         colSpan="6"
//                         className="text-center p-8 text-gray-500"
//                       >
//                         No destinations found
//                       </td>

//                     </tr>

//                   )}

//                 </tbody>

//               </table>

//             </div>

//             {/* ==================================
//                 FORM
//             ================================== */}

//             <div className="bg-green-300 p-5 w-full lg:w-1/3 rounded-xl shadow flex flex-col gap-4">

//               <h2 className="text-xl font-bold">

//                 {editId !== null
//                   ? "Edit Destination"
//                   : "Add New Destination"}

//               </h2>

//               {/* DESTINATION */}

//               <div>

//                 <label className="block text-sm font-medium mb-1">
//                   Destination Name
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="e.g. Manali"
//                   className="w-full p-2 rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
//                   value={
//                     newDestination.destination
//                   }
//                   onChange={(e) =>
//                     setNewDestination({
//                       ...newDestination,
//                       destination:
//                         e.target.value,
//                     })
//                   }
//                 />

//               </div>

//               {/* STATE */}

//               <div>

//                 <label className="block text-sm font-medium mb-1">
//                   State
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="e.g. Himachal Pradesh"
//                   className="w-full p-2 rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
//                   value={
//                     newDestination.state
//                   }
//                   onChange={(e) =>
//                     setNewDestination({
//                       ...newDestination,
//                       state: e.target.value,
//                     })
//                   }
//                 />

//               </div>

//               {/* CATEGORY */}

//               <div>

//                 <label className="block text-sm font-medium mb-1">
//                   Category
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="e.g. Mountains"
//                   className="w-full p-2 rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
//                   value={
//                     newDestination.category
//                   }
//                   onChange={(e) =>
//                     setNewDestination({
//                       ...newDestination,
//                       category:
//                         e.target.value,
//                     })
//                   }
//                 />

//               </div>

//               {/* IMAGE URL */}

//               <div>

//                 <label className="block text-sm font-medium mb-1">
//                   Image URL
//                 </label>

//                 <input
//                   type="url"
//                   placeholder="https://example.com/image.jpg"
//                   className="w-full p-2 rounded border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
//                   value={
//                     newDestination.image
//                   }
//                   onChange={(e) =>
//                     setNewDestination({
//                       ...newDestination,
//                       image: e.target.value,
//                     })
//                   }
//                 />

//               </div>

//               {/* IMAGE PREVIEW */}

//               {newDestination.image && (

//                 <div className="bg-white rounded-lg p-2">

//                   <p className="text-sm font-medium mb-2">
//                     Image Preview
//                   </p>

//                   <img
//                     src={newDestination.image}
//                     alt="Preview"
//                     className="w-full h-32 object-cover rounded-md"
//                     onError={(e) => {
//                       e.currentTarget.style.display =
//                         "none";
//                     }}
//                   />

//                 </div>

//               )}

//               {/* BUTTONS */}

//               {editId !== null ? (

//                 <div className="flex gap-2">

//                   <button
//                     onClick={handleUpdate}
//                     className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md flex-1"
//                   >
//                     Update Destination
//                   </button>

//                   <button
//                     onClick={resetForm}
//                     className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-md"
//                   >
//                     Cancel
//                   </button>

//                 </div>

//               ) : (

//                 <button
//                   onClick={handleAddDestination}
//                   className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md"
//                 >
//                   Add Destination
//                 </button>

//               )}

//             </div>

//           </div>

//         </section>

//       </div>

//     </main>
//   );
// }
