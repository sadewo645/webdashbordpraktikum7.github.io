import { Flower2, Waves } from 'lucide-react';

const PlantIllustration = () => (
  <section className="glass animate-fadeIn relative overflow-hidden p-6">
    <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-cyan-100/50 blur-2xl" />
    <div className="absolute -bottom-16 -left-8 h-40 w-40 rounded-full bg-green-100/60 blur-2xl" />

    <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">IoT Soil Monitoring</p>
        <h2 className="text-2xl font-bold text-slate-800">Tanaman Sehat Dimulai dari Data</h2>
        <p className="mt-2 max-w-xl text-sm text-slate-600">
          Pantau kondisi kelembaban tanah, identifikasi status kering lebih cepat, dan optimalkan penyiraman.
        </p>
      </div>
      <div className="flex items-center gap-4 rounded-2xl bg-white/80 p-4 shadow-sm">
        <Flower2 className="h-14 w-14 animate-float text-green-500" />
        <Waves className="h-14 w-14 animate-float text-cyan-500" />
      </div>
    </div>
  </section>
);

export default PlantIllustration;
