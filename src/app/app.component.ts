import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { ThemeService } from './services/theme.service';

@Component({
    selector: '[root]',
    standalone: true,
    imports: [RouterOutlet, CoreModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'TechGardenCode';

    constructor(private readonly themeService: ThemeService) {
        this.themeService.configureTheme();
    }
}
