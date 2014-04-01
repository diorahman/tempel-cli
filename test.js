var tempel = require ("./");
describe('Tempel', function(){
  describe('post', function(){

    it('should upload file', function(done){
      tempel({ args : ['test.js'], language : 'lua' }, done);
    });

    it('should upload text', function(done){
      tempel({ text : '<3 u!!!', language : 'cpp' }, done);
    })
  });
});
