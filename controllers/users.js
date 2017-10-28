module.exports = {
    signUp: async (req, res, next) => {

        // req.value.body contents
        console.log('the contents of req.value.body ', req.value.body);
        console.log('UsersController.signUp() invoked');
    },

    signIn: async (req, res, next) => {
        console.log('UsersController.signIp() invoked');
    },

    secret: async (req, res, next) => {
        console.log('UsersController.secret() invoked');
    }
}