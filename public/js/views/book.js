app.views.Book = Backbone.View.extend({
  
  tagName: "ul",
  
  template: _.template($('#book-template').html()),
  
  initialize: function () {
    _.bindAll(this, 'render', 'changeTitle', 'clear', 'destroy', 'updateOnEnter');
    this.model.bind('change', this.render);
    this.model.bind('clear', this.destroy);
  },
  
  events: {
    "dblclick span.content"       : "edit",
    "click a.destroy"             : "clear",
    "keypress li input"           : "updateOnEnter"
  },
      
  render: function () {
    $(this.el).html(this.template(this.model.toJSON()));
    return this;
  },
  
  
  edit: function(e) {
    $(e.target).hide();
    $(e.target).next("input").show();
  },
  
  updateOnEnter: function(e) {
    if (e.keyCode == 13) {
      var attr = $(e.target).closest("li").attr("class");
      var send = {};
      send[attr] = $(e.target).val();
      this.model.save(send);
      $(e.target).hide();
      $(e.target).prev(".content").show();
    }
  },
  
  clear: function() {
    this.model.clear();
    this.destroy();
  },
  
  destroy: function(e) {
     $(this.el).remove();
     e.preventDefault();
  }
  
});