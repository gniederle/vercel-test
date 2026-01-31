import mongoose from 'mongoose';

const PictureSchema = new mongoose.Schema({
    spot: {
        type: Number,
        required: true
    },
    description: String,
    path: {
        type: String,
        required: true
    }
});

export default mongoose.models.Picture || mongoose.model('Picture', PictureSchema);