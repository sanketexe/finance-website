class NotificationManager {
    static show(message, type = 'info', duration = 3000) {
        const notification = document.getElementById('notification');
        
        // Set message and type
        notification.textContent = message;
        notification.className = `notification ${type}`;
        
        // Show notification
        notification.classList.add('show');
        
        // Auto hide after duration
        setTimeout(() => {
            this.hide();
        }, duration);
    }

    static hide() {
        const notification = document.getElementById('notification');
        notification.classList.remove('show');
    }

    static success(message, duration = 3000) {
        this.show(message, 'success', duration);
    }

    static error(message, duration = 5000) {
        this.show(message, 'error', duration);
    }

    static warning(message, duration = 4000) {
        this.show(message, 'warning', duration);
    }
}