function getIndex(req, res) {
    var templateData = {
        list: [{
            name: "CQR"
        }]
    };
    res.render('home/index.html', templateData);
};

function init(app) {
    app.get('/', getIndex);
}

module.exports = {
    init: init
}