'use client';

import { ChartLine, Clock, House, Menu } from 'lucide-react';

import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface HeaderProps {
  className?: string;
  logo?: {
    url: string;
    title: string;
    accentTitle?: string;
  };
  menu?: MenuItem[];
}

const Header = ({
  logo = {
    title: 'Keen',
    accentTitle: 'Keeper',
    url: '/',
  },
  menu = [
    { title: 'Home', url: '/', icon: <House /> },
    {
      title: 'Timeline',
      url: '/timeline',
      icon: <Clock />,
    },
    {
      title: 'Stats',
      url: '/stats',
      icon: <ChartLine />,
    },
  ],

  className,
}: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        'py-3 border-b fixed inset-x-0 bg-background z-10',
        className,
      )}
    >
      <div className="container mx-auto px-3">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex w-full">
          <Link href={logo.url}>
            <span className="text-lg font-black">{logo.title}</span>
            <span className="text-lg font-bold text-primary">
              {logo.accentTitle}
            </span>
          </Link>
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item, pathname))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url}>
              <span className="text-lg font-black">{logo.title}</span>
              <span className="text-lg font-bold text-primary">
                {logo.accentTitle}
              </span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={logo.url}>
                      <span className="text-lg font-black">{logo.title}</span>
                      <span className="text-lg font-bold text-primary">
                        {logo.accentTitle}
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item, pathname))}
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

const renderMenuItem = (item: MenuItem, pathname: string) => {
  return (
    <NavigationMenuItem key={item.title}>
      {/* <Button> */}
      <Button variant={pathname == item.url ? 'default' : 'ghost'} asChild>
        <Link href={item.url}>
          {item.icon} {item.title}
        </Link>
      </Button>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem, pathname: string) => {
  return (
    <Link
      key={item.title}
      href={item.url}
      className={clsx(
        pathname == item.url && 'text-primary',
        'text-md font-semibold',
      )}
    >
      {item.title}
    </Link>
  );
};

export { Header };
