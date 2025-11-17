"use client";
import { useState, useRef } from "react";
import "../home.css";
import Image from "next/image";
import { Html5Qrcode } from "html5-qrcode";

export default function Reader() {
  const [imageUploadee, setImageUploadee] = useState(null);
  const [resultat, setResultat] = useState("");
  const [enCoursDeChargement, setEnCoursDeChargement] = useState(false);
  const [texteCopie, setTexteCopie] = useState(false);

  const handleImageUpload = (event) => {
    const fichier = event.target.files[0];

    if (!fichier) {
      console.log("Aucun fichier sélectionné");
      return;
    }

    if (!fichier.type.startsWith("image/")) {
      alert("Veuillez sélectionner une image");
      return;
    }

    setEnCoursDeChargement(true);

    const lecteur = new FileReader();
    lecteur.onload = (e) => {
      setImageUploadee(e.target.result);
    };
    lecteur.readAsDataURL(fichier);

    const html5QrCode = new Html5Qrcode("reader");
    html5QrCode
      .scanFile(fichier, true)
      .then((decodedText) => {
        console.log("QR Code décodé:", decodedText);
        setResultat(decodedText);
      })
      .catch((err) => {
        console.error("Erreur de scan:", err);
        setResultat("Pas de QR code reconnnu");
      })
      .finally(() => {
        html5QrCode.clear();
        setEnCoursDeChargement(false);
      });
  };

  const handleCopier = () => {
    if (!resultat) {
      return;
    }

    navigator.clipboard
      .writeText(resultat)
      .then(() => {
        console.log("Texte copié !");
        setTexteCopie(true);

        setTimeout(() => {
          setTexteCopie(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Erreur lors de la copie:", err);
        alert("❌ Impossible de copier le texte");
      });
  };
  return (
    <main className="main-container">
      <div className="main-title">
        <h1>Lecteur de Qr code</h1>
      </div>

      <div id="reader" style={{ display: "none" }}></div>
      <div>
        <input
          className="input_button"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
          id="fileInput"
        />
      </div>
      {!imageUploadee && (
        <label htmlFor="fileInput" className="all_button">
          Télécharge le QR code
        </label>
      )}
      {imageUploadee && (
        <div
          className="contenaire
          "
        >
          <h3>Aperçu :</h3>
          <Image
            src={imageUploadee}
            alt="Image uploadée"
            width={200}
            height={200}
          />
          <div id="reader"></div>
          <button className="all_button" onClick={() => setImageUploadee(null)}>
            🗑️ Supprimer
          </button>
        </div>
      )}
      {resultat && imageUploadee && (
        <div className="contenaire">
          <h3>Texte décodé :</h3>
          <p>{resultat}</p>
          <button className="all_button" onClick={handleCopier}>
            {texteCopie ? "✅ Copié !" : "📋 Copier"}
          </button>
        </div>
      )}

      {enCoursDeChargement && <p>⏳ Scan en cours...</p>}
    </main>
  );
}
