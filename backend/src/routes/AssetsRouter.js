const { Router } = require("express");

const AssetController = require("../controllers/AssetController");

const assetsRouter = Router();

assetsRouter.post("/assets", AssetController.findOrCreateAsset);

module.exports = assetsRouter;
