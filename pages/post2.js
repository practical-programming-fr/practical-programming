
import Nav from '../components/nav'
import Footer from '../components/footer'
import Prism from "prismjs";
import Image from 'next/image'
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
        <div className="bg-no-repeat bg-center bg-fixed bg-cover bg-gray-200" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('../hero.jpg')`, height:'50vh' }}>
            <div>
                <h1 className="text-center text-2xl lg:text-3xl font-bold font-serif title-font text-white pt-20">Est-ce qu’apprendre React est essentiel pour un développeur JavaScript en 2020?</h1>

            </div>
        </div>    
        <div className="bg-gray-100 lg:flex lg:flex-wrap lg:justify-center">
                <div className="p-4 max-w-6xl lg:-mt-48">
                    <main className="px-8 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                        <p className="tracking-widest text-md title-font text-indigo-500 mb-3">Catégorie</p>
                        <p className="mt-5 font-thin leading-7 text-lg text-gray-800">React est roi des framework front et, quoi qu’on dise de l’ascension de Vue, est encore loin d’être challengé.</p>
                        <p className="mt-5 font-thin leading-7 text-lg text-gray-800">Cet article n’a pas pour but de définir quel framework est le meilleur ou spéculer sur celui qui va dominer dans 5 ans. La question que je pose ici est:</p>
                        <blockquote className="wp-block-quote"><p>En tant que développeur JavaScript en 2020, ai-je besoin de savoir faire – au moins un peu  – de React?</p></blockquote>
                        <p className="mt-5 font-thin leading-7 text-lg text-gray-800">La réponse va dépendre de plusieurs facteurs. Suivant votre appétence et votre expérience actuelle sur les autres framework front-end.</p>
                        <p className="mt-5 font-thin leading-7 text-lg text-gray-800">D’après <a href="https://2019.stateofjs.com/front-end-frameworks/">l’étude State of JS 2019</a>, React garde la part du lion en terme de développeurs l’ayant utilisé et qui en sont satisfaits. Selon les développeurs interrogés, près de 72% l’ont déjà utilisé et l’utiliseraient à l’avenir. On remarque en revanche que côté Angular, plus d’un tiers des développeurs ayant répondu déclarent s’en être servi et ne souhaitent plus s’en servir à l’avenir.</p>
                        <Image width={1024} height={534} src="https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-frontend-2019-1-1024x534.png" alt="React domine l'intérêt et l'utilisation dans les framework JavaScript en 2019"/>
                        
                        <pre className='container language-javascript important-overflow-hidden text-sm rounded-lg shadow-lg'>
                            <code className="">
    {`<!-- Hello World -->
    function() {
        console.log('hello world')
    }
    `}
                            </code>
                        </pre>
                        <p className="mt-5 font-thin leading-7 text-lg text-gray-800">React est roi des framework front et, quoi qu&#8217;on dise de l&#8217;ascension de Vue, est encore loin d&#8217;être challengé.</p>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">Cet article n&#8217;a pas pour but de définir quel framework est le meilleur ou spéculer sur celui qui va dominer dans 5 ans. La question que je pose ici est:</p>
<blockquote class="wp-block-quote"><p className="mt-5 font-thin leading-7 text-lg text-gray-800">En tant que développeur JavaScript en 2020, ai-je besoin de savoir faire &#8211; au moins un peu  &#8211; de React?</p></blockquote>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">La réponse va dépendre de plusieurs facteurs. Suivant votre appétence et votre expérience actuelle sur les autres framework front-end.</p>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">D&#8217;après <a href="https://2019.stateofjs.com/front-end-frameworks/">l&#8217;étude State of JS 2019</a>, React garde la part du lion en terme de développeurs l&#8217;ayant utilisé et qui en sont satisfaits. Selon les développeurs interrogés, près de 72% l&#8217;ont déjà utilisé et l&#8217;utiliseraient à l&#8217;avenir. On remarque en revanche que côté Angular, plus d&#8217;un tiers des développeurs ayant répondu déclarent s&#8217;en être servi et ne souhaitent plus s&#8217;en servir à l&#8217;avenir.</p>
<figure class="wp-block-image size-large"><img width="1024" height="534" src="https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-frontend-2019-1-1024x534.png" alt="React domine l'intérêt et l'utilisation dans les framework JavaScript en 2019" class="wp-image-3714" srcset="https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-frontend-2019-1-1024x534.png 1024w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-frontend-2019-1-300x156.png 300w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-frontend-2019-1-768x400.png 768w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-frontend-2019-1-1536x801.png 1536w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-frontend-2019-1-2048x1067.png 2048w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-frontend-2019-1-370x193.png 370w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-frontend-2019-1-270x141.png 270w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-frontend-2019-1-570x297.png 570w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-frontend-2019-1-740x386.png 740w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-frontend-2019-1-150x78.png 150w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">Si on compare les résultats de 2019 avec  ceux de l&#8217;année précédente:</p>
<figure class="wp-block-image size-large"><img width="1024" height="449" src="https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-front-2018-1024x449.png" alt="" class="wp-image-3717" srcset="https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-front-2018-1024x449.png 1024w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-front-2018-300x132.png 300w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-front-2018-768x337.png 768w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-front-2018-1536x674.png 1536w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-front-2018-370x162.png 370w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-front-2018-270x118.png 270w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-front-2018-570x250.png 570w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-front-2018-740x325.png 740w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-front-2018-150x66.png 150w, https://practicalprogramming.fr/wp-content/uploads/2020/09/overview-front-2018.png 1796w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">On remarque que l&#8217;intérêt qu&#8217;ont pu porter les développeurs à Vue en 2018 &#8211; où 46% déclaraient ne jamais s&#8217;en être servi mais aimeraient essayer &#8211; s&#8217;est confirmé en 2019 puisque la part de développeur satisfait est passée de 28,8% en 2018 à plus de 40% en 2019.</p>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">L&#8217;effet de mode quant à lui est passé de Vue.js à Svelte où, en 2019 44% répondent en avoir entendu parler et vouloir essayer.</p>
<figure class="wp-block-image size-large"><img width="1024" height="414" src="https://practicalprogramming.fr/wp-content/uploads/2020/09/ranking-frontend-1-1024x414.png" alt="React reprend la tête du classement en 2019" class="wp-image-3715" srcset="https://practicalprogramming.fr/wp-content/uploads/2020/09/ranking-frontend-1-1024x414.png 1024w, https://practicalprogramming.fr/wp-content/uploads/2020/09/ranking-frontend-1-300x121.png 300w, https://practicalprogramming.fr/wp-content/uploads/2020/09/ranking-frontend-1-768x311.png 768w, https://practicalprogramming.fr/wp-content/uploads/2020/09/ranking-frontend-1-1536x621.png 1536w, https://practicalprogramming.fr/wp-content/uploads/2020/09/ranking-frontend-1-2048x829.png 2048w, https://practicalprogramming.fr/wp-content/uploads/2020/09/ranking-frontend-1-370x150.png 370w, https://practicalprogramming.fr/wp-content/uploads/2020/09/ranking-frontend-1-270x109.png 270w, https://practicalprogramming.fr/wp-content/uploads/2020/09/ranking-frontend-1-570x231.png 570w, https://practicalprogramming.fr/wp-content/uploads/2020/09/ranking-frontend-1-740x299.png 740w, https://practicalprogramming.fr/wp-content/uploads/2020/09/ranking-frontend-1-150x61.png 150w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">Malgré ces framework montants, <strong>React a continué sa croissance puisque les résultats affichent une hausse dans la catégorie développeur l&#8217;ayant utilisé et satisfait </strong>(rouge foncé)<strong> ainsi que dans la catégorie développeur non expérimenté mais curieux d&#8217;essayer </strong>(Bleu-vert foncé)<strong>.</strong></p>
<h2 className="text-2xl font-bold font-serif">Pourquoi devrais-je apprendre React ?</h2>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">Je suis développeur JavaScript et j&#8217;ai une claire préférence pour le Back-end. Je passe beaucoup de temps à<a href="https://practicalprogramming.fr/monter-en-competences-efficacement/"> étudier et à mettre en pratique des concepts</a>, utiliser des outils qui me permettent d&#8217;être plus compétent en tant que développeur Back-end. </p>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">Côté Front-end, après quelques années d&#8217;Angular.js et un peu d&#8217;Angular, j&#8217;ai décidé de me mettre à Vue.js. J&#8217;ai remarqué que c&#8217;était le framework tendance et j&#8217;espérais miser sur l&#8217;avenir. </p>
<blockquote class="twitter-tweet"><p lang="fr" dir="ltr">Il est clair que React est la librairie dominante côté Frontend sur le marché Français aussi. En termes d&#8217;emploi, il y a beaucoup plus d&#8217;offres qui demandent des compétences en React. Faut-il s&#8217;initier à React en tant que dev JS ? <a href="https://t.co/WxTxKfWBxc">https://t.co/WxTxKfWBxc</a></p>— Rayed Benbrahim (@RayedBenbrahim) <a href="https://twitter.com/RayedBenbrahim/status/1327180988494045184?ref_src=twsrc%5Etfw">November 13, 2020</a></blockquote> <script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">Sauf qu&#8217;en terme professionnel, les jobs et les missions étaient rarement purement Back-end Node.js. Il y avait quelques opportunités Node / Vue mais le gros de la demande se trouve sur la stack Node / React.</p>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">De plus, je me suis récemment intéressé aux nouveaux frameworks SSR &#8211; Gatsby, <a href="https://practicalprogramming.fr/debuter-avec-next-js/">Next.js</a> et Nuxt.js &#8211; et là encore, ceux basés sur React dominent.</p>
<h2 className="text-2xl font-bold font-serif">Je suis développeur Full-Stack</h2>
<h3 className="text-lg font-bold font-serif">Je débute dans le dev, dois-je choisir d&#8217;apprendre React?</h3>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">La dominance de React se reflète également sur le marché de l&#8217;emploi.<a href="https://practicalprogramming.fr/devenir-developpeur"> En tant que développeur débutant </a>et jusqu&#8217;à vos deux premières années d&#8217;expérience, <strong>ajouter la corde React à son arc ne peut être que bénéfique.</strong></p>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800"><strong>Attention toutefois à veiller à ce que dans ton bassin d&#8217;emploi tu restes pertinent.</strong> React est dominant de manière globale mais il se peut que tu résides dans une région où les employeurs ont leurs projets en JAVA/Angular ou en Laravel/Vue. C&#8217;est pourquoi avant de vous lancer dans l&#8217;apprentissage poussé d&#8217;une techno, je vous invite à vous demander &#8220;pourquoi&#8221; vous le faites. Si c&#8217;est dans le but de trouver un emploi ou avoir un profil attractif, attention à bien faire cette recherche.</p>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">Si en revanche c&#8217;est pour lancer votre propre projet, React est un bon choix car la richesse de son écosystème vous permettra de trouver facilement des ressources pour apprendre React et dans un second temps d&#8217;autres développeurs ayant de l&#8217;expérience pour contribuer à votre projet.</p>
<h3 className="text-lg font-bold font-serif">J&#8217;ai déjà de l&#8217;experience significative dans un autre Framework</h3>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">En tant que développeur Full-Stack, <strong>il est important de comprendre les stacks les plus utilisées</strong>, à la fois de manière globale, nationale et régionale. En effet si vous travaillez dans une boîte qui fait du Ruby on Rails / Angular, mais que dans votre région les autres potentiels employeurs utilisent plutôt du Ruby / React ou du JAVA / Angular, vous allez devoir sûrement devoir faire un choix entre changer de framework Front-end ou Framework Back-end.</p>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800"><strong>Suivant vos préférences, à vous de voir si vous préférez choisir votre technologie pilier côté front, quitte à changer de techno côté back, ou l&#8217;inverse</strong>. Attention toutefois à <strong>veiller à ce que votre technologie pilier que vous aurez choisi reste en demande</strong>. En effet si vous aviez choisi Ember.js ou Backbone.js comme pilier et que vous refusiez d&#8217;essayer autre chose sous prétexte que vous êtes bons là-dessus, vous vous limitez à un nombre d&#8217;entreprises et de projets legacy.</p>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">Il peut être pertinent professionnellement de devenir expert d&#8217;une techno legacy car il y aura probablement toujours un besoin &#8211; <em>quoi que ce point peut être remis en question suivant l&#8217;industrie dans laquelle il est employé. La banque et assurance auront plus tendance à se fixer sur une techno très longtemps qu&#8217;un éditeur SaaS.</em> &#8211; mais même avec cette stratégie, c&#8217;est pertinent de s&#8217;intéresser à une nouvelle techno en guise de back-up</p>
<h2 className="text-2xl font-bold font-serif">Je suis développeur Front-end Vue ou Angular</h2>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">En tant que développeur Front-end confirmé ou senior, il est beaucoup plus difficile de renoncer à son expertise pour apprendre un nouveau framework, d&#8217;autant plus qu&#8217;il semble y en avoir de nouveaux chaque semaine.</p>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">Sur le marché Français, la demande de développeurs Front-End, que ce soit pour Vue, Angular ou React, est grandissante. Cependant, Angular va croître plus lentement que les deux autres et se retrouver plus souvent dans des projets de grands groupes.</p>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">A ce niveau rien ne vous oblige à changer de framework front, tant qu&#8217;il y a de la  demande dans votre région pour votre compétence.  Étant donné qu&#8217;on ne sait jamais de quoi la vie est faite et que vous pourriez, pour une raison ou pour une autre, être amené à devoir changer de région ou de techno, je vous suggérerais quand même de prendre le temps de découvrir React &#8211; <em>sans jugement</em> &#8211; simplement pour vous savoir ce que c&#8217;est et comment il fonctionne. En tant que senior, cette découverte devrait être plutôt rapide et  pourra vous servir au moins pour en parler si jamais l&#8217;occasion se présentait.</p>
<h2 className="text-2xl font-bold font-serif">Je suis développeur Back-end exclusivement</h2>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">Pour le cas des développeurs back-end, je distingue deux catégories. Les développeurs back-end qui ont fait plusieurs langages back-end et qui se sont retrouvés sur du Node.js</p>
<h3 className="text-lg font-bold font-serif">Je développe sur Node.js mais aussi d&#8217;autres langages back-end</h3>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">Dans le cas où vous êtes exclusivement développeur back-end et vous n&#8217;avez aucun problème pour passer du Node à Java ou à un autre langage backend, effectivement apprendre React n&#8217;est pas forcément nécessaire. Si vous ne portez pas React dans votre cœur, faites comme bon vous semble et faite votre front-end comme vous l&#8217;entendez, ou n&#8217;en faites pas du tout.</p>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">Votre profil est probablement déjà attractif comme il est et ajouter la corde React n&#8217;est pas forcément essentiel.</p>
<h3 className="text-lg font-bold font-serif">Je suis développeur back-end mais je fais uniquement du Node</h3>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800">Dans ce cas, j&#8217;ai tout de même tendance à prendre position sur le fait que savoir manipuler un framework front est essentiel pour distinguer votre profil, alors tant qu&#8217;à faire pourquoi ne pas choisir celui le plus demandé?</p>
<h2 className="text-2xl font-bold font-serif">Pour miser sur le présent plutôt que prédire l&#8217;avenir</h2>
<p className="mt-5 font-thin leading-7 text-lg text-gray-800"><a href="https://practicalprogramming.fr/pourquoi-next-js/">Apprendre React est le choix que je fais</a> afin de rester pertinent sur le marché du développement web en 2020. Contrairement à mon choix initial, qui se portait sur Vue, je pense qu&#8217;il est plus pertinent de miser sur une techno qui a déjà une position dominante, quitte à changer plus tard.</p>
                    </main>
                </div>
                <div className="p-4 max-w-lg">
                    <aside className="px-8 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
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
                    <aside className="mt-5 px-8 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
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

