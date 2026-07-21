export const business = {
  name: 'Martins de Oliveira Advogados',
  displayName: 'MARTINS DE OLIVEIRA',
  phone: '(21) 97936-6111',
  phoneHref: 'tel:+5521979366111',
  officialSite: 'https://martinsdeoliveiraadv.com.br',
  mapsUrl: 'https://www.google.com.br/maps/place/ESCRIT%C3%93RIO+DE+ADVOCACIA+-+MARTINS+DE+OLIVEIRA+ADVOGADOS/@-23.0197161,-43.4863256,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIC9kZXkZg!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHRPTWk7hWRN3TqFnBU3oDX028IsmW7UnkS1CUDfsAMGzS6B7qEz_c8y8ZzWTR3xHDafrxZjz2TkmNm4WTVNLizaD2Id_HrHUv-zV2LHo-O2TggzMthiA5kZazRMWr8TPBR9fNhly6pM%3Dw86-h86-k-no!7i1170!8i1175!4m11!1m2!2m1!1sadvocacia!3m7!1s0x9bc3d1c9d71c3d:0x687cd88ac5bc8c49!8m2!3d-23.0201231!4d-43.4862014!10e5!15sCglhZHZvY2FjaWGSAQ5sZWdhbF9zZXJ2aWNlc-ABAA!16s%2Fg%2F11jzjd8v8w?hl=pt-BR&entry=ttu',
  address: ['Av. das Américas, 19005', 'Recreio dos Bandeirantes, Rio de Janeiro - RJ', 'CEP 22790-703'],
  building: 'Localizado no Absolutto Business Towers.',
  rating: 5,
  reviewCount: 43,
  photos: [
    { src: './assets/google-maps/escritorio-01.jpg', alt: 'Fotografia publicada no perfil oficial do escritório no Google Maps', position: 'center 30%' },
  ],
  reviews: [
    { name: 'Guilherme Simões Zeus', rating: 5, text: 'Excelente profissional e eficiente, parabéns pelo seu trabalho.' },
    { name: 'Bernardete Casadei De Oliveira Loures', rating: 5, text: 'Excelente profissional, comprometido em esclarecer as dúvidas e buscar soluções para as demandas. Recomendo.' },
    { name: 'Débora Menezes', rating: 5, text: 'Excelente, atendimento nota 1000, super indico.' },
  ],
} as const

export const navItems = [
  ['Início', 'inicio'], ['O escritório', 'escritorio'], ['Atuação', 'atuacao'], ['Diferenciais', 'diferenciais'], ['Avaliações', 'avaliacoes'], ['Localização', 'localizacao'], ['Contato', 'contato'],
] as const
