const axios = require("axios");

exports.login = async (req, res) => {
  const apiKey = req.get("api-key");
  const clientId = req.get("client-id");
  try {
    const response = await axios({
      url: "https://api-demo.airwallex.com/api/v1/authentication/login",
      method: "post",
      headers: {
        "x-api-key": apiKey,
        "x-client-id": clientId,
      },
    });

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
