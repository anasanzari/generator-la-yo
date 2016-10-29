var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

 constructor: function () {
      generators.Base.apply(this, arguments);
  },
  method1: function () {
    console.log('Hey there!!!');
    console.log('Usage Menu:');
    console.log('   yo la-yo:controller name loc --loc');
    console.log('   yo la-yo:resource');
    console.log('   yo la-yo:filter');
    console.log('   yo la-yo:directive');
  }
});
