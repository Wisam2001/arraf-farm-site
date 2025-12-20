export const metadata = {
  title: "צור קשר | נסראת עראף ובניו",
  description: "פרטי קשר ומיקום.",
};

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">צור קשר</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-6 space-y-2">
          <p>
            <span className="font-semibold">טלפון:</span> 000-0000000
          </p>
          <p>
            <span className="font-semibold">אימייל:</span> info@example.com
          </p>
          <p>
            <span className="font-semibold">כתובת:</span> הוסף כתובת
          </p>

          <a
            className="inline-block rounded-xl bg-black px-4 py-2 text-white"
            href="https://wa.me/972000000000"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <div className="rounded-2xl border p-6">
          <p className="text-zinc-700">
            בהמשך נוסיף טופס מאובטח (anti-spam) כדי שלא יגיע ספאם.
          </p>
        </div>
      </div>
    </section>
  );
}
