import { api } from "./api.ts";

export class PokemonService {
  static async get(id: number) {
    const { data } = await api.get(`${id}`);
    return data;
  }
}
