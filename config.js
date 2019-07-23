const env = process.env.NODE_ENV;

const development = {
    MONGODB_URL : "mongodb://localhost:27017/myapp",
    node_port : 7000,
    jwtsecret : "myverysecretjwtsecret",
};

const test = {
    MONGODB_URL : "",
    node_port : 7000,
    jwtsecret : "myverysecretjwtsecret",
};

const production = {
    MONGODB_URL : "",
    node_port : 7001,
    jwtsecret : "myverysecretjwtsecret",
};

const config = {
    development, test, production
};

module.exports = config[env];
