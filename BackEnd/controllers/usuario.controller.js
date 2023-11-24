const Usuario = require("../models/usuario")
const usuarioCrtl = {}

usuarioCrtl.createUsuario = async (req,res) => {
    const usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Usuario guardado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

usuarioCrtl.loginUsuario = async (req, res) => {
    const criteria = {
        username: req.body.username,
        password: req.body.password
    };

    try {
        const user = await Usuario.findOne(criteria).exec();

        if (!user) {
            res.json({
                status: 0,
                msg: "not found"
            });
        } else {
            res.json({
                status: 1,
                msg: 'success',
                username: user.username,
                userid: user._id
            });
        }
    } catch (err) {
        res.json({
            status: 0,
            msg: 'error'
        });
    }
};



// usuarioCrtl.loginUsuario = async (req,res) => {
//     const criteria = {
//         username: req.body.username,
//         password: req.body.password
//     }

//     Usuario.findOne(criteria, function(err, user){
//         if (err) {
//             res.json({
//                 status: 0,
//                 msg: 'error'
//             })
//         };
//         if(!user){
//             res.json({
//                 status: 0,
//                 msg: "not found"
//             })
//         } 
//         else{
//             res.json({
//                 status: 1,
//                 msg: 'success',
//                 username: user.username,
//                 userId: user._id
//             })
//         }
//     })
// }

module.exports = usuarioCrtl;