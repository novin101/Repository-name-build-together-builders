"use client";

import {
  ArrowLeft,
  ArrowRight,
  Hammer,
  Menu,
  Sprout,
  Sun,
  X,
  BrickWall,
  LayoutDashboard,
  Rose,
} from "lucide-react";
import {  useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const servicesCategories = [
  {
    title: "Construction",
    href: "/hardscaping",
    services: [
      {
        id: "svc-retaining-walls",
        title: "Retaining Walls",
        description: "Block, stone, and boulder walls built to last.",
        href: "/hardscaping",
        icon: BrickWall,
      },
      {
        id: "svc-paver-driveway-walkways",
        title: "Paver Driveway & Walkways",
        description: "Beautiful, long‑lasting paver driveway installations.",
        href: "/hardscaping",
        icon: LayoutDashboard,
      },
      {
        id: "svc-patios-decking",
        title: "Patios & Decking",
        description: "Durable patios, paver walkways, and outdoor living.",
        href: "/hardscaping",
        icon: Hammer,
      },
    ],
  },
  {
    title: "Outdoor Living",
    href: "/landscaping",
    services: [
      {
        id: "svc-lawns-gardens",
        title: "Lawns & Gardens",
        description: "Beautiful, long‑lasting lawns and garden beds that require minimal maintenance.",
        href: "/landscaping",
        icon: Rose,
      },
      {
        id: "svc-turf-installation",
        title: "Turf Installation",
        description: "Long‑lasting turf installations that require minimal maintenance.",
        href: "/landscaping",
        icon: Sprout,
      },
      {
        id: "svc-xeriscaping",
        title: "Xeriscaping",
        description: "Low-maintenance landscaping solutions that conserve water and reduce maintenance costs.",
        href: "/landscaping",
        icon: Sun,
      },
    ],
  },
];

const serviceAreas = [
  {
    id: "region-la",
    title: "Los Angeles",
    description: "From the Valley to the South Bay — full-service landscaping.",
    href: "/los-angeles",
    image: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTWQ7yw58AuvgEJBMVWZCzpk6eFNYyq7wIdrGQ",
  },
  {
    id: "region-oc",
    title: "Orange County",
    description: "Coastal‑ready designs and water‑wise maintenance across OC.",
    href: "/orange-county",
    image: "https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTvAjtdHToUJKSbIGHcin30lkxCt5QujOdhXPD",
  },
];

const ServicesMenu = () => (
  <div className="grid gap-8 lg:grid-cols-3">
    <div className="lg:col-span-2 grid gap-8 sm:grid-cols-2">
      {servicesCategories.map((category) => (
        <div
          key={category.title}
          className="border-border group relative cursor-pointer rounded-md border p-5 transition-colors hover:border-foreground/30 hover:bg-muted/20 focus-within:border-foreground/30"
        >
          {/* Clickable overlay to navigate to the top-level category page */}
          {category.href && (
            <a
              href={category.href}
              aria-label={`View ${category.title} services`}
              className="absolute inset-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2"
            />
          )}
          <div className="relative z-10 pointer-events-none">
            <div className="border-border border-b pb-4">
              <div className="flex items-center justify-between">
                <strong className="text-sm font-medium">{category.title}</strong>
                <ArrowRight className="size-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </div>
            </div>
            <menu className="mt-6 grid gap-y-4">
              {category.services.map((svc) => (
                <NavigationMenuLink
                  key={svc.id}
                  href={svc.href}
                  className="text-foreground/85 hover:text-foreground group pointer-events-auto flex flex-row items-center space-x-4 text-left lg:space-x-4 lg:border-0"
                >
                  <svc.icon className="size-4" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{svc.title}</div>
                    <p className="text-muted-foreground mt-1 text-xs">{svc.description}</p>
                  </div>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
                </NavigationMenuLink>
              ))}
            </menu>
          </div>
        </div>
      ))}
    </div>
    <div className="order-last col-span-full w-full sm:order-none lg:col-span-1">
      <a
        id="xeriscaping"
        href="/landscaping/xeriscaping"
        className="group relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-xl"
      >
        <div className="aspect-4/3 relative w-full overflow-clip">
          <Image
            src="https://obvprjvzvl.ufs.sh/f/8XyKSJfk0oGTZrUq6DFWF96uocbM7gaz0wAiqE5y8hDPJkLX"
            alt="Xeriscaping"
            className="h-full w-full object-cover object-center"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="bg-primary relative z-10 -mt-1 flex flex-col rounded-b-xl p-6 text-primary-foreground">
          <div className="flex items-center text-xs font-medium uppercase tracking-wider">
            What is Xeriscaping?
          </div>
          <p className="text-primary-foreground/85 mt-2 text-xs">
            Save water with low-maintenance, climate-smart landscapes.
          </p>
          <div className="mt-3 flex items-center text-xs">
            Learn more <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </a>
    </div>
  </div>
);

const RegionsMenu = () => (
  <div className="grid gap-8 sm:grid-cols-3">
    <div className="order-first sm:order-first">
      <div className="text-left">
        <div className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Southern California
        </div>
        <div className="text-foreground/85 text-sm">
          We serve homeowners and businesses across SoCal with design, build,
          and maintenance services. Pick a region to view local offerings.
        </div>
      </div>
      <div className="mt-4 flex items-center text-xs">
        Pick a Region <ArrowRight className="ml-1 size-4" />
      </div>
    </div>
    <div className="sm:col-span-2 grid gap-6 md:grid-cols-2">
      {serviceAreas.map((area) => (
        <NavigationMenuLink
          key={area.id}
          href={area.href}
          className="group flex h-full flex-col overflow-hidden rounded-lg border border-border text-left hover:bg-muted/30"
        >
          <div className="aspect-4/3 relative w-full overflow-clip">
            <Image
              src={area.image}
              alt={area.title}
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium">
                {area.title}
              </div>
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
              {area.description}
            </p>
          </div>
        </NavigationMenuLink>
      ))}
    </div>
  </div>
);

const navigationMenuItems = [
  {
    key: "services",
    label: "Services",
    component: ServicesMenu,
  },
  {
    key: "regions",
    label: "Service Areas",
    component: RegionsMenu,
  },
  
] as const;

const Navbar4 = () => {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<
    "services" | "regions" | null
  >(null);

  useEffect(() => {
    // Robust body scroll lock for mobile (prevents scroll chaining and background scroll)
    const body = document.body;
    const previousPosition = body.style.position;
    const previousTop = body.style.top;
    const previousLeft = body.style.left;
    const previousRight = body.style.right;
    const previousWidth = body.style.width;
    const previousOverflow = body.style.overflow;
    const scrollYBeforeLock = window.scrollY;

    if (open) {
      body.style.position = "fixed";
      body.style.top = `-${scrollYBeforeLock}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      body.style.overflow = "hidden";
    } else {
      // Restore styles and scroll position
      body.style.position = previousPosition || "";
      body.style.top = previousTop || "";
      body.style.left = previousLeft || "";
      body.style.right = previousRight || "";
      body.style.width = previousWidth || "";
      body.style.overflow = previousOverflow || "";
      if (previousTop) {
        const y = -parseInt(previousTop || "0", 10);
        window.scrollTo(0, y);
      }
    }

    return () => {
      // Cleanup on unmount
      body.style.position = previousPosition || "";
      body.style.top = previousTop || "";
      body.style.left = previousLeft || "";
      body.style.right = previousRight || "";
      body.style.width = previousWidth || "";
      body.style.overflow = previousOverflow || "";
      if (previousTop) {
        const y = -parseInt(previousTop || "0", 10);
        window.scrollTo(0, y);
      }
    };
  }, [open]);

  return (
    <section className="bg-background inset-x-0 top-0">
      <div className="container">
        <NavigationMenu className="min-w-full [&>div:last-child]:left-auto z-50">
          <div className={cn(
            "flex w-full justify-between gap-2 py-4",
            open ? "sticky top-0 z-[200] bg-background lg:static" : ""
          )}>
            <a
              href="https://buildtogetherbuilders.com"
              className="flex items-center gap-2"
              aria-label="Build Together Builders Home"
            >
             <Image
  src="/branding/build-together-builders-logo.png"
  alt="Build Together Builders"
  width={240}
  height={240}
  priority
  className="h-16 w-auto object-contain"
/>
              />
            </a>
            <div className="flex items-center gap-2 xl:gap-8">
              <NavigationMenuList className="hidden gap-0 lg:flex">
                {navigationMenuItems.map((item) => (
                  <NavigationMenuItem key={item.key}>
                    <NavigationMenuTrigger className="text-xs xl:text-sm">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
                      <item.component />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </div>
            <div className="flex items-center gap-2">
              <Button className="hidden md:block bg-green-700 hover:bg-green-800">
                <a href="#contact">Get a Free Estimate</a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Main Menu"
                className="lg:hidden"
                onClick={() => {
                  if (open) {
                    setOpen(false);
                    setSubmenu(null);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                {!open && <Menu className="size-4" />}
                {open && <X className="size-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="border-border bg-background container fixed inset-0 top-[72px] z-[150] flex h-[calc(100dvh-72px)] w-full flex-col overflow-auto overscroll-contain border-t lg:hidden">
              {submenu && (
                <div className="mt-3">
                  <Button
                    variant="link"
                    onClick={() => setSubmenu(null)}
                    className="relative -left-4"
                  >
                    <ArrowLeft className="size-4 text-xs" />
                    Go back
                  </Button>
                </div>
              )}
              {submenu === null && (
                <div>
                  {navigationMenuItems.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      className="border-border flex w-full items-center border-b py-6 text-left"
                      onClick={() => setSubmenu(item.key)}
                    >
                      <span className="flex-1 text-sm font-medium">
                        {item.label}
                      </span>
                      <span className="shrink-0">
                        <ArrowRight className="size-4" />
                      </span>
                    </button>
                  ))}
                </div>
              )}
              {navigationMenuItems.map(
                (item) =>
                  submenu === item.key && (
                    <div key={item.key}>
                      <h2 className="pb-6 pt-4 text-lg font-medium">
                        {item.label}
                      </h2>
                      <item.component />
                    </div>
                  ),
              )}
              {/* Mobile menu footer */}
              <div className="mx-[2rem] mt-auto flex flex-col items-center gap-8 py-24">
                <Button className="bg-green-700 hover:bg-green-800" onClick={() => { setOpen(false); setSubmenu(null); }}>
                  <a href="#contact">Get a Free Estimate</a>
                </Button>
              </div>
            </div>
          )}
        </NavigationMenu>
      </div>
    </section>
  );
};

export { Navbar4 };
