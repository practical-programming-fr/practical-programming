
import Nav from '../components/nav'
import Footer from '../components/footer'
import PostHero from '../components/post/postHero'
import Author from '../components/post/author'
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
      <div >
      <Nav/>
      <section className="bg-white">
        <div className="lg:flex lg:flex-wrap justify-center h-full">
                <div className="flex-1 max-w-3xl">
                    <article className="px-8 py-8 bg-white dark:bg-gray-800">
                        <h1 className="text-5xl font-medium font-serif">5 Myths Holding Back Agile</h1>
                        <h4 className="mt-2 text-2xl font-light text-gray-500">This is an awesome subtitle about this awesome article</h4>
                        <div className="mt-5 flex justify-items-start">
                            <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" className="mx-4 w-14 h-14 object-cover rounded-full hidden sm:block" />
                            <div className='flex flex-col'>
                                <p className="text-gray-800 leading-7">Rayed Benbrahim</p>
                                <p className="text-gray-500 leading-7">12 Janvier 2021</p>
                            </div>
                            <div className="flex justify-self-end">
                                <p>T</p>
                                <p>L</p>
                                <p>Y</p>
                            </div>
                            
                        </div>
                        <p className="mt-8 tracking-widest text-md title-font text-indigo-500 mb-3">Catégorie</p>
                        <p className="mt-5 leading-7 text-lg text-gray-800">React est roi des framework front et, quoi qu’on dise de l’ascension de Vue, est encore loin d’être challengé.</p>
                        <p className="mt-5 leading-7 text-lg text-gray-800">Cet article n’a pas pour but de définir quel framework est le meilleur ou spéculer sur celui qui va dominer dans 5 ans. La question que je pose ici est:</p>
                        <blockquote className="wp-block-quote"><p>En tant que développeur JavaScript en 2020, ai-je besoin de savoir faire – au moins un peu  – de React?</p></blockquote>
                        <p className="mt-5 leading-7 text-lg text-gray-800">La réponse va dépendre de plusieurs facteurs. Suivant votre appétence et votre expérience actuelle sur les autres framework front-end.</p>
                        <p className="mt-5 leading-7 text-lg text-gray-800">D’après <a href="https://2019.stateofjs.com/front-end-frameworks/">l’étude State of JS 2019</a>, React garde la part du lion en terme de développeurs l’ayant utilisé et qui en sont satisfaits. Selon les développeurs interrogés, près de 72% l’ont déjà utilisé et l’utiliseraient à l’avenir. On remarque en revanche que côté Angular, plus d’un tiers des développeurs ayant répondu déclarent s’en être servi et ne souhaitent plus s’en servir à l’avenir.</p>
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
                        <p className="mt-5 leading-7 text-lg text-gray-800">React est roi des framework front et, quoi qu&#8217;on dise de l&#8217;ascension de Vue, est encore loin d&#8217;être challengé.</p>
<p className="mt-5 leading-7 text-lg text-gray-800">Cet article n&#8217;a pas pour but de définir quel framework est le meilleur ou spéculer sur celui qui va dominer dans 5 ans. La question que je pose ici est:</p>
<blockquote ><p className="mt-5 font-thin leading-7 text-lg text-gray-800">En tant que développeur JavaScript en 2020, ai-je besoin de savoir faire &#8211; au moins un peu  &#8211; de React?</p></blockquote>
<p className="mt-5 leading-7 text-lg text-gray-800">La réponse va dépendre de plusieurs facteurs. Suivant votre appétence et votre expérience actuelle sur les autres framework front-end.</p>
<p className="mt-5 leading-7 text-lg text-gray-800">D&#8217;après <a href="https://2019.stateofjs.com/front-end-frameworks/">l&#8217;étude State of JS 2019</a>, React garde la part du lion en terme de développeurs l&#8217;ayant utilisé et qui en sont satisfaits. Selon les développeurs interrogés, près de 72% l&#8217;ont déjà utilisé et l&#8217;utiliseraient à l&#8217;avenir. On remarque en revanche que côté Angular, plus d&#8217;un tiers des développeurs ayant répondu déclarent s&#8217;en être servi et ne souhaitent plus s&#8217;en servir à l&#8217;avenir.</p>
<p className="mt-5 leading-7 text-lg text-gray-800">Si on compare les résultats de 2019 avec  ceux de l&#8217;année précédente:</p>
<p className="mt-5 leading-7 text-lg text-gray-800">On remarque que l&#8217;intérêt qu&#8217;ont pu porter les développeurs à Vue en 2018 &#8211; où 46% déclaraient ne jamais s&#8217;en être servi mais aimeraient essayer &#8211; s&#8217;est confirmé en 2019 puisque la part de développeur satisfait est passée de 28,8% en 2018 à plus de 40% en 2019.</p>
<p className="mt-5 leading-7 text-lg text-gray-800">L&#8217;effet de mode quant à lui est passé de Vue.js à Svelte où, en 2019 44% répondent en avoir entendu parler et vouloir essayer.</p>
<p className="mt-5 leading-7 text-lg text-gray-800">Malgré ces framework montants, <strong>React a continué sa croissance puisque les résultats affichent une hausse dans la catégorie développeur l&#8217;ayant utilisé et satisfait </strong>(rouge foncé)<strong> ainsi que dans la catégorie développeur non expérimenté mais curieux d&#8217;essayer </strong>(Bleu-vert foncé)<strong>.</strong></p>
<h2 className="text-2xl font-bold ">Pourquoi devrais-je apprendre React ?</h2>
<p className="mt-5 leading-7 text-lg text-gray-800">Je suis développeur JavaScript et j&#8217;ai une claire préférence pour le Back-end. Je passe beaucoup de temps à<a href="https://practicalprogramming.fr/monter-en-competences-efficacement/"> étudier et à mettre en pratique des concepts</a>, utiliser des outils qui me permettent d&#8217;être plus compétent en tant que développeur Back-end. </p>
<p className="mt-5 leading-7 text-lg text-gray-800">Côté Front-end, après quelques années d&#8217;Angular.js et un peu d&#8217;Angular, j&#8217;ai décidé de me mettre à Vue.js. J&#8217;ai remarqué que c&#8217;était le framework tendance et j&#8217;espérais miser sur l&#8217;avenir. </p>
<blockquote><p lang="fr" dir="ltr">Il est clair que React est la librairie dominante côté Frontend sur le marché Français aussi. En termes d&#8217;emploi, il y a beaucoup plus d&#8217;offres qui demandent des compétences en React. Faut-il s&#8217;initier à React en tant que dev JS ? <a href="https://t.co/WxTxKfWBxc">https://t.co/WxTxKfWBxc</a></p>— Rayed Benbrahim (@RayedBenbrahim) <a href="https://twitter.com/RayedBenbrahim/status/1327180988494045184?ref_src=twsrc%5Etfw">November 13, 2020</a></blockquote> <script async="" src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
<p className="mt-5 leading-7 text-lg text-gray-800">Sauf qu&#8217;en terme professionnel, les jobs et les missions étaient rarement purement Back-end Node.js. Il y avait quelques opportunités Node / Vue mais le gros de la demande se trouve sur la stack Node / React.</p>
<p className="mt-5 leading-7 text-lg text-gray-800">De plus, je me suis récemment intéressé aux nouveaux frameworks SSR &#8211; Gatsby, <a href="https://practicalprogramming.fr/debuter-avec-next-js/">Next.js</a> et Nuxt.js &#8211; et là encore, ceux basés sur React dominent.</p>
<h2 className="text-2xl font-bold ">Je suis développeur Full-Stack</h2>
<h3 className="text-lg font-bold font-serif">Je débute dans le dev, dois-je choisir d&#8217;apprendre React?</h3>
<p className="mt-5 leading-7 text-lg text-gray-800">La dominance de React se reflète également sur le marché de l&#8217;emploi.<a href="https://practicalprogramming.fr/devenir-developpeur"> En tant que développeur débutant </a>et jusqu&#8217;à vos deux premières années d&#8217;expérience, <strong>ajouter la corde React à son arc ne peut être que bénéfique.</strong></p>
<p className="mt-5 leading-7 text-lg text-gray-800"><strong>Attention toutefois à veiller à ce que dans ton bassin d&#8217;emploi tu restes pertinent.</strong> React est dominant de manière globale mais il se peut que tu résides dans une région où les employeurs ont leurs projets en JAVA/Angular ou en Laravel/Vue. C&#8217;est pourquoi avant de vous lancer dans l&#8217;apprentissage poussé d&#8217;une techno, je vous invite à vous demander &#8220;pourquoi&#8221; vous le faites. Si c&#8217;est dans le but de trouver un emploi ou avoir un profil attractif, attention à bien faire cette recherche.</p>
<p className="mt-5 leading-7 text-lg text-gray-800">Si en revanche c&#8217;est pour lancer votre propre projet, React est un bon choix car la richesse de son écosystème vous permettra de trouver facilement des ressources pour apprendre React et dans un second temps d&#8217;autres développeurs ayant de l&#8217;expérience pour contribuer à votre projet.</p>
<h3 className="textold ">J&#8217;ai déjà de l&#8217;experience significative dans un autre Framework</h3>
<p className="mt-5 leading-7 text-lg text-gray-800">En tant que développeur Full-Stack, <strong>il est important de comprendre les stacks les plus utilisées</strong>, à la fois de manière globale, nationale et régionale. En effet si vous travaillez dans une boîte qui fait du Ruby on Rails / Angular, mais que dans votre région les autres potentiels employeurs utilisent plutôt du Ruby / React ou du JAVA / Angular, vous allez devoir sûrement devoir faire un choix entre changer de framework Front-end ou Framework Back-end.</p>
<p className="mt-5 leading-7 text-lg text-gray-800"><strong>Suivant vos préférences, à vous de voir si vous préférez choisir votre technologie pilier côté front, quitte à changer de techno côté back, ou l&#8217;inverse</strong>. Attention toutefois à <strong>veiller à ce que votre technologie pilier que vous aurez choisi reste en demande</strong>. En effet si vous aviez choisi Ember.js ou Backbone.js comme pilier et que vous refusiez d&#8217;essayer autre chose sous prétexte que vous êtes bons là-dessus, vous vous limitez à un nombre d&#8217;entreprises et de projets legacy.</p>
<p className="mt-5 leading-7 text-lg text-gray-800">Il peut être pertinent professionnellement de devenir expert d&#8217;une techno legacy car il y aura probablement toujours un besoin &#8211; <em>quoi que ce point peut être remis en question suivant l&#8217;industrie dans laquelle il est employé. La banque et assurance auront plus tendance à se fixer sur une techno très longtemps qu&#8217;un éditeur SaaS.</em> &#8211; mais même avec cette stratégie, c&#8217;est pertinent de s&#8217;intéresser à une nouvelle techno en guise de back-up</p>
<h2 className="textbold ">Je suis développeur F8ont-end Vue ou Angular</h2>
<p className="mt-5 leading-7 text-lg text-gray-800">En tant que développeur Front-end confirmé ou senior, il est beaucoup plus difficile de renoncer à son expertise pour apprendre un nouveau framework, d&#8217;autant plus qu&#8217;il semble y en avoir de nouveaux chaque semaine.</p>
<p className="mt-5 leading-7 text-lg text-gray-800">Sur le marché Français, la demande de développeurs Front-End, que ce soit pour Vue, Angular ou React, est grandissante. Cependant, Angular va croître plus lentement que les deux autres et se retrouver plus souvent dans des projets de grands groupes.</p>
<p className="mt-5 leading-7 text-lg text-gray-800">A ce niveau rien ne vous oblige à changer de framework front, tant qu&#8217;il y a de la  demande dans votre région pour votre compétence.  Étant donné qu&#8217;on ne sait jamais de quoi la vie est faite et que vous pourriez, pour une raison ou pour une autre, être amené à devoir changer de région ou de techno, je vous suggérerais quand même de prendre le temps de découvrir React &#8211; <em>sans jugement</em> &#8211; simplement pour vous savoir ce que c&#8217;est et comment il fonctionne. En tant que senior, cette découverte devrait être plutôt rapide et  pourra vous servir au moins pour en parler si jamais l&#8217;occasion se présentait.</p>
<h2 className="text-2xl font-bold ">Je suis développeur Back-end exclusivement</h2>
<p className="mt-5 leading-7 text-lg text-gray-800">Pour le cas des développeurs back-end, je distingue deux catégories. Les développeurs back-end qui ont fait plusieurs langages back-end et qui se sont retrouvés sur du Node.js</p>
<h3 className="text-lg font-bold ">Je développe sur Node.js mais aussi d&#8217;autres langages back-end</h3>
<p className="mt-5 leading-7 text-lg text-gray-800">Dans le cas où vous êtes exclusivement développeur back-end et vous n&#8217;avez aucun problème pour passer du Node à Java ou à un autre langage backend, effectivement apprendre React n&#8217;est pas forcément nécessaire. Si vous ne portez pas React dans votre cœur, faites comme bon vous semble et faite votre front-end comme vous l&#8217;entendez, ou n&#8217;en faites pas du tout.</p>
<p className="mt-5 leading-7 text-lg text-gray-800">Votre profil est probablement déjà attractif comme il est et ajouter la corde React n&#8217;est pas forcément essentiel.</p>
<h3 className="text-lg font-bold ">Je suis développeur back-end mais je fais uniquement du Node</h3>
<p className="mt-5 leading-7 text-lg text-gray-800">Dans ce cas, j&#8217;ai tout de même tendance à prendre position sur le fait que savoir manipuler un framework front est essentiel pour distinguer votre profil, alors tant qu&#8217;à faire pourquoi ne pas choisir celui le plus demandé?</p>
<h2 className="text-2xl font-bold">Pour miser sur le présent plutôt que prédire l&#8217;avenir</h2>
<p className="mt-5 leading-7 text-lg text-gray-800"><a href="https://practicalprogramming.fr/pourquoi-next-js/">Apprendre React est le choix que je fais</a> afin de rester pertinent sur le marché du développement web en 2020. Contrairement à mon choix initial, qui se portait sur Vue, je pense qu&#8217;il est plus pertinent de miser sur une techno qui a déjà une position dominante, quitte à changer plus tard.</p>
                    
                    </article>
                    <Author/>
                </div>
                <div className="p-4 max-w-lg">
                    <aside className="px-8 pt-8 bg-white dark:bg-gray-800 rounded-lg">
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
                    <aside className="px-8 py-8 bg-white dark:bg-gray-800 rounded-lg min-h-40 max-w-lg lg:fixed z-0">
                    <div className="invisible md:visible mb-5">
                    <h4 className="tracking-widest text-md title-font font-medium text-indigo-500 mb-3">PARTAGER </h4>
                    <a className="mt-2 text-gray-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                    </a>
                    <a className="mt-10 text-gray-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                    </a>
                    <a className="mt-10 text-gray-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                            <circle cx={4} cy={4} r={2} stroke="none" />
                        </svg>
                    </a>
                    <a className="mt-10 text-gray-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                    </a>
                </div>
                    <h4 className="tracking-widest text-md title-font font-medium text-indigo-500 mb-3">ADS </h4>
                    <div className="w-full p-4">
                        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        New Mac is here !
                        </p>
                        <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on...
                        </p>
                    </div>
                    <hr/>
                    <div className="w-full p-4 ">
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

