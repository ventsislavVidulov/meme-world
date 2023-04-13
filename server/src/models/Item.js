import { model, Schema, Types } from "mongoose";
const ObjectId = Types.ObjectId;

const itemSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true  },
    _ownerId: { type: ObjectId, ref: 'User' }
});

export const Item = model('Item', itemSchema);

