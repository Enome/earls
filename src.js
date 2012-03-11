var _ = require('underscore');

module.exports = function(){
  
  var raw = {};

  var earl =  {

    map: function(map){

      _.extend( raw, map );

    },

    register: function(name, mapper){
      
      earl[name] = function(map){

        _.extend( raw, mapper(map) );
        
      };

    },

    url: function(name, args){

      var url = raw[name];

      if( _.isUndefined( url ) ){
        throw new Error('Missing url: ' + name);
      };

      if( !_.isUndefined( args ) ){

        _.each(args, function(v, k){
          var argument = ':' + k;

          if( url.indexOf(argument) === -1 ){

            throw new Error('Missing argument: ' + k);

          };

          url = url.replace(argument, v);
        });

      };

      return url;

    }

  };

  return earl;

};
