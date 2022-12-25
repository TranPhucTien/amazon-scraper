import dotenv from 'dotenv';
import AmazonModel from '../models/AmazonModel.js';

dotenv.config();

// https://www.amazon.com/s?k=laptop&page=2
const URL = process.env.AMAZON_URL || 'https://www.amazon.com/s';

class AmazonController {
    // [GET] /amazon/api/list
    async getList(req, res) {
        const { name, page } = req.query;

        const { productList, totalPagination } =
            await AmazonModel.getAllProductInPage({
                url: URL,
                name: name || 'laptop',
                p: page || 1,
            });

        return res.json({
            totalPagination,
            productList,
        });
    }
}

export default AmazonController;
