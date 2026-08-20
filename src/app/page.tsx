import Header from '@/modules/home/components/Header'
import Hero from '@/modules/home/components/Hero'
import SessoesTabs from '@/modules/home/components/sessoes/SessoesTabs'
import Horarios from '@/modules/home/components/Horarios'
import Planos from '@/modules/home/components/Planos'
import Depoimentos from '@/modules/home/components/Depoimentos'
import Contato from '@/modules/home/components/Contato'
import Footer from '@/modules/home/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SessoesTabs />
        <Horarios />
        <Planos />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
