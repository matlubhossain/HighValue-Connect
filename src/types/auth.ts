export type UserRole = 'client' | 'provider' | 'admin';

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  companyName: string;
  title?: string;
  isFirstUser?: boolean;
  joinedAt: string;
}

export const DEMO_FIRST_USERS: UserSession[] = [
  {
    id: 'user-first-client',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@apexenterprise.in',
    role: 'client',
    companyName: 'Apex Enterprise Solutions',
    title: 'VP of Digital Engineering',
    isFirstUser: true,
    joinedAt: new Date().toISOString()
  },
  {
    id: 'user-first-provider',
    name: 'Vikram Malhotra',
    email: 'vikram@cognitivescale.in',
    role: 'provider',
    companyName: 'CognitiveScale AI Labs',
    title: 'Co-Founder & CTO',
    isFirstUser: true,
    joinedAt: new Date().toISOString()
  },
  {
    id: 'user-first-admin',
    name: 'HighValue Founding Team',
    email: 'founder@highvalueconnect.in',
    role: 'admin',
    companyName: 'HighValue Connect HQ',
    title: 'Platform Director',
    isFirstUser: true,
    joinedAt: new Date().toISOString()
  }
];
