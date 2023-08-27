const router = require("express").Router();

router.get("/", (request, resolve) => {
    resolve.send("Hello World!");
});

router.get("/:name/:roll", (req, res) => {
    console.log(req.query);
    const { address } = req.query; //query parse '?'
    const { name, roll } = req.params; //: parser
    res.send(`Hello ${name}. You are from ${address} and your roll is ${roll}`);
});

