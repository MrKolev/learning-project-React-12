import { json, useRouteLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem";

export const EventDetailPage = () => {

const data = useRouteLoaderData('event-detail');

    return (
        <EventItem event={data.event} />
    )
}

export async function eventDetail({ request, params }) {
    const id = params.id;
   const response = await fetch('http://localhost:8080/events/' + id)

   if(!response.ok){
throw json({ message: 'Not fetch details for selected even.'}, { status: 500})
   }else{
    return response
   }
}