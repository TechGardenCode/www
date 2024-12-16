import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    themeOverride: 'dark' | 'light' | null = null;

    constructor() {
        if (this.themeOverride) {
            this.setTheme(this.themeOverride);
        }
    }

    getTheme() {
        return localStorage['theme'] || 'light';
    }

    toggleTheme() {
        if (localStorage['theme'] === 'dark') {
            this.setTheme('light');
        } else {
            this.setTheme('dark');
        }
    }

    setTheme(theme: 'dark' | 'light') {
        localStorage['theme'] = theme;
        this.configureTheme();
    }

    configureTheme() {
        if (
            localStorage['theme'] === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
}
