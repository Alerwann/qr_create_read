"use client";
import { useState, useRef } from "react";
import "./home.css";

import React from "react";
import { useQRCode } from "next-qrcode";

export default function Home() {
  const [messageError, setMessageError] = useState(false);
  const [textToQr, setTextToQr] = useState("");
  const { Image } = useQRCode();

  const qrImageRef = useRef(null);

  const handleButton = () => {
    var textValue = "";

    textValue = document.getElementById("textInput").value;
    if (textValue != null) {
      setTextToQr(textValue);
    }
  };

  const handleReinit = () => {
    setTextToQr("");
    document.getElementsByName("textInput").value = null;
  };

  const handleDownload = () => {
    console.log("tu cliques");
    const lien = document.createElement("a");
    const conteneurQr = qrImageRef.current;

    if (!conteneurQr) {
      console.error("Conteneur non trouvé");
      return;
    }
    const imageQr = conteneurQr.querySelector("img");

    if (!imageQr) {
      console.error("Image non trouvée");
      return;
    }

    lien.href = imageQr.src;

    const maintenant = new Date();
    const nomFichier = `qrcode_${maintenant.getTime()}.jpeg`;

    lien.download = nomFichier;

    document.body.appendChild(lien);
    lien.click();
    document.body.removeChild(lien);
  };

  const handleFullScreen = () => {
    const conteneurQr = qrImageRef.current;

    if (!conteneurQr) {
      console.error("Conteneur non trouvé");
      return;
    }
    const imageQr = conteneurQr.querySelector("img");

    if (!imageQr) {
      console.error("Image non trouvée");
      return;
    }
    imageQr.requestFullscreen();
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h1>Génération</h1>
      </div>

      <div className="contenaire">
        <p>
          Tapez du texte ou une URL ci-dessous pour générer un QR Code adapté.
        </p>
        <textarea
          id="textInput"
          placeholder="Entrez votre texte..."
          className="saisie_area"
        ></textarea>
        <div className="saisie_button_container">
          <button className="all_button" onClick={() => handleButton()}>
            ✅ Valider
          </button>
          <button className="all_button" onClick={() => handleReinit()}>
            🔄 Réinitialiser
          </button>
        </div>
      </div>
      <div className="contenaire">
        {textToQr != "" && (
          <div className="qrCode">
            <div className="afficheQr">
              <div ref={qrImageRef}>
                <Image
                  className="qrimage"
                  id="qrimage"
                  alt="affichage du QR code"
                  text={textToQr}
                  options={{
                    type: "image/jpeg",
                    quality: 0.3,
                    errorCorrectionLevel: "M",
                    margin: 3,
                    scale: 4,
                    width: 200,
                    color: {
                      dark: "#000000ff",
                      light: "#daf8f5ff",
                    },
                  }}
                />
              </div>
            </div>
            <div className="saisie_button_container">
              <button
                id="expandBtn"
                className="all_button"
                onClick={() => handleFullScreen()}
              >
                🔍 Plein écran
              </button>
              <button className="all_button" onClick={() => handleDownload()}>
                🔍 download
              </button>
            </div>
          </div>
        )}

        {textToQr == "" && (
          <div id="qrcode">
            <p>Votre QR Code apparaîtra ici</p>
          </div>
        )}

        {messageError && <p>Il y a une erreure</p>}
      </div>
    </main>
  );
}
