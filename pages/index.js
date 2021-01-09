import Nav from '../components/nav'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Latest from '../components/latest'
import Section from '../components/section'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <Hero/>
      <Latest/>
      <Hero/>
      <Section/>
      <Section/>
      <Section/>
      <Footer/>
    </div>
  )
}
