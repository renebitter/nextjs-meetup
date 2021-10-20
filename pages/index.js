import { MongoClient } from 'mongodb'; //this will not be included in the client-side bundle

import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// Server-side snippets
// No need to fetch(data) here because it's executed on the server

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from an API

  //TODO: outsource into separate connect function
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetupsCollection = db.collection('meetups');
  //TODO: outsource into separate connect function

  const meetups = await meetupsCollection.find().toArray();

  // const meetupString = JSON.stringify(meetups)

  client.close();

  console.log(meetups);

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
