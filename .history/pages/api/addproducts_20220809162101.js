import Product from "../../models/Product"
import conncetDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let p = new Product({
            title: req.body[i].title,
            slug: req.body[i].slu, 
            desc: req.body[i].de,
            img: req.body[i].img,
            category: req.body[i].title,
            size: req.body[i].title,
            color: req.body[i].title,
            price: req.body[i].title,
            availableQty: req.body[i].title,
        })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })

    }
    let products = await Product.find()
    res.status(200).json({ products })
}

export default conncetDb(handler)