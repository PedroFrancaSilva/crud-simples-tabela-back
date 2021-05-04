const UserService = require("../service/userService");

/**
 * Camada responsável por lidar com todas as comunicações da API. Nesse caso,
 * as comunicações do usuário.
 */
const UserController = {
  /**
   * Adiciona um registro de usuário no sistema.
   * @param {*} req requisição
   * @param {*} res resposta
   */
  async add(req, res) {
    let user = req.body;
    let errors = [];
    let result;

    if (req.body.name) errors.push("name");
    if (req.body.cpf) errors.push("cpf");
    if (req.body.phone) errors.push("phone");
    if (req.body.email) errors.push("email");

    if (errors.length != 4) {
        res.send({
            result: "error",
            motive: "All fields must be sent!"
          });
    } else {
      result = await UserService.add(user);
      res.send(result);
    }
  },

  /**
   * Busca todos os registros de usuários no sistema.
   * @param {*} req requisição
   * @param {*} res resposta
   */
  async all(req, res) {
    let result = await UserService.all();
    res.send(result);
  },

  /**
   * Procura um registro de usuário.
   * @param {*} req
   * @param {*} res
   */
  async findOneById(req, res) {
    try {
      let id = req.body._id;
      let result = await UserService.findOneById(id);

      if (result) {
        res.send(result);
      } else {
        res.send({
          result: "error",
          motive: "Could not find the regitry with this id!",
        });
      }
    } catch (error) {
      UserController.handleErrors(error, res);
    }
  },

  /**
   * Atualiza um usuario baseado no id fornecido.
   * @param {*} req
   * @param {*} res
   */
  async update(req, res) {
    try {
      let id = req.body._id;
      let user = {};

      if (req.body.name) user.name = req.body.name;
      if (req.body.cpf) user.cpf = req.body.cpf;
      if (req.body.phone) user.phone = req.body.phone;
      if (req.body.email) user.email = req.body.email;

      let result = await UserService.update(id, user);

      if (result) {
        res.send(await UserService.findOneById(id));
      } else {
        res.send({
          result: "error",
          motive: "Could not find the regitry with this id!",
        });
      }
    } catch (error) {
      UserController.handleErrors(error, res);
    }
  },

  /**
   * Deleta um usuário baseado no id fornecido
   * @param {*} req
   * @param {*} res
   */
  async delete(req, res) {
    try {
      let id = req.body._id;
      let result = await UserService.delete(id);
      if (result) {
        res.send({
          result: "success",
          motive: "The registry was deleted!",
        });
      } else {
        res.send({
          result: "error",
          motive: "Could not find the regitry with this id!",
        });
      }
    } catch (error) {
      UserController.handleErrors(error, res);
    }
  },

  /**
   * Lida com os erros da aplicação e retorna os motivos do ocorrido.
   * @param {*} error
   * @param {*} res
   */
  handleErrors(error, res) {
    if (error.name == "CastError") {
      res.send({
        result: "error",
        motive: "The Id provided is not valid!",
      });
    } else {
      print(error);
      res.send({
        result: "error",
        motive: "The server encountered a problem!",
      });
    }
  },
};

module.exports = UserController;
