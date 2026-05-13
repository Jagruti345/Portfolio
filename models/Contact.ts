import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    },
    message: {
      type: String,
      required: [true, 'Please provide a message'],
      minlength: 10,
      maxlength: 5000,
    },
  },
  {
    timestamps: true,
  }
);

export const Contact =
  mongoose.models.Contact || mongoose.model<IContact>('Contact', contactSchema);
