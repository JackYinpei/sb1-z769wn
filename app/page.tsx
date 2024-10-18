import FeaturedMovie from '@/components/FeaturedMovie';
import MovieCategories from '@/components/MovieCategories';
import MyList from '@/components/MyList';

export default function Home() {
  return (
    <div className="space-y-12">
      <FeaturedMovie />
      <MovieCategories />
      <MyList />
    </div>
  );
}