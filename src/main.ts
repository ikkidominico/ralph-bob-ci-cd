import express, { Router, Request, Response } from "express";

function main() {
    const port = process.env.APP_PORT || 3000;
    const app = express();
    app.use(express.json());
    const route = Router();
    route.get("/alive", (request: Request, response: Response) => {
        response.status(200).send();
    });
    app.use(route);
    app.listen(port, () =>
        console.log(
            `Ralph and Bob are building and running on port: ${port} 🛠️`,
        ),
    );
}

main();
