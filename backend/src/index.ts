import "reflect-metadata"; 
import Server from "./server";
import * as dotenv from "dotenv";

dotenv.config();

let server: Server;

try {
    server = new Server(process.env.ENV || "local", process.env.PORT || "8080");
    server.start();
    
} catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
}