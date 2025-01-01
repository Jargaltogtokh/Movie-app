import { AngryIcon } from "lucide-react";
import Image from "next/image";
import { Footer } from "./_Components/Footer";
import { Section } from "./_Components/Section";

export default async function Home() {
  return (
    <div className="">
      <Section title="Popular" endpoint="movie/popular?language=en-US&page=1" moreLink="popular?language=en-US&page=1"/>
      <Section title="Upcoming" endpoint="movie/upcoming?language=en-US&page=1" moreLink=""/>
      <Section title="Top rated" endpoint="movie/top_rated?language=en-US&page=1" moreLink=""/>
    </div>
  );
}
