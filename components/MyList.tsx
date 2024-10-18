import { Card, CardContent } from "@/components/ui/card";

const movies = [
  { title: "The Order", image: "https://source.unsplash.com/random/300x450?movie" },
  { title: "Bridge to Gaia", image: "https://source.unsplash.com/random/300x450?scifi" },
  { title: "Billie", image: "https://source.unsplash.com/random/300x450?music" },
  { title: "Supermarket", image: "https://source.unsplash.com/random/300x450?drama" },
  { title: "Oculus", image: "https://source.unsplash.com/random/300x450?horror" },
  { title: "Shooting Stars", image: "https://source.unsplash.com/random/300x450?space" },
];

const MyList = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">My List</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <Card key={movie.title} className="overflow-hidden">
            <CardContent className="p-0">
              <img src={movie.image} alt={movie.title} className="w-full h-60 object-cover" />
              <div className="p-2">
                <h3 className="text-sm font-medium">{movie.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MyList;