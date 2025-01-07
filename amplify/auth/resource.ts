import { defineAuth } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  senders: {
    email: {
      // configure using the email registered and verified in Amazon SES
      fromEmail: process.env.EMAIL_FROM ?? "",
      fromName: "Cloud Quest",
    },
  },
});
