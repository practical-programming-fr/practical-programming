import Image from 'next/image'
import sanity from '../../lib/sanity'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanity)
function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

const Author: React.FC = ({ author }) => {
  return (
    <div className="max-w-3xl">
      <hr />
      <div className="my-5 mx-8 flex justify-items-start">
        <Image
          className="mx-4 w-24 h-24 object-cover rounded-full hidden sm:block"
          alt={`Auteur: ${author.name} - Practical Programming`}
          src={urlFor(author.image).url()}
          width={100}
          height={100}
        />
        <div className="flex flex-col">
          <p className="text-gray-500 font-light tracking-wider">ECRIT PAR</p>
          <p className="font-normal text-2xl ">{author.name}</p>
          <p className="font-normal text-lg ">
            Un superbe développeur JS passionné de tech et d'entrepreneuriat
          </p>
        </div>
        <div className="flex justify-self-end">
          <p>T</p>
          <p>L</p>
          <p>Y</p>
        </div>
      </div>
    </div>
  )
}

export default Author
