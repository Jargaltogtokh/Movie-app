import { Section } from "@/app/_Components/Section";
import { options } from "@/constants/api";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}`,
    options
  );

  const data = await response.json();

  console.log(data);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${data?.poster_path || ""}`}
        alt={data?.title || "Movie Poster"}
        className="rounded-t-lg"
      />
      <p> {data.title}</p>
      <p> {data.overview}</p>
     
    
      <Section 
      title="More like this" 
      moreLink={`${params.id}/recommendations`}
      endpoint={`movie/${params.id}/recommendations`} />
    </div>
  );
}
