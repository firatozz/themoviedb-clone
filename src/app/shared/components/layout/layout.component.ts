import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="wrapper">
      <!-- top navbar-->
      <app-header
        style="width: 100%; left: 0"
        class="topnavbar-wrapper"
      ></app-header>
      <!-- body section-->

      <body>
        <main>
          <router-outlet></router-outlet>
        </main>
      </body>
      <!-- Page footer-->
      <footer>
        <app-footer></app-footer>
      </footer>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
