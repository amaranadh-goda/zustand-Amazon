
import { useState, useEffect } from "react";
 // Import the useCartData hook

export function useFetchData(endpoint) {
    const [homeData, setHomeData] = useState([]);
    
    // Get cartLength from useCartData hook

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:3000/${endpoint}`);
                const data = await response.json();
                setHomeData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [endpoint]); // Add cartLength to the dependencies so that it triggers on changes

    return { homeData };
}




