
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://merlin21x.github.io/proyectopwa',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/proyectopwa"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 715, hash: '32002e1d77c1fb9a6ad16a9e4fa468b1cf13a87470ac89f87749a5005518504f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1228, hash: '61c78a866d825727d6ab3404289141f66e95beb370d761b2ad78c1f4afa98790', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21059, hash: 'fece05a889c81179555214e2613b8f6041966405fd3e40a8e652dd893ecdf6bc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
