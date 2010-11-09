app.collections.Book = Backbone.Collection.extend({
  
  model: app.models.Book,
  
  url: "/api/1/books",
  
  renderLibrary: function(lib){
    console.log("Rendering library")
    lib.each(function(book){
      var view = new app.views.Book({model: book});
      $("#books").append(view.render().el);
    });
  }
  
  
});