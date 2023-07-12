import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";
import { v4 as uuidv4 } from 'uuid';

export const NewEventPage = () => {

    return <EventForm  method={"post"}/>
}