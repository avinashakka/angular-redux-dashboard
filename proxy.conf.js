const PROXY_CONFIG = [
    {
      context: [
        "/proxy"
      ],
      target: "http://0.0.0.0:8080",
      secure: false
    }
  ];
  
  module.exports = PROXY_CONFIG;
  