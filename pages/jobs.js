import Footer from '../components/footer'
import Metrics from '../components/metrics'
import Nav from '../components/nav'

export default function JobsPage() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Nav />
      <Metrics/>
      <div className="bg-gray-100">
  <div className="px-6 py-8">
    <div className="flex justify-between container mx-auto">
      <div className="w-full lg:w-8/12">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Jobs</h1>
        </div>
        <div className="mt-6">
          <div className="max-w-4xl px-5 py-6 bg-white rounded-lg shadow-md">
            <div className="flex">
                <a href="#" className="flex items-center"><img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" className="mx-4 w-20 h-20 object-cover rounded hidden sm:block" />
                </a>
                <div>
                    <div className="ml-5">
                        <h1 className="text-gray-700 hover:underline">Apple</h1>
                        <a href="#" className="text-2xl text-gray-700 font-bold hover:underline">Développeur Laravel</a>
                        <div className="flex">
                            <p className="text-gray-700 hover:underline mr-5">Paris</p>
                            <p className="text-gray-700 hover:underline mr-5">Télétravail Partiel</p>
                            <p className="text-gray-700 hover:underline mr-5">Première expérience requise</p>
                        </div>
                    </div>
                </div>
            <div className="flex">
                
                {/*Location*/}
                <div className="justify-between items-center mt-4">
                    <svg class="svg-icon" viewBox="0 0 20 20">
                        <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
                    </svg>
                </div>
                {/*Tags*/}
                <div className="flex justify-between items-center mt-4">
                    <div>
                    <a href="#" className="mr-2 px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">PHP</a>
                    <a href="#" className="mr-2 px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Laravel</a>
                    <a href="#" className="mr-2 px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">AWS</a>
                    <a href="#" className="mr-2 px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">MySQL</a>
                    </div>
                </div>
            </div>
            
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="max-w-4xl px-5 py-6 bg-white rounded-lg shadow-md">
            <div className="flex">
                <a href="#" className="flex items-center"><img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" className="mx-4 w-20 h-20 object-cover rounded hidden sm:block" />
                </a>
                <div>
                
                <div className="ml-5">
                    <h1 className="text-gray-700 hover:underline">Qonto</h1>
                    <a href="#" className="text-2xl text-gray-700 font-bold hover:underline">Développeur Confirmé React</a>
                    <div className="flex">
                        <p className="text-gray-700 hover:underline mr-5">Paris</p>
                        <p className="text-gray-700 hover:underline mr-5">Télétravail Partiel</p>
                        <p className="text-gray-700 hover:underline mr-5">Première expérience requise</p>
                    </div>
                </div>
            </div>
            <div className="flex">
                
                {/*Location*/}
                <div className="justify-between items-center mt-4">
                    <svg class="svg-icon" viewBox="0 0 20 20">
                        <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
                    </svg>
                </div>
                {/*Tags*/}
                <div className="flex justify-between items-center mt-4">
                    <div>
                    <a href="#" className="mr-2 px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">React</a>
                    <a href="#" className="mr-2 px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Redux</a>
                    <a href="#" className="mr-2 px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Jest</a>
                    </div>
                </div>
            </div>
            
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center"><span className="font-light text-gray-600">Feb 14,
                2019</span><a href="#" className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">PHP</a>
            </div>
            <div className="mt-2"><a href="#" className="text-2xl text-gray-700 font-bold hover:underline">PHP:
                Array to Map</a>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
            </div>
            <div className="flex justify-between items-center mt-4"><a href="#" className="text-blue-500 hover:underline">Read more</a>
              <div><a href="#" className="flex items-center"><img src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80" alt="avatar" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" />
                  <h1 className="text-gray-700 font-bold hover:underline">Lisa Way</h1>
                </a></div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center"><span className="font-light text-gray-600">Dec 23,
                2018</span><a href="#" className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Django</a>
            </div>
            <div className="mt-2"><a href="#" className="text-2xl text-gray-700 font-bold hover:underline">Django
                Dashboard - Learn by Coding</a>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
            </div>
            <div className="flex justify-between items-center mt-4"><a href="#" className="text-blue-500 hover:underline">Read more</a>
              <div><a href="#" className="flex items-center"><img src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80" alt="avatar" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" />
                  <h1 className="text-gray-700 font-bold hover:underline">Steve Matt</h1>
                </a></div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center"><span className="font-light text-gray-600">Mar 10,
                2018</span><a href="#" className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Testing</a>
            </div>
            <div className="mt-2"><a href="#" className="text-2xl text-gray-700 font-bold hover:underline">TDD
                Frist</a>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
            </div>
            <div className="flex justify-between items-center mt-4"><a href="#" className="text-blue-500 hover:underline">Read more</a>
              <div><a href="#" className="flex items-center"><img src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" />
                  <h1 className="text-gray-700 font-bold hover:underline">Khatab Wedaa</h1>
                </a></div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex">
            <a href="#" className="mx-1 px-3 py-2 bg-white text-gray-500 font-medium rounded-md cursor-not-allowed">
              previous
            </a>
            <a href="#" className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
              1
            </a>
            <a href="#" className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
              2
            </a>
            <a href="#" className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
              3
            </a>
            <a href="#" className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md">
              Next
            </a>
          </div>
        </div>
      </div>
      <div className="-mx-8 w-4/12 hidden lg:block">
        <div className="px-8">
          <h1 className="mb-4 text-xl font-bold text-gray-700">Entreprises</h1>
          <div className="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md">
            <ul className="-mx-4">
              <li className="flex items-center"><img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" className="w-10 h-10 object-cover rounded-full mx-4" />
                <p><a href="#" className="text-gray-700 font-bold mx-1 hover:underline">Alex John</a><span className="text-gray-700 text-sm font-light">Created 23 Posts</span></p>
              </li>
              <li className="flex items-center mt-6"><img src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80" alt="avatar" className="w-10 h-10 object-cover rounded-full mx-4" />
                <p><a href="#" className="text-gray-700 font-bold mx-1 hover:underline">Jane Doe</a><span className="text-gray-700 text-sm font-light">Created 52 Posts</span></p>
              </li>
              <li className="flex items-center mt-6"><img src="https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80" alt="avatar" className="w-10 h-10 object-cover rounded-full mx-4" />
                <p><a href="#" className="text-gray-700 font-bold mx-1 hover:underline">Lisa Way</a><span className="text-gray-700 text-sm font-light">Created 73 Posts</span></p>
              </li>
              <li className="flex items-center mt-6"><img src="https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80" alt="avatar" className="w-10 h-10 object-cover rounded-full mx-4" />
                <p><a href="#" className="text-gray-700 font-bold mx-1 hover:underline">Steve Matt</a><span className="text-gray-700 text-sm font-light">Created 245 Posts</span></p>
              </li>
              <li className="flex items-center mt-6"><img src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80" alt="avatar" className="w-10 h-10 object-cover rounded-full mx-4" />
                <p><a href="#" className="text-gray-700 font-bold mx-1 hover:underline">Khatab
                    Wedaa</a><span className="text-gray-700 text-sm font-light">Created 332 Posts</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 px-8">
          <h1 className="mb-4 text-xl font-bold text-gray-700">Skills</h1>
          <div className="flex flex-col bg-white px-4 py-6 max-w-sm mx-auto rounded-lg shadow-md">
            <ul>
              <li><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">-
                  AWS</a></li>
              <li className="mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">-
                  Laravel</a></li>
              <li className="mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Vue</a>
              </li>
              <li className="mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">-
                  Design</a></li>
              <li className="flex items-center mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">-
                  Django</a></li>
              <li className="flex items-center mt-2"><a href="#" className="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- PHP</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 px-8">
          <h1 className="mb-4 text-xl font-bold text-gray-700">Guides</h1>
          <div className="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-md">
            <div className="flex justify-center items-center"><a href="#" className="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded hover:bg-gray-500">Laravel</a>
            </div>
            <div className="mt-4"><a href="#" className="text-lg text-gray-700 font-medium hover:underline">Build
                Comment réussir à démarrer sa carrière de développeur</a></div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center"><img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80" alt="avatar" className="w-8 h-8 object-cover rounded-full" /><a href="#" className="text-gray-700 text-sm mx-3 hover:underline">Alex John</a></div><span className="font-light text-sm text-gray-600">Jun 1, 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      <Footer/>
    </div>
  )
}



