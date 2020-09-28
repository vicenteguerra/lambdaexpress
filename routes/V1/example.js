let ExampleController = require('../../app/controllers/ExampleController');

module.exports = function (router) {
    router.get('/example', ExampleController.index);
    return router;
};
