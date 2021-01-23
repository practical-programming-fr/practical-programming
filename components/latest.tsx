import ImageLessCard from './home/imageLessCard'
const Latest: React.FC = ({ posts }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container lg:max-w-5xl px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-12">
          {posts.map((post) => (
            <ImageLessCard post={post} key={post._id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Latest
