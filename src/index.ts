//external packages
import express, { json } from "express";

//imports routes
import routeBus from "./routes/buses.route";
import routeOccurrence from "./routes/occurrences.route";
import routeUser from "./routes/users.route";

//configs
import { GLOBALS } from "./config";



const app = express();

app.use(json());

app.use(routeUser);
app.use(routeOccurrence);
app.use(routeBus);

app.listen(GLOBALS.port, () => {

    console.log(`Server: localhost:${GLOBALS.port} success`);

});

