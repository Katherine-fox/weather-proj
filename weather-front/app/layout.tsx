'use client'

import StyledJsxRegistry from './registry'
import { Raleway } from "next/font/google";
import { Body } from './styles/global';


const ralewayFont = Raleway({ subsets: ["latin"], weight: 'variable' });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Body className={ralewayFont.className}>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </Body>
    </html>
  );
}
