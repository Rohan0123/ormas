import Product from "../../models/Product"
import conncetDb from "../../middleware/mongoose"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        let p = new Product({
            title: req.body[i].title,
            slug: req.body[i].slu, 
            desc: req.body[i].desc,
            img: req.body[i].img,
            category: req.body[i].category,
            size: req.body[i].size,
            color: req.body[i].title,
            price: req.body[i].price,
            availableQty: req.body[i].availabl,
        })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })

    }
    let products = await Product.find()
    res.status(200).json({ products })
}

export default conncetDb(handler)