"use client";

import { useEffect, useState } from "react";

/**
 * Renders the current year.
 *
 * Pages here are statically prerendered, so a year computed on the server is
 * frozen at build time and would go stale each January until the next deploy.
 * The build-time year is rendered first (keeping hydration in sync), then
 * corrected to the visitor's actual year once mounted.
 */
export default function CurrentYear({ fallback }: { fallback: number }) {
  const [year, setYear] = useState(fallback);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
