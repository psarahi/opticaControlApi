const express = require("express");
const Correlativo = require("../modelos/CorrelativosModelo");
const router = express.Router();

// Funcion get todos
router.get("/", async (req, res) => {
  try {
    const correlativo = await Correlativo.find().populate("sucursales");
    res.send(correlativo);
  } catch (error) {
    console.log(error);
    res.status(500).send("No se encontro ningun documento");
  }
});

// Funcion get todos
router.get("/bySucursal/:id", async (req, res) => {
  try {
    const correlativo = await Correlativo.find({
      sucursales: {
        $eq: req.params.id,
      },
    }).populate("sucursales");
    res.send(correlativo);
  } catch (error) {
    console.log(error);
    res.status(500).send("No se encontro ningun documento");
  }
});

// Funcion get por _id unico
router.get("/:_id", async (req, res) => {
  try {
    const correlativo = await Correlativo.findById(req.params._id).populate(
      "sucursales"
    );

    res.send(correlativo);
  } catch (error) {
    console.log(error);
    res.status(500).send("No se encontro ningun documento");
  }
});

// Funcion para agregar
router.post("/", async (req, res) => {
  try {
    const correlativo = new Correlativo(req.body);
    const result = await correlativo.save();
    res.status(201).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("No se pudo registrar el documento");
  }
});

// Funcion PUT
router.put("/:_id", async (req, res) => {
  try {
    const correlativo = await Correlativo.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true }
    ).populate("sucursales");
    res.status(202).send(correlativo);
  } catch (error) {
    console.log(error);
    res.status(500).send("No se encontro ningun documento");
  }
});

// Funcion DELETE
router.delete("/:_id", async (req, res) => {
  try {
    if (req.params._id.length != 24) {
      return res
        .status(404)
        .send("El id no contiene el numero correcto de digitos");
    }
    const correlativo = await Correlativo.findById(req.params._id);

    if (!correlativo) {
      return res
        .status(404)
        .send("No se encontro ningun documento para borrar");
    }
    await Correlativo.findByIdAndDelete(req.params._id);

    res.status(200).send("Registro borrado");
  } catch (error) {
    console.log(error);
    res.status(500).send("No se encontro ningun documento");
  }
});

module.exports = router;
