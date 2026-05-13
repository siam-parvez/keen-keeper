import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
  const summaryData = [
    {
      id: '1',
      label: 'Total Friends',
      count: 10,
    },
    {
      id: '2',
      label: 'On Track',
      count: 3,
    },
    {
      id: '3',
      label: 'Need Attention',
      count: 6,
    },
    {
      id: '4',
      label: 'Interactions This Month',
      count: 12,
    },
  ];
  return (
    <section className="flex items-center justify-center min-h-svh">
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
      <div>
        {summaryData.map((data) => (
          <div key={data.id}>
            {data.label} {data.count}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
