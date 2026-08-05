export function RegionAbout({ heading, paragraphs }: { heading: string; paragraphs: string[] }) {
  return (
    <section className="py-20">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-medium mb-4">{heading}</h2>
        <div className="space-y-4 text-lg text-muted-foreground">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
