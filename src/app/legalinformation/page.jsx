/* eslint-disable react/no-unescaped-entities */
import "../home.css";
export default function LegalInformaiton() {
  return (
    <main>
      <div className="contenaire">
        <h2>Conditions d'utilisation</h2>
        <p>Dernière mise à jour : 17/11/2025</p>
        <p>
          Cette application est fournie gratuitement pour un usage personnel.
          Vous êtes libre de l'utiliser comme bon vous semble.
        </p>

        <h3>Garantie</h3>
        <p>
          L'application est fournie "en l'état", sans garantie d'aucune sorte.
          Je ne peux être tenu responsable d'éventuels dysfonctionnements.
        </p>

        <h3>Modifications</h3>
        <p>
          Je me réserve le droit de modifier ou d'arrêter l'application à tout
          moment.
        </p>
      </div>
      <div className="contenaire">
        <div className="title">
          <h2>Politique de confidentialité</h2>
          <p>Dernière mise à jour : 31/10/2025</p>
        </div>

        <h3>Informations générales</h3>
        <p>
          <strong>Développeur :</strong> Alerwann
        </p>
        <p>
          <strong>Email :</strong> alerwann411@gmail.com
        </p>
        <p>
          <strong>Localisation :</strong> France
        </p>

        <h3>Collecte de données</h3>
        <p>
          L'application ne collecte, ne stocke et ne partage{" "}
          <strong>aucune donnée personnelle</strong>.
        </p>

        <h3>Fonctionnement</h3>
        <ul>
          <li>Aucune connexion Internet n'est requise</li>
          <li>Aucune donnée n'est transmise à des serveurs tiers</li>
          <li>Aucun cookie ou tracker n'est utilisé</li>
          <li>Aucun compte utilisateur n'est nécessaire</li>
        </ul>

        <h3>Conformité RGPD</h3>
        <p>
          Cette application respecte le Règlement Général sur la Protection des
          Données (RGPD). Aucune donnée personnelle n'étant collectée, il n'y a
          aucun traitement de données à déclarer.
        </p>

        <h3>Modifications de cette politique</h3>
        <p>
          Cette politique peut être mise à jour occasionnellement. Les
          modifications seront publiées sur cette page avec une nouvelle date de
          mise à jour.
        </p>

        <h3>Contact</h3>
        <p>
          Pour toute question concernant cette politique de confidentialité :
        </p>
        <a href="mailto:alerwann411@gmail.com" className="contact-link">
          alerwann411@gmail.com
        </a>
      </div>
    </main>
  );
}
