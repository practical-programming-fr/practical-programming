
export default function Hero() {
    return (
<section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
    <div className="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
        <div className="lg:w-1/2">
        <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80")'}} />
        </div>
        <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
        <h2 className="text-2xl text-gray-800 dark:text-white font-bold md:text-3xl">Build Your New <span className="text-indigo-600 dark:text-indigo-400">Idea</span></h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>
        <div className="mt-8">
            <a href="#" className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded hover:bg-gray-800">Start Now</a>
        </div>
        </div>
    </div>
</section>
    )
  }
  
