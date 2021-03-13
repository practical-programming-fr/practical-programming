import Nav from '../components/nav'
import Footer from '../components/footer'
import { NextSeo } from 'next-seo'

const Cookies: React.FC = () => {
  return (
    <div>
      <NextSeo
        title="Gestion des Cookies - Practical Programming"
        description="Politique de gestion de cookies pour Practical Programming "
      />
      <Nav />
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-8 py-5 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-md">
          <h1 className="text-4xl my-5">Gestion des cookies</h1>
          <p className="mb-5">
            Ce site utilise uniquement des cookies de session et d&#8217;analyse de donnée de
            navigation.
          </p>
          <p className="mb-5">
            Seuls les cookies nécessaires à l’identification de l’Utilisateur pour accéder à un
            service en ligne nécessitant une authentification sont enregistrés sur le terminal de
            l’Utilisateur (ordinateur, tablette, smartphone).
          </p>
          <p className="mb-5">
            Les informations de session ainsi obtenues par les cookies sont enregistrées sur le
            serveur qui héberge le Site qui est situé en France chez&nbsp;IONOS.
          </p>
          <p className="mb-5">
            Ces cookies sont conservés 13 mois à compter de la dernière connexion à un service en
            ligne nécessitant une authentification.
          </p>
          <p className="mb-5">
            L’Utilisateur peut configurer son navigateur pour accepter ou rejeter tous les cookies,
            ou pour être prévenu lorsqu’un cookie est installé de la façon suivante :
          </p>
          <ul className="mb-5 list-disc list-inside px-5">
            <li>
              Pour&nbsp;Mozilla Firefox&nbsp;: Menu “outil ” puis “Options” /’icône “vie privée”
              /menu “cookie” puis sélection de l’option appropriée
            </li>
            <li>
              Pour&nbsp;Microsoft Internet Explorer&nbsp;: Menu “Outils” / “Options Internet” /
              ‘onglet “Confidentialité”/ selection du niveau souhaité
            </li>
            <li>
              Pour&nbsp;Google Chrome&nbsp;: Menu “Paramètres &gt; Afficher les paramètres avancés
              &gt; Confidentialité &gt; Paramètre de contenus” puis sélection des options
              appropriées
            </li>
            <li>
              Pour Safari&nbsp;&gt; Préférences, cliquez sur Confidentialité, puis effectuez l’une
              des opérations&nbsp;proposées
            </li>
          </ul>
          <p className="mb-5">
            Le refus des cookies de session rendra indisponible l’accès des services nécessitant une
            connexion des contributeurs et administrateurs
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Cookies
