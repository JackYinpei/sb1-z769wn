import { Button } from "@/components/ui/button";
import { Play, Plus } from 'lucide-react';

const FeaturedMovie = () => {
  return (
    <div className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: 'url(https://source.unsplash.com/random/1600x900?movie)'}}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="absolute bottom-0 left-0 p-8 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">Les Mots D'amour</h1>
        <p className="text-lg md:text-xl max-w-2xl">Sebastian and Mia are drawn together by their common desire to do what they love.</p>
        <div className="space-x-4">
          <Button className="bg-white text-black hover:bg-gray-200">
            <Play className="mr-2 h-4 w-4" /> Play Now
          </Button>
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" /> Add to List
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;