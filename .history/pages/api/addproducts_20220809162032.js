import Product from "../../models/Product"
import conncetDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let p = new Product({
            title: req.body
            slug: req.body 
            desc: req.body
            img: req.body
            category: req.body
            size: req.body
            color: req.body
            price: req.body
            availableQty: req.body
        })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })

    }
    let products = await Product.find()
    res.status(200).json({ products })
}

export default conncetDb(handler)