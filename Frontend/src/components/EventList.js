export default function EventList({ events, onDelete }) {
 return (
 <div>
 <h3>Scheduled Events</h3>
 {events.map((event) => (
 <div key={event._id} className="p-2 border mb-2">
 <h4>{event.title}</h4>
 <p>{event.date} at {event.time}</p>
 <p>{event.description}</p>
 <button onClick={() =>
onDelete(event._id)}>Delete</button>
 </div>
 ))}
 </div>
 );
}