import freshbooks from "@freshbooks/api";
import * as dotenv from "dotenv";

dotenv.config();

const { Client } = freshbooks;
const EXPIRED_FRESHBOOKS_TOKEN = process.env.EXPIRED_FRESHBOOKS_TOKEN;
const FRESH_BOOKS_CLIENT_ID = process.env.FRESHBOOKS_CLIENT_ID;
const FRESH_BOOKS_BUSINESS_ID = process.env.FRESH_BOOKS_BUSINESS_ID;

const freshBooks = new Client(FRESH_BOOKS_CLIENT_ID, {
  accessToken: EXPIRED_FRESHBOOKS_TOKEN,
});

try {
  // List Projects - returns error {message: "Unauthorized", code: "401"}
  const data = await freshBooks.projects.list(FRESH_BOOKS_BUSINESS_ID, []);

  // Get Identity - returns error {message: "This action requires...", code: "unauthenticated"}
  const identity = await freshBooks.users.me();
} catch (error) {
  console.log(JSON.stringify(error));
}
