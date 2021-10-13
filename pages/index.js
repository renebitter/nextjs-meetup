import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://images.unsplash.com/photo-1633966849409-15619ac38fff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1106&q=80',
    address: 'Lalaland',
    description: 'This is the first Meetup',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'https://images.unsplash.com/photo-1633966849409-15619ac38fff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1106&q=80',
    address: 'Lalaland',
    description: 'This is the second Meetup',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
