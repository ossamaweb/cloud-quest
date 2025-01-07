import { type Schema } from "@/amplify/data/schema";
import { generateClient } from "aws-amplify/api";

const client = generateClient<Schema>();

export default client;
