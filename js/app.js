Vue.component('bliss-status', {
    template: '#bliss-status',
    data: function() {
        return {
            data: 'Laster inn nyeste status...'
        }
    },
    mounted: function() {
        var self = this;

        axios.get('https://slack.com/api/channels.history?token=xoxp-159749655073-160925755300-415322043205-0d757ec7f9ed4aa82359df793c582a31&channel=C4Q9MLVDW&pretty=1')
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
            axios.get('https://slack.com/api/chat.postMessage?token=xoxp-159749655073-160925755300-415322043205-0d757ec7f9ed4aa82359df793c582a31&username=ProgNett&channel=%23kontakt&text='+ text +'&pretty=1')
            .then(res => {
                Materialize.toast('Takk, din forespørsel er nå registrert! 😇', 4000);
                this.form.name = '';
                this.form.email = '';
                this.form.message = '';
            })
            .catch(err => Materialize.toast('Uff, noe gikk galt! Vennligst kom til Bliss og informer oss med hvordan og hvorfor', 4000));
        }
    }
});

Vue.component('memeber-form', {
    template: '#memeber-form',
    data: function() {
        return {
            form: {
                firstname: '',
                lastname: '',
                email: ''
            }
        }
    },
    methods: {
        sendForm() {
            // Form
            Materialize.toast("hei " + this.form.firstname, 4000);
            $('#addmemeber').modal('close');
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
