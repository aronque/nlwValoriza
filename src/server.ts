import express from "express";

const app = express();

app.get("/test", (request, response) => {
    return response.send("Olá vitor")
})

app.post("/test-post", (request, response) => {
    return response.send("Postado vitor")
})

app.listen(3000, () => console.log("server is running"));