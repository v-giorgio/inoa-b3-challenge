const APIController = require("./APIController");
const Assets = require("../models/Assets");

class AssetController {
  /* check if asset is in the database */
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

  /* return asset if it is in the database OR call the API method, post it and then return it */
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

      const assetApi = await APIController.getDataAPI(
        inputAsset.name,
        inputAsset.queryDate
      );

      const newAsset = await Assets.create(JSON.stringify(assetApi));

      return res.status(200).json(newAsset);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  };
}

module.exports = AssetController;
