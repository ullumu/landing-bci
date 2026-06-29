import { IconType } from 'react-icons';
import { FiHeadphones, FiLock, FiShield } from 'react-icons/fi';

export interface ISatisfaction {
  caption: string;
  percentage: number;
  description: string;
  icon: IconType;
}

export const satisfaction: ISatisfaction[] = [
  {
    caption: 'Customer Satisfaction',
    percentage: 98,
    description:
      'Our users are satisfied with fast, secure, and easy-to-use digital financial services.',
    icon: FiShield,
  },
  {
    caption: 'Repeat Transactions',
    percentage: 90,
    description:
      'Customers return to use our services for daily financial needs.',
    icon: FiLock,
  },
  {
    caption: 'Fast Response',
    percentage: 96,
    description:
      'Our team is ready to support customers with fast and personalized service.',
    icon: FiHeadphones,
  },
];
