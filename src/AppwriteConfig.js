import { Client, Storage, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite server URL if hosted remotely
  .setProject("67cb387e000e2f38aff9"); // Replace with your actual Project ID

const storage = new Storage(client);

export { storage, ID };
