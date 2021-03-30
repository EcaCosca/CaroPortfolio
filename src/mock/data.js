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
  subtitle:
    'Emprendedora serial, periodista, conductora, productora, mamá de Felicitas y mucho, mucho más...',
  cta: 'Más?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Esta imagen me define hoy. Junto a mi hija Felicitas días antes de la pandemia, en la tele. Una escena que resume mi contexto actual: la maternidad en primer plano, sin dejar de lado mi pasión por la profesión. Más allá del largo camino que recorrí en la búsqueda de embarazo, confieso que ser mamá me cambió radicalmente la vida y las prioridades. Me resulta difícil describirme en primera persona, pero me reconozco en el tezón, la fuerza y la avidez por la capacitación constante para conseguir las metas que me propongo. Así fueron llegando las ideas que se transformaron en proyectos, y luego en productos de radio y televisión.',
  paragraphTwo:
    'Primero nació Sobran Los Motivos, programa de entrevistas que ya lleva 16 temporadas en la región, sin dudas marcó un estilo y se convirtió en el “espacio de todas las emociones”. Luego, en octubre de 2013, pisamos la cancha marcando un nuevo camino en Rosario. Llegó para quedarse el “estilo CF”. Contraseña: Fútbol, un gran equipo con una capitana mujer, en una ciudad futbolera, que no es decir poco.',
  paragraphThree:
    'Finalmente, llegó el magazine radial que imaginaba! Cambiamos las tardes para siempre. La compañía perfecta en la mejor radio para los futboleros: La Red. Con información, entretenimiento, mucho humor, y la mejor "energía de radio", generamos un vinculo único con nuestros fieles oyentes desde el 2016. Así transcurre mi vida, entre la maternidad y un profundo amor por la profesión. Liderando equipos y maternando. Con un vector principal, la pasión como movilizador de cada uno de mis pasos. Siempre digo, casi como un mantra: “Agradecer mucho. Soñar fuerte y trabajar mucho por ello.”',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'SLM.jpg',
    title: 'Sobran los Motivos',
    info:
      'Dos sillones rojos son la escenografía itinerante que se traslada hacia donde el entrevistado lo desee. Así, se conforma un espacio íntimo, generando un ambiente particular, conocido por el protagonista, que permite desentrañar recuerdos y pensamientos de su historia y su presente. Ese es el objetivo de “Sobran los Motivos”.',
    info2:
      'Al mismo tiempo, descubrimos juntos lugares impactantes, probablemente recónditos, muchas veces desconocidos, con el enfoque particular del programa. Creamos y recreamos un espacio de reflexión y creatividad, renovando la propuesta semana a semana, desde hace 16 años.',
    url: 'https://rosario.telefe.com/vivo',
    repo: 'https://www.youtube.com/user/sobranlosmotivosTV', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CF.jpg',
    title: 'Contraseña: Futbol',
    info:
      'CONTRASEÑA: FUTBOL se hace todos las semanas y todos los días pensando en el fanático del fútbol que quiere ver más allá del resumen de los partidos, el televidente crítico que encuentra en este formato, un espacio muy atractivo.',
    info2: 'Otra manera de ver el fútbol. Con un sello bien rosarino en una ciudad bien futbolera.',
    url: 'https://rosario.telefe.com/vivo',
    repo: 'https://www.youtube.com/channel/UCnsjYDAIU8xV9Wf0puiyf8Q', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'nimasnimenos.jpeg',
    title: 'Ni Más Ni Menos',
    info:
      'Magazine diario con sello deportivo en RADIO LA RED. Un equipo rompe con la monotonía de las tardes. Notas, opinión, distintos segmentos, el contacto con el oyente como parte de la dinámica en un formato joven, versátil y con mucha energía para dar!',
    info2:
      'Nuestro Equipo: Carolina Coscarelli, Daniel Leibovich, Roque Giordano, Hernán Cabrera, Guillermo Ferretti, Andrés Culasso, Lucas Veraldi & María Noel Do',
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
