import { MongoClient } from 'mongodb'; //this will not be included in the client-side bundle

import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Next.js Meetups</title>
        <meta
          name='description'
          content='Get access to a list of current next.js meetups'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  // fetch data from an API
  // fetch() would be redundant here since all code here is already executed on the server

  //TODO: outsource into separate connect function
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  //TODO: outsource into separate connect function

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(), //mongodb _id returns an object therefore the need to map
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
