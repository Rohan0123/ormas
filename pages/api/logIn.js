import User from "../../models/User";
import conncetDb from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');



const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    let user = await User.findOne({ email: req.body.email });
    var bytes  = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    if (user) {
      if (req.body.email == user.email && req.body.password == originalText) {
        var token = jwt.sign({
          email: user.email,
          name: user.name,
        }, process.env.JWT_SECRET, { expiresIn: '2d' });
        res.status(200).json({success: "User Logged In!", token});
      }
      else res.status(200).json({ success: false, error: "Invalid credentials!" });
    } else {
      res.status(200).json({ success: false, error: "No user found !" });
    }
  }
  let products = await Product.find();
  res.status(200).json({ products });
};

export default conncetDb(handler);
