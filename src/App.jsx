import { useEffect, useMemo, useState } from 'react';
import ChartsPanel from './components/ChartsPanel';
import DataTable from './components/DataTable';
import Header from './components/Header';
import LoadingSkeleton from './components/LoadingSkeleton';
import PlantIllustration from './components/PlantIllustration';
import SummaryCards from './components/SummaryCards';
import { ENDPOINT, fetchSensorData } from './services/api';
import { formatDateTime } from './utils/format';

const REFRESH_INTERVAL = 15000;

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('semua');
  const [now, setNow] = useState(formatDateTime(new Date().toISOString()));

  const loadData = async ({ silent = false } = {}) => {
    if (!silent) setLoading(true);
    else setRefreshing(true);

    try {
      const rows = await fetchSensorData();
      setData(rows);
      setError('');
    } catch (err) {
      setError(err.message || 'Gagal mengambil data API.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
    const timer = setInterval(() => setNow(formatDateTime(new Date().toISOString())), 1000);
    const polling = setInterval(() => loadData({ silent: true }), REFRESH_INTERVAL);
    return () => {
      clearInterval(timer);
      clearInterval(polling);
    };
  }, []);

  const latest = useMemo(() => data[0], [data]);

  return (
    <main className="mx-auto max-w-7xl space-y-4 px-4 py-5 md:px-8 md:py-8">
      <Header now={now} onRefresh={() => loadData({ silent: true })} refreshing={refreshing} />

      {loading ? (
        <LoadingSkeleton />
      ) : error ? (
        <section className="glass p-8 text-center">
          <h2 className="text-xl font-semibold text-rose-600">Gagal memuat data</h2>
          <p className="mt-2 text-sm text-slate-600">{error}</p>
          <p className="mt-2 text-xs text-slate-500">Endpoint: {ENDPOINT}</p>
        </section>
      ) : data.length === 0 ? (
        <section className="glass p-8 text-center">
          <h2 className="text-xl font-semibold text-slate-700">Belum ada data sensor</h2>
          <p className="mt-2 text-sm text-slate-500">Pastikan Apps Script mengirimkan array JSON pada mode getData.</p>
        </section>
      ) : (
        <>
          <PlantIllustration />
          <SummaryCards latest={latest} total={data.length} />
          <ChartsPanel data={data} />
          <DataTable data={data} filter={filter} onFilterChange={setFilter} />
        </>
      )}
    </main>
  );
}

export default App;
