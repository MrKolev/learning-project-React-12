import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";
import { v4 as uuidv4 } from 'uuid';

export const NewEventPage = () => {

    return <EventForm />
}

export async function actionSubmitNewEvant({ request, params }) {

    const data = await request.formData();
    
    const eventData = {
        id: uuidv4(),
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    };

    const response = await fetch("http://localhost:8080/events", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
    })

    if (!response.ok) {
        throw json({ message: "Could not save event" }, { status: response.status })
    }

    return redirect('/events')
}