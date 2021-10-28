const axios = require("axios");

exports.createPaymentIntent = async (req, res) => {
  const requestBody = req.body;
  const bearerToken = "Bearer " + req.get("Authorization");
  const contentType = req.get("Content-Type");

  try {
    const response = await axios({
      url: "https://api-demo.airwallex.com/api/v1/pa/payment_intents/create",
      method: "post",
      headers: {
        "Content-Type": contentType,
        Authorization: bearerToken,
      },
      data: requestBody,
    });

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
