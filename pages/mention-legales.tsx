import Nav from '../components/nav'
import Footer from '../components/footer'

export default function MentionLegales() {
  return (
    <div>
      <Nav />
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-8 py-5 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-4xl">Mention Légales</h1>
          <p className="mt-5">Le Propriétaire du site et Responsable Publication est : </p>
          <ul className="mt-5">
            <li>Rayed Benbrahim</li>
            <li>RBBM.TECH</li>
            <li>SIRET 84768358800010</li>
            <li>128 Rue de la Boétie</li>
            <li>75008 Paris</li>
          </ul>
          <p className="mt-5">
            L’Utilisateur, personne physique, est informé que les informations qu’il communique par
            le biais du Site sur la base, soit de mesures précontractuelles ou de l’exécution d’un
            contrat, soit de l’intérêt légitime poursuivi par RBBM.Tech afin de pouvoir répondre à
            ses demandes, sont destinées aux services habilités de RBBM.Tech à des fins de gestion
            des relations clients et prospects.
          </p>
          <p className="mt-5">
            Pendant la consultation du Site ou l’accès aux services en ligne de RBBM.Tech,
            l’Utilisateur peut être sollicité pour communiquer volontairement certaines données
            personnelles (nom, prénom, société, courriel, email, numéro de téléphone, identifiants).
            Les formulaires de collecte présents sur le Site précisent notamment la finalité, les
            destinataires, la durée de conservation et le caractère obligatoire ou facultatif des
            données demandées par un astérisque.
          </p>
          <p className="mt-5">
            Les données personnelles collectées et traitées sur le Site sont protégées par des
            mesures techniques et organisationnelles appropriées afin de garantir un niveau de
            sécurité adapté au risque.
          </p>
          <p className="mt-5">
            L’Utilisateur du Site est informé qu’il dispose d’un droit d’accès, de rectification, de
            suppression, de limitation, de portabilité (lorsqu’il s’applique) et d’opposition sur
            les données le concernant. L’Utilisateur peut exercer ces droits en s’adressant au
            service DPO de RBBM.Tech à l’adresse rgpd@rbbm.tech .
          </p>
          <p className="mt-5">
            L’Utilisateur dispose également du droit d’introduire une réclamation auprès de la CNIL.
          </p>
          <p className="mt-5">
            Par ailleurs, chaque newsletter envoyée par RBBM.Tech vous indique comment ne plus la
            recevoir.
          </p>
          <p className="mt-5">
            Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi Informatique
            et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou utilisation
            détournée des données à caractère personnel auxquelles ils accèdent.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}
