import { useState } from "react";
export default function EventForm({ onSubmit }) {
 const [event, setEvent] = useState({ title: "", date: "",
time: "", description: "" });
 const handleChange = (e) => setEvent({ ...event,
[e.target.name]: e.target.value });
 const handleSubmit = (e) => {
 e.preventDefault();
 onSubmit(event);
 setEvent({ title: "", date: "", time: "", description: "" });
 };
 return (
 <form onSubmit={handleSubmit} className="p-3
border rounded">
 <input name="title" placeholder="Event Title"
value={event.title} onChange={handleChange} required
/>
 <input type="date" name="date" value={event.date}
onChange={handleChange} required />
 <input type="time" name="time" value={event.time}
onChange={handleChange} required />
 <textarea name="description"
placeholder="Description" value={event.description}
onChange={handleChange} />
 <button type="submit">Add Event</button>
 </form>
 );
}