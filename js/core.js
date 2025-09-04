class CoreApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeComponents();
    }

    setupEventListeners() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Handle navbar scroll effect
        window.addEventListener('scroll', Utils.debounce(() => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, 10));

        // Tab switching for charts
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const period = tab.getAttribute('data-period');
                ChartManager.updateChartPeriod(period);
            });
        });

        // Quick action buttons
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.getAttribute('data-action');
                this.handleQuickAction(action);
            });
        });
    }

    initializeComponents() {
        // Initialize all components
        ChartManager.init();
        PortfolioManager.loadHoldings();
        DataManager.loadData();
    }

    handleQuickAction(action) {
        const actions = {
            'buy': 'Buy assets',
            'sell': 'Sell assets',
            'transfer': 'Transfer funds',
            'analyze': 'Analyze portfolio'
        };
        
        NotificationManager.show(`Opening ${actions[action]} panel...`);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.App = new CoreApp();
});