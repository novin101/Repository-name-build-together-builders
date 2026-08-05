type PseoOverviewProps = {
  heading: string;
  paragraphs: string[];
  highlights?: string[];
};

export function PseoOverview({ heading, paragraphs, highlights }: PseoOverviewProps) {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-wide text-green-700">SERVICE OVERVIEW</p>
            <h2 className="mb-6 max-w-2xl text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {heading}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {highlights && highlights.length > 0 && (
            <div className="rounded-xl border bg-muted/30 p-6">
              <h3 className="mb-4 text-lg font-semibold text-foreground">What&apos;s included</h3>
              <ul className="space-y-3">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-green-700/10 text-green-700 text-xs font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
