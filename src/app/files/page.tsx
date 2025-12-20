export const metadata = {
  title: "קבצים | נסראת עראף ובניו",
  description: "מסמכים להורדה (PDF).",
};

export default function FilesPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">קבצים</h1>
      <p className="text-zinc-700">
        שים קבצים בתוך התיקייה:{" "}
        <code className="rounded bg-zinc-100 px-2 py-1">public/files</code>
      </p>

      <div className="rounded-2xl border p-6 space-y-2">
        <a className="block hover:underline" href="/files/example.pdf">
          example.pdf
        </a>
      </div>
    </section>
  );
}
