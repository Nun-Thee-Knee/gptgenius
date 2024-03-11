import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'GPTGenius',
  description:
    'GPTGenius: Your AI language companion. Powered by OpenAI, it enhances your conversations, content creation, and more!',
};
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="dracula">
      <body className={inter.className}>
        <providers>
        {children}
        </providers>
      </body>
    </html>
    </ClerkProvider>
  );
}
