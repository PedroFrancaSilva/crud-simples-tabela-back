const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");

/**
 * @swagger
 *  /users/all/:
 *    get:
 *      summary: Busca todos os registros de usuário no sistema.
 *      description: Busca todos os registros de usuário no sistema.
 *      tags:
 *          - Usuario
 *      produces:
 *       - application/json
 *      responses:
 *        200:
 *          description: Sucesso criacao do registro
 *        410:
 *          description: Falha na criacao do Usuário
 *
 */
router.get("/all", UserController.all);

/**
 * @swagger
 *  /users/add/:
 *    post:
 *      summary: Adiciona um registro de usuário no sistema.
 *      description: Adiciona um registro de usuário no sistema. Todos os campos são obrigatórios.
 *      tags:
 *          - Usuario
 *      produces:
 *       - application/json
 *      consumes:
 *       - application/json
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              name:
 *               type: string
 *               description: O nome do usuário.
 *               example: Pedro Silva
 *              cpf:
 *               type: string
 *               description: O CPF do usuário.
 *               example: 669.545.600-30
 *              phone:
 *               type: string
 *               description: O telefone do usuário.
 *               example: 38988765423
 *              email:
 *               type: string
 *               description: O email do usuário.
 *               example: peu06@hotmail.com
 *      responses:
 *        200:
 *          description: Sucesso criacao do registro
 *        410:
 *          description: Falha na criacao do Usuário
 *
 */
router.post("/add", UserController.add);

/**
 * @swagger
 *  /users/findOneById/:
 *    post:
 *      summary: Procura um usuário baseado no seu id.
 *      description: Procura um usuário baseado no seu id.
 *      tags:
 *          - Usuario
 *      produces:
 *       - application/json
 *      consumes:
 *       - application/json
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 description: Id do usuário.
 *                 example: 608b2adba6924f37809cacce
 *      responses:
 *        200:
 *          description: Sucesso criacao do registro
 *        410:
 *          description: Falha na criacao do Usuário
 *
 */
router.post("/findOneById", UserController.findOneById);

/**
 * @swagger
 *  /users/update/:
 *    put:
 *      summary: Atualiza um registro de usuário no sistema.
 *      description: Atualiza um registro de usuário no sistema.
 *      tags:
 *          - Usuario
 *      produces:
 *       - application/json
 *      consumes:
 *       - application/json
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *      responses:
 *        200:
 *          description: Sucesso criacao do registro
 *        410:
 *          description: Falha na criacao do Usuário
 *
 */
router.put("/update", UserController.update);

/**
 * @swagger
 *  /users/delete/:
 *    delete:
 *      summary: Apaga um usuário baseado no seu id.
 *      description: Apaga um usuário baseado no seu id.
 *      tags:
 *          - Usuario
 *      produces:
 *       - application/json
 *      consumes:
 *       - application/json
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 description: Id do usuário.
 *                 example: 608b2adba6924f37809cacce
 *      responses:
 *        200:
 *          description: Sucesso criacao do registro
 *        410:
 *          description: Falha na criacao do Usuário
 *
 */
router.delete("/delete", UserController.delete);

module.exports = router;
