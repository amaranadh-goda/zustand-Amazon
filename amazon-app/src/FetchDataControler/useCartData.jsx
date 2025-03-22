// import { useEffect, useState } from "react";

// // Custom hook for fetching cart data
// export function useCartData(c) {  // Receive `c` as a prop from the parent component
//   const [cartItemData, setCartItemData] = useState([]);
//   const [dataM, setDataM] = useState([]);

//   // Function to fetch cart data
//   const fetchCartData = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/cart");
//       if (response.ok) {
//         const data = await response.json();
//         setDataM(data);
//         setCartItemData(data); // Update cart data from the backend
//       }
//     } catch (error) {
//       console.error("Error fetching cart data:", error);
//     }
//   };

 
//   useEffect(() => {
//     fetchCartData();
//   }, [c]); 

//   return { cartItemData, setCartItemData, fetchCartData, dataM };
// }
