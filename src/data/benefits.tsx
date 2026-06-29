import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
} from 'react-icons/fi';

import { IBenefit } from '@/types';

export const benefits: IBenefit[] = [
  {
    // title: "Smart Budgeting",
    title: 'Tax',

    description: 'worry-free reporting & smart tax planning',
    bullets: [
      {
        title: 'Worry-free tax reporting',
        description:
          'Laporan pajak yang rapi, akurat, dan bebas stres setiap periode.',
        icon: <FiShield size={26} />,
      },
      {
        title: 'Smart tax planning and strategies',
        description:
          'Strategi perpajakan yang membantu mengoptimalkan pengeluaran dan meminimalkan risiko.',
        icon: <FiTarget size={26} />,
      },
      {
        title: 'Ensure compliance and maximize deductions',
        description:
          'Pastikan kepatuhan perpajakan dan manfaatkan potongan yang sah secara maksimal.',
        icon: <FiDollarSign size={26} />,
      },
    ],
    // imageSrc: "/images/mockup-1.webp"
    imageSrc: '/images/ilustrasi/tax1.jpg',
  },
  {
    // title: "Seamless Investing",
    title: 'Accounting',

    description: 'clear, reliable financial records.',
    bullets: [
      {
        title: 'Accurate bookkeeping and reports',
        description:
          'Precise transaction recording for financial statements that are ready to use.',
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: 'Clear, reliable financial records',
        description:
          'Transparent and easy-to-understand financial records for better decision-making.',
        icon: <FiPieChart size={26} />,
      },
      {
        title: 'Cash flow and expense tracking',
        description:
          'Pantau arus kas dan belanja secara real-time agar bisnis tetap sehat.',
        icon: <FiTrendingUp size={26} />,
      },
    ],
    // imageSrc: "/images/mockup-2.webp"
    imageSrc: '/images/ilustrasi/accounting.png',
  },
  {
    // title: "Bank-Grade Security",
    title: 'Management',

    description: 'strategies to help your business grow.',
    bullets: [
      {
        title: 'Business growth strategies',
        description:
          'Rencana pengembangan bisnis yang relevan dengan target dan pasar Anda.',
        icon: <FiBriefcase size={26} />,
      },
      {
        title: 'Operational efficiency solutions',
        description:
          'Optimalkan proses kerja agar lebih cepat, hemat, dan terukur.',
        icon: <FiTrendingUp size={26} />,
      },
      {
        title: 'Risk management and security',
        description:
          'Lindungi bisnis dari risiko operasional dengan sistem pengelolaan yang terstruktur.',
        icon: <FiShield size={26} />,
      },
    ],
    // imageSrc: "/images/mockup-1.webp"
    imageSrc: '/images/ilustrasi/management.png',
  },
  {
    // title: "Bank-Grade Security",
    title: 'Office Setup Services',

    description:
      'Solutions for fast, legal office setup that is ready to operate.',
    bullets: [
      {
        title: 'Legal company establishment',
        description:
          'Help with business setup using compliant documents and regulations.',
        icon: <FiBriefcase size={26} />,
      },
      {
        title: 'Efficient process',
        description:
          'Gain structured support so office establishment is smooth and time-saving.',
        icon: <FiTarget size={26} />,
      },
      {
        title: 'Complete administrative support',
        description:
          'Prepare administrative and operational needs from the start.',
        icon: <FiShield size={26} />,
      },
    ],
    // imageSrc: "/images/mockup-1.webp"
    imageSrc: '/images/ilustrasi/office.jpg',
  },
  {
    // title: "Bank-Grade Security",
    title: 'Virtual Office',

    description: 'Professional office address without renting physical space.',
    bullets: [
      {
        title: 'Prestigious business address',
        description:
          'Strengthen your company image with a professional and trusted office address.',
        icon: <FiUser size={26} />,
      },
      {
        title: 'Flexible office service access',
        description:
          'Enjoy office facilities as needed without long-term commitments.',
        icon: <FiBriefcase size={26} />,
      },
      {
        title: 'Privacy and security maintained',
        description:
          'Services that protect communication comfort and safeguard your business data.',
        icon: <FiLock size={26} />,
      },
    ],
    // imageSrc: "/images/mockup-1.webp"
    imageSrc: '/images/ilustrasi/virtual-office.png',
  },
];
