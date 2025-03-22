
// import { useEffect, useState } from "react";
// import { useCartData } from './useCartData';

// export function CartHandler(ProductItemsData) {
//   const [c, setC] = useState(0); // Keep track of the number of items in the cart
//   const [cartStatus, setCartStatus] = useState(
//     ProductItemsData.reduce((acc, item) => {
//       acc[item.unique] = false; // Initialize all items as not in the cart
//       return acc;
//     }, {})
//   );

//   // Pass `c` to the `useCartData` hook
//   const { cartItemData, setCartItemData, } = useCartData(c);

//   useEffect(() => {
  
//     const updatedCartStatus = ProductItemsData.reduce((acc, item) => {
//       const isInCart = cartItemData.some(cartItem => cartItem.unique === item.unique);
//       acc[item.unique] = isInCart; 
//       return acc;
//     }, {});
//     setCartStatus(updatedCartStatus);
//   }, [cartItemData, ProductItemsData]);

  
//   useEffect(() => {
//     setC(cartItemData.length);  
//   }, []); 

//   const productAddCartHandler = async (unique) => {
//     try {
      
//       const existingItem = cartItemData.find((item) => item.unique === unique);
//       if (existingItem) {
//         console.log("Product already in cart, skipping add.");
//         return;
//       }

//       // Find the product in ProductItemsData
//       const productItem = ProductItemsData.find((e) => e.unique === unique);
//       if (!productItem) {
//         console.error("Product not found!");
//         return;
//       }

//       // Create object with quantity and tempPrice
//       const productItemWithCartID = {
//         ...productItem,
//         quantity: 1,
//         tempPrice: productItem.price,
//       };

//       // Add item to the local cartItemData immediately
//       setCartItemData([...cartItemData, productItemWithCartID]);

//       // Send POST request to add product to cart
//       const postResponse = await fetch("http://localhost:3000/cart", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(productItemWithCartID),
//       });

//       if (postResponse.ok) {
//         console.log("Product added to cart successfully!");
//       } else {
//         console.error("Failed to add product to cart");
//       }
//     } catch (error) {
//       console.error("Error handling product cart addition:", error);
//     }
//   };

//   return {
//     cartStatus,
//     c,
//     productAddCartHandler,
//   };
// }




// export function ProductItemHandler() {
//   const { cartItemData, setCartItemData, fetchCartData } = useCartData();

//   const productAddCartHandler = async (productItem) => {
//     // Check if the product is already in the cart based on unique identifier
//     const checkProductItem = cartItemData.find((e) => e.unique === productItem.unique);
//     if (checkProductItem) {
//       console.log("Product already in cart, skipping add.");
//       return;
//     }

//     const productItemWithCartID = {
//       ...productItem,
//       quantity: 1,
//       tempPrice: productItem.price,
//     };

//     try {
//       const response = await fetch("http://localhost:3000/cart", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(productItemWithCartID),
//       });

//       if (response.ok) {
//         console.log("Product added to cart successfully!");
//         // Update the cart state immediately
//         setCartItemData((prevCart) => [...prevCart, productItemWithCartID]);
//         fetchCartData(); // Fetch the latest cart data
//       } else {
//         console.error("Failed to add product to cart");
//       }
//     } catch (error) {
//       console.error("Error adding product to cart:", error);
//     }
//   };

//   return { productAddCartHandler };
// }

