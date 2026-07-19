import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function WeeklySalesChart () {

    const chartData = {
        labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
        datasets: [
            {
                label: 'درآمد (میلیون تومان)',
                data: [12, 19, 15, 25, 22, 30, 1],
                borderColor: '#0F8F88',
                backgroundColor: 'rgba(15, 143, 136, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#0F8F88',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
            },
            {
                label: 'سفارشات',
                data: [45, 52, 49, 60, 55, 70, 65],
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#3B82F6',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
            },
            {
                label: 'بازگشت کالا',
                data: [3, 5, 4, 8, 6, 7, 5],
                borderColor: '#EF4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#EF4444',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        family: 'IRANSans, Vazirmatn, sans-serif',
                        size: 12,
                    },
                    color: '#64748B',
                },
            },
            tooltip: {
                backgroundColor: '#1E293B',
                titleColor: '#F1F5F9',
                bodyColor: '#F1F5F9',
                padding: 12,
                cornerRadius: 8,
                displayColors: true,
                titleFont: {
                    family: 'IRANSans, Vazirmatn, sans-serif',
                    size: 14,
                },
                bodyFont: {
                    family: 'IRANSans, Vazirmatn, sans-serif',
                    size: 12,
                },
                callbacks: {
                    label: (context) => {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.parsed.y.toLocaleString('fa-IR');
                        return label;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        family: 'IRANSans, Vazirmatn, sans-serif',
                        size: 11,
                    },
                    color: '#64748B',
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.06)',
                },
                ticks: {
                    font: {
                        family: 'IRANSans, Vazirmatn, sans-serif',
                        size: 11,
                    },
                    color: '#64748B',
                    callback: (value) => value.toLocaleString('fa-IR'),
                },
            },
        },
    };

    return (
        <div className="w-full h-full min-h-75">
            <Line data={chartData} options={options} />
        </div>
    );
};
