import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image='https://bit.ly/3n02xLi'
      title='First Meetup'
      address='Some Street 12, Munich'
      description='This is the first meetup'
    />
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: 'https://bit.ly/3n02xLi',
        id: meetupId,
        title: 'First meetup',
        address: 'Some Address',
        description: 'Some description',
      },
    },
  };
}

export default MeetupDetails;
