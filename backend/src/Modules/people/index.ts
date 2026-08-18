import { Request, Response, NextFunction, Router } from "express";
import peopleJson from "./people.json"; // Adjust path if needed

export default class PeopleController {
    public router: Router = Router({
        mergeParams: true,
        strict: true,
        caseSensitive: true
    });

    constructor() {
        this.router = Router();
        this.initRoutes();
    }

    private initRoutes(): void {
        this.router.get("/", this.getPeople);
    }

    private async getPeople(req: Request, res: Response, next: NextFunction) {
        res.send(peopleJson)
    }
}