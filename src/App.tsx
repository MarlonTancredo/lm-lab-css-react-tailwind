import "./App.css";
import { PropertiesDisplay } from "./components/properties-display";

function App() {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-6xl m-10">Welcome to Marvelous Mansions</h1>
        <h2 className="text-4xl m-10">
          A one stop shop to your dream property!
        </h2>
        <h3 className="text-2xl">Current property listings:</h3>
      </div>
      <PropertiesDisplay />
    </>
  );
}

export default App;
