import MovieModel from "../models/movies.model.js";

class MovieController {
  async findAll(req, res) {
    try {
      const movies = await MovieModel.findAll();

      return res.status(200).json(movies);
    } catch (error) {
      console.error("Erro ao buscar todos os filmes", error);
      return res
        .status(500)
        .json({ message: "Erro ao buscar todos os filmes", error });
    }
  }

  async create(req, res) {
    try {
      const { title, category, duration, sinopse, releaseYear } = req.body;

      // Validação básica
      if (!title || !category || !duration || !sinopse || !releaseYear) {
        return res.status(400).json({
          error: "Campo(s) obrigatório(s) ausente(s).",
        });
      }

      const data = {
        title,
        category,
        duration,
        sinopse,
        releaseYear,
      };

      const newMovie = await MovieModel.create(data);

      const newGame = await GameModel.create(data);

      return res.status(201).json({
        message: "Novo filme criado com sucesso!",
        newMovie,
      });
    } catch (error) {
      console.error("Erro ao criar um novo filme", error);
      res.status(500).json({ error: "Erro ao criar um novo filme" });
    }
  }
}

export default new MovieController();