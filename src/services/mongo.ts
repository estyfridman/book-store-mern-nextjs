//'use server';

import { MongoClient } from "mongodb";

let client: MongoClient;
//let clientPromise: Promise<MongoClient>;

export async function connectDatabase() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dbConnection: any = process.env.MONGO_URL;
    return await MongoClient.connect(dbConnection);
  }

//origin
// export async function connectDatabase(){
//     if (!client) {
//         const dbConnectionString = process.env.MONGO_URL;
//         console.log(dbConnectionString);
//         if (!dbConnectionString) {
//             throw new Error('Database connection string is not defined');
//         }
//         client = new MongoClient(dbConnectionString);
//         console.log('client: '+client);
//         clientPromise = client.connect();
//     }
//     return clientPromise;
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function insertDocument(collection: string, document: object){
    connectDatabase();
    const db = client.db('db01');
    const result = await db.collection(collection).insertOne(document);
    return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function insertManyDocument(collection: string, document: object[]){
    connectDatabase();
    const db = client.db('db01');
    const result = await db.collection(collection).insertMany(document);
    return result;
};

//Odeya method::
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getAllDocuments(client: any, collection: string) {
    const db = client.db("db01");
    const documents = await db.collection(collection).find().toArray();
    return documents;
  }

//my origin method
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export async function getAllDocuments(collection: string){
//     connectDatabase();
//     const db = client.db('db01');
//     const documents = await db.collection(collection).find().toArray();
//     return documents;
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getDocument(collection: string, document: object){
    connectDatabase();
    const db = client.db('db01');
    const documents = await db.collection(collection).findOne(document);
    return documents;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function deleteDocument(collection: string, document: object){
    connectDatabase();
    const db = client.db('db01');
    const documents = await db.collection(collection).deleteOne(document);
    return documents;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function updateDocument(collection: string, filter: object, document: object){
    connectDatabase();
    const db = client.db('db01');
    const documents = await db.collection(collection).updateOne(filter, document);
    return documents;
};