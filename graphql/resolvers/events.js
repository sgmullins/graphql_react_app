const Event = require("../../models/event");
const { transformEvent } = require("./merge");

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map(event => {
        return transformEvent(event);
      });
    } catch (err) {
      throw err;
    }
  },

  createEvent: async args => {
    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: +args.eventInput.price,
      date: new Date(args.eventInput.date),
      creator: "5e24e10285eb974ba4be8c99"
    });
    let createdEvent;
    try {
      const result = await event.save();
      createdEvent = transformEvent(result); //mongoose process
      //if experiencing errors with ids later use , _id: event._doc._id.toString()
      const creator = await User.findById("5e24e10285eb974ba4be8c99");
      if (!creator) {
        throw new Error("No user exists");
      }
      creator.createdEvents.push(event);
      await creator.save();
      return createdEvent;
    } catch (err) {
      throw err;
    }
  }
};
