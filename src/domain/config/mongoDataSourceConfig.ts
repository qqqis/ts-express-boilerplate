import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

async function loadMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.info('mongodb loaded and connected.');
  } catch (e) {
    console.error('ERROR >> MongoDB Connection\n', e);
  }
}

export { loadMongoDB };
