import express, { json } from "express";
import GLOBALS from "./config";
import routeOccurrence from "./routes/occurrences.route";
import routeUser from "./routes/users.route";



const app = express();

app.use(json());

app.use(routeUser);
app.use(routeOccurrence);

app.listen(GLOBALS.port, () => {

    console.log(`Server: localhost:${GLOBALS.port} success`);

});

