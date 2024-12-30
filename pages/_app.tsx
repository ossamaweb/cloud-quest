import "@/styles/app.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { ThemeProvider } from "next-themes";
import outputs from "@/amplify_outputs.json";
//import "@aws-amplify/ui-react/styles.css";
//import "@cloudscape-design/global-styles/index.css";

Amplify.configure(outputs);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={true}
    >
      <Authenticator>
        <Component {...pageProps} />
      </Authenticator>
    </ThemeProvider>
  );
}
