import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./Card.css";

const emptyCard = () => ({
  tempId: Date.now() + Math.random(),
  name: "",
  designation: "",
  phone1: "",
  phone2: "",
  address: "",
  email1: "",
  email2: "",
  website: "",
  qrValue: "",
});

export default function AdminCreateCard() {
  const [cards, setCards] = useState([emptyCard()]);

  const updateField = (i, field, value) => {
    const updated = [...cards];
    updated[i][field] = value;
    setCards(updated);
  };

  const addCard = () => setCards([...cards, emptyCard()]);

  const removeCard = (i) => {
    if (cards.length === 1) return;
    setCards(cards.filter((_, idx) => idx !== i));
  };

  const generateQR = (i) => {
    const card = cards[i];
    if (!card.name || !card.phone1) {
      alert("Name & Phone required");
      return;
    }

    const id = Date.now().toString();
    localStorage.setItem(`card-${id}`, JSON.stringify(card));

    const updated = [...cards];
    updated[i].qrValue = `${window.location.origin}/card?id=${id}`;
    setCards(updated);
  };

  return (
    <div className="admin-container">
      <h2>Admin – Create Digital Card</h2>

      {cards.map((card, i) => (
        <div className="card-form-box" key={card.tempId}>
          <div className="input-icon">
            <i className="fa-solid fa-user" />
            <input placeholder="Name" onChange={e => updateField(i,"name",e.target.value)} />
          </div>

          <div className="input-icon">
            <i className="fa-solid fa-briefcase" />
            <input placeholder="Designation" onChange={e => updateField(i,"designation",e.target.value)} />
          </div>

          <div className="input-icon">
            <i className="fa-solid fa-phone" />
            <input placeholder="Phone 1" onChange={e => updateField(i,"phone1",e.target.value)} />
          </div>

          <div className="input-icon">
            <i className="fa-solid fa-phone-volume" />
            <input placeholder="Phone 2" onChange={e => updateField(i,"phone2",e.target.value)} />
          </div>

          <div className="input-icon">
            <i className="fa-solid fa-location-dot" />
            <input placeholder="Address" onChange={e => updateField(i,"address",e.target.value)} />
          </div>

          <div className="input-icon">
            <i className="fa-solid fa-envelope" />
            <input placeholder="Email 1" onChange={e => updateField(i,"email1",e.target.value)} />
          </div>

          <div className="input-icon">
            <i className="fa-solid fa-envelope-open" />
            <input placeholder="Email 2" onChange={e => updateField(i,"email2",e.target.value)} />
          </div>

          <div className="input-icon">
            <i className="fa-solid fa-globe" />
            <input placeholder="Website" onChange={e => updateField(i,"website",e.target.value)} />
          </div>

          <div className="admin-actions">
            <button onClick={() => generateQR(i)}>Generate QR</button>
            <button className="danger" onClick={() => removeCard(i)}>Remove</button>
          </div>

          {card.qrValue && <QRCodeCanvas value={card.qrValue} size={140} />}
        </div>
      ))}

      <button className="add-btn" onClick={addCard}>
        + Add New Card
      </button>
    </div>
  );
}
