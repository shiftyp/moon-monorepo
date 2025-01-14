import express from "express";
import { middleware } from "supertokens-node/framework/express";
import supertokens from "supertokens-node";
import Session from "supertokens-node/recipe/session";
import EmailPassword from "supertokens-node/recipe/emailpassword";

supertokens.init({
    framework: "express",
    supertokens: {
        // We use try.supertokens for demo purposes.
        // At the end of the tutorial we will show you how to create
        // your own SuperTokens core instance and then update your config.
        connectionURI: "https://auth-frosty-butterfly-5873.fly.dev",
        // apiKey: <YOUR_API_KEY>
    },
    appInfo: {
        // learn more about this on https://supertokens.com/docs/session/appinfo
        appName: "moon-app",
        apiDomain: "localhost:3000",
        websiteDomain: "localhost:3000",
        apiBasePath: "/auth",
        websiteBasePath: "/auth",
    },
    recipeList: [
        EmailPassword.init(), // initializes signin / sign up features
        Session.init() // initializes session features
    ]
});

let app = express();

app.use(middleware());

app.listen(3000)