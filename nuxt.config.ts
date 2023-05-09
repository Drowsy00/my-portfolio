// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({});

// export default {
//   buildModules: [
//     "@nuxtjs/google-fonts",
//   ],
//   googleFonts: {
//     families: {
//       "Titillium Web": true,
//       "Bruno Ace": true,
//       download: true,
//       inject: true,
//     },
//   },
// };

export default {
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bruno+Ace&display=swap",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap",
          crossorigin: "",
        },
      ],
    },
  },
};
