import React from 'react';
import clsx from 'clsx';

import { ctaDetails } from '@/data/cta';

const AppStoreButton = ({ dark }: { dark?: boolean }) => {
  return (
    <a href={ctaDetails.whatsappUrl}>
      <button
        type="button"
        className={clsx(
          'flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit',
          {
            'text-white bg-foreground': dark,
            'text-foreground bg-white': !dark,
          }
        )}
      >
        <div className="mr-3">
          <img src="/images/wa.png" alt="WhatsApp Icon" width="30" />
        </div>

        <div>
          <div className="text-xs"></div>
          <div className="-mt-1 font-sans text-xl font-semibold"></div>
          Contact via WhatsApp
        </div>
      </button>
    </a>
  );
};

export default AppStoreButton;
