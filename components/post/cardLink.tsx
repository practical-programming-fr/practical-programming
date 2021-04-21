import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import sanity from '../../lib/sanity'

const builder = imageUrlBuilder(sanity)
const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
const CardLink: React.FC<any> = ({ props }) => {
  const linkProps: any = {
    href: props.url,
    style: { textDecoration: 'none' },
  }
  if (props.affiliate) {
    linkProps.rel = 'nofollow sponsored'
  }
  return (
    <>
      <div className="my-8 bg-blue-200 dark:bg-beige overflow-hidden shadow rounded-lg">
        <a {...linkProps}>
          <div className="flex flex-nowrap -mb-3 p-4 sm:p-6">
            <div className="flex-none">
              <Image
                src={urlFor(props.thumbnail.asset._ref).url()}
                width={160}
                height={160}
                className="rounded-md"
              />
            </div>
            <div className="flex-shrink mx-4 -mt-4 ">
              <p className="text-lg font-medium text-blue-700 dark:text-orange-link tracking-wider uppercase">
                {props.title}
              </p>
              <p className="text-sm text-blue-700 md:text-lg lg:text-sm xl:text-lg dark:text-dark-gray overflow-ellipsis overflow-hidden">
                {props.message}
              </p>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default CardLink
