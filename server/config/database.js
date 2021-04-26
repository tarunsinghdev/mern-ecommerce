import mongoose from 'mongoose';

const connectDB = async (cb) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline);
    cb();
  } catch (error) {
    console.log(`Error : ${error.message}`.red.underline.bold);
  }
};

export default connectDB;
