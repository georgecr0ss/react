(function() {
    function Emitter() {
        this.events = {
            prop: []
        };
    }

    Emitter.prototype.on = function(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }

    Emitter.prototype.emit = function(type) {
        if (this.events[type]) {
            this.events[type].forEach(function(listener) {
                listener();
            });
        }
    }

    var emitter = new Emitter();

    emitter.on('change', function() {
        console.warn('i have changed');
    });

    emitter.on('change', function() {
        console.warn('i have changed 3');
    });

    emitter.on('change', function() {
        console.warn('i have changed 4');
    });

    emitter.on('change', function() {
        console.warn('i have changed 5');
    });

    setTimeout(function() {
        emitter.emit('change');
    }, 1000);

})();