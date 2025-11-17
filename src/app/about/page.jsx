/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import "../home.css";
export default function About() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h1> À propos de "Gen & read"</h1>
      </div>

      <div className="contenaire">
        <h2>Pourquoi ?</h2>
        <p>Ce site est un site d'entrainement au dévelloppement NextJs.</p>
        <p>
          Je me suis basé principalement sur mes connaissances, des recherches
          dans la doc et en dernier recours de Claude.ai .
        </p>
        <p>
          Je sais qu'il n'est pas parfait mais s'il t'a aidé c'est le princial !
        </p>
      </div>
      <div className="contenaire">
        <h2>Un retour ou un conseil ?</h2>
        <p>
          Si vous avez une remarque ou une suggestion je suis joignable par mail
          :
        </p>
        <Link href="mailto:alerwann411@gmail.com">alerwann411@gmail.com</Link>
      </div>
    </main>
  );
}
