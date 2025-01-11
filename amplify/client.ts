import { generateClient } from "aws-amplify/api";
import { type Schema } from "./data/schema";

const client = generateClient<Schema>();

export default client;
