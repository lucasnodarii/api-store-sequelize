import Client from "../models/client.model.js";

const clientRepository = {
  createClientRepository: async function (client) {
    try {
      return await Client.create(client);
    } catch (error) {
      throw error;
    }
  },
  getClientsRepository: async function () {
    try {
      return await Client.findAll();
    } catch (error) {
      throw error;
    }
  },
  getClientRepository: async function (id) {
    try {
      return await Client.findByPk(id);
    } catch (error) {
      throw error;
    }
  },
  deleteClientRepository: async function (id) {
    try {
      await Client.destroy({
        where: {
          clientId: id,
        },
      });
    } catch (error) {
      throw error;
    }
  },
  updateClientRepository: async function (client) {
    try {
      await Client.update(client, {
        where: {
          clientId: client.clientId,
        },
      });
      return await clientRepository.getClientRepository(client.clientId);
    } catch (error) {
      throw error;
    }
  },
};

export default clientRepository;
