import Image from 'next/image'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import markdownStyles from '../../pages/markdown-styles.module.css'
import { useNextSanityImage } from 'next-sanity-image'
import sanity from '../../lib/sanity'
import YouTube from 'react-youtube'
import getYouTubeId from 'get-youtube-id'

const OpinionAuthor: React.FC<any> = () => {
  return (
    <div className="flex">
      <div className="mt-6 mr-4 flex-row-reverse">
        <Image
          src="https://res.cloudinary.com/doquvzod9/image/upload/v1619852104/Download_me_cklp-removebg-preview_r54iuw.png"
          width={199}
          height={119}
          className="h-16 w-16"
        />
        <h4 className="text-lg font-bold ml-8">Rayed Benbrahim</h4>
      </div>
      <div></div>
    </div>
  )
}

const H2 = ({ children }) => (
  <h2 className="text-3xl font-extrabold tracking-wider dark:text-white">{children}</h2>
)
const H3 = ({ children }) => (
  <h3 className="text-3xl font-extrabold tracking-wider dark:text-white">{children}</h3>
)
const overrides = {
  h2: function h2override(props) {
    return H2(props)
  },
  h3: function h3override(props) {
    return H3(props)
  },
}
const serializers = {
  types: {
    block: (props) =>
      overrides[props.node.style]
        ? overrides[props.node.style]({ children: props.children })
        : BlockContent.defaultSerializers.types.block(props),
    image: function imageSerializer(props) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const imageProps = useNextSanityImage(sanity, props.node)

      return (
        <div className="w-full rounded-lg">
          <Image {...imageProps} sizes="(max-width: 750) 100vw, 750px" />
        </div>
      )
    },
    youtube: function youTubeSerializer({ node }) {
      const { url } = node
      const id = getYouTubeId(url)
      return <YouTube videoId={id} className="w-full" />
    },
    table: function tableSerializer(props) {
      return (
        <table className="table-auto">
          {props.node.rows.map((row) => {
            return (
              <tr key={row._key}>
                {row.cells.map((cell) => (
                  <td key={cell} className="border px-2 font-thin">
                    {cell}
                  </td>
                ))}
              </tr>
            )
          })}
        </table>
      )
    },
  },
  marks: {
    internalLink: function linkSerializer({ mark, children }) {
      const { slug = {} } = mark
      const href = `/${slug.current}/`
      return (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      )
    },
    highlight: function highlightBlock({ children }) {
      return (
        <div className="p-6 bg-blue-50 rounded-md">
          <p className="text-blue-900">{children}</p>
        </div>
      )
    },
  },
}

const OurOpinion: React.FC<any> = ({ opinion }) => {
  return (
    <div className="bg-gray-50 dark:bg-bg-neutral-900 pt-16 lg:py-24">
      <div className="pb-16 bg-blue-600 dark:bg-orange-link lg:pb-0 lg:z-10 lg:relative">
        <div className="mx-auto max-w-4xl lg:px-8">
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
              <blockquote>
                <div>
                  <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <BlockContent
                    blocks={opinion}
                    className={markdownStyles.markdown}
                    serializers={serializers}
                  />
                </div>
                <div className="mt-6">
                  <OpinionAuthor />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurOpinion
