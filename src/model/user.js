const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: O id do usuário.
 *           example: 608b2adba6924f37809cacce
 *         name:
 *           type: string
 *           description: O nome do usuário.
 *           example: Pedro Silva
 *         cpf:
 *           type: string
 *           description: O CPF do usuário.
 *           example: 669.545.600-30
 *         phone:
 *           type: string
 *           description: O telefone do usuário.
 *           example: 38988765423
 *         email:
 *           type: string
 *           description: O email do usuário.
 *           example: peu06@hotmail.com
 */
 UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max: 100,
    },
    cpf: {
      type: String,
      required: true,
      max: 100,
    },
    phone: {
      type: String,
      required: true,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
