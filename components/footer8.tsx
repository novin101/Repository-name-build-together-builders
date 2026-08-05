import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const sections = [
  {
    title: "Hardscaping",
    titleHref: "/hardscaping",
    links: [
      { name: "Retaining Walls", href: "/hardscaping" },
      { name: "Paver Driveway & Walkways", href: "/hardscaping" },
      { name: "Patios & Decking", href: "/hardscaping" },
    ],
  },
  {
    title: "Landscaping",
    titleHref: "/landscaping",
    links: [
      { name: "Lawns & Gardens", href: "/landscaping" },
      { name: "Turf Installation", href: "/landscaping" },
      { name: "Xeriscaping", href: "/landscaping/xeriscaping" },
    ],
  },
  {
    title: "Regions",
    links: [
      { name: "Los Angeles", href: "/los-angeles" },
      { name: "Orange County", href: "/orange-county" },
    ],
  },
];

interface Footer8Props {
  logo?: {
    url?: string;
    badgeSrc?: string;
    wordSrc?: string;
  };
}
const defaultLogo = {
  url: "https://www.xenoscapers.com",
  badgeSrc: "/x-badge.svg",
  wordSrc: "/x-word-logo.svg",
};

const Footer8 = ({ logo: logoProp }: Footer8Props) => {
  const logo = { ...defaultLogo, ...logoProp };
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="grid grid-cols-4 justify-between gap-10 lg:grid-cols-6 lg:text-left">
            <div className="col-span-4 flex w-full flex-col gap-6 lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-2 lg:justify-start">
                <a
                  href={logo.url}
                  className="flex items-center gap-2"
                  aria-label="Xenoscapers home"
                >
                  <img
                    src={logo.badgeSrc}
                    alt=""
                    className="max-h-8 w-auto shrink-0 dark:invert"
                  />
                  <img
                    src={logo.wordSrc}
                    alt=""
                    className="h-[1.125rem] w-auto max-w-[min(11rem,45vw)] shrink-0 dark:invert sm:h-5"
                  />
                </a>
              </div>
              <p className="text-muted-foreground">
                A family-run business crafting beautiful landscapes for over 20 years.
              </p>
              <ul className="flex items-center space-x-6">
                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                  <a href="#">
                    <FaInstagram className="size-6" />
                  </a>
                </li>
                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                  <a href="#">
                    <FaFacebook className="size-6" />
                  </a>
                </li>
                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                  <a href="#">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                  <a href="#">
                    <FaLinkedin className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-4 lg:col-span-4 lg:ml-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-5 font-medium">
                    {section.titleHref ? (
                      <a href={section.titleHref} className="hover:text-primary">{section.title}</a>
                    ) : (
                      section.title
                    )}
                  </h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>
              <span className="mr-1 font-bold text-primary">
                Xenoscapers.com
              </span>
              © All rights reserved.
            </p>
            <p>
              Made with ❤️ by{" "}
              <a href="https://ogjayp.com" className="text-primary">
                @ogjayp
              </a>
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer8 };
