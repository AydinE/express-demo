import { Document, Model, model, Schema } from "mongoose";

export interface TodoInterface extends Document {
    name: string;
    details: string;
    deadline: Date;
    done: boolean;
}

const TodoSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        details: {
            type: String,
            required: true,
        },
        deadline: {
            type: Date,
            required: true,
        },
        done: {
            type: Boolean,
            required: true,
        },
    },
);

export const Todo: Model<TodoInterface> = model<TodoInterface>("Todo", TodoSchema);
