import { Droplets, RefreshCw } from 'lucide-react';

const Header = ({ now, onRefresh, refreshing }) => (
  <header className="glass animate-fadeIn p-5 md:p-6">
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 p-3 text-white shadow-lg">
          <Droplets className="h-7 w-7" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">SoilSense IoT Dashboard</h1>
          <p className="text-sm text-slate-600">Monitoring kelembaban tanah secara real-time</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
          {now}
        </div>
        <button
          onClick={onRefresh}
          className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-600"
          type="button"
        >
          <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>
    </div>
  </header>
);

export default Header;
