const User = require('../models/user');


 /* se esta exportando la funcion, se recibe como parametro el objeto app que es el app de express
 se esta enviando un slice vacio a la respuesta */
module.exports = function (app) {


    app.get('/users', (req,res) => {
        User.getUsers((err, data) => {
            res.status(200).json(data);
        });
        // res.json([]);
    });


    app.post('/users', (req, res) => {
        // console.log(req.body); me imprime lo que manda el cliente
        const userData = {
            id: null,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            created_at: null,
            updated_at: null
        };

        User.insertUser(userData, (err, data) => {
            if (data && data.insertId) {
                console.log(data);
                res.json({
                    success: true,
                    msg: 'Usuario insertado',
                    data: data
                });
            } else {
                res.status(500).json({
                    success: false,
                    msg: "Error"
                });
            }

        });
    });


    app.put('/users/:id', (req, res) => {
        const userData = {
            id: req.params.id,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            created_at: null,
            updated_at: null
        };
        User.updateUser(userData, (err, data) => {
            if (data && data.msg) {
                res.json(data)
            } else {
                res.json({
                    success: false,
                    "msg": "Error"
                })
            }
        });
    });



    app.delete('/users/:id', (req, res) => {
        User.deleteUser(req.params.id, (err, data) => {
            if (data && data.msg === "deleted" || data.msg === "not exists") {
                res.json({
                    success: true,
                    data
                })
            } else {
                res.status(500).json({
                    "msg": "Error"
                })
            }
        });
    });



}





