import { Activity, Database, Gauge, Sprout } from 'lucide-react';
import { getStatusStyle } from '../utils/format';

const cards = [
  { label: 'ADC Terbaru', key: 'adc', icon: Gauge },
  { label: 'Kelembaban', key: 'kelembaban', icon: Activity, suffix: '%' },
  { label: 'Status', key: 'status', icon: Sprout },
  { label: 'Total Data', key: 'total', icon: Database }
];

const SummaryCards = ({ latest, total }) => (
  <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
    {cards.map((card, idx) => {
      const Icon = card.icon;
      const rawValue = card.key === 'total' ? total : latest?.[card.key];
      const value = rawValue ?? '-';
      return (
        <article
          key={card.key}
          className="glass animate-fadeIn p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          style={{ animationDelay: `${idx * 80}ms` }}
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500">{card.label}</span>
            <Icon className="h-5 w-5 text-cyan-600" />
          </div>
          {card.key === 'status' ? (
            <span className={`status-badge text-sm ${getStatusStyle(value)}`}>{String(value)}</span>
          ) : (
            <p className="text-3xl font-bold text-slate-800">
              {value}
              {card.suffix}
            </p>
          )}
        </article>
      );
    })}
  </section>
);

export default SummaryCards;
