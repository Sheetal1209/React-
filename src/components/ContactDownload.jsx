


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
