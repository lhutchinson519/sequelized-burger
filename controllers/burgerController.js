var burger = require("../models");

module.exports = function(app) {


    app.get("/", function(req, res) {
        res.redirect("/burgers");
    });

    app.get("/burgers", function(req, res) {
        burger.burgers.findAll({}).then(function(burgerData) {
            res.render("index", { burger_data: burgerData });
        });
    });

    // post route -> back to index
    app.post("/burgers/create", function(req, res) {
        // takes the request object using it as input for buger.addBurger
        burger.burgers.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function(result) {
            res.redirect("/burgers");

        });
    });

    // put route -> back to index
    app.put("/burgers/update", function(req, res) {

        console.log(req.body)
        burger.burgers.update({
            devoured: 1
        }, {
            where: {
                id: req.body.burger_id
            }
        }).then(function(result) {
            // render back to index with handle
            res.redirect("/");
        });
    });
    return app;
};