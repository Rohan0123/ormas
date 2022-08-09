import Product from "../../models/Product"
import conncetDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let p = new Product({
            title: req.body[i].
            slug: req.body[i]. 
            desc: req.body[i].
            img: req.body[i].
            category: req.body[i].
            size: req.body[i].
            color: req.body[i].
            price: req.body[i].
            availableQty: req.body[i].
        })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })

    }
    let products = await Product.find()
    res.status(200).json({ products })
}

export default conncetDb(handler)