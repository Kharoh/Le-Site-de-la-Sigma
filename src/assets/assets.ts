import Student from './classes/Student'

export default {
  images: {
    photoDeClasse: require('./images/header.JPG').default,
    ginette: require('./images/terredh.jpg').default,
    sigma: require('./images/sigma.jpg').default,
    omega: require('./images/omega.png').default,
    phi: require('./images/phi.png').default,
    psy: require('./images/psy.png').default,
    iota: require('./images/iota.png').default,
    alpha: require('./images/alpha.png').default,
    lambda: require('./images/lambda.png').default,

    jacques: require('./images/jacques.jpg').default,
    baptiste: require('./images/baptiste.jpg').default,
    lucas: require('./images/lucas.jpg').default,
  },

  students: {
    lucas: new Student({
      firstName: "Lucas",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      cds: [
        {
          color: "var(--pink-color)",
          name: "CD Web",
          link: ""
        },
        {
          color: "var(--blue-color)",
          name: "CD Info",
          link: ""
        }
      ],
    }),
    baptiste: new Student({
      firstName: "Baptiste",
      desc: "Lorem ipsum dolor sit amet. Est ipsa laudantium ea galisum deserunt et distinctio corrupti. Sed exercitationem deleniti non enim voluptate ea iusto minus.",
      cds: [
        {
          color: "var(--pink-color)",
          name: "CD Web",
          link: ""
        },
      ]
    }),
    jacques: new Student({
      firstName: "Jacques",
      desc: "Lorem ipsum dolor sit amet. Est ipsa laudantium ea galisum deserunt et distinctio corrupti. Sed exercitationem deleniti non enim voluptate ea iusto minus.",
      cds: []
    }),
    jean: new Student({
      firstName: "Jean",
      desc: "Lorem ipsum dolor sit amet. Est ipsa laudantium ea galisum deserunt et distinctio corrupti. Sed exercitationem deleniti non enim voluptate ea iusto minus.",
      cds: [
        {
          color: "var(--pink-color)",
          name: "CD Web",
          link: ""
        },
      ]
    }),
    jules: new Student({
      firstName: "Nadir",
      desc: "Lorem ipsum dolor sit amet. Est ipsa laudantium ea galisum deserunt et distinctio corrupti. Sed exercitationem deleniti non enim voluptate ea iusto minus.",
      cds: [
        {
          color: "var(--pink-color)",
          name: "CD Web",
          link: ""
        },
      ]
    }),
    nadir: new Student({
      firstName: "Nadir",
      desc: "Lorem ipsum dolor sit amet. Est ipsa laudantium ea galisum deserunt et distinctio corrupti. Sed exercitationem deleniti non enim voluptate ea iusto minus.",
      cds: [
        {
          color: "var(--pink-color)",
          name: "CD Web",
          link: ""
        },
      ]
    }),
    thomas: new Student({
      firstName: "Thomas",
      desc: "Lorem ipsum dolor sit amet. Est ipsa laudantium ea galisum deserunt et distinctio corrupti. Sed exercitationem deleniti non enim voluptate ea iusto minus.",
      cds: [
        {
          color: "var(--pink-color)",
          name: "CD Web",
          link: ""
        },
      ]
    })
  },

  glossaire: [
    {
      name: 'CD',
      desc: "Il s'agit simplement de l'abréviation officielle de 'Chargé de'"
    },
    {
      name: 'Ginette',
      desc: "C'est le diminutif de Lycée Sainte-Geneviève bien-sûr !"
    },
    {
      name: 'BJ',
      desc: "Encore un mot pour désigner notre lycée, c'est l'abréviation de 'Boîte à Jèzes'"
    },
  ],
} as const