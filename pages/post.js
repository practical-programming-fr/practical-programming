import Nav from '../components/nav'
import Footer from '../components/footer'

export default function PostPage() {
  return (
    <div>
      <Nav />
      <div className="container max-w-4xl mx-auto md:flex items-start pt-5 pb-2 px-12 md:px-0">
          <p className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">Catégorie</p>
      </div>
      <div className="container max-w-4xl mx-auto md:flex items-start pb-2 px-12 md:px-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Title of awesome blog post</h1>
      </div>
      <div className="container max-w-4xl mx-auto md:flex items-start py-8 px-12 md:px-0">
        <div className="w-3/5 md:pr-12 mb-12">
            
            <p className="text-gray-700 leading-normal">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2> Test H2 </h2>

            <img src="https://practical-programming.s3.eu-west-3.amazonaws.com/Capture+d%E2%80%99e%CC%81cran+2020-11-29+a%CC%80+07.28.33.png" />
            <p className="text-gray-700 leading-normal">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className="w-2/5 xs:hidden">
            <aside className="rounded shadow overflow-hidden mb-6">
                <h3 className="text-sm bg-gray-100 text-gray-700 py-3 px-4 border-b">Catégories</h3>
                <div className="p-4">

                </div>
            </aside>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
