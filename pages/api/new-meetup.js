import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // const { title, image, address, description } = data;

    MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne({ data });

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup added' });
  }
}

export default handler;
