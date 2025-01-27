const mongoose = require("mongoose");
const dayjs = require("dayjs");

const detalleVenta = new mongoose.Schema({
  tipoVenta: {
    type: String,
    required: true,
  },
  tipoLente: {
    type: String,
  },
  proteccion: {
    type: [String],
  },
  material: {
    type: String,
  },
  moda: {
    type: String,
  },
  paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "paciente",
  },
  rtn: {
    type: String,
  },
  nombreRtn: {
    type: String,
  },
  sucursales: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sucursales",
  },
  detalleInventario: [
    {
      inventario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "inventario",
      },
      cantidad: {
        type: Number,
        required: true,
      },
      // descuento: {
      //   type: Number,
      //   default: 0,
      // }
    },
  ],
  fecha: {
    type: Date,
    default: dayjs().format("YYYY-MM-DD"),
  },
  entregaProgramada: {
    type: Date,
    default: dayjs().format("YYYY-MM-DD"),
  },
  fechaEntrega: {
    type: Date,
    default: dayjs().format("YYYY-MM-DD"),
  },
  fechaRealizado:{
    type: Date,
    default: dayjs().format("YYYY-MM-DD"),
  },
  detallePagos: [
    {
      fecha: {
        type: Date,
        default: dayjs().format("YYYY-MM-DD"),
      },
      formaPago: {
        type: String,
        required: true,
      },
      monto: {
        type: Number,
        required: true,
      },
      usuarios: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios",
      },
    },
  ],
  descuentoTotal: {
    type: Number,
    default: 0,
  },
  cantPagos: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
  acuenta: {
    type: Number,
    default: 0,
  },
  numFacRec: {
    type: String,
  },
  entregado: {
    type: Boolean,
    default: false,
  },
  trabajoHecho: {
    type: Boolean,
    default: false,
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

const DetalleVenta = mongoose.model("detalleVenta", detalleVenta);

module.exports = DetalleVenta;

// {
//   "tipoVenta": "Cambio de lente",
//   "tipoLente": "Monofocal",
//   "proteccion": "Antireflejo",
//   "material": ""
//   "modaArmazon": ""
//   "pacientes": "66f6e24487cdeeb996c2555e",
//   "detalleInventario": [{
//     "inventario": "66f5ba1598c7e92fa0be45c8",
//     "descripcion": "Lentes",
//     "precioVenta": "700",
//     "cant": "1",
//     "descuento": "100"
//   },
//   {
//     "inventario": "66f5ba5798c7e92fa0be45cc",
//     "descripcion": "Aros",
//     "precioVenta": "1200",
//     "cant": "1",
//     "descuento": "300"
//   }
// ],
//   "fecha": "2024-08-30 00:00:00",
//   "fechaEntrega": "2024-09-01 14:00:00",
//   "detallePagos" : [{
//      "fecha": "2024-09-01 14:00:00",
//      "monto": "950",
//      "formaPago": "Efectivo"
//    }, {
//      "fecha": "2024-10-01 14:00:00",
//      "monto": "950",
//      "formaPago": "Efectivo"
//  }],
//   "descuentoTotal": "300",
//   "cantPagos": "2",
//   "montoPagos": "950",
//   "total": "1900",
//   "acuenta": "950"
// }
