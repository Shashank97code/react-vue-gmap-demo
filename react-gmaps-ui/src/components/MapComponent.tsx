import { useEffect, useRef, useState } from "react";

// Map Component with Google Maps JS API Loader
const MapComponent = () => {
  const mapElement = useRef<HTMLDivElement | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);
  const REACT_APP_GOOGLE_MAPS_API_KEY = ""; // Replace with your actual API key
  // Note: In a real application, you should use environment variables to store sensitive information like API keys.

  useEffect(() => {
    if (!mapElement.current) return; // Wait until element is set

    const initializeMap = async () => {
      try {
        setMapError(null);

        // Check if API key exists
        const apiKey = REACT_APP_GOOGLE_MAPS_API_KEY;

        if (!apiKey) {
          setMapError("Google Maps API key not found. ");
        }
        // Dynamic import of Google Maps JS API Loader
        const { Loader } = await import("@googlemaps/js-api-loader");

        // Initialize Google Maps JS API Loader
        const loader = new Loader({
          apiKey: apiKey,
          version: "weekly",
          libraries: ["places"],
        });

        // Load Google Maps
        const google = await loader.load();

        // Initialize map
        const map = new google.maps.Map(mapElement.current, {
          center: { lat: 12.9716, lng: 77.5946 }, // 91Springboard , Bengaluru coordinates
          zoom: 13,
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
        });
        // Add a marker for location 91Springboard, Bengaluru
        const marker = new google.maps.Marker({
          position: { lat: 12.988908, lng: 77.6867223 },
          map: map,
          title: "91Springboard ORR Mahadevapura, Bengaluru, Karnataka",
          animation: google.maps.Animation.DROP,
        });

        // Pan the map to the marker position
        map.panTo({ lat: 12.988908, lng: 77.6867223 });
      } catch (error) {
        console.error("Error loading Google Maps:", error);
        if (error instanceof Error) {
          setMapError(error.message);
        } else {
          setMapError("An unknown error occurred while loading Google Maps.");
        }
      }
    };

    initializeMap();
  }, []);

  if (mapError) {
    return (
      <div className="h-96 bg-red-50 rounded-lg border border-red-200 flex items-center justify-center">
        <div className="text-center p-6">
          <div className="text-red-500 text-4xl mb-2">⚠️</div>
          <h3 className="text-red-800 font-bold mb-2">Map Loading Error</h3>
          <p className="text-red-700 text-sm mb-4">{mapError}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[100vh] rounded-lg overflow-hidden border shadow-sm ">
      <div ref={mapElement} className="w-full h-full"></div>
    </div>
  );
};

export default MapComponent;
