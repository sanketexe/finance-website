// Main application initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    try {
        // Initialize Chart.js if available
        if (typeof Chart !== 'undefined' && document.getElementById('portfolioChart')) {
            ChartManager.init();
        }
        
        // Load portfolio data
        PortfolioManager.loadHoldings();
        
        // Initialize UI interactions
        UIInteractions.init();
        
        // Show welcome notification after a short delay
        setTimeout(() => {
            NotificationManager.show('Welcome to FinanceFlow! Your financial dashboard is ready.', 'success', 5000);
        }, 1500);
        
        console.log('FinanceFlow app initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
        NotificationManager.error('Failed to initialize application. Please refresh the page.');
    }
});

// Expose main functions to global scope for HTML onclick handlers
window.NotificationManager = NotificationManager;