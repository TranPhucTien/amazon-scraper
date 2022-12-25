## Project setup

1. Clone this repo

```
git clone https://github.com/TranPhucTien/amazon-scraper.git
```

2. Environment variables setup

```
# Go to `.env` file

# The port you want to start the server, for ex: 5000, 5555, 5050, 8080,... (Default: 5000)
PORT=<your-port>

# Url pointing to Amazon
AMAZON_URL='https://www.amazon.com/s'
```

3. Install all dependencies

-   Development environment

```
# Goto the `amazon-scraper` directory
cd amazon-scraper

# Install package
npm i
```

4. Run project

```
# Run project
npm start

> ⚡️[server]: Server is running at 5000

# Goto url example:
http://localhost:5000/api/list?name=laptop&page=1

> This url will craw data from `https://www.amazon.com/s?k=laptop&page=1`
> example params of name: laptop, tablet, mobile gaming, superman, vietnam, ....
```

## NOTE: THIS PROJECT CAN ONLY CRAWL DATA WHEN THE LAYOUT IS SIMILAR TO `https://www.amazon.com/s?k=laptop&page=1`
