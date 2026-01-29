import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Card.css";

export default function CardView() {
  const cardId = new URLSearchParams(useLocation().search).get("id");
  const stored = localStorage.getItem(`card-${cardId}`);

  if (!stored) return <h2>Card not found</h2>;

  const card = JSON.parse(stored);

  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${card.name}
TITLE:${card.designation}
${card.phone1 ? `TEL:${card.phone1}` : ""}
${card.empid ? `NOTE:Emp ID ${card.empid}` : ""}
${card.email1 ? `EMAIL:${card.email1}` : ""}
${card.email2 ? `EMAIL:${card.email2}` : ""}
${card.address ? `ADR:${card.address}` : ""}
${card.website ? `URL:${card.website}` : ""}
END:VCARD
`.trim();

  const contactUrl = URL.createObjectURL(
    new Blob([vCard], { type: "text/vcard" })
  );

  return (
    <div className="pro-card">
      {/* LEFT */}
      <div className="card-left">
        <img src={logo} className="company-logo" alt="logo" />

        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${window.location.href}`}
          alt="qr"
        />
      </div>

      {/* RIGHT */}
      <div className="card-right">
        <h2>{card.name}</h2>
        <p className="designation info"><i class="fa-solid fa-circle-user"/>{card.designation}</p>

        {/* REQUIRED */}
        <div className="info">
          <i className="fa-solid fa-id-badge" />
          <span>Emp ID: {card.empid}</span>
        </div>

        {/* OPTIONAL FIELDS */}
        {card.phone1 && (
          <div className="info">
            <i className="fa-solid fa-phone" />
            <span>{card.phone1}</span>
          </div>
        )}

        {card.address && (
          <div className="info">
            <i className="fa-solid fa-location-dot" />
            <span>{card.address}</span>
          </div>
        )}

        {card.email1 && (
          <div className="info">
            <i className="fa-solid fa-envelope" />
            <span>{card.email1}</span>
          </div>
        )}

        {card.email2 && (
          <div className="info">
            <i className="fa-solid fa-envelope-open" />
            <span>{card.email2}</span>
          </div>
        )}

        {card.website && (
          <div className="info">
            <i className="fa-solid fa-globe" />
            <span>{card.website}</span>
          </div>
        )}

        <a href={contactUrl} download={`${card.name}.vcf`} className="save-btn">
          Save Contact
        </a>
      </div>
    </div>
  );
}
