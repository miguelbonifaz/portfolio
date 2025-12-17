import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Works from '@/components/sections/Works'
import Automations from '@/components/sections/Automations'
import Contact from '@/components/sections/Contact'
import JsonLd from '@/components/seo/JsonLd'
import { getProfile } from '@/data'
import { generatePersonSchema } from '@/lib/json-ld'

export default function Home() {
  const profile = getProfile()
  const personSchema = generatePersonSchema(profile)

  return (
    <>
      <JsonLd data={personSchema} />
      <Header />
      <main className="flex-grow w-full flex flex-col">
        <Hero />
        <About />
        <Works />
        <Automations />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
