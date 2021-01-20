/*
 Configuring jest setup on a single file:

 => with moving test env: node to jsdom because document is not defined
 => added module name mapper and created a test folder/single-mock.css file (with an empty object within)
*/
module.exports = {
  displayName: 'calculator',
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  /* Take care of any polyphills */
  setupTestFrameworkScriptFile: require.resolve(
    './test/setup-test-framework.js',
  ),
  /* Support any loaders used with Babel: 
  graphQl, CSS, CSS Module...  */
  moduleNameMapper: {
    /* 
     module must come first
    */
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
    // can also map files that are loaded by webpack with the file-loader
  },
  // In case we handle the back & frontend on a single repo 
  //projects: ['./client', './server']
  // normally you'd put this here
  //collectCoverageFrom: ['**/src/**/*.js']
}

// however, that kinda messes up my setup in this workshop repo
// so I'm doing this weird thing. Basically ignore this and just
// do it inline like I show above :)
if (process.cwd() === __dirname) {
  Object.assign(module.exports, {
    /* coverage path  */
    collectCoverageFrom: ['**/src/**/*.js'],
    coverageThreshold: {
      global: {
        statements: 17,
        branches: 8,
        functions: 20,
        lines: 17,
      },
    },
  })
}
