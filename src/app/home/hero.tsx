import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
    <section className="flex flex-col gap-12 items-center justify-center min-h-svh py-24 md:py-12">
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-6">
        {summaryData.map((data) => (
          <Card key={data.id}>
            <CardContent className="flex justify-center items-center flex-col gap-2">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-primary">
                {data.count}
              </h2>
              <p className="text-neutral-600 text-xs md:text-base">
                {data.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
