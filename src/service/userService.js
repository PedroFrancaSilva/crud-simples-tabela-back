const User = require("../model/user");

/**
 * Camada responsável por lidar com as regras de negócio do software
 */
const UserService = {
  /**
   * Adiciona um registro de usuário no sistema.
   * @param {*} user
   * @returns O usuário criado
   */
  async add(user) {
    let userdb = new User(user);
    return await userdb.save(user);
  },

  /**
   * Busca todos os registros de usuários no sistema.
   * @returns todos os usuários encontrados
   */
  async all() {
    return await User.find();
  },

  /**
   * Procura um registro de usuário.
   * @param {*} id
   * @returns o registro de usuário encontrado
   */
  async findOneById(id) {
    return await User.findById(id);
  },

  /**
   * Atualiza um usuario baseado no id fornecido.
   * @param {*} id
   * @param {*} user
   * @returns true se algum registro foi modificado
   */
  async update(id, user) {
    let result = await User.updateOne({ _id: id }, { $set: user });

    if (result.nModified > 0) {
      //Se algum registro foi modificado
      return true;
    }

    return false;
  },

  /**
   * Apaga um usuário baseado no id fornecido
   * @param {*} id
   * @returns
   */
  async delete(id) {
    result = await User.deleteOne({ _id: id });

    if(result.deletedCount > 0){
        //Se algum usuário foi deletado
        return true;
    }

    return false;
  },
};

module.exports = UserService;
