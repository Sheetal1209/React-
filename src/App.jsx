
import { Routes, Route } from "react-router-dom";
import AdminCreateCard from "./components/AdminCreateCard";
import CardView from "./components/CardView";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminCreateCard />} />
      <Route path="/card" element={<CardView />} />
    </Routes>
  );
}