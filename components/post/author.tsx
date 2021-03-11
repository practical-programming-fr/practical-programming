import Image from 'next/image'
import sanity from '../../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'

const builder = imageUrlBuilder(sanity)
function urlFor(source): any {
  return builder.image(source)
}

interface AuthorProps {
  author: {
    name: string
    image: any
    slug: any
  }
}
const Author: React.FC<AuthorProps> = ({ author }) => {
  return (
    <div className="max-w-3xl">
      <hr />

      <div className="my-5 mx-8 flex justify-items-start space-x-4 lg:space-x-6">
        <Link href={`/titi`}>
          <Image
            className="mx-4 w-24 h-24 object-cover rounded-full hidden sm:block"
            alt={`Auteur: ${author.name} - Practical Programming`}
            src={urlFor(author.image).url()}
            width={100}
            height={100}
          />
        </Link>
        <div className="flex flex-col">
          <p className="text-gray-500 font-light tracking-wider">ECRIT PAR</p>
          <Link href={`/titi`}>
            <a className="font-normal text-2xl ">{author.name}</a>
          </Link>
          <p className="font-normal text-lg "></p>
        </div>
      </div>
    </div>
  )
}

export default Author
