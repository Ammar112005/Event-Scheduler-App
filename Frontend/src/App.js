import { useEffect, useState } from "react";
import api from "./api";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
export default function App() {
 const [events, setEvents] = useState([]);
 const fetchEvents = async () => {
 const res = await api.get("/events");
 setEvents(res.data);
 };
 const addEvent = async (newEvent) => {
 await api.post("/events", newEvent);
 fetchEvents();
 };
 const deleteEvent = async (id) => {
 await api.delete(`/events/${id}`);
 fetchEvents();
 };
 useEffect(() => { fetchEvents(); }, []);
 return (
 <div className="container">
 <h1>Event Scheduler</h1>
 <EventForm onSubmit={addEvent} />
 <EventList events={events} onDelete={deleteEvent}
/>
 </div>
 );
}