app.models.Book = Backbone.Model.extend({

  clear: function() {
    this.destroy();
    this.trigger("clear");
  }
  
});