const { body } = require("express-validator");

class Validations {
  static validateAsset = () => {
    return [
      body("name").exists().withMessage("Campo name é obrigatório"),
      body("query_date")
        .exists()
        .withMessage("Campo query_date é obrigatório")
        .isDate()
        .withMessage("Formato da data incorreto"),
    ];
  };
}

module.exports = Validations;
