// import React, { useContext } from "react";
// import { MyFeedBackContext } from "../context/FeedbackContext";
// import { Field, Form, Formik } from "formik";

// function FeedbackModal() {
//   const { closeModalFeedback } = useContext(MyFeedBackContext);
//   const posts = [
//     {
//       id: 1,
//       title: "Boost your conversion rate",
//       href: "#",
//       description:
//         "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//       date: "Mar 16, 2020",
//       datetime: "2020-03-16",
//       category: { title: "Marketing", href: "#" },
//       author: {
//         name: "Michael Foster",
//         role: "Co-Founder / CTO",
//         href: "#",
//         imageUrl:
//           "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//       },
//     },
//     // More posts...
//   ];
//   return (
//     <div className="fixed inset-0 bg-opacity-100  flex justify-center items-center">
//       <div className="bg-[#F9F4EC] p-6 rounded-lg shadow-lg w-96 ">
//         <h2 className="text-xl font-semibold mb-4">Thêm nhóm món</h2>
//         {/* section feedback */}
//         <div className="bg-white py-8 ">
//           <div className="mx-auto max-w-7xl px-6 ">
//             <div className="flex justify-center items-center">
//               {posts.map((post) => (
//                 <article
//                   key={post.id}
//                   className="flex max-w-xl flex-col w-[200px] h-[200px] items-start justify-between"
//                 >
//                   <div className="flex items-center gap-x-4 text-xs">
//                     <time dateTime={post.datetime} className="text-gray-500">
//                       {post.date}
//                     </time>
//                     <a
//                       href={post.category.href}
//                       className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
//                     >
//                       {post.category.title}
//                     </a>
//                   </div>
//                   <div className="group relative">
//                     <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
//                       <a href={post.href}>
//                         <span className="absolute inset-0" />
//                         {post.title}
//                       </a>
//                     </h3>
//                     <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
//                       {post.description}
//                     </p>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-end gap-2 ">
//           <button
//             onClick={closeModalFeedback}
//             class="relative h-9 inline-flex rounded-lg items-center justify-start py-3 pl-10 pr-4 overflow-hidden font-semibold bg-indigo-50 text-indigo-600 transition-all duration-150 ease-in-out hover:pr-10 hover:pl-6 hover:bg-indigo-100 group"
//           >
//             <span class="absolute right-0 pr-4 duration-200 ease-out translate-x-12 group-hover:translate-x-0">
//               <svg
//                 class="w-5 h-5 text-indigo-600"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M9.06134 18.1227L3 12.0613M3 12.0613L9.06134 6M3 12.0613H20.9999"
//                   stroke="currentcolor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//             </span>
//             <span class="absolute left-0 pl-2.5 -translate-x-0 group-hover:-translate-x-12 ease-out duration-200">
//               <svg
//                 class="w-5 h-5 text-indigo-700"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M9.06134 18.1227L3 12.0613M3 12.0613L9.06134 6M3 12.0613H20.9999"
//                   stroke="currentcolor"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 ></path>
//               </svg>
//             </span>
//             <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-indigo-700">
//               Back
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FeedbackModal;
