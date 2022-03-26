import colors from 'vuetify/es5/util/colors'

export default {
  ssr:false,
  target:"static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - AmoLavoro',
    title: 'AmoLavoro',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'no_prefix',
    locales: ['en', 'fr', 'es','it','pa',],
    defaultLocale: 'it',
    vueI18n: {
      fallbackLocale: 'it',
      messages: {
        en: {
          welcome: 'Welcome',
          history: 'History',
          info: 'Information',
          segnalazioni: 'Reports',
          racconta:'Tell your experience',
          potrebbe:'Your experience could help people who are experiencing a similar situation to yours',
          lavori_disonesti:'Dishonest jobs',
          leggi_segnala:'Anonymously read or report companies that are dishonest or do not offer decent working conditions',
          avvocati:'Lawyers',
          ricevi_aiuto:'Get free legal help',
          aiuto_gratuito:'Get free legal help regarding your work experience',
          informati:'Learn about the topic of work',
          informazioni_lavoro:'In this section you can find legal information relating to the subject of work',
          scrivi:'write',
          segnala:'report',
          aiuto:'get help',
          informati:'Get informed',
          posti:'uses',
          opportunita:'Job opportunities',
          offerte_lavoro:'Honest job offers from verified sources starting from generic jobs up to those for competence',

        },
        fr: {
          welcome: 'Bienvenue',
          history: 'Histoire',
          info: 'Information',
          segnalazioni: 'Rapports',
          racconta:'Racontez votre expérience',
          potrebbe:'Votre expérience pourrait aider les personnes qui vivent une situation similaire à la vôtre',
          lavori_disonesti:'Emplois malhonnêtes',
          leggi_segnala:'Lire ou signaler anonymement les entreprises qui sont malhonnêtes ou qui n offrent pas des conditions de travail décentes',
          avvocati:'Avocats',
          ricevi_aiuto:'Bénéficiez d une aide juridique gratuite',
          aiuto_gratuito:'Obtenez une aide juridique gratuite concernant votre expérience de travail',
          informati:'En savoir plus sur le thème du travail',
          informazioni_lavoro:'Dans cette section, vous trouverez des informations juridiques relatives au sujet du travail',
          scrivi:'écrivez',
          segnala:'reportage',
          aiuto:'obtenir aide',
          informati:'informer',
          posti:'les usages',
          opportunita:'Opportunités d emploi',
          offerte_lavoro:'Offres d emploi honnêtes provenant de sources vérifiées à partir d emplois génériques jusqu à ceux de compétence',
        },
        es: {
          welcome: 'Bienvenido',
          history: 'Historia',
          info: 'información',
          segnalazioni: 'Informes',
          racconta:'Cuenta tu experiencia',
          potrebbe:'Tu experiencia podría ayudar a las personas que están pasando por una situación similar a la tuya',
          lavori_disonesti:'Trabajos deshonestos',
          leggi_segnala:'Lea o denuncie de forma anónima empresas que sean deshonestas o no ofrezcan condiciones de trabajo dignas',
          avvocati:'Abogados',
          ricevi_aiuto:'Obtenga ayuda legal gratuita',
          aiuto_gratuito:'Obtenga ayuda legal gratuita con respecto a su experiencia laboral',
          informati:'Aprender sobre el tema del trabajo',
          informazioni_lavoro:'En esta sección podrá encontrar información legal relacionada con el tema del trabajo',
          scrivi:'escribe',
          segnala:'informe',
          aiuto:'consigue ayuda',
          informati:'informarse',
          posti:'usos',
          opportunita:'Oportunidades de trabajo',
          offerte_lavoro:'Ofertas de trabajo honestas de fuentes verificadas, desde trabajos genéricos hasta trabajos de competencia',
        },
        it:{
          welcome: 'Benvenuto',
          history: 'Storia',
          info: 'Informazioni',
          segnalazioni: 'Segnalazioni',
          racconta:'Racconta la tua esperienza',
          potrebbe:'La tua esperienza potrebbe aiutare persone che stanno vivendo una situazione analoga alla tua',
          lavori_disonesti:'Lavori disonesti',
          leggi_segnala:'Leggi o segnala anonimamente aziende disoneste o che non offrono condizioni di lavoro dignitose',
          avvocati:'Avvocati',
          ricevi_aiuto:'Ricevi aiuto legale gratuito',
          aiuto_gratuito:'Ricevi aiuto legale gratuito riguardo la tua esperienza lavorativa',
          informati:'Informati sul tema del lavoro',
          informazioni_lavoro:'In questa sezione puoi trovare informazioni legali relative al tema del lavoro',
          scrivi:'scrivi',
          segnala:'segnala',
          aiuto:'ricevi aiuto',
          informati:'Informati',
          posti:'impieghi',
          opportunita:'Opportunità di lavoro',
          offerte_lavoro:'Offerte di lavoro oneste provenienti da fonti verificate a partire da lavori generici fino ad arrivare a quelli per competenza',

        },
        pa:{
          welcome: 'ਸੁਆਗਤ ਹੈ',
          history: 'ਇਤਿਹਾਸ',
          info: 'ਜਾਣਕਾਰੀ',
          segnalazioni: 'ਰਿਪੋਰਟ',
          racconta:'ਆਪਣਾ ਅਨੁਭਵ ਦੱਸੋ',
          potrebbe:'ਤੁਹਾਡਾ ਅਨੁਭਵ ਉਹਨਾਂ ਲੋਕਾਂ ਦੀ ਮਦਦ ਕਰ ਸਕਦਾ ਹੈ ਜੋ ਤੁਹਾਡੇ ਵਰਗੀ ਸਥਿਤੀ ਦਾ ਅਨੁਭਵ ਕਰ ਰਹੇ ਹਨ',
          lavori_disonesti:'ਬੇਈਮਾਨ ਨੌਕਰੀਆਂ',
          leggi_segnala:'ਅਗਿਆਤ ਤੌਰ ਤੇ ਉਹਨਾਂ ਕੰਪਨੀਆਂ ਨੂੰ ਪੜ੍ਹੋ ਜਾਂ ਰਿਪੋਰਟ ਕਰੋ ਜੋ ਬੇਈਮਾਨ ਹਨ ਜਾਂ ਵਧੀਆ ਕੰਮ ਕਰਨ ਦੀਆਂ ਸਥਿਤੀਆਂ ਦੀ ਪੇਸ਼ਕਸ਼ ਨਹੀਂ ਕਰਦੀਆਂ ਹਨ',
          avvocati:'ਵਕੀਲ',
          ricevi_aiuto:'ਮੁਫਤ ਕਾਨੂੰਨੀ ਸਹਾਇਤਾ ਪ੍ਰਾਪਤ ਕਰੋ',
          aiuto_gratuito:'ਆਪਣੇ ਕੰਮ ਦੇ ਤਜਰਬੇ ਦੇ ਸਬੰਧ ਵਿੱਚ ਮੁਫ਼ਤ ਕਾਨੂੰਨੀ ਮਦਦ ਪ੍ਰਾਪਤ ਕਰੋ',
          informati:'ਕੰਮ ਦੇ ਵਿਸ਼ੇ ਬਾਰੇ ਜਾਣੋ',
          informazioni_lavoro:'ਇਸ ਭਾਗ ਵਿੱਚ ਤੁਸੀਂ ਕੰਮ ਦੇ ਵਿਸ਼ੇ ਨਾਲ ਸਬੰਧਤ ਕਾਨੂੰਨੀ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦੇ ਹੋ',
          scrivi:'ਤੁਸੀਂ ਲਿਖੋ',
          segnala:'ਰਿਪੋਰਟ',
          aiuto:'ਮਦਦ ਲਵੋ',
          informati:'ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰੋ',
          posti:'ਵਰਤਦਾ ਹੈ',
          opportunita:'ਨੌਕਰੀ ਦੇ ਮੌਕੇ',
          offerte_lavoro:'ਪ੍ਰਮਾਣਿਤ ਸਰੋਤਾਂ ਤੋਂ ਈਮਾਨਦਾਰ ਨੌਕਰੀ ਦੀ ਪੇਸ਼ਕਸ਼ ਆਮ ਨੌਕਰੀਆਂ ਤੋਂ ਲੈ ਕੇ ਯੋਗਤਾ ਲਈ ਉਹਨਾਂ ਤੱਕ',
        },

      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
