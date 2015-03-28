var app = {

    renderMatchView: function() {
        $('body').html(this.matchViewTpl());
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },

    initialize: function() {
        var self = this;
        this.store = new MemoryStore();
        this.matchViewTpl = Handlebars.compile($("#matchView-tpl"));
        self.renderMatchView();
    }

};

app.initialize();