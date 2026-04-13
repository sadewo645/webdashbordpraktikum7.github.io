import { formatDateTime, getStatusStyle } from '../utils/format';

const DataTable = ({ data, filter, onFilterChange }) => {
  const filtered =
    filter === 'semua' ? data : data.filter((item) => item.status.toLowerCase() === filter.toLowerCase());

  const rows = filtered.slice(0, 20);

  return (
    <section className="glass animate-fadeIn p-5">
      <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <h3 className="font-semibold text-slate-700">Data Sensor Terbaru</h3>
        <select
          value={filter}
          onChange={(event) => onFilterChange(event.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
        >
          <option value="semua">Semua Status</option>
          <option value="basah">Basah</option>
          <option value="lembab">Lembab</option>
          <option value="kering">Kering</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500">
              <th className="py-2">Waktu</th>
              <th className="py-2">ADC</th>
              <th className="py-2">Kelembaban</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-slate-100">
                <td className="py-2 text-slate-600">{formatDateTime(row.waktu)}</td>
                <td className="py-2 font-medium">{row.adc}</td>
                <td className="py-2">{row.kelembaban}%</td>
                <td className="py-2">
                  <span className={`status-badge ${getStatusStyle(row.status)}`}>{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DataTable;
