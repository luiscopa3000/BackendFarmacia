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


        // Hash de la contraseña antes de almacenarla
        const hashedPassword = await bcrypt.hash(passwordt, 10);
        const hashedusert = await bcrypt.hash(usert, 10);
        console.log(hashedusert)
        console.log(hashedPassword)
        // Verifica si el usuario ya existe
        const usuarioExistente = await Empleado.findOne({ where: { usert: hashedusert } });

        if (usuarioExistente) {
            return res.status(400).json({ mensaje: 'El usuario ya existe' });
        }
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

//Este es el EndPoint para logearse en el sistema// Este es el EndPoint para logearse en el sistema
router.post('/login', async (req, res) => {
    try {
        const { usert, passwordt } = req.body;

        // Obtener todos los usuarios de la base de datos
        const usuarios = await Empleado.findAll();

        // Buscar el usuario con el usert proporcionado
        const usuario = usuarios.find((u) => bcrypt.compareSync(usert, u.usert));

        if (!usuario) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        // Comparar la contraseña proporcionada con la contraseña encriptada en la base de datos
        const passwordtMatch = bcrypt.compareSync(passwordt, usuario.passwordt);

        if (!passwordtMatch) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        // Usuario autenticado
        const usuarioAutenticado = {
            ci: usuario.ci,
            correo_electronico: usuario.correo_electronico,
            rol: usuario.rol
            // Puedes incluir más información del usuario si es necesario
        };

        // Generar el token
        const token = generarToken(usuarioAutenticado);

        // Devolver el token y la información del usuario
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
});


router.post('/delete', async (req, res) => {
    const { ci } = req.body;
    try {
        const resultado = await Empleado.destroy({
            where: {
                ci: ci
            }
        });
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
})
router.post('/mostrar', async (req, res) => {
    try {
        const reultado = await Empleado.findAll();
        res.send(reultado)
    } catch (error) {
        res.send(error)

    }
})
// EndPoint para devolver las lista de productos del sucursal x
router.post('/lsmedicament-sucx', verificarToken, async (req, res) => {
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
//Consultar datos de una persona de ci x
router.post('/personax', verificarToken, async (req, res) => {
    const { ci } = req.body;
    try {
        const persona = await Persona.findOne({
            where: {
                ci: ci
            }
        })
        if (!persona) {
            return res.status(404).json({ mensaje: 'Persona no encontrada' })
        }
        res.send(persona)
    } catch (error) {
        console.error(error)
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
})


//EndPoint para manejar el registro de medicamentos

router.post('/rgmedicamento', async (req, res) => {
    try {
        await Producto.create(req.body);
        res.status(200).json({ mensaje: 'Producto registrado exitosamente' });
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.parent.detail })
    }
})


//End Point para eliminar un producto de id x
router.post('/delete-prod-x', async (req, res) => {
    const { id_productos } = req.body;
    try {
        // Encuentra el producto por ID y elimínalo
        const productoEliminado = await Producto.destroy({
            where: {
                id_productos: id_productos+""
            }
        });
        if (productoEliminado) {
            res.status(200).json({ mensaje: 'Producto eliminado exitosamente' });
        } else {
            res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
})
//Este es el EndPoint para hacer el test de servidor
router.get('/test', verificarToken, (req, res) => {
    try {
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(404)
    }
})
module.exports = router;