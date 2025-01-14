import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import ThemeProvider from "@/components/theme-provider";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import ErrorFallback from "@/components/error-fallback";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import "@/styles/app.css";

Amplify.configure(outputs);
const queryClient = new QueryClient();
const inter = Inter({ subsets: ["latin"] });

const components = {
  Header() {
    return (
      <div className="flex flex-col gap-2 items-center justify-center p-4 mb-4">
        <h2 className="text-5xl text-primary font-bold">CloudQuest</h2>
        <p className="font-semibold">Gamified AWS Learning</p>
      </div>
    );
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <style jsx global>{`
            html {
              font-family: ${inter.style.fontFamily};
            }
          `}</style>
          <Authenticator components={components}>
            <Component {...pageProps} />
          </Authenticator>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
