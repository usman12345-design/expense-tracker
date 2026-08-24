import "../css/dashboard.scss"
import Chart   from 'chart.js/auto'
import { get } from './ajax'

window.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('yearToDateChart')

    get('/stats/ytd').then(response => response.json()).then(response => {
        let expensesData = Array(12).fill(null)
        let incomeData   = Array(12).fill(null)

        response.forEach(({m, expense, income}) => {
            expensesData[m - 1] = expense
            incomeData[m - 1]   = income
        })

        const gridColor  = '#262C3A'
        const labelColor = '#8A93A6'

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Expense',
                        data: expensesData,
                        borderWidth: 1,
                        borderRadius: 3,
                        backgroundColor: 'rgba(248, 113, 113, 0.55)',
                        borderColor: '#F87171',
                    },
                    {
                        label: 'Income',
                        data: incomeData,
                        borderWidth: 1,
                        borderRadius: 3,
                        backgroundColor: 'rgba(52, 211, 153, 0.55)',
                        borderColor: '#34D399',
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: { color: gridColor },
                        ticks: { color: labelColor, font: { family: 'JetBrains Mono', size: 11 } }
                    },
                    y: {
                        beginAtZero: true,
                        grid: { color: gridColor },
                        ticks: { color: labelColor, font: { family: 'JetBrains Mono', size: 11 } }
                    }
                },
                plugins: {
                    legend: {
                        labels: { color: labelColor, font: { family: 'Inter' } }
                    }
                }
            }
        })
    })
})
