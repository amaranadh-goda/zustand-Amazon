// const usePostData = (url) => {
//       const postData = async (data) => {
//         const response = await fetch(url, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//         });
//         return response.json();
//       };
    
//       return postData;
//     };
    
//     export default usePostData;
    

// import { useState } from 'react';

// const usePostData = (endpoint) => {
//   const [responseData, setResponseData] = useState(null);

//   const postData = async (data) => {
//     try {
//       const response = await fetch(`http://localhost:3000/${endpoint}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });
//       const result = await response.json();
//       setResponseData(result);
//     } catch (error) {
//       console.error("Error posting data:", error);
//     }
//   };

//   return { postData, responseData };
// };

// export default usePostData;

import { useState } from 'react';

const usePostData = (endpoint) => {
  const [responseData, setResponseData] = useState(null);

  const postData = async (data) => {
    try {
      const checkResponse = await fetch(`http://localhost:3000/${endpoint}?email=${data.email}`);
      const existingUser = await checkResponse.json();

      if (existingUser.length > 0) {
        setResponseData({ error: 'User already exists' });
        return;
      }

      const response = await fetch(`http://localhost:3000/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      setResponseData(result);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return { postData, responseData };
};

export default usePostData;

