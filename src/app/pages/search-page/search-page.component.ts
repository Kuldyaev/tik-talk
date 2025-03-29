import { Component, inject } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from '../../common-ui/profile-card/profile-card.component';
import { ProfileService } from '../../data/services/profile.service';
import { Profile } from '../../data/interfaces/profile.interface';

@Component({
  selector: 'app-search-page',
  imports: [ProfileCardComponent /*, CommonModule*/],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {
  profileService = inject(ProfileService);
  profiles: Profile[] = [];
  title = 'tik-talk';

  constructor() {
    this.profileService
      .getTestAccounts()
      .subscribe((val: Profile[]) => (this.profiles = val));
  }
}
