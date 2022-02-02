# 🚀 Welcome to O'Clock Game API REST !

**API for Memory Game, a technical test for O'Clock !!**

**_------------------_**
**_------------------_**

### Installation

**1st:** Clone the repository at this URL :

```
https://github.com/CyrilTrichereau/OClock_Memory_Game_BackEnd.git
```

**2nd:** Install dependencies : from within the project folder, run `npm install`.

```
npm install
```

**3rd:** Then, store the .env file to the root repository of the project or create it with settings this attributes :

```env
NODE_ENV= (development/production)

DEV_DATA_BASE_NAME=
DEV_DATA_BASE_USER=
DEV_DATA_BASE_PASSWORD=
DEV_DATA_BASE_HOST=
DEV_DATA_BASE_DIALECT=

TEST_DATA_BASE_NAME=
TEST_DATA_BASE_USER=
TEST_DATA_BASE_PASSWORD=
TEST_DATA_BASE_HOST=
TEST_DATA_BASE_DIALECT=

PROD_DATA_BASE_NAME=
PROD_DATA_BASE_USER=
PROD_DATA_BASE_PASSWORD=
PROD_DATA_BASE_HOST=
PROD_DATA_BASE_DIALECT=
```

**4th:** Verify that mySQL or mariaDB is installed on your computer and create a database with informations from .env file

**5th:** After creating the database and checking the information in the .env file, you can initiate the data models with sequelize-CLI using :

```
sequelize db:migrate
```

**6th:** Now you can :

_Run the API with nodemon:_

```
nodemon server
```

**_------------------_**

### Development config

node v16.13.0
mySQL 8.0.26
mariaDB 10.6
npm 8.1.0

**_------------------_**
**_------------------_**

_Have a question ?_
Do not hesitate to contact me !
