function getIndex(req, res) {
    var templateData = {
        title: 'This should become a list!'
    };
    res.render('home/index.html', templateData);
};

function init(app) {
    app.get('/', getIndex);
}

module.exports = {
    init: init
}