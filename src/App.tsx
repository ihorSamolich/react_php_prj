import "./index.css";
import Sidebar from "./components/Sidebar.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  console.log("render app");

  return (
    <div className="font-body">
      <Sidebar />
      <div className="md:ml-64">
        <Footer />
      </div>
    </div>
  );
}
