import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import ThemeProvider from "@/components/theme-provider";
import outputs from "@/amplify_outputs.json";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import "@aws-amplify/ui-react/styles.css";
import "@/styles/app.css";

Amplify.configure(outputs);
const queryClient = new QueryClient();
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
        disableTransitionOnChange={true}
      >
        <Authenticator>
          <style jsx global>{`
            html {
              font-family: ${inter.style.fontFamily};
            }
          `}</style>
          <Component {...pageProps} />
        </Authenticator>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
