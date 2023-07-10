
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

export function EventsPage() {

    const events = useLoaderData()

  return (
    <>
     <EventsList events={events} />
    </>
  );
}

export const loadredData = async() => {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
     //Fetching events failed.
    } else {
      const resData = await response.json();
      console.log(resData);
      return resData.events
    }}