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
import { useState } from 'react';

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  className?: string;
  logo?: {
    url: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
}

const Navbar = ({
  logo = {
    title: 'KeenKeeper',
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
      url: '#',
      icon: <ChartLine />,
    },
  ],
  className,
}: NavbarProps) => {
  return (
    <header className={cn('py-3 border-b', className)}>
      <div className="container mx-auto px-3">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex w-full">
          <Link href={logo.url} className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tighter">
              {logo.title}
            </span>
          </Link>
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
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
                    <Link href={logo.url} className="flex items-center gap-2">
                      <span className="text-lg font-semibold tracking-tighter">
                        {logo.title}
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
                    {menu.map((item) => renderMobileMenuItem(item))}
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

const renderMenuItem = (item: MenuItem) => {
  return (
    <NavigationMenuItem key={item.title}>
      <Link href={item.url} className="">
        <Button>
          {/* <Button variant={isActive ? 'default' : 'ghost'}> */}
          {item.icon} {item.title}
        </Button>
      </Link>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};

export { Navbar };
