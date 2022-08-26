import User from "../../models/User"
import conncetDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body)
        let u = new User(req.body)
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