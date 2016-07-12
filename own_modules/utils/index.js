module.exports = {
    randomString: function(len) {
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", text="";
      for( var i=0; i < len; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },

    errorHandling: function(error) {
      if(error) {
        console.log('error: ' + error);
      }
    }
};
