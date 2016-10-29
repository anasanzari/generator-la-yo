var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

constructor: function () {
     generators.Base.apply(this, arguments);
     this.argument('name', { type: String, required: true });
     this.option('--loc');
     if(this.options.loc){
         this.argument('location', { type: String, required: true });
     }

 },
 writing: function () {
    var parent = this;
    var config = this.config.getAll();
    function copy(src,des,args){
         parent.fs.copyTpl(src,des,args);
    };

    var args = {
        name : this.name
    };
    var des = this.destinationPath(config.resource+this.name+'.js');
    var src = this.templatePath('resource.js');

    if (this.options.loc) {
        //user is providing the destination
        copy(src,this.location+this.name+'.js',args);
    }else if(config.resource){
        copy(src,des,args);
    }

  }
});
