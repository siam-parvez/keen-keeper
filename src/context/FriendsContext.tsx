'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import friendsData from '@/data/friends.json';

type Friend = {
  id: number;
  name: string;
  picture: string;
  email: string;
  days_since_contact: number;
  status: 'overdue' | 'almost due' | 'on-track';
  tags: string[];
  bio: string;
  goal: number;
  next_due_date: string;
};

type FriendsContextType = {
  friends: Friend[];
  setFriends: (data: Friend[]) => void;
};

const FriendsContext = createContext<FriendsContextType | null>(null);

// const InteractionContext = createContext<FriendsContextType | null>(null);

export function FriendsProvider({ children }: { children: ReactNode }) {
  const [friends, setFriends] = useState<Friend[]>(
    () => friendsData as Friend[],
  );

  return (
    <FriendsContext.Provider value={{ friends, setFriends }}>
      {children}
    </FriendsContext.Provider>
  );
}

export function useFriends() {
  const context = useContext(FriendsContext);

  if (!context) {
    throw new Error('useFriends must be used inside FriendsProvider');
  }

  return context;
}
