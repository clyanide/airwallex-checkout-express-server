const axios = require("axios");

exports.getToken = async (req, res) => {
  try {
    const response = await axios({
      url: "https://api-demo.airwallex.com/api/v1/authentication/login",
      method: "post",
      headers: {
        "x-api-key":
          "f2007481a3d7cc5a92c7081ec3b890ab75a96784e5b58cd242bffab9183b42cd95b6dbd6d17c0fc0c516fda6ea3514b9",
        "x-client-id": "O3XnkjaSSg2aJ5N_WBrpgw",
      },
    });

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
