import "./index.css";
import Sidebar from "./components/Sidebar.tsx";
import Footer from "./components/Footer.tsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import UsersTasks from "./pages/UsersTasks.tsx";
import TasksPage from "./pages/TasksPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

export default function App() {
  console.log("render app");

  return (
    <div className="font-body">
      <Sidebar />
      <div className="md:ml-64">
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="users" element={<UsersTasks />} />
            <Route path="tasks" element={<TasksPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
