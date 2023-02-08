const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamMemberSchema = new Schema({
    fullName: {
        type: String,
        required: true
      },
      teamName: {
        type: String,
        required: true
      },
      designation: {
        type: String,
        required: true
      },
      skills: [
        {
          type: String,
          required: true
        }
      ],
      experience: {
        type: Number,
        required: false
      },
    },
    { timestamps: true}
);

module.exports = TeamMember = mongoose.model("Teams", TeamMemberSchema);