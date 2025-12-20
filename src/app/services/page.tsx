export const metadata = {
  title: "שירותים | נסראת עראף ובניו",
  description: "השירותים שהחברה מספקת.",
};

export default function ServicesPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">שירותים</h1>
      <ul className="list-disc pr-6 text-zinc-700 space-y-2">
        <li>שירות 1</li>
        <li>שירות 2</li>
        <li>שירות 3</li>
      </ul>
    </section>
  );
}
