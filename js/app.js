Vue.component('test', {
    template: '#test',
    data: function() {
        return {
            lol: 'ha'
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
