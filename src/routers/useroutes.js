const express = require('express')
const router = express.Router();
const Sucursal = require('../models/sucursal')
const Producto = require('../models/productos')
const Contraindicaciones = require('../models/contraindicaciones');
const No_mezclar = require('../models/no_mezclar');
const Poblacion_obj = require('../models/poblacion_obj');
const Grupo_med = require('../models/grupo_med');
const Compuestos = require('../models/compuestos');
const Persona = require('../models/persona');
const Carrito = require('../models/carrito');
const Cliente = require('../models/cliente');
const Empleado = require('../models/empleado');
const { verificarToken, generarToken } = require('./middleware');
const bcrypt = require('bcrypt');
router.get('/', (req, res) => {
    try {
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(404)
    }
})

//Este es el EndPoint para crear nuevos usuarios
router.post('/registrouser', async (req, res) => {
    try {
        const { ci, ci_garante, usert, passwordt, correo_electronico, rol } = req.body;

        // Verifica si el usuario ya existe
        const usuarioExistente = await Empleado.findOne({ where: { usert } });

        if (usuarioExistente) {
            return res.status(400).json({ mensaje: 'El usuario ya existe' });
        }

        // Hash de la contraseña antes de almacenarla
        const hashedPassword = await bcrypt.hash(passwordt, 10);
        const hashedusert = await bcrypt.hash(passwordt, 10);

        // Crea un nuevo usuario en la base de datos
        const nuevoUsuario = await Empleado.create({
            ci,
            ci_garante,
            usert: hashedusert,
            passwordt: hashedPassword,
            correo_electronico,
            rol
        });

        res.status(201).json({ mensaje: 'Usuario registrado exitosamente', usuario: nuevoUsuario });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});
//Este es el EndPoint para crear nuevas personas
router.post('/registro-persona', async (req, res) => {
    try {
        const { ci, nombre, apellidos, fecha_nacimiento, genero, telefono, direccion_domicilio } = req.body;

        // Crea una nueva persona en la base de datos
        const nuevaPersona = await Persona.create({
            ci,
            nombre,
            apellidos,
            fecha_nacimiento,
            genero,
            telefono,
            direccion_domicilio
        });

        res.status(201).json({ mensaje: 'Persona registrada exitosamente', persona: nuevaPersona });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});

//Este es el EndPoint para logearse en el sistema
router.post('/login', async (req, res) => {
    try {
        const { usert, passwordt } = req.body;

        // Busca el usuario en la base de datos
        const usuario = await Empleado.findOne({ where: { usert } });
        if (!usuario) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }
        if (usuario.passwordt != passwordt) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        // Usuario autenticado
        const usuarioAutenticado = {
            ci: usuario.ci,
            correo_electronico: usuario.correo_electronico,
            rol: usuario.rol
            // Puedes incluir más información del usuario si es necesario
        };

        // Genera el token
        const token = generarToken(usuarioAutenticado);

        // Devuelve el token y la información del usuario
        res.json({ token, usuario: usuarioAutenticado });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});


// EndPoint para devolver las lista de productos del sucursal x
router.post('/lsmedicament-sucx', async (req, res) => {
    const { id_sucursal } = req.body;

    try {
        // Busca todos los productos asociados a la sucursal mediante la relación definida en tu modelo
        const productos = await Producto.findAll({
            where: { id_sucursal },
            // Puedes incluir más opciones aquí según tus necesidades
        });
        res.json(productos);
    } catch (error) {
        console.error(error);
        res.sendStatus(404);
    }
});


//Este es el EndPoint para hacer el test de servidor
router.get('/test', verificarToken, (req, res) => {
    try {
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(404)
    }
})
module.exports = router;