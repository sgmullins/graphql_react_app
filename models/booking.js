const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
); //this arg tells mongoos to add createAt and updatedAt field to every booking

module.exports = mongoose.model("Booking", bookingSchema);
