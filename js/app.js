Vue.component('bliss-status', {
    template: '#bliss-status',
    data: function() {
        return {
            data: 'Laster inn nyeste status...'
        }
    },
    mounted: function() {
        var self = this;

        axios.get('https://slack.com/api/channels.history?token=xoxp-159749655073-160773494196-161110113941-faf5b9184b9f5c13324e230c5225b4a5&channel=C4Q9MLVDW&pretty=1')
        .then(res => {
            var data = res.data['messages'];

            for (var i = 0; i < data.length; i++) {
                try {
                    var obj = JSON.parse(data[i].text);

                    if (obj.type === "bliss") {
                        self.data = obj.status;
                        break;
                    }

                } catch (error) { }
            }
        })
        .catch(err => {
            console.log("ERROR: fetching bliss status");
        });
    }
});

Vue.component('contact-form', {
    template: '#contact-form',
    data: function() {
        return {
            form: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        sendForm() {
            const text = "Person: " + this.form.name + " med mail: " + this.form.email + " skriver: " + this.form.message;
            axios.get('https://slack.com/api/chat.postMessage?token=xoxp-159749655073-160773494196-161110113941-faf5b9184b9f5c13324e230c5225b4a5&channel=%23kontakt&text='+ text +'&pretty=1')
            .then(res => {
                this.form.name = '';
                this.form.email = '';
                this.form.message = '';
            })
            .catch(err => console.log(err));


        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
