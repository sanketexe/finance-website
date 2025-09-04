class DataManager {
    static async loadData() {
        try {
            // Simulate API calls with timeouts
            await this.loadMarketData();
            await this.loadUserData();
            await this.loadNews();
            
            NotificationManager.success('Data loaded successfully');
        } catch (error) {
            console.error('Error loading data:', error);
            NotificationManager.error('Failed to load some data. Using cached information.');
        }
    }

    static async loadMarketData() {
        return new Promise(resolve => {
            setTimeout(() => {
                // Simulate market data loading
                console.log('Market data loaded');
                resolve();
            }, 1000);
        });
    }

    static async loadUserData() {
        return new Promise(resolve => {
            setTimeout(() => {
                // Simulate user data loading
                console.log('User data loaded');
                resolve();
            }, 800);
        });
    }

    static async loadNews() {
        return new Promise(resolve => {
            setTimeout(() => {
                // Simulate news loading
                console.log('News data loaded');
                resolve();
            }, 1200);
        });
    }

    static async syncData() {
        NotificationManager.show('Syncing data...');
        
        try {
            await this.loadData();
            NotificationManager.success('Data synced successfully');
        } catch (error) {
            NotificationManager.error('Sync failed. Please check your connection.');
        }
    }
}