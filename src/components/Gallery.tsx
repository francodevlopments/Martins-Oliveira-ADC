import { business } from '../data/business'

type GalleryProps = { onOpen: (index: number) => void }
export default function Gallery({ onOpen }: GalleryProps) { const photo = business.photos[0]; return <section className="section gallery" aria-labelledby="galeria-titulo"><div><p className="eyebrow">Ambiente</p><h2 id="galeria-titulo">Um espaço para conversas importantes.</h2><p>A localização do escritório no Absolutto Business Towers está disponível no Google Maps.</p><a className="text-link" href="#localizacao">Ver localização <span>↓</span></a></div><button className="gallery-photo" onClick={() => onOpen(0)} aria-label="Abrir fotografia do escritório"><img src={photo.src} alt={photo.alt} loading="lazy" /><span>Fotografia do perfil oficial no Google Maps</span></button></section> }
