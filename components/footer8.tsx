const sections = [
  {
    title: "Services",
    links: [
      { name: "Hardscaping", href: "/hardscaping" },
      { name: "Landscaping", href: "/landscaping" },
      { name: "Outdoor Living", href: "/hardscaping" },
      { name: "Artificial Turf", href: "/landscaping" },
    ],
  },
  {
    title: "Service Areas",
    links: [
      { name: "Orange County", href: "/orange-county" },
      { name: "Los Angeles", href: "/los-angeles" },
      { name: "View All Service Areas", href: "/service-areas" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Home", href: "/" },
      { name: "Get a Free Estimate", href: "/contact" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
];

const Footer8 = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <footer>
          <div className="grid gap-12 lg:grid-cols-6">
            <div className="flex flex-col gap-6 lg:col-span-2">
              <a
                href="https://buildtogetherbuilders.com"
                className="flex w-fit items-center"
                aria-label="Build Together Builders Home"
              >
                <img
                  src="/branding/build-together-builders-logo.png"
                  alt="Build Together Builders"
                  className="h-24 w-auto object-contain"
                />
              </a>

              <p className="max-w-md text-muted-foreground">
                Build Together Builders provides professional construction,
                remodeling, landscaping, hardscaping, and outdoor-living
                services throughout Southern California.
              </p>

              <a
                href="/contact"
                className="w-fit rounded-lg bg-green-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-800"
              >
                Get a Free Estimate
              </a>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-3">
              {sections.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-5 font-medium">{section.title}</h3>

                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link) => (
                      <li
                        key={link.name}
                        className="font-medium transition-colors hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>
              <span className="mr-1 font-bold text-primary">
                Build Together Builders
              </span>
              © {new Date().getFullYear()} All rights reserved.
            </p>

            <a
              href="https://buildtogetherbuilders.com"
              className="transition-colors hover:text-primary"
            >
              buildtogetherbuilders.com
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer8 };
