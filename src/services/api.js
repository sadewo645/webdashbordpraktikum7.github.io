const ENDPOINT =
  import.meta.env.VITE_APP_SCRIPT_ENDPOINT ||
  'https://script.google.com/macros/s/AKfycbyXzqxqDIn8vNlEDbAjMdIWM2TBuuI_TOLcF29gStPuURXEkF9-_AJ2rFERfN5-hwSG/exec';

const parseNumber = (value) => {
  const num = Number(value);
  return Number.isFinite(num) ? num : 0;
};

export async function fetchSensorData() {
  const url = new URL(ENDPOINT);
  url.searchParams.set('mode', 'getData');

  const response = await fetch(url.toString(), {
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const payload = await response.json();
  const rows = Array.isArray(payload) ? payload : payload?.data;

  if (!Array.isArray(rows)) {
    throw new Error('Format data API tidak valid.');
  }

  return rows
    .map((row, index) => ({
      id: `${row.waktu || row.time || index}-${index}`,
      waktu: row.waktu || row.time || '',
      adc: parseNumber(row.adc),
      kelembaban: parseNumber(row.kelembaban),
      status: row.status || 'unknown'
    }))
    .sort((a, b) => new Date(b.waktu) - new Date(a.waktu));
}

export { ENDPOINT };
