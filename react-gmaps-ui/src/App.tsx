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

      <main className="container mx-auto px-1 py-4">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Live Google Maps Integration
          </h3>
          <p className="text-gray-600 ">
            Basic marker & vehicle based on position with info window on hover{" "}
          </p>
          <MapComponent />
        </div>
      </main>
    </div>
  );
}

export default App;
