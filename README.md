## E-Commerce Back-End

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

- [Description ](#description)
- [Installation and Usage](#installation-and-use)
- [License](#license)

![screenshot-top-of-page](assets/images/demo1.png)
![screenshot-project-example](assets/images/demo2.png)

# Description

This is a Node.js app that provides Models and a routing structure for an e-commerce back-end. It contains three routes: products, tags, and categories; offering the user to perform CRUD operations on each one. The app utlizes sequelize and MySQL Workbench as a means of creating and communicating with the database.

This app does not have a UI, and is not deployed. I have created a screenshare video to demonstrate its functionality via a series of requests through Insomnia, which can be viewed here: LINK COMING SOON

# Installation and Use

Clone this repo to a local directory, open it in your code editor of choice, and create a .env file in the root directory with the following vairables:

```
DB_USER=[YOUR MySQL USERNAME]
DB_PW=[YOUR MySQL PASSWORD]
DB_NAME='ecommerce_db'
```

Next, open MySQL Workbench and run the commands found in ./db/schema.sql.

Once the DB is created, return to your code editor/terminal and run:

```
npm i
```

and

```
npm run seed
```

You have now created and seeded the database, and installed all the necessary dependencies to ude this app.

You can use Postman, Insomnia, or a similar program to test the routes and consider any adjustments you may want to make to fit your needs.

Once satisfied, you can integrate this back end into a MVC structure and proceed building your full stack app.

# License

[MIT License](https://opensource.org/licenses/MIT)

```

```
