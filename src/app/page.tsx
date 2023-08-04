"use client";

import Link from "next/link";
import { CookiesProvider } from 'react-cookie';
import Hero from "./components/Hero";

export default function Home() {

  return (
    <CookiesProvider>
      <Hero />
    </CookiesProvider>
  );
}
