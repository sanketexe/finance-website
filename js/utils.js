class Utils {
    static formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }

    static formatPercentage(value) {
        return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
    }

    static generateRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static isMobile() {
        return window.innerWidth <= 768;
    }
}