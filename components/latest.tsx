export default function Latest({ posts }) {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container lg:max-w-5xl px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-12">
          {posts.map((post) => (
            <div className="p-12 md:w-1/2 flex flex-col items-start" key={post.slug.current}>
              <span className="inline-block py-1 px-2 rounded bg-blue-50 text-blue-500 text-xs font-medium tracking-widest uppercase">
                {post.categories.title}
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                {post.title}
              </h2>
              <p className="leading-relaxed mb-8">{post.excerpt}</p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-blue-500 inline-flex items-center">
                  Lire la suite
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <a className="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://dummyimage.com/104x104"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">{post.author.name}</span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
