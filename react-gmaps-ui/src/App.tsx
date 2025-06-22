import "./App.css";
import MapComponent from "./components/MapComponent";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-900">
              🗺️ React Google Maps App
            </h1>
          </div>
        </div>
      </header>

      <MapComponent />
    </div>
  );
}

export default App;
