import {Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Scheme from "./components/Scheme/Scheme";

function App() {
  return (<div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:id" element={<Scheme />} />
      </Routes>
  </div>);
}

export default App;
