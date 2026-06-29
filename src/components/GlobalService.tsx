import Section from './Section';
import { globalService } from '@/data/globalService';

const GlobalService: React.FC = () => {
  return (
    <Section
      id="global-service"
      title={globalService.title}
      description={globalService.description}
    >
      <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {globalService.locations.map((location) => (
          <div
            key={location.country}
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/30"
          >
            <div className="mb-4 flex items-center gap-3 text-2xl">
              <span>{location.flag}</span>
              <span className="text-lg font-semibold">{location.country}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              {location.detail}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default GlobalService;
