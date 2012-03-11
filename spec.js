var Earl = require('./src');

describe('Earl', function(){

  var earl;

  beforeEach( function(){
    earl = Earl();
  });

  describe('Map', function(){

    beforeEach( function(){

      earl.map({
        'products': '/products',
        'products_show' : '/products/show'
      });

    });

    describe('Single map', function(){

      it('gets the products url', function(){
        earl.url('products').should.eql('/products');
      });

      it('gets the products show url', function(){
        earl.url('products_show').should.eql('/products/show');
      });

    });

    describe('Multiple Raw', function(){

      beforeEach(function(){
        earl.map({ 'users_destroy': '/users/destroy' });
      });

      it('gets the users_destroy url', function(){
        earl.url('users_destroy').should.eql('/users/destroy');
      });

    });

  });

  describe('Arguments', function(){

    describe(':) path', function(){

      describe('One argument', function(){

        beforeEach( function(){
          earl.map({
            'products_show': '/products/show/:id'
          });
        });

        it('returns products shows with 99 as the id', function(){
          earl.url('products_show', { id: 99 }).should.eql('/products/show/99');
        });

      });

      describe('Two arguments', function(){

        beforeEach( function(){
          earl.map({
            'users_products_show': '/users/:userid/products/show/:productid'
          });
        });

        it('returns products shows with 99 as the id', function(){
          earl.url('users_products_show', { userid: 'geert', productid: 99 }).should.eql('/users/geert/products/show/99');
        });

      });

    });

    describe(':( path' , function(){

      beforeEach( function(){
        earl.map({
          'users_products_show': '/users/:userid/products/show/:productid'
        });
      });

      it('throws Missing url', function(){

        ( function(){ earl.url('blog_posts') } ).should.throw('Missing url: blog_posts');

      });

      it('throws Missing argument', function(){

        ( function(){ earl.url('users_products_show', { postid: 10 } ) } ).should.throw('Missing argument: postid');

      });

    });

  });

  describe('Register', function(){

    beforeEach( function(){

      var customMapper = function(raw){
        return raw;
      };

      earl.register('custom', customMapper);

      earl.custom(
        {
          'products' : '/products',
          'products_show': '/products/show'
        }
      );

    });

    it('gets the products url', function(){
      earl.url('products').should.eql('/products');
    });

    it('gets the products show url', function(){
      earl.url('products_show').should.eql('/products/show');
    });

  });

});
