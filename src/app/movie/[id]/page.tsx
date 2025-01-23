import { Section } from "@/app/_Components/Section";
import { Badge } from "@/components/ui/badge";
import { options } from "@/constants/api";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  // Fetch movie credits (cast and crew)
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/credits`,
    options
  );
  const creditsData = await response.json();

  // Fetch movie details (like title, release date, runtime, etc.)
  const responseMovie = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}`,
    options
  );
  const movieData = await responseMovie.json();

  const genre = movieData.genres[0].name;

  const convertMinutesToHours = (minutes: number) => {
    const hours = Math.floor(minutes / 60); // Get whole hours
    const remainingMinutes = minutes % 60; // Get remaining minutes
    return `${hours}h ${remainingMinutes}m`; // Return formatted string
  };

  const formattedRuntime = convertMinutesToHours(movieData.runtime);

  const ratingType = movieData.adult ? "SG" : "PG";

  const director = creditsData.crew?.find(
    (member: any) => member.job === "Director"
  );

  const firstFourCast = creditsData.cast?.slice(0, 4);

  const novelWriters = creditsData.crew?.filter(
    (member: any) =>
      member.job.includes("Novel") || member.job.includes("Screenplay")
  );
  return (
    <div>
      <div className="flex justify-between">
        <p className="font-bold text-2xl"> {movieData.title}</p>
        <p> Rating </p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p> {movieData.release_date}</p>
          <span> • </span>
          <p> {ratingType} </p>
          <span> • </span>
          <p> {formattedRuntime} </p>
        </div>
        <div className="flex flex-col">
          <p>
            <span>⭐️ </span>
            {movieData.vote_average.toFixed(1)}
            <span className="text-gray-400"> /10 </span>
          </p>
        </div>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500${
          movieData?.poster_path || movieData?.backdrop_path || ""
        }`}
        alt={movieData?.title || "Movie Poster"}
        className="rounded-t-lg"
      />
      <div className="mt-5 flex gap-2 flex-wrap">
        {movieData?.genres?.map((el: { id: number; name: string }) => (
          <Badge>{el.name}</Badge>
        ))}
      </div>

      <p className="mb-5 mt-5">{movieData.overview}</p>
      <div className="flex gap-5 outline h-14 items-center">
        <p className="font-bold">
          <strong>Director </strong>{" "}
        </p>
        <p>{director ? director.name : "Not available"} </p>
      </div>
      <div className="flex gap-7 outline h-14 items-center">
        <p className="font-bold">
          <strong> Writers </strong>{" "}
        </p>
        {novelWriters?.map((el: any) => (
          <p>{el.name}</p>
        ))}
      </div>
      <div className="flex gap-12 outline h-14 items-center">
        <p className="font-bold">
          <strong> Stars </strong>
        </p>
        {firstFourCast && firstFourCast.length > 0 ? (
          <div className="flex gap-4">
            {firstFourCast.map((castMember: any) => (
              <p key={castMember.cast_id}>{castMember.name}</p>
            ))}
          </div>
        ) : (
          <p>Not available</p>
        )}
      </div>

      <Section
        title="More like this"
        moreLink={``}
        endpoint={`movie/${params.id}/recommendations`}
      />
    </div>
  );
}
