const { Router } = require("express");
const Validations = require("../services/validations/Validations");

const AssetController = require("../controllers/AssetController");

const assetsRouter = Router();

assetsRouter.post(
  "/assets",
  Validations.validateAsset(),
  AssetController.findOrCreateAsset
);

module.exports = assetsRouter;
