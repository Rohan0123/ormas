const https = require('https');

const PaytmChecksum = require('paytmchecksum');

export default async function handler(req, res) {
    if (req.method == 'POST') {



        var paytmParams = {};

        paytmParams.body = {
            "requestType": "Payment",
            "mid": "YOUR_MID_HERE",
            "websiteName": "YOUR_WEBSITE_NAME",
            "orderId": req.body.oid,
            "callbackUrl": "http://localhost:3000/api/posttransaction",
            "txnAmount": {
                "value": req.body.subTotal,
                "currency": "INR",
            },
            "userInfo": {
                "custId": req.body.email,
            },
        };


        PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), "YOUR_MERCHANT_KEY").then(function (checksum) {

            paytmParams.head = {
                "signature": checksum
            };

            var post_data = JSON.stringify(paytmParams);

            const requestAsync = () =>{
                return new Promise(resolve, reject)=>{

                }

            }
            
        });
    }
}