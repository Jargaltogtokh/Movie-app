import { Section } from "@/app/_Components/Section";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Section
      title="More like this"
      endpoint={`movie\${params.id}\recommendations`}
    />
  );
}
