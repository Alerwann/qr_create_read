import React from "react";
import { useQRCode } from "next-qrcode";

function App({text =""}) {
    
  const { Image } = useQRCode();

  return (
      <Image
        alt="affichage du QR code"
      text={text}
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
  );
}

export default App;
