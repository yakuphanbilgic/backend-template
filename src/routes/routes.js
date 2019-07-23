const userController = require("../controller/user-controller");
const fooController = require("../controller/foo-controller");
const jwtAuth = require("./.././middleware/jwtAuth");
const jwtLocal = require("./.././middleware/jwtLocal");

module.exports = ({router}) => {
    router
        .post('/signIn', userController.signIn)
        .post('/login', jwtLocal, userController.login)

        .post('/foo', jwtAuth, fooController.createFoo)
        .get('/foo/:_id', jwtAuth, fooController.readFoo)
        .delete('/foo/:_id', jwtAuth, fooController.deleteFoo)
        .put('/foo/:_id', jwtAuth, fooController.updateFoo)
};