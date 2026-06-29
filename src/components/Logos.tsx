import Image from "next/image";

const logos = [
  {
    src: "/images/logo-odoo.svg",
    alt: "Odoo Logo",
    width: 130,
    height: 50,
  },
  {
    src: "/images/logo-myob.png",
    alt: "Myob Logo",
    width: 129,
    height: 48,
  },
  {
    src: "/images/logo-xero.svg",
    alt: "Xero Logo",
    width: 129,
    height: 48,
  },
];

const Logos = () => {
  return (
    <section id="logos" className="py-24 px-5 bg-background">
      <p className="text-lg font-medium text-center">Support by Technology</p>

      <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 items-center justify-items-center opacity-80 logos-container">
        {logos.map((logo) => (
          <div
            key={logo.src}
            className="flex h-14 w-full max-w-[160px] items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="max-h-12 object-contain"
              unoptimized
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;
