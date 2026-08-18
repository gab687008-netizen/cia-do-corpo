import Header from '@/modules/home/components/Header'
import Hero from '@/modules/home/components/Hero'
import Modalidades from '@/modules/home/components/Modalidades'
import Professor from '@/modules/home/components/Professor'
import Horarios from '@/modules/home/components/Horarios'
import Planos from '@/modules/home/components/Planos'
import Estrutura from '@/modules/home/components/Estrutura'
import Contato from '@/modules/home/components/Contato'
import Footer from '@/modules/home/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Modalidades />
        <Professor />
        <Horarios />
        <Planos />
        <Estrutura />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
