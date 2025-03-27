import { model, models, Schema, Document } from "mongoose";

export interface IApplication extends Document {
  company: string;
  user: Schema.Types.ObjectId;
  track: {
    detail: string;
    coverLetter: string;
    createdAt: Date;
    links: string[];
  }[];
}

const applicationSchema = new Schema(
  {
    company: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    track: [
      {
        detail: {
          type: String,
          required: true,
        },
        coverLetter: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
        links: [
          {
            type: String,
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Application =
  models?.Application || model<IApplication>("Application", applicationSchema);
