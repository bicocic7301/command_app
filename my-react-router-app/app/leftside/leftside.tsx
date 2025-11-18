import { useEffect, useState } from "react";
import "./left.css"

export function Leftside() {
  const [message, setMessage] = useState<string | null>(null);  // State to store API response
  const [loading, setLoading] = useState<boolean>(true);  // Loading state

  useEffect(() => {
    // Make API call when component mounts
    fetch("http://127.0.0.1:3000")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);  // Assuming the API response is like { "message": "Hello World" }
        setLoading(false);  // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty array ensures this runs only once when the component mounts

  useEffect(() => {
    // Define the event handler function
    const handleKeyDown = (event) => {
      console.log('Key pressed:', event.key);
      // You can add specific logic here based on event.key
      if (event.key === 'Escape') {
        console.log('Escape key pressed!');
        // Perform actions like closing a modal
      }
    };

    // Add the event listener to the document
    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

    useEffect(() => {
    // Define the event handler function
    const handleKeyDown = (event) => {
      console.log('Key pressed:', event.key);
      // You can add specific logic here based on event.key
      if (event.key === 'ArrowRight') {
        window.location.href = 'http://localhost:5173/';
        // Perform actions like closing a modal
      }
    };

    // Add the event listener to the document
    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  return (
    <main className="flex items-center justify-center pt-16 pb-4 full-page-background" >
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">

        </div>
      </div>
    </main>
  );
}
