const CompanyNumbers: React.FC<any> = ({ company }) => {
  const AnchorEmbed = ({ script }) => (
    <div className="my-10 w-full" dangerouslySetInnerHTML={{ __html: script }} />
  )

  return (
    <div className="bg-white dark:bg-dark-gray pt-6 sm:pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto ">
          <h2 className="text-3xl text-center font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            L'interview du CTO
          </h2>
          <p className="my-3 text-xl text-gray-500 dark:text-brand sm:mt-4">
            Tu as envie d'en savoir plus ? Retrouve l'intégralité de l'interview dans le podcast
            ci-dessous ou sur ta plateforme de podcast préférée
          </p>
          <AnchorEmbed script={company.anchorEmbedScript} />
        </div>
      </div>
    </div>
  )
}

export default CompanyNumbers
