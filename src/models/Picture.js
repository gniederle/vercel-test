import mongoose from 'mongoose';

const PictureSchema = new mongoose.Schema({
    spot: {
        type: Number
    },
    description: String,
    path: {
        type: String,
        required: true
    }
});

export default mongoose.models.Picture || mongoose.model('Picture', PictureSchema);