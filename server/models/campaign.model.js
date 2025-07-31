const { Schema, model } = require("mongoose");

const stepSchema = new Schema({
  id: { type: String, required: true },
  type: { type: String, enum: ["email", "wait", "condition"], required: true },
  template: { type: String },
  days: { type: Number },
  condition: { type: String, enum: ["opened"] },
  next: { type: String },
  ifTrue: { type: String },
  ifFalse: { type: String }
}); 

const campaignSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  schema: [stepSchema],
}, { timestamps: true });

const Campaign = model("Campaign", campaignSchema);

module.exports = Campaign;


