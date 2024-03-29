import Image from 'next/image'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import markdownStyles from '../../pages/markdown-styles.module.css'
import { useNextSanityImage } from 'next-sanity-image'
import sanity from '../../lib/sanity'
import YouTube from 'react-youtube'
import getYouTubeId from 'get-youtube-id'

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

const TechChallenges: React.FC<any> = ({ challenges }) => {
  return (
    <div className="relative bg-white dark:bg-bg-neutral-900 overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-4xl mx-auto dark:text-brand"
          aria-hidden="true"
        >
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl text-gray-500 dark:text-brand mx-auto">
          <BlockContent
            blocks={challenges}
            className={markdownStyles.markdown}
            serializers={serializers}
          />
        </div>
      </div>
    </div>
  )
}

export default TechChallenges
