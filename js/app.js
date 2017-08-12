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
        .then(function (res) {
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
        .catch(function (err) {
            console.log("ERROR: fetching bliss status");
        });
    }
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
