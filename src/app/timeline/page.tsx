'use client';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useApp } from '@/context/FriendsContext';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MessageSquare, Phone, Video } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useMemo, useState } from 'react';

const formatDate = (date: string) => new Date(date).toISOString().split('T')[0];

const TimelinePage = () => {
  const { interactions } = useApp();
  const [filter, setFilter] = useState('all');

  const filteredInteractions = useMemo(() => {
    if (filter === 'all') return interactions;
    return interactions.filter((item) => item.type === filter);
  }, [filter, interactions]);

  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-lg md:text-xl xl:text-2xl font-bold">Timeline</h3>
      <Select defaultValue="all" onValueChange={(value) => setFilter(value)}>
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Filter Timeline" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="call">Call</SelectItem>
            <SelectItem value="text">Text</SelectItem>
            <SelectItem value="video">Video</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex flex-col gap-4 mt-4">
        {filteredInteractions.map((interaction, index) => (
          <Card
            key={`${interaction.title}-${interaction.type}-${index}`}
            className={cn(
              interaction.type == 'call'
                ? 'bg-green-100'
                : interaction.type == 'text'
                  ? 'bg-yellow-100'
                  : 'bg-cyan-100',
            )}
          >
            <CardHeader className="flex items-center gap-6">
              <div>
                {interaction.type == 'call' ? (
                  <Phone />
                ) : interaction.type == 'text' ? (
                  <MessageSquare />
                ) : (
                  <Video />
                )}
              </div>
              <div>
                <CardTitle>{interaction.title}</CardTitle>
                <CardDescription className="text-xs mt-1">
                  {formatDate(interaction.date)}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TimelinePage;
