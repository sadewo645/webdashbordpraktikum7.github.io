import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { normalizeStatus } from '../utils/format';

const STATUS_COLORS = {
  basah: '#34d399',
  lembab: '#fbbf24',
  kering: '#fb7185',
  unknown: '#94a3b8'
};

const ChartsPanel = ({ data }) => {
  const chartData = [...data].reverse().slice(-20);

  const statusDistribution = Object.entries(
    data.reduce((acc, row) => {
      const key = normalizeStatus(row.status) || 'unknown';
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  return (
    <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
      <article className="glass animate-fadeIn p-5 xl:col-span-2">
        <h3 className="mb-4 font-semibold text-slate-700">Trend ADC</h3>
        <div className="h-72">
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="4 4" stroke="#d1e6f9" />
              <XAxis dataKey="waktu" tick={false} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="adc" stroke="#06b6d4" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="glass animate-fadeIn p-5">
        <h3 className="mb-4 font-semibold text-slate-700">Distribusi Status</h3>
        <div className="h-72">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={statusDistribution} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90}>
                {statusDistribution.map((item) => (
                  <Cell key={item.name} fill={STATUS_COLORS[item.name] || STATUS_COLORS.unknown} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="glass animate-fadeIn p-5 xl:col-span-3">
        <h3 className="mb-4 font-semibold text-slate-700">Trend Kelembaban</h3>
        <div className="h-72">
          <ResponsiveContainer>
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="4 4" stroke="#dbf5e6" />
              <XAxis dataKey="waktu" tick={false} />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="kelembaban"
                stroke="#22c55e"
                fill="#bbf7d0"
                strokeWidth={2.5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </article>
    </section>
  );
};

export default ChartsPanel;
