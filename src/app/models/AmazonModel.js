import dotenv from 'dotenv';
import puppeteer from 'puppeteer';

dotenv.config();

const AmazonModel = {
    async getAllProductInPage({ url, name, p }) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`${url}?k=${name}&page=${p}`, {
            waitUntil: 'networkidle2',
        });

        page.on('error', function (err) {
            theTempValue = err.toString();
            console.log('Error: ' + theTempValue);
        });

        const productList = await page.evaluate(() => {
            const productList = [];

            function randomDate(start, end) {
                let d = new Date(
                    start.getTime() +
                        Math.random() * (end.getTime() - start.getTime()),
                );
                d = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
                return d;
            }

            document
                .querySelectorAll(
                    '.s-main-slot.s-result-list.s-search-results.sg-row > div',
                )
                .forEach((item) => {
                    if (item.getAttribute('data-asin')) {
                        const id = item.getAttribute('data-asin');
                        const detail = item.querySelector(
                            '.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20.s-list-col-right',
                        );
                        const name = detail
                            .querySelector('h2')
                            ?.textContent.trim();
                        const price = detail
                            .querySelector('.a-offscreen')
                            ?.textContent.trim();

                        let now = randomDate(new Date(2012, 0, 1), new Date());

                        const generateId =
                            id +
                            (((1 + Math.random()) * 0x10000) | 0)
                                .toString(16)
                                .substring(1);

                        productList.push({
                            id: generateId,
                            name,
                            price: price ? price : '$100.00',
                            desc: name,
                            date: now,
                            discount: Math.floor(Math.random() * 10),
                            qoh: Math.floor(Math.random() * 100) + 1,
                            reorder: Math.floor(Math.random() * 10),
                        });
                    }
                });

            const pagination = document.querySelectorAll(
                '.s-pagination-container span.s-pagination-item',
            );
            const totalPagination =
                pagination[pagination.length - 1]?.textContent;

            return { totalPagination: Number(totalPagination), productList };
        });

        await browser.close();
        return {
            productList: productList.productList,
            totalPagination: productList.totalPagination
                ? productList.totalPagination
                : 1,
        };
    },
};

export default AmazonModel;
