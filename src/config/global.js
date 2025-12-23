export default {
  global: {
    Name:
      'Gestión del Bienestar Animal en la tenencia responsable de animales de compañía',
    Description:
      'El componente formativo destaca la importancia del bienestar animal y la tenencia responsable, reconociendo a las mascotas como seres sintientes. Expone sus cuidados físicos, emocionales y legales, incluyendo la empatía, el vínculo humano–animal y las Cinco Libertades. Subraya la obligación ética y legal de brindarles atención adecuada, alimentación, salud y un entorno digno para asegurar su calidad de vida.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mascota',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Concepto de mascota', hash: 't_1_1' },
          { numero: '1.2', titulo: 'Tipos de mascotas', hash: 't_1_2' },
          {
            numero: '1.3',
            titulo: 'Características físicas de las mascotas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Características comportamentales',
            hash: 't_1_4',
          },
          { numero: '1.5', titulo: 'Sintiencia animal', hash: 't_1_5' },
          { numero: '1.6', titulo: 'Normatividad aplicable', hash: 't_1_6' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Empatía humano–animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Aplicaciones prácticas de la empatía humano–animal',
            hash: 't_2_1',
          },
          { numero: '2.2', titulo: 'Relación animal–animal', hash: 't_2_2' },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Las cinco libertades del bienestar animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de las cinco libertades',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Importancia práctica de las cinco libertades en la tenencia responsable',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Libertad de hambre, sed y desnutrición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Consecuencias del incumplimiento',
            hash: 't_4_1',
          },
          { numero: '4.2', titulo: 'Acceso constante a agua', hash: 't_4_2' },
          { numero: '4.3', titulo: 'Alimentación equilibrada', hash: 't_4_3' },
          {
            numero: '4.4',
            titulo: 'Alimentos prohibidos por mascota',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Libertad de incomodidad física y térmica',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Instalaciones adecuadas', hash: 't_5_1' },
          {
            numero: '5.2',
            titulo: 'Enfoque de responsabilidad y negligencia',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Libertad de dolor, lesiones y enfermedades',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '6.1', titulo: 'Vacunación', hash: 't_6_1' },
          { numero: '6.2', titulo: 'Desparasitación', hash: 't_6_2' },
          { numero: '6.3', titulo: 'Tratamientos oportunos', hash: 't_6_3' },
          {
            numero: '6.4',
            titulo: 'Prevención de accidentes y lesiones',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo:
              'Medicamentos prohibidos en mascotas convencionales y no convencionales',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Libertad de expresar su comportamiento natural',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '7.1', titulo: 'Etología básica', hash: 't_7_1' },
          {
            numero: '7.2',
            titulo: 'Espacio para movimiento libre',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Elementos de entretenimiento y estimulación',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Libertad de miedo y estrés',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '8.1', titulo: 'Trato y manejo', hash: 't_8_1' },
          { numero: '8.2', titulo: 'Rutinas', hash: 't_8_2' },
          { numero: '8.3', titulo: 'Educación y adaptación', hash: 't_8_3' },
          { numero: '8.4', titulo: 'Ruidos y fobias', hash: 't_8_4' },
          { numero: '8.5', titulo: 'Espacios de albergue', hash: 't_8_5' },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Bienestar animal en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Normatividad colombiana vigente',
            hash: 't_9_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Mascota',
      referencia:
        'Organización Mundial de Sanidad Animal. (2021). <em>Bienestar animal y las cinco libertades</em>. OIE.',
      tipo: 'Documento técnico',
      link: 'https://www.woah.org/es/lo-que-hacemos/bienestar-animal/',
    },
    {
      tema: 'Normatividad aplicable',
      referencia:
        'Congreso de la República de Colombia. (2016). <em>Ley 1774 de 2016, por medio de la cual se reconocen los animales como seres sintientes y se establecen medidas contra el maltrato animal</em>.',
      tipo: 'Normatividad',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=68135',
    },
    {
      tema: 'Normatividad aplicable',
      referencia:
        'Congreso de la República de Colombia. (1989). <em>Ley 84 de 1989. Estatuto Nacional de Protección de los Animales</em>.',
      tipo: 'Normatividad',
      link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=8242',
    },
    {
      tema: 'Empatía humano–animal',
      referencia:
        'World Small Animal Veterinary Association. (2020). <em>Directrices para el cuidado responsable de animales de compañía</em>. WSAVA.',
      tipo: 'Guía técnica',
      link: 'https://wsava.org/global-guidelines/',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'Condición que garantiza la salud física, emocional y la posibilidad de expresar comportamientos naturales en el animal.',
    },
    {
      termino: 'Cinco libertades',
      significado:
        'Principios que aseguran la ausencia de hambre, dolor, miedo e incomodidad, promoviendo una vida digna para el animal.',
    },
    {
      termino: 'Comportamiento animal',
      significado:
        'Conjunto de conductas naturales que expresa un animal según su especie y su interacción con el entorno.',
    },
    {
      termino: 'Educación animal',
      significado:
        'Proceso de aprendizaje basado en el refuerzo positivo y la adaptación del animal al entorno humano.',
    },
    {
      termino: 'Empatía humano–animal',
      significado:
        'Capacidad de comprender, respetar y responder adecuadamente a las necesidades emocionales del animal.',
    },
    {
      termino: 'Enriquecimiento ambiental',
      significado:
        'Uso de estímulos físicos y mentales que favorecen el comportamiento natural y el bienestar del animal.',
    },
    {
      termino: 'Manejo responsable',
      significado:
        'Prácticas adecuadas de cuidado, respeto y protección del animal bajo responsabilidad humana.',
    },
    {
      termino: 'Mascota',
      significado:
        'Animal de compañía mantenido bajo cuidado humano para la convivencia y el vínculo afectivo.',
    },
    {
      termino: 'Normatividad animal',
      significado:
        'Conjunto de leyes y regulaciones que protegen el bienestar, la tenencia y los derechos de los animales.',
    },
    {
      termino: 'Salud preventiva',
      significado:
        'Acciones anticipadas orientadas a evitar enfermedades y mantener el bienestar integral del animal.',
    },
    {
      termino: 'Sintiencia animal',
      significado:
        'Capacidad del animal para sentir dolor, placer, miedo y otras emociones.',
    },
    {
      termino: 'Tenencia responsable',
      significado:
        'Compromiso legal y ético del cuidador con el bienestar, la protección y el trato digno del animal.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación Mundial de Veterinarios de Pequeños Animales. (2020). <em>WSAVA global nutrition guidelines</em>. WSAVA.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1989). <em>Ley 84 de 1989 por la cual se adopta el Estatuto Nacional de Protección de los Animales</em>. Diario Oficial de la República de Colombia.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2016). <em>Ley 1774 de 2016 por medio de la cual se reconocen los animales como seres sintientes</em>. Diario Oficial de la República de Colombia.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2020). <em>Ley 2054 de 2020 por la cual se fomenta la adopción responsable de animales de compañía</em>. Diario Oficial de la República de Colombia.',
      link: '',
    },
    {
      referencia:
        'Farm Animal Welfare Council. (2009). <em>Farm animal welfare in Great Britain: Past, present and future</em>. FAWC.',
      link: '',
    },
    {
      referencia:
        'Fraser, D. (2008). <em>Understanding animal welfare: The science in its cultural context</em>. Wiley-Blackwell.',
      link: '',
    },
    {
      referencia:
        'Grandin, T. (2014). <em>Animal behavior and welfare</em>. CABI.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023). <em>Lineamientos de sanidad y bienestar animal</em>. ICA.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal. (2022). <em>Bienestar animal</em>. OMSA.',
      link: '',
    },
    {
      referencia:
        'Overall, K. (2013). <em>Manual of clinical behavioral medicine for dogs and cats</em>. Elsevier.',
      link: '',
    },
    {
      referencia:
        'Serpell, J. (2017). <em>The domestic dog: Its evolution, behavior and interactions with people</em> (2nd ed.). Cambridge University Press.',
      link: '',
    },
    {
      referencia:
        'Young, R. J. (2013). <em>Environmental enrichment for captive animals</em>. Wiley-Blackwell.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
