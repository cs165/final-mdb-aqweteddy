const bodyParser = require('body-parser');
const express = require('express');
var sizeOf = require('image-size');

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static('public'));

let col = null
async function main() {
  const DATABASE_NAME = 'article'
  const MONGO_URL = `mongodb+srv://apple:1234@cluster0-74wgd.gcp.mongodb.net/test?retryWrites=true&w=majority`

  // The "process.env.MONGODB_URI" is needed to work with Heroku.
  let cli = await MongoClient.connect(process.env.MONGODB_URI || MONGO_URL)
  let db = cli.db('pttBeauty')
  col = db.collection(DATABASE_NAME)
  // The "process.env.PORT" is needed to work with Heroku.
  const port = process.env.PORT || 3000
  await app.listen(port)
  console.log(`Server listening on port ${port}!`)
}

main()

////////////////////////////////////////////////////////////////////////////////

// TODO(you): Add at least 1 GET route and 1 POST route.

app.post('/getoverview', async function (req, res) {
  await col.find({ 'category': { '$ne': '公告' } }).limit(300).toArray((err, items) => {
    let data = new Array()
    for (let it of items) {
      data.push({
        id: it._id,
        img: it.img_link[0],
        title: it.title,
        url: it.url
      }
      )
      console.log(it.url)

    }
    // console.log(items)
    res.json(data)
  })
})

app.get('/imgdata/:id', async function (req, res) {
  let idx = req.params.id
  await col.find({ _id: new ObjectID(idx) }).toArray((err, item) => {
    // console.log( item[0].img_link)
    res.json({ 'imgLink': item[0].img_link })
  })
})


