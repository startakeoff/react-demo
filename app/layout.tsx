/*
 * @Author: shadow
 * @Date: 2023-11-29 20:44:04
 * @LastEditors: shadow
 * @LastEditTime: 2023-12-11 15:52:09
 * @Description: 请填写简介
 */
import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
