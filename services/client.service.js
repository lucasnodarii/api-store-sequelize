import clientRepository from "../repositories/client.repository.js";

const clientService = {
  createClientService: async function (client) {
    return await clientRepository.createClientRepository(client);
  },

  getClientsService: async function () {
    return await clientRepository.getClientsRepository();
  },

  getClientService: async function (id) {
    return await clientRepository.getClientRepository(id);
  },
  deleteClientService: async function (id) {
    await clientRepository.deleteClientRepository(id);
  },
  updateClientService: async function (client) {
    return await clientRepository.updateClientRepository(client);
  },
};

export default clientService;
