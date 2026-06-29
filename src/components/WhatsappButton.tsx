import Image from "next/image";
import clsx from "clsx";

import { ctaDetails } from "@/data/cta";

const WhatsappButton = ({ dark }: { dark?: boolean }) => {
  return (
    <a href={ctaDetails.whatsappUrl} className="w-full sm:w-auto">
      <button
        type="button"
        className={clsx(
          "flex items-center justify-center gap-3 min-w-[205px] mt-3 px-6 h-14 rounded-full transition-colors duration-200 w-full sm:w-fit",
          {
            "bg-foreground text-white hover:bg-slate-900": dark,
            "bg-white text-foreground hover:bg-slate-100": !dark,
          },
        )}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm">
          <Image
            src="/images/wa.png"
            alt="WhatsApp Icon"
            width={24}
            height={24}
          />
        </div>
        <div className="text-left">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Chat
          </p>
          <p className="text-base font-semibold">Contact via WhatsApp</p>
        </div>
      </button>
    </a>
  );
};

export default WhatsappButton;
