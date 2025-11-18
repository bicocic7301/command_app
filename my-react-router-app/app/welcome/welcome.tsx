import { useEffect, useState } from "react";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
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

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="React Router"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="React Router"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                        {/* Display the API response */}
          <div className="mt-6 text-center">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <p>{message ? message : "No message received"}</p>
            )}
          </div>
            </p>
            <ul>
   
            </ul>
          </nav>


        </div>
      </div>
    </main>
  );
}
