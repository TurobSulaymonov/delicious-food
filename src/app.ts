import express from "express";
import path from "path";

const app = express();

// 1 Entry
app.use(express.static( path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// 2 Sessions

// 3 Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 4 Rooters


export default app;