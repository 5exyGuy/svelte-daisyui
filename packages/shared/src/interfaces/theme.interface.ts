export interface Theme {
    name: string;
    'font-family': string;
    colors: {
        // Brand Colors
        primary: string;
        'primary-content': string;
        'primary-focus': string;
        secondary: string;
        'secondary-content': string;
        'secondary-focus': string;
        accent: string;
        'accent-content': string;
        'accent-focus': string;

        // Functional Colors
        success: string;
        'success-content': string;
        'success-focus': string;
        info: string;
        'info-content': string;
        'info-focus': string;
        warning: string;
        'warning-content': string;
        'warning-focus': string;
        error: string;
        'error-content': string;
        'error-focus': string;

        // Base Colors
        'base-100': string;
        'base-200': string;
        'base-300': string;
        'base-content': string;
        'base-focus': string;

        // Neutral
        neutral: string;
        'neutral-content': string;
        'neutral-focus': string;
    };
    variables: {
        box: {
            'border-radius': string;
        };
        button: {
            'border-radius': string;
            'border-width': string;
            'text-transform': 'lowercase' | 'uppercase';
            'focus-scale': string;
            'animation-duration': string;
        };
        input: {
            'animation-duration': string;
        };
        badge: {
            'border-radius': string;
        };
        tab: {
            radius: string;
            border: string;
        };
    };
}
