const router = require("express").Router()
router.use("/lojas", require("./lojas"))
router.use("/usuarios", require("./usuarios"))
router.use("/clientes", require("./clientes"))
router.use("/categorias", require("./categorias"))
router.use("/produtos", require("./produtos"))

module.exports = router;