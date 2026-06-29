import { IMenuItem, ISocials } from '@/types';

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading:
    'Balance Consulting Indonesia is here to simplify your business finances and tax matters. We believe every entrepreneur deserves to focus on growing their business, while we support from the side of tax, accounting, & management.',

  quickLinks: [
    {
      text: 'Service',
      url: '#features',
    },
    {
      text: 'About Us',
      url: '#pricing',
    },
    // {
    //     text: "Testimonials",
    //     url: "#testimonials"
    // }
  ],
  email: 'balanceconsultingindonesia@gmail.com',
  telephone: '+62 857-3874-3932',
  socials: {
    facebook:
      'https://www.facebook.com/people/Balance-Consulting-Indonesia/61579663988008/?rdid=7coQdZ1pq09CtV6X&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18VT7XRAUu%2F',
    linkedin: 'https://www.linkedin.com',
    youtube: 'https://youtube.com',
  },
};
