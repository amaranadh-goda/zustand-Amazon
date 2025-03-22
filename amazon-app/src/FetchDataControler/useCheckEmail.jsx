// const useCheckEmail = () => {
//       const checkEmail = async (email) => {
//         try {
//           const response = await fetch(`http://localhost:3000/user?email=${email}`);
//           const data = await response.json();
//           return { exists: data.length > 0 }; // If the email exists, data will have at least one entry
//         } catch (error) {
//           console.error("Error checking email:", error);
//           return { exists: false };
//         }
//       };
    
//       return { checkEmail };
//     };
    
//     export default useCheckEmail;

const useCheckEmail = () => {
      const checkEmail = async (email) => {
        try {
          const response = await fetch(`http://localhost:3000/user?email=${email}`);
          const data = await response.json();
    
          // If email exists, return true, otherwise false
          return { exists: data.length > 0 };
        } catch (error) {
          console.error("Error checking email:", error);
          return { exists: false };
        }
      };
    
      return { checkEmail };
    };
    
    export default useCheckEmail;
    
    