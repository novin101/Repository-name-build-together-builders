export function RegionTestimonials({ heading, quotes }: { heading: string; quotes: { quote: string; author?: string }[] }) {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-medium mb-8">{heading}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-xl border bg-muted p-6">
              <blockquote className="text-lg">“{q.quote}”</blockquote>
              {q.author ? <figcaption className="mt-2 text-sm text-muted-foreground">— {q.author}</figcaption> : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
