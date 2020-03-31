import mongoose, { Schema } from 'mongoose';

const QuestionSchema = new Schema({
  // The type of the question. It could be a human-readable ID or
  // an uuid. Pretty much open to anything.
  type: {
    type: String,
    required: true,
    // NOTE: If you would like to limit the types of questions
    // that can be used, do something like this.
    // default: 'multiple-choice',
    // enum: ['multiple-choice', 'closed-question', 'numeric-answer']
  },

  // The title of the question
  title: String,

  // A small description to show on, for example, tooltips
  brief: String,

  // A more detailed question description
  description: String,

  // The survey this question belongs to
  // NOTE: If you want to keep questions independent from the survey
  // then comment this line.
  survey: { type: mongoose.Schema.Types.Object, ref: 'Question' },

  // The question defition is left open
  definition: Object,
  // NOTE: If you would like to limit structure to certain options
  // you could define all the possible used variables for all
  // the question types that you have.
  // definition: {
  //   range: {
  //     minValue: { type: Number },
  //     maxValue: { type: Number },
  //   },
  //   suffix: String,
  //   defaultValue: String,

  //   presentationStyle: { type: String },
  //   options: [
  //     {
  //       label: { type: String, required: true },
  //       value: { type: String, default: null }
  //     }
  //   ]
  // },
}, {
  timestamps: true,
});

export default mongoose.model('Question', QuestionSchema);
