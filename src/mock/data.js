import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Carolina Coscarelli | Emprendedora', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'Carolina Coscarelli', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hola, soy',
  name: 'Carolina Coscarelli',
  subtitle: 'Emprendedora serial, periodista, conductora, productora, mamá de Felicitas y mucho mucho más...',
  cta: 'Más?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '“Sobran los Motivos” por los cuales elegimos a Caro como protagonista y musa inspiradora. Según su propia voz, la foto que hoy la define, es esta que posteamos. Junto a su hija Felicitas días antes de la pandemia, en la tele. Una escena que traduce su realidad actual, la maternidad en primer plano, sin dejar de lado su pasión profesional.',
  paragraphTwo: '“Cuando llegó Felicitas me di cuenta que la vida pasa por otro lado”, nos confiesa Carolina mientras recuerda acerca de cómo le costó llegar a esa meta, finalmente con final feliz. Jugadora de grandes ligas en los medios rosarinos, logró abrir caminos desafiantes en mundos eminentemente masculinos (y un tanto machistas), con éxito, respeto y continuidad. Así se convirtió en la única conductora mujer de un magazine diario en la radio deportiva La Red @nimasnimenosok , en pionera como conductora mujer de un programa de fútbol @cfutbolok_tv y líder de un formato de entrevistas de TV innovador que hace unos días inauguró su temporada 16 @sobranlosmotivostv. Esta “tana terca”, apasionada y obsesiva por el trabajo nos demuestra que una mujer inteligente, a su vez puede ser bella y que no es necesario dejar de ser femenina para ocupar espacios habitualmente habitados por hombres.',
  paragraphThree: 'Su frase preferida es “Ojo con lo que sueñas que se puede cumplir”. Y al parecer.... le está dando resultado. 🙌🏻',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'SLM.jpg',
    title: 'Sobran los Motivos',
    info: 'Dos sillones rojos son la escenografía itinerante que se traslada hacia donde el entrevistado lo desee. Así, se conforma un espacio íntimo, generando un ambiente particular, conocido por el protagonista, que permite desentrañar recuerdos y pensamientos de su historia y su presente. Ese es el objetivo de “Sobran los Motivos”.',
    info2: 'Al mismo tiempo, descubrimos juntos lugares impactantes, probablemente recónditos, muchas veces desconocidos, con el enfoque particular del programa. Creamos y recreamos un espacio de reflexión y creatividad, renovando la propuesta semana a semana, desde hace 16 años.',
    url: 'https://rosario.telefe.com/vivo',
    repo: 'https://www.youtube.com/user/sobranlosmotivosTV', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CF.jpg',
    title: 'Contraseña: Futbol',
    info: 'CONTRASEÑA: FUTBOL se hace todos las semanas y todos los días pensando en el fanático del fútbol que quiere ver más allá del resumen de los partidos, el televidente crítico que encuentra en este formato, un espacio muy atractivo.',
    info2: 'Otra manera de ver el fútbol. Con un sello bien rosarino en una ciudad bien futbolera.',
    url: 'https://rosario.telefe.com/vivo',
    repo: 'https://www.youtube.com/channel/UCnsjYDAIU8xV9Wf0puiyf8Q', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nimasnimenos.jpeg',
    title: 'Ni Más Ni Menos',
    info: 'Magazine diario con sello deportivo en RADIO LA RED. Un equipo rompe con la monotonía de las tardes. Notas, opinión, distintos segmentos, el contacto con el oyente como parte de la dinámica en un formato joven, versátil y con mucha energía para dar!',
    info2: 'Nuestro Equipo: Carolina Coscarelli, Daniel Leibovich, Roque Giordano, Hernán Cabrera, Guillermo Ferretti, Andrés Culasso, Lucas Veraldi & María Noel Do',
    url: 'http://www.laredrosario.com/',
    repo: 'https://open.spotify.com/show/0oSj6yIHjzDyyM2SVkEoSf?si=Rfd_BASSSv-ZkUgp_rQWAw&nd=1', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'carolinacoscarelli@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Carocoscarelli',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/carocoscarelli/',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/carolina.coscarelli',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/carolina-coscarelli-b300641a/',
    },
    
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
