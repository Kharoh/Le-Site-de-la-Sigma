import Student from './classes/Student'

export default {
  images: {
    photoDeClasse: require('./images/header.JPG').default,
    ginette: require('./images/terredh.jpg').default,

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
    })
  }
} as const