const APIController = require("./APIController");
const Assets = require("../models/Assets");

class AssetController {
  static getOneAsset = async (name, queryDate) => {
    try {
      const asset = await Assets.findOne({
        where: { name: name, query_date: queryDate },
      });

      return res.status(200).json(asset);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  };

  static createAsset = async (asset) => {
    const assetData = asset;

    try {
      const newAsset = await Assets.create(assetData);

      return res.status(200).json(newAsset);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  };

  static findOrCreateAsset = async (req, res) => {
    const inputAsset = req.body;

    try {
      const asset = await this.getOneAsset(
        inputAsset.name,
        inputAsset.query_date
      );

      if (asset) {
        return res.status(200).json(asset);
      }
      /** TO DO:
       *
       *   Se não tiver o asset no banco, chamar o método da API e adicioná-lo usando createAsset
       *
       */
    } catch (e) {
      return res.status(500).json(e.message);
    }
  };
}

module.exports = AssetController;
