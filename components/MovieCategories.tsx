import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { name: "Documentary", image: "https://source.unsplash.com/random/800x600?documentary" },
  { name: "Scifi", image: "https://source.unsplash.com/random/800x600?scifi" },
  { name: "Nature", image: "https://source.unsplash.com/random/800x600?nature" },
  { name: "Action", image: "https://source.unsplash.com/random/800x600?action" },
];

const MovieCategories = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Card key={category.name} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-40">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MovieCategories;