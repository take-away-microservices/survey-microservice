import mongoose, { Schema } from 'mongoose';

const SurveySchema = Schema({
  // Title of the survey
  title: { type: String, required: true },

  // A brief that couldd be used to quickly explain a user on an interface
  // what the survey is about
  brief: { type: String, required: true },

  // A more detailed description of the survey.
  description: { type: String, required: true },

  // Array of the questions
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
}, {
  // Enables createdAt and upddatedAt
  timestamps: true,
});

export default mongoose.model('Survey', SurveySchema);
