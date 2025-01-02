import { options } from "@/constants/api";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/credits`,
    options
  );
  const data = await response.json();

  const director = data.crew?.find((member: any) => member.job === "Director");

  console.log(data);

  <p>
    <strong>Director:</strong> {director ? director.name : "Not available"}
  </p>;

  return <div></div>;
}
