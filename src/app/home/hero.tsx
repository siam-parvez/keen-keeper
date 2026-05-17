import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-12 items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-neutral-600 text-xs md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <Button>
          <Plus /> Add a Friend
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
