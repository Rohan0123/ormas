import User from "../../models/User"
import conncetDb from "../../middleware/mongoose"
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body)
        const {name, email} = req.body
        var password = CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET).toString();
        let u = new User({name, email, password})
        await u.save()
        
        res.status(200).json({ success: "User Added!" })
    }
    else {
        res.status(400).json({ error: req.body })

    }
    let products = await Product.find()
    res.status(200).json({ products })
}

export default conncetDb(handler)