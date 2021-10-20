import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    //TODO: outsource into separate connect function
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    //TODO: outsource into separate connect function

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup added' });
  }
}

export default handler;
