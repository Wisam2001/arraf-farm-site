export default function Home() {
  return (
    <section className="space-y-10">
      <div className="rounded-2xl border p-8">
        <h1 className="text-3xl font-bold">נסראת עראף ובניו (עראף)</h1>
        <p className="mt-3 text-zinc-700">
          אתר רשמי של החברה — מידע, שירותים, קבצים ויצירת קשר.
        </p>
        <div className="mt-6 flex gap-3">
          <a className="rounded-xl bg-black px-4 py-2 text-white" href="/contact">
            צור קשר
          </a>
          <a className="rounded-xl border px-4 py-2" href="/services">
            מה אנחנו מציעים
          </a>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { t: "שירותים", d: "מה החברה מספקת ולקהל מיועד." },
          { t: "קבצים", d: 'מסמכים / "קבצים" להורדה (PDF וכו\').' },
          { t: "מיקום", d: "איך להגיע + מפה." },
        ].map((x) => (
          <div key={x.t} className="rounded-2xl border p-6">
            <h2 className="font-semibold text-lg">{x.t}</h2>
            <p className="mt-2 text-sm text-zinc-700">{x.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
