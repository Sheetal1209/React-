// import { useState } from 'react'
// import DigitalCard from "./components/DigitalCard";
// import logo from "./assets/logo.png";
// // import qr from "./assets/qr.png";
// import footer from "./assets/footer.webp";
// import { Routes, Route } from "react-router-dom";
// import AdminCreateCard from "./components/AdminCreateCard";
// import CardView from "./components/CardView";


// import ContactDownload from "./components//ContactDownload";
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
     
//     <div
//       // style={{
//       //   minHeight: "100vh",
//       //   background: "#f1f3f6",
//       //   display: "flex",
//       //   justifyContent: "center",
//       //   alignItems: "center",
//       //   padding: "40px"
//       // }}
//     >  <Routes>
//       {/* Admin panel */}
//       <Route path="/" element={<AdminCreateCard />} />

//       {/* QR scan → Card + Save Contact */}
//       <Route path="/contact" element={<ContactDownload />} />

//       {/* Optional preview route */}
//       <Route path="/preview" element={<DigitalCard />} />
//     </Routes>
      
      
//           </div>
// {/* 
// <Routes>
// <Route path="/" element={<AdminCreateCard />} />
// <Route path="/contact" element={<ContactDownload />} />
// </Routes> */}

   
//    </>
//   )
// }

// export default App



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