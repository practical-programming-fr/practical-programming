import Nav from '../components/nav'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Latest from '../components/latest'
import Section from '../components/section'

export default function CodePage() {
  return (
    <div className="w-12">
      <pre className='language-javascript important-overflow-hidden w-full text-sm max-h-60 rounded-lg shadow-lg'>
        <code>
{`<!-- Hello World -->
    function() {
        console.log('hello world')
    }

`}
        </code>
    </pre>
    </div>
  )
}
