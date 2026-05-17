'use client';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useApp } from '@/context/FriendsContext';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const FriendsSection = () => {
  const { friends } = useApp();

  const summaryData = [
    {
      id: '1',
      label: 'Total Friends',
      count: friends.length,
    },
    {
      id: '2',
      label: 'On Track',
      count: friends.filter((friend) => friend.status == 'on-track').length,
    },
    {
      id: '3',
      label: 'Need Attention',
      count: friends.filter(
        (friend) => friend.days_since_contact >= friend.goal,
      ).length,
    },
    {
      id: '4',
      label: 'Interactions This Month',
      count: 12,
    },
  ];

  return (
    <section className="flex flex-col">
      <div className="grid xs:grid-cols-2 lg:grid-cols-4 w-full gap-6">
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
      <hr className="my-6" />
      <h3 className="text-lg md:text-xl xl:text-2xl font-bold mb-2">
        Your Friends
      </h3>
      <div className="grid xs:grid-cols-2 lg:grid-cols-4 w-full gap-6">
        {friends.map((friend) => (
          <Link href={`/friend/${friend.id}`} key={friend.id}>
            <Card className="hover:scale-110 transition-transform cursor-pointer text-center">
              <CardContent className="flex justify-center items-center flex-col gap-2">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  width={100}
                  height={100}
                  unoptimized
                  className="aspect-square border rounded-full object-cover"
                />
                <h2 className="text-lg xl:text-xl font-bold">{friend.name}</h2>
                <p className="text-neutral-600 text-xs md:text-base">
                  {friend.days_since_contact}d ago
                </p>

                <div className="flex gap-2 flex-wrap items-center justify-center">
                  {friend.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-green-600/50 uppercase text-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Badge
                  variant="ghost"
                  className={clsx(
                    friend.status == 'almost due'
                      ? 'bg-yellow-500'
                      : friend.status == 'overdue'
                        ? 'bg-red-500'
                        : 'bg-primary',
                    'capitalize text-white',
                  )}
                >
                  {friend.status}
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FriendsSection;
