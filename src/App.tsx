import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Differentials from './components/Differentials'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { business } from './data/business'

function App() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header />
    <main id="conteudo"><Hero /><About /><Services /><Differentials /><Reviews /><Gallery onOpen={setLightbox} /><Location /><Contact /></main>
    <Footer />
    {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização de imagem" onClick={() => setLightbox(null)}><button className="lightbox-close" aria-label="Fechar galeria" onClick={() => setLightbox(null)}>×</button><img src={business.photos[lightbox].src} alt={business.photos[lightbox].alt} onClick={event => event.stopPropagation()} /></div>}
  </>
}

export default App
