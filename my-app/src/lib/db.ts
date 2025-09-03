import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGO_URL;
const DB_NAME = 'mycrux';

if (!MONGODB_URI) {
    console.log('MongoDB URI not set');
}

let client: MongoClient | null = null;

export async function connectDB(): Promise<Db> {
    try {
        if (!MONGODB_URI) {
            throw new Error('MongoDB URI not defined');
        }

        if (!client) {
            client = new MongoClient(MONGODB_URI);
            await client.connect();
            console.log('Connected to MongoDB');
        }

        return client.db(DB_NAME);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
}

export async function disconnectDB(): Promise<void> {
    if (client) {
        await client.close();
        client = null;
        console.log('Disconnected from MongoDB');
    }
}