import { model, models, Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  image?: string;
  documents?: Schema.Types.ObjectId[];
  applications?: Schema.Types.ObjectId[];
  profiles?: string[];
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    },
    documents: [
      {
        type: Schema.Types.ObjectId,
        ref: "Doc",
      },
    ],
    applications: [
      {
        type: Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
    profiles: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = models?.User || model<IUser>("User", userSchema);
