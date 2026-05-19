'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useApp } from '@/context/FriendsContext';
import clsx from 'clsx';
import {
  Archive,
  BellMinus,
  MessageSquareMore,
  Pencil,
  Phone,
  Trash2,
  Video,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';

export default function FriendDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { friends, setInteractions } = useApp();
  const friend = friends.find((friend) => String(friend.id) == id);

  if (!friend) {
    return <div>Friend not found</div>;
  }

  const handleInteraction = (type: 'call' | 'text' | 'video') => {
    setInteractions((prev) => [
      ...prev,
      {
        type,
        title: `${type.charAt(0).toUpperCase() + type.slice(1)} with ${friend.name}`,
        date: new Date().toISOString(),
      },
    ]);
  };

  const interactionCards = [
    {
      type: 'call',
      label: 'Call',
      icon: Phone,
    },
    {
      type: 'text',
      label: 'Text',
      icon: MessageSquareMore,
    },
    {
      type: 'video',
      label: 'Video',
      icon: Video,
    },
  ] as const;

  return (
    <section className="grid md:grid-cols-3 gap-4">
      <div className="flex gap-4 flex-col">
        <Card>
          <CardContent className="flex justify-center items-center flex-col gap-2 text-center">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={100}
              height={100}
              unoptimized
              className="aspect-square border rounded-full object-cover"
            />
            <h2 className="text-lg xl:text-xl font-bold">{friend.name}</h2>
            {/* <p className="text-neutral-600 text-xs md:text-base">
            {friend.days_since_contact}d ago
          </p> */}

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
            <p className="text-neutral-600 text-xs md:text-base italic">
              &quot;{friend.bio}&quot;
            </p>
            <small className="text-neutral-600 text-xxs md:text-xs">
              Preferred:{' '}
              <Link
                href={`mailto:${friend.email}`}
                className="hover:text-primary"
              >
                {friend.email}
              </Link>
            </small>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-2">
          <Button variant={'outline'} className="w-full h-12">
            <BellMinus /> Snooze 2 weeks
          </Button>
          <Button variant={'outline'} className="w-full h-12">
            <Archive /> Archive
          </Button>
          <Button variant={'outline'} className="text-red-500 w-full h-12">
            <Trash2 /> Delete
          </Button>
        </div>
      </div>

      <div className="md:col-span-2 flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-4 text-center h-full">
          <Card>
            <CardContent className="flex justify-center items-center flex-col gap-2 my-auto">
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold">
                {friend.days_since_contact}
              </h2>
              <p className="text-neutral-600 text-xs md:text-base">
                Days Since Contact
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex justify-center items-center flex-col gap-2 my-auto">
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold">
                {friend.goal}
              </h2>
              <p className="text-neutral-600 text-xs md:text-base">
                Goal (Days)
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex justify-center items-center flex-col gap-2 my-auto">
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold">
                {new Date(friend.next_due_date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric',
                })}
              </h2>
              <p className="text-neutral-600 text-xs md:text-base">Next Due</p>
            </CardContent>
          </Card>
        </div>
        <Card className="min-h-fit gap-2">
          <CardHeader className="flex justify-between items-center gap-2">
            <CardTitle className="text-neutral-600 text-xs md:text-base font-bold">
              Relationship Goal
            </CardTitle>
            <CardAction>
              <Button variant={'outline'}>
                <Pencil /> Edit
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-600 text-xs md:text-base">
              Connect every <strong>{friend.goal} days</strong>
            </p>
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader className="flex justify-between items-center gap-2">
            <CardTitle className="text-neutral-600 text-xs md:text-base font-bold">
              Quick Check-In
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-6 h-full mb-10">
            {/* Phone */}

            {interactionCards.map(({ type, label, icon: Icon }) => (
              <Card
                key={type}
                className="bg-green-50 cursor-pointer hover:scale-110 transition-all"
                onClick={() => handleInteraction(type)}
              >
                <CardContent className="flex justify-center items-center flex-col gap-2 my-auto">
                  <Icon />
                  <p className="text-neutral-600 text-xs md:text-base">
                    {label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
