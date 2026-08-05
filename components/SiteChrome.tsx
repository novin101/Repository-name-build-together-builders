"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Navbar4 } from "@/components/navbar4";
import { Footer8 } from "@/components/footer8";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPpc = pathname === "/get-quote" || pathname.startsWith("/get-quote/");

  if (isPpc) return <>{children}</>;

  return (
    <>
      <Navbar4 />
      {children}
      <Footer8 />
    </>
  );
}

