export const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return '-';
  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(date);
};

export const normalizeStatus = (value) => String(value || '').toLowerCase().trim();

export const getStatusStyle = (status) => {
  const normalized = normalizeStatus(status);
  if (normalized === 'basah') return 'bg-emerald-100 text-emerald-700';
  if (normalized === 'lembab') return 'bg-amber-100 text-amber-700';
  if (normalized === 'kering') return 'bg-rose-100 text-rose-700';
  return 'bg-slate-100 text-slate-700';
};
