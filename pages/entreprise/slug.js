import Nav from '../../components/nav'
import Footer from '../../components/footer'

export default function PostPage() {
  return (
    <div>
      <Nav />
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-8 py-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex">
                <div className="w-2/12">
                    <a href="#" className="flex items-center"><img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" className="mx-4 w-20 h-20 object-cover rounded hidden sm:block" /></a>
                </div>
                <div className="w-10/12">
                    
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-3xl text-gray-700 font-bold hover:underline">Airbnb</a>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="text-gray-500">Scale Up</h4>
                    </div>
                    <div className="flex justify-between">
                        <h4 className="text-gray-500">+2000 employés</h4>
                    </div>

                </div>
            </div>
            <div className="flex mt-8 mb-3 mx-5">
                <p className="text-gray-700 mr-5">Paris</p>
                <p className="text-gray-700 mr-5">Télétravail Partiel</p>
                <p className="text-gray-700 mr-5">Première expérience requise</p>
            </div>
            <hr/>
            <div className="flex my-5 mx-5">
                <p className="text-gray-700 mr-5">Taille de Entreprise</p>
                <p className="text-gray-700 mr-5">Industrie</p>
                <p className="text-gray-700 mr-5">Première expérience requise</p>
            </div>
            <hr/>
            <div className="my-5">
                <h2 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">A propos d'Apple</h2>
                <p className="py-2">Description longue récupérée de diverses sources</p>
                <ul className="py-2">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus augue sagittis erat</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
                <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl pharetra faucibus suspendisse ultrices dolor feugiat eget. Justo, arcu, pellentesque pulvinar quam. Tincidunt sed in scelerisque tempus montes, nisi, mauris ultrices facilisis. Varius fringilla amet, tellus faucibus amet sit nulla dignissim risus.</p>
            </div>
            <div className="my-5">
                <h2 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Medias</h2>
                <p className="py-2">Photos et videos provenant de différentes sources</p>
                <ul className="py-2">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus augue sagittis erat</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
                <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl pharetra faucibus suspendisse ultrices dolor feugiat eget. Justo, arcu, pellentesque pulvinar quam. Tincidunt sed in scelerisque tempus montes, nisi, mauris ultrices facilisis. Varius fringilla amet, tellus faucibus amet sit nulla dignissim risus.</p>
            </div>
            <div className="my-5">
                <h2 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Social Media activity</h2>
                <ul className="py-2">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus augue sagittis erat</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
            </div>


            <hr/>
            <div className="my-5">
                <h2 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Mon avis sur Apple</h2>
                <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus augue sagittis erat consectetur est. Blandit blandit nec mauris pulvinar. Lectus duis amet tortor, sit tincidunt. Rhoncus tincidunt imperdiet penatibus vitae risus, vitae. Blandit auctor justo nisl massa.</p>
                <ul className="py-2">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus augue sagittis erat</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
                <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl pharetra faucibus suspendisse ultrices dolor feugiat eget. Justo, arcu, pellentesque pulvinar quam. Tincidunt sed in scelerisque tempus montes, nisi, mauris ultrices facilisis. Varius fringilla amet, tellus faucibus amet sit nulla dignissim risus.</p>
            </div>
            <div className="my-5">
                <h2 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">A qui convient cet employeur</h2>
                <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus augue sagittis erat consectetur est. Blandit blandit nec mauris pulvinar. Lectus duis amet tortor, sit tincidunt. Rhoncus tincidunt imperdiet penatibus vitae risus, vitae. Blandit auctor justo nisl massa.</p>
                <ul className="py-2">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus augue sagittis erat</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
                <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl pharetra faucibus suspendisse ultrices dolor feugiat eget. Justo, arcu, pellentesque pulvinar quam. Tincidunt sed in scelerisque tempus montes, nisi, mauris ultrices facilisis. Varius fringilla amet, tellus faucibus amet sit nulla dignissim risus.</p>
            </div>

        </div>
      </section>
      <Footer/>
    </div>
  )
}
