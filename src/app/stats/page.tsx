'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useApp } from '@/context/FriendsContext';
import { ChartPie } from 'lucide-react';
import { Pie, PieChart } from 'recharts';

const TimelinePage = ({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean;
}) => {
  const { interactions } = useApp();

  const chartData = interactions.reduce(
    (acc, curr) => {
      acc[curr.type] = (acc[curr.type] || 0) + 1;
      return acc;
    },
    {
      call: 0,
      text: 0,
      video: 0,
    } as Record<'call' | 'text' | 'video', number>,
  );

  const data = [
    { name: 'Call', value: chartData.call, fill: '#244d3f' },
    { name: 'Text', value: chartData.text, fill: '#37a163' },
    { name: 'Video', value: chartData.video, fill: '#7f37f5' },
  ];

  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-lg md:text-xl xl:text-2xl font-bold">
        Friendship Analytics
      </h3>
      {interactions.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>By Interaction Type</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <PieChart
              style={{
                width: '100%',
                maxWidth: '500px',
                maxHeight: '80vh',
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius="50%"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={isAnimationActive}
              />
            </PieChart>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader className="text-center">
            <ChartPie className="size-32 mx-auto mb-6" />
            <CardTitle>
              No friendship analytics yet! Interact with friends to see
              friendship analytics.
            </CardTitle>
          </CardHeader>
        </Card>
      )}
    </section>
  );
};

export default TimelinePage;
