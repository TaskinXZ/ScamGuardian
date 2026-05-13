import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Scam Guardian",
  description: "Detect scams before they steal from you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}