import express from "express";
import Event from "../models/Event.js";
const router = express.Router();
// Get all events
router.get("/", async (req, res) => {
 const events = await Event.find();
 res.json(events);
});
// Add new event
router.post("/", async (req, res) => {
 const newEvent = new Event(req.body);
 await newEvent.save();
 res.json(newEvent);
});
// Update event
router.put("/:id", async (req, res) => { const updated =
await Event.findByIdAndUpdate(req.params.id, req.body,
{ new: true });
 res.json(updated);
});
// Delete event
router.delete("/:id", async (req, res) => {
 await Event.findByIdAndDelete(req.params.id);
 res.json({ message: "Event deleted" });
});
export default router;