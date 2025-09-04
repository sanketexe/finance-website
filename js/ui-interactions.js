class UIInteractions {
    static init() {
        this.setupCardInteractions();
        this.setupHoverEffects();
        this.setupMobileMenu();
    }

    static setupCardInteractions() {
        document.querySelectorAll('.dashboard-card').forEach(card => {
            card.addEventListener('click', () => {
                const cardType = card.getAttribute('data-card');
                this.handleCardClick(cardType);
            });
        });
    }

    static handleCardClick(cardType) {
        const messages = {
            'balance': 'Viewing detailed balance information',
            'income': 'Analyzing income trends',
            'expenses': 'Reviewing expense breakdown',
            'investments': 'Checking investment performance'
        };
        
        NotificationManager.show(messages[cardType]);
    }

    static setupHoverEffects() {
        // Add hover effects to interactive elements
        const interactiveElements = document.querySelectorAll('.cta-button, .button-secondary, .action-btn, .dashboard-card, .glass');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'translateY(-2px)';
                element.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.transform = 'translateY(0)';
                element.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            });
        });
    }

    static setupMobileMenu() {
        // This would be expanded when implementing responsive design
        if (Utils.isMobile()) {
            // Mobile-specific interactions
        }
    }

    static showModal(modalId) {
        // Generic modal show function
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
        }
    }

    static hideModal(modalId) {
        // Generic modal hide function
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
        }
    }
}

// Initialize UI interactions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    UIInteractions.init();
});