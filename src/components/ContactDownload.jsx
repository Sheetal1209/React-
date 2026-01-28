// import { useLocation } from "react-router-dom";
// import CardView from "./components/CardView";
// export default function ContactDownload() {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   const cardId = query.get("id");

//   if (!cardId) return <h3>Invalid QR</h3>;

//   const storedCard = localStorage.getItem(`card-${cardId}`);
//   if (!storedCard) return <h3>Contact not found</h3>;

//   const card = JSON.parse(storedCard);

//   const vCard = `
// BEGIN:VCARD
// VERSION:3.0
// N:${card.name};;;
// FN:${card.name}
// ORG:${card.company || ""}
// TEL;TYPE=CELL:${card.phone}
// EMAIL:${card.email || ""}
// END:VCARD
//   `.trim();

//   const blob = new Blob([vCard], { type: "text/vcard" });
//   const url = URL.createObjectURL(blob);

//   return (
    
//     <div style={{ textAlign: "center", marginTop: 50 }}>
//         <CardView showSaveButton={true} />
        
//       <h2>{card.name}</h2>
//       <p>{card.company}</p>

//       <a
//         href={url}
//         download={`${card.name}.vcf`}
//         style={{
//           padding: "12px 20px",
//           background: "#0d6efd",
//           color: "#fff",
//           textDecoration: "none",
//           borderRadius: "6px",
//         }}
//       >
//         Save Contact
//       </a>
//     </div>
//   );
// }


// // import CardView from "./components/CardView";

// // export default function ContactDownload() {
// //   return <CardView showSaveButton={true} />;
// // }

// import CardView from "./CardView";

// export default function ContactDownload() {
//   return (<CardView showSaveButton={true} />);
// }

// import { useLocation } from "react-router-dom";
// import CardView from "./CardView";


// export default function ContactDownload() {
// const query = new URLSearchParams(useLocation().search);
// const id = query.get("id");


// if (!id) return <h3>Invalid QR</h3>;


// const stored = localStorage.getItem(`card-${id}`);
// if (!stored) return <h3>Contact not found</h3>;


// const card = JSON.parse(stored);


// const vCard = `BEGIN:VCARD
// VERSION:3.0
// N:${card.name}
// FN:${card.name}
// ORG:${card.designation}
// TEL:${card.phone1}
// EMAIL:${card.email1}
// END:VCARD`;


// const blob = new Blob([vCard], { type: "text/vcard" });
// const url = URL.createObjectURL(blob);


// return (
// <div>
// <CardView showSaveButton={false} card={card} />


// <div style={{ textAlign: "center", marginTop: 20 }}>
// <a className="save-btn" href={url} download={`${card.name}.vcf`}>
// Save Contact
// </a>
// </div>
// </div>
// );
// }

// import { useLocation } from "react-router-dom";
// import CardView from "./CardView";


// export default function ContactDownload() {
// const query = new URLSearchParams(useLocation().search);
// const id = query.get("id");


// const card = JSON.parse(localStorage.getItem(`card-${id}`));


// const vcf = `BEGIN:VCARD\nVERSION:3.0\nFN:${card.name}\nTEL:${card.phone1}\nTEL:${card.phone2}\nEMAIL:${card.email1}\nEMAIL:${card.email2}\nADR:${card.address}\nURL:${card.website}\nEND:VCARD`;


// return (
// <>
// <CardView showSave={false} />
// <a
// href={URL.createObjectURL(new Blob([vcf], { type: 'text/vcard' }))}
// download={`${card.name}.vcf`}
// className="btn"
// >
// Save Contact
// </a>
// </>
// );
// }


import { useLocation } from "react-router-dom";
import CardView from "./CardView";

export default function ContactDownload() {
  const id = new URLSearchParams(useLocation().search).get("id");

  if (!id) return <h3>Invalid QR</h3>;

  const stored = localStorage.getItem(`card-${id}`);
  if (!stored) return <h3>Card not found</h3>;

  const card = JSON.parse(stored);

  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${card.name}
TITLE:${card.designation}
TEL:${card.phone1}
TEL:${card.phone2}
EMAIL:${card.email1}
EMAIL:${card.email2}
ADR:${card.address}
URL:${card.website}
END:VCARD
`.trim();

  const url = URL.createObjectURL(
    new Blob([vCard], { type: "text/vcard" })
  );

  return (
    <>
      <CardView card={card} />

      <div style={{ textAlign: "center", marginTop: 20 }}>
        <a href={url} download={`${card.name}.vcf`}>
          Save Contact
        </a>
      </div>
    </>
  );
}
