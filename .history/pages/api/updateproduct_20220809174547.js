import Product from "../../models/Product"
import conncetDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        console.log(req.body)
        for (let i = 0; i < req.body.length; i++) {
            let p = await Product.findByIdAndUpdate()
            await p.save()
        }
        res.status(200).json({ success: "Success!" })
    }
    else {
        res.status(400).json({ error: req.body })

    }
    let products = await Product.find()
    res.status(200).json({ products })
}

export default conncetDb(handler)