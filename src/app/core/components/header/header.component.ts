import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
    selector: '[header]',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    theme!: 'light' | 'dark';

    constructor(private readonly themeService: ThemeService) {
        this.theme = this.themeService.getTheme();
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }
}
