const PROXY_CONFIG = [
    {
        context: [
        "/api"
        ],
        target: "http://0.0.0.0:8080",
        secure: false
    },
    {
        context: [
            "/api2"
        ],
        target: "http://0.0.0.0:8081",
        secure: false
    }
];
module.exports = PROXY_CONFIG;