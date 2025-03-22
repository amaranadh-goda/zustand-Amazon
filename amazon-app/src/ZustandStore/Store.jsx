
// import { create } from "zustand";

// const useCartStore = create((set, get) => ({
//   cartItems: [],
//   saveCartItems:[],

//   // Fetch Cart Items from the backend and update the store
//   fetchCartItems: async () => {
//     try {
//       const response = await fetch("http://localhost:3000/cart");
//       if (!response.ok) throw "Failed to fetch cart data";
//       const data = await response.json();
//       set({ cartItems: data });
//     } catch (error) {
//       console.log("Error:", error);  
//     }
//   },

//   // Add Item to Cart or Activate Existing One
//   addToCart: async (item) => {
//     try {
//       const { cartItems } = get();
//       const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

//       if (existingItem) {
//         if (!existingItem.activeStatus) {
//           await get().updateCartStatus(item.id, true);
//         }
//       } else {
//         const newItem = { ...item, quantity: 1, tempPrice: item.price, activeStatus: true };
//         set((state) => ({ cartItems: [...state.cartItems, newItem] }));

//         const response = await fetch("http://localhost:3000/cart", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(newItem),
//         });

//         if (!response.ok) throw "Failed to add item to cart";
//         await get().fetchCartItems();
//       }
//     } catch (error) {
//       console.log("Error:", error);  
//     }
//   },

//   // Update Cart Item Quantity
//   updateCartItem: async (id, newQuantity) => {
//     try {
//       const { cartItems } = get();
//       const cartItem = cartItems.find((item) => item.id === id);

//       if (!cartItem) return;

//       const updatedItem = { quantity: newQuantity, tempPrice: cartItem.price * newQuantity };

//       set((state) => ({
//         cartItems: state.cartItems.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)),
//       }));

//       const response = await fetch(`http://localhost:3000/cart/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedItem),
//       });

//       if (!response.ok) throw "Failed to update quantity";
//     } catch (error) {
//       console.log("Error:", error);  // Log simple error message
//     }
//   },

//   // Completely Remove Item
//   removeFromCart: async (id) => {
//     try {
//       set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) }));

//       const response = await fetch(`http://localhost:3000/cart/${id}`, { method: "DELETE" });

//       if (!response.ok) throw "Failed to delete item from cart";
//     } catch (error) {
//       console.log("Error:", error);  // Log simple error message
//       get().fetchCartItems();
//     }
//   },

//   // Reactivate Item in Cart or update item status in to the cart
//   updateCartStatus: async (id, status) => {
//     try {
//       set((state) => ({
//         cartItems: state.cartItems.map((item) => (item.id === id ? { ...item, activeStatus: status } : item)),
//       }));

//       const response = await fetch(`http://localhost:3000/cart/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ activeStatus: status }),
//       });

//       if (!response.ok) throw "Failed to update cart item status";
//     } catch (error) {
//       console.log("Error:", error);  // Log simple error message
//     }
//   },
//   //get the data or frtch the data from the saveOrder endpoint for display purpose
//   fetchSavedItems: async () => {
//     try {
//       const response = await fetch("http://localhost:3000/SaveOrders");
//       if (!response.ok) throw new Error("Failed to fetch saved items");
//       const data = await response.json();
//       set({ saveCartItems: data });
//     } catch (error) {
//       console.error("Error fetching saved items:", error);
//     }
//   },
//   //save the item in to the saveOrder endpoint wen click the saveLater Button 
//   saveLater: async (id) => {
//     try {
//       const { cartItems } = get();
//       const saveCartItem = cartItems.find((item) => item.id === id);
  
//       if (saveCartItem) {
//         const response = await fetch("http://localhost:3000/SaveOrders", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(saveCartItem),
//         });
  
//         if (response.ok) {
//           const savedResponse = await fetch("http://localhost:3000/SaveOrders");
  
//           if (!savedResponse.ok) throw "Failed to fetch saved items";
  
//           const data = await savedResponse.json();
//           set({ saveCartItems: data });
  
//           await get().removeFromCart(id);
//         } else {
//           console.log("Failed to save item for later");
//         }
//       } else {
//         console.log("Item not found in cart");
//       }
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   },
// //Delete the item wen click the Delete button it will delet from the saveOrder endpoint based on the id
// deletSaveItem:async(id)=>{
//   try {
//     set((state) => ({ saveCartItems: state.saveCartItems.filter((item) => item.id !== id) }));

//     const response = await fetch(`http://localhost:3000/SaveOrders/${id}`, { method: "DELETE" });

//     if (!response.ok) throw "Failed to delete item from cart";
//   } catch (error) {
//     console.log("Error:", error);  

//   }
// },

// //if click the moveToCart button it will go to the cart endpoint and remove from the saveOrder endpoint
// moveToCart: async (id) => {
//   const { saveCartItems } = get();

//   const moveToCartItem = saveCartItems.find((item) => item.id === id); 
//   if(moveToCartItem){
//     const response = await fetch("http://localhost:3000/cart", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(moveToCartItem),
//     });
  
//   if (response.ok) {
//     const savedResponse = await fetch("http://localhost:3000/cart");

//     if (!savedResponse.ok) throw "Failed to fetch saved items";

//     const data = await savedResponse.json();
//     set({ cartItems: data });

//     await get().deletSaveItem(id);
//   } else {
//     console.log("Failed to save item for later");
//   }

//   }    
// }
 
// }));
// export default useCartStore;


//*************************** */


import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cartItems: [],
  saveCartItems: [],

  // Fetch Cart Items from the backend like json server and update the store
  fetchCartItems: async () => {
    try {
      const response = await fetch("http://localhost:3000/cart");
      if (!response.ok) throw "Failed to fetch cart data";
      const data = await response.json();
      set({ cartItems: data });
    } catch (error) {
      console.log("Error:", error);
    }
  },

  // Add Item to Cart or Activate Existing One
  addToCart: async (item) => {
    try {
      const { cartItems } = get();
      const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        if (!existingItem.activeStatus) {
          await get().updateCartStatus(item.id, true);
        }
      } else {
        const newItem = { ...item, quantity: 1, tempPrice: item.price, activeStatus: true };
        set((state) => ({ cartItems: [...state.cartItems, newItem] }));

        const response = await fetch("http://localhost:3000/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newItem),
        });

        if (!response.ok) throw "Failed to add item to cart";
        await get().fetchCartItems();
      }
    } catch (error) {
      console.log("Error:", error);
    }
  },

  // Update Cart Item Quantity
  updateCartItem: async (id, newQuantity) => {
    try {
      const { cartItems } = get();
      const cartItem = cartItems.find((item) => item.id === id);

      if (!cartItem) return;

      const updatedItem = { quantity: newQuantity, tempPrice: cartItem.price * newQuantity };

      set((state) => ({
        cartItems: state.cartItems.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)),
      }));

      const response = await fetch(`http://localhost:3000/cart/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItem),
      });

      if (!response.ok) throw "Failed to update quantity";
    } catch (error) {
      console.log("Error:", error);  // Log simple error message
    }
  },

  // Completely Remove Item
  removeFromCart: async (id) => {
    try {
      set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) }));

      const response = await fetch(`http://localhost:3000/cart/${id}`, { method: "DELETE" });

      if (!response.ok) throw "Failed to delete item from cart";
    } catch (error) {
      console.log("Error:", error);  // Log simple error message
      get().fetchCartItems();
    }
  },

  // Reactivate Item in Cart or update item status in to the cart
  updateCartStatus: async (id, status) => {
    try {
      set((state) => ({
        cartItems: state.cartItems.map((item) => (item.id === id ? { ...item, activeStatus: status } : item)),
      }));

      const response = await fetch(`http://localhost:3000/cart/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ activeStatus: status }),
      });

      if (!response.ok) throw "Failed to update cart item status";
    } catch (error) {
      console.log("Error:", error);  // Log simple error message
    }
  },

  // Fetch saved items from the SaveOrders endpoint for display purpose
  fetchSavedItems: async () => {
    try {
      const response = await fetch("http://localhost:3000/SaveOrders");
      if (!response.ok) throw new Error("Failed to fetch saved items");
      const data = await response.json();
      set({ saveCartItems: data });
    } catch (error) {
      console.error("Error fetching saved items:", error);
    }
  },

  // Save an item to the SaveOrders endpoint when clicking the SaveLater button
  saveLater: async (id) => {
    try {
      const { cartItems } = get();
      const saveCartItem = cartItems.find((item) => item.id === id);

      if (saveCartItem) {
        const response = await fetch("http://localhost:3000/SaveOrders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(saveCartItem),
        });

        if (response.ok) {
          const savedResponse = await fetch("http://localhost:3000/SaveOrders");

          if (!savedResponse.ok) throw "Failed to fetch saved items";

          const data = await savedResponse.json();
          set({ saveCartItems: data });

          await get().removeFromCart(id);
        } else {
          console.log("Failed to save item for later");
        }
      } else {
        console.log("Item not found in cart");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  },

  // Delete an item from the SaveOrders endpoint when clicking the Delete button
  deletSaveItem: async (id) => {
    try {
      set((state) => ({ saveCartItems: state.saveCartItems.filter((item) => item.id !== id) }));

      const response = await fetch(`http://localhost:3000/SaveOrders/${id}`, { method: "DELETE" });

      if (!response.ok) throw "Failed to delete item from cart";
    } catch (error) {
      console.log("Error:", error);
    }
  },

  // Move an item from saved items back to the cart
  moveToCart: async (id) => {
    const { saveCartItems } = get();

    const moveToCartItem = saveCartItems.find((item) => item.id === id);
    if (moveToCartItem) {
      const response = await fetch("http://localhost:3000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(moveToCartItem),
      });

      if (response.ok) {
        const savedResponse = await fetch("http://localhost:3000/cart");

        if (!savedResponse.ok) throw "Failed to fetch saved items";

        const data = await savedResponse.json();
        set({ cartItems: data });

        await get().deletSaveItem(id);
      } else {
        console.log("Failed to save item for later");
      }
    }
  },

}));

// Fetch cart items immediately after the store is created it will help to show the cartItems length in the cartIcon
useCartStore.getState().fetchCartItems();

export default useCartStore;
