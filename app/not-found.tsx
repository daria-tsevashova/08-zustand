"use client";

import type { Metadata } from "next";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import css from "./page.module.css";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};
export default NotFound;

export const metadata: Metadata = {
  title: "Note Hub — 404 Not Found",
  description: "Note Hub: the page you are looking for does not exist.",
  openGraph: {
    title: "Note Hub — 404 Not Found",
    description: "Note Hub: the page you are looking for does not exist.",
    url: "https://08-zustand-iota-sage.vercel.app/not-found",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        alt: "Note Hub — 404",
      },
    ],
  },
};
