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
                return new Promise((resolve, reject)=>{
                    var options = {

                        /* for Staging */
                        //hostname: 'securegw-stage.paytm.in',
        
                        /* for Production */
                        hostname: 'securegw.paytm.in',
        
                        port: 443,
                        path: '/theia/api/v1/initiateTransaction?mid={YOUR_MID_HERE}&orderId=ORDERID_98765',
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Content-Length': post_data.length
                        }
                    };
        
                    var response = "";
                    var post_req = https.request(options, function (post_res) {
                        post_res.on('data', function (chunk) {
                            response += chunk;
                        });
        
                        post_res.on('end', function () {
                            console.log('Response: ', response);
                            resolve(response)
                        });
                    });
        
                    post_req.write(post_data);
                    post_req.end();
                

                })

            }
            
            let myr = await req
        });
    }
}