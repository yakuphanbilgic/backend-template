const fooModel = require("./.././models/foo");

module.exports = {
    createFoo: async ctx => {
        try {
            const result = await fooModel.create(ctx.request.body);

            if (!result) {
                ctx.body = {
                    message: "Foo can not be created.",
                    success: false
                };
                ctx.status = 400;
            } else {
                console.log(result);
                ctx.body = {
                    message: "Foo successfully created.",
                    success: true,
                    data: result
                };
                ctx.status = 200;
            }
        }
        catch (err) {
            console.log(err);
            ctx.status = 400;
            ctx.body = {
                message: err,
                success: false
            };
        }
    },
    readFoo: async ctx => {
       try {
           const result = await fooModel.findOne({_id: ctx.params._id});

           if (!result) {
               ctx.body = {
                   message: "Foo can not be found.",
                   success: false
               };
               ctx.status = 400;
           } else {
               ctx.body = {
                   message: "Foo successfully found.",
                   data: result,
                   success: true
               };
               ctx.status = 200;
           }
       }
       catch (err){
           console.log(err);
           ctx.status = 400;
           ctx.body = {
               message: err,
               success: false
           };
       }
    },
    updateFoo: async ctx => {
        try {
            const result = await fooModel.findOne({_id: ctx.params._id});

            if (!result) {
                ctx.body = {
                    message: "Foo can not be found.",
                    success: false
                };
                ctx.status = 400;
            } else {
                const result2 = await fooModel.findOneAndUpdate(
                    {_id: ctx.params._id},
                    ctx.request.body,
                    {
                        upsert: true,
                        new: true
                    }
                );

                if (result2) {
                    ctx.body = {
                        message: "Foo successfully updated.",
                        data: result,
                        success: true
                    };
                    ctx.status = 200;
                } else {
                    ctx.body = {
                        message: "Foo can not be updated.",
                        success: false
                    };
                    ctx.status = 400;
                }
            }
        }
        catch (err) {
            console.log(err);
            ctx.status = 400;
            ctx.body = {
                message: err,
                success: false
            };
        }
    },
    deleteFoo: async ctx => {
        try {
            const result = await fooModel.findOneAndRemove({_id: ctx.params._id});

            if (!result) {
                ctx.body = {
                    message: "Company can not be deleted.",
                    success: false
                };
                ctx.status = 400;
            } else {
                ctx.body = {
                    message: "Company successfully deleted.",
                    success: true
                };
                ctx.status = 200;
            }
        }
        catch(err) {
            console.log(err);
            ctx.status = 400;
            ctx.body = {
                message: err,
                success: false
            };
        }
    },
};