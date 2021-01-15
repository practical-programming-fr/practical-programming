export default function PostHero() {
  return (
    <div
      className="bg-no-repeat bg-center bg-fixed bg-cover bg-gray-200"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('../hero.jpg')`,
        height: '30vh',
      }}
    >
      <div>
        <h1 className="text-center text-2xl lg:text-3xl font-bold font-serif title-font text-white pt-20">
          Est-ce qu’apprendre React est essentiel pour un développeur JavaScript en 2020?
        </h1>
      </div>
    </div>
  )
}
