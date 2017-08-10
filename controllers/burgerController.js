var burger = require("../models");

module.exports = function(app) {

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
            // date: 
        }).then(function(result) {
            res.json(result);
        });
    });

    // put route -> back to index
    app.put("/burgers/update", function(req, res) {
        burger.burgers.update({
            burger_name: req.body.burger_id,
            devoured: req.body.devoured
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(result) {
            // render back to index with handle
            res.json(result);
            res.redirect("/");
        });
    });
    return app;
};