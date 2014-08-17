// js/models/todo.js

var app = app || {};

// Todo Model
// ----------
// Our basic **Todo** model has 'title' and 'completed' attibutes.

app.Todo = Backbone.Model.extend({
    // defaults attributes ensure that each todo created has 'title' and 'completed' keys.
    defaults: {
        title: '',
        completed: false
    },

    // toggle the 'completed' state of this todo item.
    toggle: function () {
        this.save({
            completed: !this.get('completed')
        });
    }

});