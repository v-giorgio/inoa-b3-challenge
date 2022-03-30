const APIController = require("./APIController");
const Assets = require("../models/Assets");

const { validationResult } = require("express-validator");

class AssetController {
  /* check if asset is in the database */
  static getOneAsset = async (name, queryDate) => {
    try {
      const asset = await Assets.findOne({
        where: { name: name, query_date: queryDate },
      });

      return asset;
    } catch (e) {
      return null;
    }
  };

  /* return asset if it is in the database OR call the API method, post it and then return it */
  static findOrCreateAsset = async (req, res) => {
    try {
      const inputAsset = req.body;

      /* run validators */
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const asset = await this.getOneAsset(
        inputAsset.name,
        inputAsset.query_date
      );

      if (asset) {
        return res.status(200).json(asset);
      }

      const assetApi = await APIController.getDataAPI(
        inputAsset.name,
        inputAsset.query_date
      );

      const newAsset = await Assets.create(assetApi);

      return res.status(200).json(newAsset);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  };
}

module.exports = AssetController;
