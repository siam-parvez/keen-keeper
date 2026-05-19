'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
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

export type Interaction = {
  type: 'call' | 'text' | 'video';
  title: string;
  date: Date;
};

type AppContextType = {
  friends: Friend[];
  setFriends: (data: Friend[]) => void;

  interactions: Interaction[];
  setInteractions: Dispatch<SetStateAction<Interaction[]>>;
};

const AppContext = createContext<AppContextType | null>(null);

// toast notification and save data in localStorage

export function AppProvider({ children }: { children: ReactNode }) {
  const [friends, setFriends] = useState<Friend[]>(
    () => friendsData as Friend[],
  );
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  return (
    <AppContext.Provider
      value={{ friends, setFriends, interactions, setInteractions }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useFriends must be used inside AppProvider');
  }

  return context;
}
