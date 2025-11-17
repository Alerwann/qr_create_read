import "./component.css";
import Link from "next/link";


export default function Header() {
  return (
    <header className="mon-entete">
      <div className="contenaire-entete">
        <div className="container-titre">
          <p className="titre-header">Générateur et lecteur de QR code </p>
        </div>

        <nav className="liens-entete">
          <Link href="/">Générateur</Link>
          <span className="separateur">|</span>
          <Link href="/reader">Lecteur</Link>
          <span className="separateur">|</span>
          <Link href="/about">À propos</Link>
          <span className="separateur">|</span>
          <Link href="/legalinformation">Informations Légales</Link>
        </nav>
      </div>
    </header>
  );
}
