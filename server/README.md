
# Vuejs hotseating server

It serves as a simple backend for the app




## Run Locally
[Install mongoDB](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.4-signed.msi), once it's installed just press Connect

Install nodemon

```bash
  npm i -g nodemon
```

### Go to the project directory

Install dependencies

```bash
  npm i
```

Seed the db

```bash
  npm run seed
```

Start the server

```bash
  npm run start
```



## API Reference

#### Test for your route

```http
  GET /api
```

#### Get today's placing

```http
  GET /api/placing
```

#### Save placing

```http
  POST /api/placing
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. Id of item to save |
| `seats`      | `array` | **Required**. Array of objects |

