
import Nav from '../components/nav'
import Footer from '../components/footer'
import Prism from "Prismjs";
import { useEffect } from 'react'

export default function PostPage() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }
    }, []);
  return (
      <div>
      <Nav />
      <section>
      <div className="flex bg-no-repeat bg-center bg-fixed bg-cover bg-gray-200" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../hero.jpg')`, height:'40vh' }}>
        <div className="flex max-w-6xl items-center mx-auto">
            <h1 className="text-center text-4xl md:text-6xl font-medium title-font text-white px-10 lg:px-18">Title of awesome blog post</h1>
        </div>
      </div>
      <div className="flex flex-wrap px-5 py-12 max-w-7xl mx-auto -mt-28">
            <div className="p-4 md:w-2/3">
                <main className="px-8 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <p className="tracking-widest text-md title-font font-medium text-indigo-500 mb-3">Catégorie</p>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Title of awesome blog post</h1>
                    <p className="mt-5">Le Propriétaire du site et Responsable Publication est : </p>
                    <ul className="mt-5">
                        <li>Rayed Benbrahim</li>
                        <li>RBBM.TECH</li>
                        <li>SIRET 84768358800010</li>
                        <li>128 Rue de la Boétie</li>
                        <li>75008 Paris</li>
                    </ul>
                    <p className="mt-5">L’Utilisateur, personne physique, est informé que les informations qu’il communique par le biais du Site sur la base, soit de mesures précontractuelles ou de l’exécution d’un contrat, soit de l’intérêt légitime poursuivi par RBBM.Tech afin de pouvoir répondre à ses demandes, sont destinées aux services habilités de RBBM.Tech à des fins de gestion des relations clients et prospects.</p>
                    <p className="mt-5">Pendant la consultation du Site ou l’accès aux services en ligne de RBBM.Tech, l’Utilisateur peut être sollicité pour communiquer volontairement certaines données personnelles (nom, prénom, société, courriel, email, numéro de téléphone, identifiants). Les formulaires de collecte présents sur le Site précisent notamment la finalité, les destinataires, la durée de conservation et le caractère obligatoire ou facultatif des données demandées par un astérisque.</p>
                    <p className="mt-5">Les données personnelles collectées et traitées sur le Site sont protégées par des mesures techniques et organisationnelles appropriées afin de garantir un niveau de sécurité adapté au risque.</p>
                    <p className="mt-5">L’Utilisateur du Site est informé qu’il dispose d’un droit d’accès, de rectification, de suppression, de limitation, de portabilité (lorsqu’il s’applique) et d’opposition sur les données le concernant. L’Utilisateur peut exercer ces droits en s’adressant au service DPO de RBBM.Tech à l’adresse rgpd@rbbm.tech .</p>
                    <p className="mt-5">L’Utilisateur dispose également du droit d’introduire une réclamation auprès de la CNIL.</p>

                    <pre className='language-javascript important-overflow-hidden text-sm max-h-60 rounded-lg shadow-lg'>
                        <code>
{`<!-- Hello World -->
function() {
    console.log('hello world')
}
`}
                        </code>
                    </pre>
                    <p className="mt-5">Par ailleurs, chaque newsletter envoyée par RBBM.Tech vous indique comment ne plus la recevoir.</p>
                    <p className="mt-5">Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou utilisation détournée des données à caractère personnel auxquelles ils accèdent.</p>
                    <p className="mt-5">Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou utilisation détournée des données à caractère personnel auxquelles ils accèdent.</p>
                    <p className="mt-5">Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou utilisation détournée des données à caractère personnel auxquelles ils accèdent.</p>
                    <p className="mt-5">Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou utilisation détournée des données à caractère personnel auxquelles ils accèdent.</p>
                    <p className="mt-5">Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou utilisation détournée des données à caractère personnel auxquelles ils accèdent.</p>
                    <p className="mt-5">Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou utilisation détournée des données à caractère personnel auxquelles ils accèdent.</p>
                    <p className="mt-5">Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou utilisation détournée des données à caractère personnel auxquelles ils accèdent.</p>
                    <p className="mt-5">Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou utilisation détournée des données à caractère personnel auxquelles ils accèdent.</p>
                </main>
            </div>
            <div className="p-4 md:w-1/3">
            <aside className="px-8 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h4 className="tracking-widest text-md title-font font-medium text-indigo-500 mb-3">CATEGORY </h4>
                <div className="w-full p-4 relative">
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    New Mac is here !
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                    The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...
                    </p>
                </div>
                <hr/>
                <div className="w-full p-4 relative">
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    New Mac is here !
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                    The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...
                    </p>
                </div>

            </aside>
            <aside className="mt-5 px-8 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <h4 className="tracking-widest text-md title-font font-medium text-indigo-500 mb-3">ADS </h4>
                <div className="w-full p-4 relative">
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    New Mac is here !
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                    The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...
                    </p>
                </div>
                <hr/>
                <div className="w-full p-4 relative">
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    New Mac is here !
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                    The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...
                    </p>
                </div>

            </aside>
            </div>
    </div>
                
      </section>
      <Footer/>
      </div>
  )
}

