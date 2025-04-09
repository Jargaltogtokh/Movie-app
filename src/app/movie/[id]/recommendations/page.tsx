import { Section } from "@/app/_Components/Section";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const {id } = await params;
  return (
    <Section
      title="More like this"
      endpoint={`movie\${id}\recommendations`}
    />
  );
}
