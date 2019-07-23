const userModel = require("./.././models/user");
const jwt = require("jsonwebtoken");
const config = require("../../config");

module.exports = {
    signIn: async ctx => {
        try {
            ctx.body = {
                message: await userModel.User.create(ctx.request.body),
                success: true
            };
        } catch (err) {
            ctx.status = 400;
            ctx.body = {
                message: err.errmsg,
                success: false
            };
        }
    },
    login: async ctx => {
        if (ctx.result) {
            const payload = {
                email : ctx.result.email,
                id: ctx.result._id
            };

            const token = jwt.sign(payload, config.jwtsecret, { expiresIn: "6h" });

            ctx.body = {
                success: true,
                message: "Welcome " + ctx.result.email,
                data: {
                    token: "JWT " + token
                }
            };
        } else {
            ctx.body = {
                message: "Login failed.",
                success: false
            };
        }
    },
}
