'use client';

import { Collaboration } from './components/about-collaboration';
import { Hero } from './components/about-hero';
import { Principles } from './components/about-principles';
import { Team } from './components/about-team';

export default function AboutPage() {
  return (
    <section>
      <Hero />
      <Team />
      <Principles />
      <Collaboration />
    </section>
  );
}
