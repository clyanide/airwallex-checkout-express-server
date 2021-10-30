const axios = require('axios');
const uuid = require('../utilities/uuid');

exports.createPaymentIntent = async (req, res) => {
  const requestBody = req.body;
  requestBody['request_id'] = uuid.generateUuidV1();
  requestBody['merchant_order_id'] = uuid.generateUuidV1(); // This would normally be generated on creation of an order

  const bearerToken = 'Bearer ' + req.get('Authorization');
  const contentType = req.get('Content-Type');

  try {
    const response = await axios({
      url: 'https://api-demo.airwallex.com/api/v1/pa/payment_intents/create',
      method: 'post',
      headers: {
        'Content-Type': contentType,
        Authorization: bearerToken,
      },
      data: requestBody,
    });

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
