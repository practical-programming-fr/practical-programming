import AnchorLink from 'react-anchor-link-smooth-scroll'
import slugify from 'slugify'

const options = {
  replacement: '-',
  remove: /-$/,
  lower: true,
  strict: true,
  locale: 'fr',
}

const Summary: React.FC<any> = ({ post }) => {
  const content = post.body.filter((content) => content.style == 'h2' || content.style == 'h3')
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="bg-gray-50 dark:bg-light-gray my-8 rounded-lg">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-8 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h4 className="text-center font-extrabold text-gray-900 dark:text-white sm:text-xl">
              Table des matières
            </h4>
            <dl className="mt-6 space-y-2 divide-y divide-gray-200">
              {content.map((title) => (
                <div className="pt-2" key={title._key}>
                  <dt className="text-lg">
                    {/* Expand/collapse question button */}
                    <button className="text-left w-full flex justify-between items-start dark:text-gray-100 text-gray-800">
                      <AnchorLink href={`#${slugify(title.children[0].text, options)}`}>
                        {title.children[0].text}
                      </AnchorLink>
                      <span className="ml-6 h-7 flex items-center"></span>
                    </button>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
    // <>
    //   {content.map((title) => (
    //     <div key={title._key}>
    //       <p>{title.children[0].text}</p>
    //       <p>{title.style}</p>
    //     </div>
    //   ))}
    // </>
  )
}

export default Summary
