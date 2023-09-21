export default {
  name: "/",
  method: "get",

  async execute(req, res) {
    res
      .status(200)
      .json({
        message: "Olá, seja bem vindo(a).",
        rotas: "/user/:userID.",
        createdBy: "@uylt",
      });
  },
};
