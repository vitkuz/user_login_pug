module.exports = {
    apps : [
        {
            name: "app1",
            script: "./apps/app1/server/bootstrap.js",
            watch: true,
            env: {
                "PORT": 3000,
                "NODE_ENV": "development"
            },
            env_production: {
                "PORT": 80,
                "NODE_ENV": "production",
            },
            node_args: "--inspect"
        },
        {
            name: "app2",
            script: "./apps/app2/server/bootstrap.js",
            watch: true,
            env: {
                "PORT": 4000,
                "NODE_ENV": "development"
            },
            env_production: {
                "PORT": 80,
                "NODE_ENV": "production",
            },
            // node_args: "--inspect"
        }
    ]
}