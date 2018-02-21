
require('mahrio').runServer( process.env, __dirname )
  .then( function(server){
    server.route({
      method: 'GET',
      path: '/',
      handler: function( request, reply){
        reply('Hello World! Current time is ' + (new Date).getTime() );
      }
    })
  });