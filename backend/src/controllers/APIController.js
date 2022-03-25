class APIController {
  static getDataAPI = async (name, queryDate) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${name}.SA&apikey=${process.env.API_KEY}`
      );
      const data = await response.json();
      const assets = {
        name: name,
        query_date: queryDate,
        query_value: await data["Time Series (Daily)"][queryDate],
      };

      return assets;
    } catch (e) {
      console.log(e);
    }
  };
}

module.exports = APIController;
