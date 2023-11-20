import { api } from "./api.ts";

export class PokemonService {
  static async get(id: number) {
    const response = await api.get(`${id}`);
    return response;
  }
}
