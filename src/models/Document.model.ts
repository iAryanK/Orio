import { model, models, Schema, Document } from "mongoose";

export interface IDocument extends Document {
  name: string;
  link: string;
  creator: Schema.Types.ObjectId;
}

const documentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Doc = models?.Doc || model<IDocument>("Doc", documentSchema);
