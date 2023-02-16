const { worker } = require("./api/browser");
worker.start({ onUnhandledRequest: "bypass" });
