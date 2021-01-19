module.exports = {
  moduleNameMapper: {
    '\\.css$': require.resolve('./test/style-mock')
  }
}


/*
 Configuring jest setup on a single file:

 => with moving test env: node to jsdom because document is not defined
 => added module name mapper and created a test folder/single-mock.css file (with an empty object within)
*/