
export default function Metrics() {
  return (
<>
<section className="bg-blue-700">
  <div className="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 py-8 text-center">
    <div>
      <h5 className="text-5xl font-bold text-white">
        <span className="inline text-white">
          20
        </span>
        <span className="text-indigo-200">
          +
        </span>
      </h5>
      <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
        Postes à pourvoir
      </p>
    </div>
    <div>
      <h5 className="text-5xl font-bold text-white">
        <span className="text-indigo-200">
          +
        </span>
        <span className="inline text-white">
          3
        </span>
      </h5>
      <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
        Nouveaux jobs cette semaine
      </p>
    </div>
    <div>
      <h5 className="text-5xl font-bold text-white">
        <span className="inline text-white">
          3
        </span>
      </h5>
      <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
        Entretiens programmés
      </p>
    </div>
    <div>
      <h5 className="text-5xl font-bold text-white">
        <span className="inline text-white">
          1
        </span>
      </h5>
      <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">
        Développeur(s) recrutés
      </p>
    </div>
  </div>
</section>
</>
  )
}
