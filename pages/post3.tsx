import Nav from '../components/nav'
import Footer from '../components/footer'
import Prism from 'prismjs'
import { useEffect } from 'react'

export default function PostPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll()
    }
  }, [])
  return (
    <div>
      <Nav />
      <section>
        <div
          className="bg-no-repeat bg-center bg-fixed bg-cover bg-gray-200"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('../hero.jpg')`,
            height: '80vh',
          }}
        >
          <div>
            <h1 className="text-center text-2xl lg:text-5xl font-bold font-serif title-font text-white pt-20">
              Est-ce qu’apprendre React est essentiel pour un développeur JavaScript en 2020?
            </h1>
          </div>
        </div>
        <div className="bg-gray-100 lg:flex lg:flex-wrap lg:justify-center">
          <div className="p-4 max-w-6xl lg:-mt-48">
            <main className="px-8 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
              <p className="tracking-widest text-md title-font text-indigo-500 mb-3">Catégorie</p>
              <h1 className="sm:text-3xl text-2xl font-bold title-font font-serif mb-2 text-gray-900">
                Title of awesome blog post
              </h1>
              <p className="mt-5">Le Propriétaire du site et Responsable Publication est : </p>
              <ul className="mt-5">
                <li>Rayed Benbrahim</li>
                <li>RBBM.TECH</li>
                <li>SIRET 84768358800010</li>
                <li>128 Rue de la Boétie</li>
                <li>75008 Paris</li>
              </ul>
              <p className="mt-5 font-thin leading-7 text-lg text-gray-800">
                L’Utilisateur, personne physique, est informé que les informations qu’il communique
                par le biais du Site sur la base, soit de mesures précontractuelles ou de
                l’exécution d’un contrat, soit de l’intérêt légitime poursuivi par RBBM.Tech afin de
                pouvoir répondre à ses demandes, sont destinées aux services habilités de RBBM.Tech
                à des fins de gestion des relations clients et prospects.
              </p>
              <p className="mt-5 font-thin leading-7 text-lg text-gray-800">
                Pendant la consultation du Site ou l’accès aux services en ligne de RBBM.Tech,
                l’Utilisateur peut être sollicité pour communiquer volontairement certaines données
                personnelles (nom, prénom, société, courriel, email, numéro de téléphone,
                identifiants). Les formulaires de collecte présents sur le Site précisent notamment
                la finalité, les destinataires, la durée de conservation et le caractère obligatoire
                ou facultatif des données demandées par un astérisque.
              </p>
              <p className="mt-5 font-thin leading-7 text-lg text-gray-800">
                Les données personnelles collectées et traitées sur le Site sont protégées par des
                mesures techniques et organisationnelles appropriées afin de garantir un niveau de
                sécurité adapté au risque.
              </p>
              <p className="mt-5 font-thin leading-7 text-lg text-gray-800">
                L’Utilisateur du Site est informé qu’il dispose d’un droit d’accès, de
                rectification, de suppression, de limitation, de portabilité (lorsqu’il s’applique)
                et d’opposition sur les données le concernant. L’Utilisateur peut exercer ces droits
                en s’adressant au service DPO de RBBM.Tech à l’adresse rgpd@rbbm.tech .
              </p>
              <p className="mt-5 font-thin leading-7 text-lg text-gray-800">
                L’Utilisateur dispose également du droit d’introduire une réclamation auprès de la
                CNIL.
              </p>

              <pre className="container language-javascript important-overflow-hidden text-sm rounded-lg shadow-lg">
                <code className="">
                  {`<!-- Hello World -->
    function() {
        console.log('hello world')
    }
    `}
                </code>
              </pre>
              <p className="mt-5 font-thin leading-7 text-lg text-gray-800">
                Par ailleurs, chaque newsletter envoyée par RBBM.Tech vous indique comment ne plus
                la recevoir.
              </p>
              <p className="mt-5 font-thin leading-7 text-lg text-gray-800">
                Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi
                Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou
                utilisation détournée des données à caractère personnel auxquelles ils accèdent.
              </p>
              <p className="mt-5 font-thin leading-7 text-lg text-gray-800">
                Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi
                Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou
                utilisation détournée des données à caractère personnel auxquelles ils accèdent.
              </p>
              <p className="mt-5 font-thin leading-7 text-lg text-gray-800">
                Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi
                Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou
                utilisation détournée des données à caractère personnel auxquelles ils accèdent.
              </p>
              <p className="mt-5 font-thin leading-7 text-lg text-gray-800">
                Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi
                Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou
                utilisation détournée des données à caractère personnel auxquelles ils accèdent.
              </p>
              <p className="mt-5 font-thin leading-7 text-lg text-gray-800">
                Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi
                Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou
                utilisation détournée des données à caractère personnel auxquelles ils accèdent.
              </p>
              <p className="mt-5 font-thin leading-7 text-lg text-gray-800">
                Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi
                Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou
                utilisation détournée des données à caractère personnel auxquelles ils accèdent.
              </p>
              <p className="mt-5 font-thin leading-7 text-lg text-gray-800">
                Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi
                Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou
                utilisation détournée des données à caractère personnel auxquelles ils accèdent.
              </p>
              <p className="mt-5 font-thin leading-7 text-lg text-gray-800">
                Les Utilisateurs du Site sont tenus de respecter les dispositions de la loi
                Informatique et Libertés et du RGPD, notamment en s’abstenant de toute collecte ou
                utilisation détournée des données à caractère personnel auxquelles ils accèdent.
              </p>
            </main>
          </div>
          <div className="p-4 max-w-lg">
            <aside className="px-8 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
              <h4 className="tracking-widest text-md title-font font-medium text-indigo-500 mb-3">
                CATEGORY{' '}
              </h4>
              <div className="w-full p-4 relative">
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  New Mac is here !
                </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  The new supermac is here, 543 cv and 140 000$. This is best racing computer about
                  7 years on...
                </p>
              </div>
              <hr />
              <div className="w-full p-4 relative">
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  New Mac is here !
                </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  The new supermac is here, 543 cv and 140 000$. This is best racing computer about
                  7 years on...
                </p>
              </div>
            </aside>
            <aside className="mt-5 px-8 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
              <h4 className="tracking-widest text-md title-font font-medium text-indigo-500 mb-3">
                ADS{' '}
              </h4>
              <div className="w-full p-4 relative">
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  New Mac is here !
                </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  The new supermac is here, 543 cv and 140 000$. This is best racing computer about
                  7 years on...
                </p>
              </div>
              <hr />
              <div className="w-full p-4 relative">
                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                  New Mac is here !
                </p>
                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                  The new supermac is here, 543 cv and 140 000$. This is best racing computer about
                  7 years on...
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
