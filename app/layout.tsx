/*
 * @Author: BINGWU
 * @Date: 2024-06-11 17:16:16
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-07-13 22:16:19
 * @FilePath: \twitch-clone\app\layout.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
/*
 * @Author: BINGWU
 * @Date: 2024-06-11 17:16:16
 * @LastEditors: BINGWU HuJiaCheng2003@163.com
 * @LastEditTime: 2024-06-25 23:18:08
 * @FilePath: \twitch-clone\app\layout.tsx
 * @Describe: 
 * @Mark: ૮(˶ᵔ ᵕ ᵔ˶)ა
 */
import type { Metadata } from "next";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}>
      <html lang='en' suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark">

            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
