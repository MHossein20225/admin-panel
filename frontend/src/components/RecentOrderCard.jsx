const STATUS_STYLES = {
    'sending': {
        text: 'text-[#B45309]',
        bg: 'bg-amber-50',
        label: 'در حال ارسال'
    },
    'done': {
        text: 'text-[#047857]',
        bg: 'bg-emerald-50',
        label: 'تحویل شده'
    },
    'pending': {
        text: 'text-[#475569]',
        bg: 'bg-slate-50',
        label: 'در حال آماده سازی'
    }
};

export default function RecentOrderCard({ id, name, status }) {
    const statusStyle = STATUS_STYLES[status] || STATUS_STYLES['pending'];

    return (
        <div className="border border-(--border-color) rounded-2xl flex items-center justify-between p-2 hover:bg-(--bg-hover) transition-colors">
            <div className="flex items-center gap-3">
                <span className="text-sm text-(--text-secondary)">#{id}</span>
                <span className="text-(--border-color)">/</span>
                <span className="text-(--text) truncate max-w-37.5">{name}</span>
            </div>

            <span className={`px-3 py-1 rounded-full text-sm ${statusStyle.text} ${statusStyle.bg}`}>
                {statusStyle.label}
            </span>
        </div>
    );
}