# BAMBU Backend Engineer Test Answer

Here is my solution to Bambu Backend Engineer test
### Tech
I'm using some NPM Package for this test
* [express](https://www.npmjs.com/package/express)
* [request](https://www.npmjs.com/package/request)
* [string-similarity](https://www.npmjs.com/package/string-similarity)
* [body-parser](https://www.npmjs.com/package/body-parser)

And my example data [Example](https://www.jasonbase.com/things/Y0pJ)

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm install -d
$ node index
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```
### How to use
##### Query Parameter
`name` `age` `latitude` `longitude` `monthlyIncome` `experienced`
**Match found**
`GET /people-like-you?age=23&latitude=40.71667&longitude=19.56667&monthlyIncome=5500&experienced=false`
```json
{
  "peopleLikeYou": [
    {
      "name": "Odom Patterson",
      "age": 23,
      "latitude": 63.770886,
      "longitude": 27.869778,
      "monthlyIncome": 2120,
      "experienced": false,
      "Score": "0.36"
    },
    {
      "name": "Marianne Kidd",
      "age": 26,
      "latitude": 82.713077,
      "longitude": 156.63795,
      "monthlyIncome": 3355,
      "experienced": false,
      "Score": "0.29"
    },
    {
      "name": "Rutledge Barry",
      "age": 31,
      "latitude": -69.723561,
      "longitude": -142.969192,
      "monthlyIncome": 2600,
      "experienced": false,
      "Score": "0.26"
    },
    {
      "name": "Atkins Mcknight",
      "age": 38,
      "latitude": -20.668975,
      "longitude": -4.119293,
      "monthlyIncome": 1467,
      "experienced": false,
      "Score": "0.23"
    },
    {
      "name": "Janelle Baldwin",
      "age": 36,
      "latitude": -38.971189,
      "longitude": -54.573289,
      "monthlyIncome": 2312,
      "experienced": false,
      "Score": "0.21"
    },
    {
      "name": "Louise Pate",
      "age": 34,
      "latitude": -60.949321,
      "longitude": 150.59979,
      "monthlyIncome": 3964,
      "experienced": false,
      "Score": "0.21"
    },
    {
      "name": "Mclaughlin Wong",
      "age": 26,
      "latitude": -56.368266,
      "longitude": -120.065622,
      "monthlyIncome": 2327,
      "experienced": false,
      "Score": "0.21"
    },
    {
      "name": "Savannah Raymond",
      "age": 30,
      "latitude": 30.429736,
      "longitude": 179.651865,
      "monthlyIncome": 1339,
      "experienced": false,
      "Score": "0.21"
    },
    {
      "name": "Faye Walters",
      "age": 25,
      "latitude": -8.579904,
      "longitude": -29.68756,
      "monthlyIncome": 2909,
      "experienced": false,
      "Score": "0.21"
    },
    {
      "name": "Huffman Holder",
      "age": 33,
      "latitude": 52.372052,
      "longitude": 103.675561,
      "monthlyIncome": 3978,
      "experienced": false,
      "Score": "0.21"
    }
  ]
}
```

**Match not found**

    GET /people-like-you?age=1000

```json
{
  "peopleLikeYou": []
}
```
##### list all data
if you're not giving any query parameter, it will return all data
` GET /people-like-you`
example response
```json
{
  "peopleLikeYou": [
    {
      "name": "Delacruz Benton",
      "age": 21,
      "latitude": 1.496844,
      "longitude": 176.153218,
      "monthlyIncome": 2038,
      "experienced": true
    },
    {
      "name": "Hicks Sherman",
      "age": 23,
      "latitude": 15.111223,
      "longitude": 137.90011,
      "monthlyIncome": 1183,
      "experienced": true
    },
    {
      "name": "Krystal Mcneil",
      "age": 26,
      "latitude": -63.576335,
      "longitude": 95.683614,
      "monthlyIncome": 2974,
      "experienced": true
    },
    {
      "name": "Lorraine Ingram",
      "age": 29,
      "latitude": -3.759689,
      "longitude": -8.533696,
      "monthlyIncome": 2586,
      "experienced": true
    },
    {
      "name": "Marian Horton",
      "age": 39,
      "latitude": -3.28435,
      "longitude": -58.128789,
      "monthlyIncome": 2868,
      "experienced": false
    },
    {
      "name": "Hattie Howe",
      "age": 27,
      "latitude": 24.795774,
      "longitude": 68.03944,
      "monthlyIncome": 3249,
      "experienced": true
    },
    {
      "name": "Jeanine Kramer",
      "age": 28,
      "latitude": 88.508118,
      "longitude": 146.640387,
      "monthlyIncome": 3369,
      "experienced": true
    },
    {
      "name": "Danielle Jacobs",
      "age": 22,
      "latitude": -62.479864,
      "longitude": 130.719315,
      "monthlyIncome": 2155,
      "experienced": true
    },
    {
      "name": "Walton Sutton",
      "age": 29,
      "latitude": 26.683669,
      "longitude": -138.264128,
      "monthlyIncome": 3624,
      "experienced": false
    },
    {
      "name": "Atkins Mcknight",
      "age": 38,
      "latitude": -20.668975,
      "longitude": -4.119293,
      "monthlyIncome": 1467,
      "experienced": false
    }
  ]
}
```
