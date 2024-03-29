import Script from 'next/script'

const ScriptTags: React.FC<any> = ({ scripts }) => {
  return (
    <>
      {scripts.map((script) => (
        <Script src={script.src} strategy={script.strategy} />
      ))}
    </>
  )
}
export default ScriptTags
