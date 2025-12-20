import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://arraf.co.il"),

  title: "נסראת עראף ובניו | עראף",
  description:
    "נסראת עראף ובניו (עראף) – מידע על החברה, שירותים, קבצים ויצירת קשר.",

  keywords: [
    "נסראת עראף ובניו",
    "עראף",
    "Nasrat Araff",
    "Araff",
    "pig farm",
    "livestock Israel",
  ],

  openGraph: {
    title: "נסראת עראף ובניו | עראף",
    description:
      "נסראת עראף ובניו (עראף) – אתר רשמי של החברה.",
    type: "website",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-6xl px-4">
          <header className="flex items-center justify-between py-6">
            <a href="/" className="font-semibold text-lg">
              נסראת עראף ובניו
            </a>
            <nav className="flex gap-4 text-sm">
              <a href="/about">אודות</a>
              <a href="/services">שירותים</a>
              <a href="/files">קבצים</a>
              <a href="/contact">צור קשר</a>
            </nav>
          </header>

          <main className="pb-16">{children}</main>

          <footer className="border-t border-zinc-700 py-6 text-sm text-zinc-400">
            © {new Date().getFullYear()} נסראת עראף ובניו
          </footer>
        </div>
      </body>
    </html>
  );
}
