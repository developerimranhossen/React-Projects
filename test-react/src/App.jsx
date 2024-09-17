import { Suspense, useState } from "react";
import demos from "./data/demos";
import importDemos from "./utils/importDemos";

export default function App() {
  const [component, setComponent] = useState(null);
  const loadDemo = async (file) => {
    const Raw = await importDemos(file);
    return <Raw />;
  };
  const selectDemo = async (file) => {
    const democo = await loadDemo(file);
    setComponent(democo);
    console.log(democo);
  };
  
  return (
    <div>
      <div>
        <h1>React Lazy load explained</h1>

        <div>
          {demos.map((demo) => (
            <button key={demo.name} onClick={() => selectDemo(demo.file)}>
              {demo.name}
            </button>
          ))}
        </div>

        <div>
          {component}
        </div>
      </div>
    </div>
  );
}
