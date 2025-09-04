class PortfolioManager {
    static holdings = [
        { symbol: 'AAPL', name: 'Apple Inc.', shares: 25, price: 173.85, change: 2.34 },
        { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 15, price: 407.54, change: 1.87 },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 10, price: 171.48, change: -0.65 },
        { symbol: 'AMZN', name: 'Amazon.com Inc.', shares: 18, price: 178.22, change: 3.21 },
        { symbol: 'TSLA', name: 'Tesla Inc.', shares: 30, price: 174.95, change: -2.17 },
        { symbol: 'VTI', name: 'Vanguard Total Stock Market ETF', shares: 45, price: 251.37, change: 0.89 }
    ];

    static loadHoldings() {
        const holdingsList = document.getElementById('holdingsList');
        holdingsList.innerHTML = '';
        
        this.holdings.forEach(holding => {
            const holdingElement = this.createHoldingElement(holding);
            holdingsList.appendChild(holdingElement);
        });
    }

    static createHoldingElement(holding) {
        const element = document.createElement('div');
        element.className = 'holding-item';
        
        const value = holding.shares * holding.price;
        const changeClass = holding.change >= 0 ? 'positive' : 'negative';
        const changeIcon = holding.change >= 0 ? '↗' : '↘';
        
        element.innerHTML = `
            <div class="holding-info">
                <div class="holding-symbol">${holding.symbol}</div>
                <div class="holding-name">${holding.name}</div>
            </div>
            <div class="holding-details">
                <div class="holding-shares">${holding.shares} shares</div>
                <div class="holding-price">${Utils.formatCurrency(holding.price)}</div>
            </div>
            <div class="holding-value">
                <div class="value">${Utils.formatCurrency(value)}</div>
                <div class="change ${changeClass}">${Utils.formatPercentage(holding.change)} ${changeIcon}</div>
            </div>
        `;
        
        return element;
    }

    static addHolding(holding) {
        this.holdings.push(holding);
        this.loadHoldings();
    }

    static removeHolding(symbol) {
        this.holdings = this.holdings.filter(holding => holding.symbol !== symbol);
        this.loadHoldings();
    }

    static getPortfolioValue() {
        return this.holdings.reduce((total, holding) => {
            return total + (holding.shares * holding.price);
        }, 0);
    }
}