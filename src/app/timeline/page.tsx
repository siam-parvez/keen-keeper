'use client';
import { Card } from '@/components/ui/card';
import { useApp } from '@/context/FriendsContext';
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Timeline',
// };

const TimelinePage = () => {
  const { interactions } = useApp();

  return (
    <section className="flex flex-col gap-12">
      <h3 className="text-lg md:text-xl xl:text-2xl font-bold">Timeline</h3>
      {interactions.map((interaction, index) => (
        <Card key={`${interaction.title}-${interaction.type}-${index}`}>
          {interaction.title} {interaction.type}{' '}
          {new Date(interaction.date).toLocaleDateString()}
        </Card>
      ))}
    </section>
  );
};

export default TimelinePage;
