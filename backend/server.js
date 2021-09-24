const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/ping", (req, res) => {
    res.send({ msg: "Backend is connected" });
});
