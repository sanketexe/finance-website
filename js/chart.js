class ChartManager {
    static init() {
        this.ctx = document.getElementById('portfolioChart').getContext('2d');
        this.currentPeriod = '1M';
        this.createChart();
    }

    static createChart() {
        const data = this.generateChartData(this.currentPeriod);
        
        this.chart = new Chart(this.ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Portfolio Value',
                    data: data.values,
                    borderColor: 'rgba(76, 175, 80, 1)',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                    pointBackgroundColor: 'rgba(76, 175, 80, 1)',
                    pointRadius: 3,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(context) {
                                return Utils.formatCurrency(context.raw);
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                }
            }
        });
    }

    static generateChartData(period) {
        let labels = [];
        let values = [];
        let baseValue = 85000;
        let dataPoints = 0;
        
        switch(period) {
            case '1D':
                dataPoints = 24;
                for (let i = 0; i < dataPoints; i++) {
                    labels.push(`${i}:00`);
                    baseValue += Utils.generateRandomNumber(-200, 300);
                    values.push(baseValue);
                }
                break;
            case '1W':
                dataPoints = 7;
                const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                for (let i = 0; i < dataPoints; i++) {
                    labels.push(days[i]);
                    baseValue += Utils.generateRandomNumber(-500, 800);
                    values.push(baseValue);
                }
                break;
            case '1M':
                dataPoints = 30;
                for (let i = 1; i <= dataPoints; i++) {
                    labels.push(`Day ${i}`);
                    baseValue += Utils.generateRandomNumber(-800, 1200);
                    values.push(baseValue);
                }
                break;
            case '1Y':
                dataPoints = 12;
                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                for (let i = 0; i < dataPoints; i++) {
                    labels.push(months[i]);
                    baseValue += Utils.generateRandomNumber(-3000, 5000);
                    values.push(baseValue);
                }
                break;
        }
        
        return { labels, values };
    }

    static updateChartPeriod(period) {
        this.currentPeriod = period;
        const data = this.generateChartData(period);
        
        this.chart.data.labels = data.labels;
        this.chart.data.datasets[0].data = data.values;
        this.chart.update();
    }
}