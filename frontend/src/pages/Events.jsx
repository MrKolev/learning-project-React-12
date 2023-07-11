
import { json, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

export function EventsPage() {

  const data = useLoaderData();
  // if(data.isError){
  // return<p>{ data.message}</p>
  // }
  return (
    <>
      <EventsList events={data.events} />
    </>
  );
}

export const loadredData = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return {isError: true, message: 'Error loading'}

    // throw new Response(JSON.stringify({message:'Could not find event'}), 
    // {status: 500})
    return json(
      { message: 'Could not find event' },
      { status: 500 }
    );
  } else {

    return response
  }
}