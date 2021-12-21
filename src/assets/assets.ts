import Student from './classes/Student'

export default {
  images: {
    photoDeClasse: require('./images/header.JPG').default,
    ginette: require('./images/terredh.jpg').default
  },

  students: {
    lucas: new Student({
      firstName: "Lucas",
      desc: "Lorem ipsum dolor sit amet. Est ipsa laudantium ea galisum deserunt et distinctio corrupti. Sed exercitationem deleniti non enim voluptate ea iusto minus.",
      cds: [{
        color: "var(--pink-color)",
        name: "CD Web",
        link: ""
      },
      {
        color: "var(--blue-color)",
        name: "CD Info",
        link: ""
      }],
    }),
    baptiste: new Student({
      firstName: "Baptiste",
      desc: "Lorem ipsum dolor sit amet. Est ipsa laudantium ea galisum deserunt et distinctio corrupti. Sed exercitationem deleniti non enim voluptate ea iusto minus.",
      cds: []
    }),
    jacques: new Student({
      firstName: "Jacques",
      desc: "Lorem ipsum dolor sit amet. Est ipsa laudantium ea galisum deserunt et distinctio corrupti. Sed exercitationem deleniti non enim voluptate ea iusto minus.",
      cds: []
    })
  }
} as const