import mongoose, { Schema } from 'mongoose';

const User = new Schema({
    name: String,
    email: String
});
// Currently mongoose does not support ES6 syntax for model
const UserModel = mongoose.model('User', User);

export default UserModel;