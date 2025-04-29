
export default {
  basePath: 'https://merlin21x.github.io/proyectopwa',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
