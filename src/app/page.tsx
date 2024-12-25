import { AngryIcon } from "lucide-react";
import Image from "next/image";
import { Footer } from "./_Components/Footer";
import { Section } from "./_Components/Section";

export default async function Home() {
  return (
    <div className="">
      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Top rated" endpoint="top_rated" />
    </div>
  );
}
