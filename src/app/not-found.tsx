import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl xl:text-3xl font-bold">
          404
        </CardTitle>
        <CardDescription>Page Not Found</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Sorry! The page you are looking for can not be found. Go to the main
          page.
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="default" className="w-full">
          <Link href="/">Home</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
