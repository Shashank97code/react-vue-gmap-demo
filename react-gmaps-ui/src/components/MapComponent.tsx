import { useEffect, useRef, useState } from "react";

// Map Component with Google Maps JS API Loader
const MapComponent = () => {
  const mapElement = useRef<HTMLDivElement | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    if (!mapElement.current) return; // Wait until element is set

    const initializeMap = async () => {
      try {
        setMapError(null);

        // Check if API key exists
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

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

        // Default marker
        const marker1 = new google.maps.Marker({
          map,
          position: { lat: 12.988908, lng: 77.6867223 },
          title: "91Springboard ORR Mahadevapura, Bengaluru, Karnataka",
        });

        const infoWindow1 = new google.maps.InfoWindow({
          content: `<div>
            <h4>91Springboard ORR Mahadevapura</h4>
            <p>Bengaluru, Karnataka</p>
          </div>`,
        });
        marker1.addListener("mouseover", () => {
          infoWindow1.open(map, marker1);
        });
        marker1.addListener("mouseout", () => {
          infoWindow1.close();
        });

        const marker2 = new google.maps.Marker({
          map,
          position: { lat: 12.9729938, lng: 77.570666199 },
          title: "91Springboard ORR Mahadevapura, Bengaluru, Karnataka",
          icon: {
            url: "https://maps.gstatic.com/mapfiles/ms2/micons/cabs.png",
            scaledSize: new google.maps.Size(40, 40),
          },
        });
        const infoWindow2 = new google.maps.InfoWindow({
          content: `<div>
            <div style="margin-top:8px;">
              <h3 style="margin-left:16px;text-decoration:underline;">VEHICLE INFO</h3><br/>
              <strong>VEHICLE NO:</strong> XX1234XX1 (7FT)<br/>
              <strong>VENDOR NAME:</strong> Anil<br/>
              <strong>VENDOR MOB:</strong> +91 78965 4XXXX<br/>
              <strong>Speed:</strong> 31 km/hr<br/>
              <strong>Remarks:</strong> N/A
            </div>
            <hr />
            <p><strong>Location:</strong> <span> Bengaluru <p>Karnataka 560053, India</span> </p>
          </div>`,
        });

        marker2.addListener("mouseover", () => {
          infoWindow2.open(map, marker2);
        });
        marker2.addListener("mouseout", () => {
          infoWindow2.close();
        });
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
