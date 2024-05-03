const Product = require('../models/Product');

const save = async (req, res) => {
    let params = req.body;
    const productToSave = new Product(params);

    await productToSave.save((err, product) => {
        if (err || !product) {
            res.status(403).json({
                code: 403,
                status: err,
                data: {}
            });
        } else {
            res.status(201).json({
                code: 201,
                status: 'Success',
                data: product
            });
        }
    });
};

const list = async (req, res) => {
    const product = await Product.find().select({__v:0});

    if (!product) {
        res.status(404).json({
            code: 404,
            status: 'Product not found',
            data: []
        });
    } else {
        res.status(200).json({
            code: 200,
            status: 'Success',
            data: product
        });
    }
};

const productFindId = async (req, res) => {
    let id = req.params.id;
    const product = await Product.findById({ _id: id });

    if (!product) {
        res.status(404).json({
            code: 404,
            status: 'Product not found',
            data: {}
        });
    } else {
        res.status(200).json({
            code: 200,
            status: 'Success',
            data: product
        });
    }
};

const update = async (req, res) => {
    let id = req.params.id;
    
    const product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
    
    if (!product) {
        res.status(500).json({
            code: 500,
            status: 'Server error',
            data: {}
        });
    } else {
        res.status(200).json({
            code: 200,
            status: 'Success',
            data: product
        });
    }
};

const deleted = async (req, res) => {
    let id = req.params.id;

    await Product.findByIdAndDelete({ _id: id }).exec((err, product) => {
        if (err || !product) {
            res.status(500).json({
                code: 500,
                status: 'Server error',
                data: {}
            });
        } else {
            res.status(200).json({
                code: 200,
                status: 'Success',
                data: product
            });
        }
    });
};

module.exports = {
    save,
    list,
    productFindId,
    update,
    deleted
}