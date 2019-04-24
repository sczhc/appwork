import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-chips-example', // tslint:disable-line
  template: `
<div class="card mb-4">
  <h6 class="card-header">
    ngx-chips
  </h6>
  <div class="card-body demo-vertical-spacing-sm">
    <tag-input
      [(ngModel)]="items"
      [editable]="!disabled"
      [disable]="disabled">
      <tag-input-dropdown
        [showDropdownIfEmpty]="true"
        [autocompleteItems]="autocompleteItems">
      </tag-input-dropdown>
    </tag-input>

    <div>
      <button type="button" class="btn btn-default" (click)="disabled = !disabled">
        {{ disabled ? 'Enable' : 'Disable' }}
      </button>
    </div>

    <!-- Variations -->

    <tag-input class="ngx-chips-primary" [(ngModel)]="items" [editable]="!disabled" [disable]="disabled"></tag-input>
    <tag-input class="ngx-chips-secondary" [(ngModel)]="items" [editable]="!disabled" [disable]="disabled"></tag-input>
    <tag-input class="ngx-chips-success" [(ngModel)]="items" [editable]="!disabled" [disable]="disabled"></tag-input>
    <tag-input class="ngx-chips-info" [(ngModel)]="items" [editable]="!disabled" [disable]="disabled"></tag-input>
    <tag-input class="ngx-chips-warning" [(ngModel)]="items" [editable]="!disabled" [disable]="disabled"></tag-input>
    <tag-input class="ngx-chips-danger" [(ngModel)]="items" [editable]="!disabled" [disable]="disabled"></tag-input>
    <tag-input class="ngx-chips-dark" [(ngModel)]="items" [editable]="!disabled" [disable]="disabled"></tag-input>

    <!-- Validation states -->

    <tag-input class="is-valid" [(ngModel)]="items" [editable]="!disabled" [disable]="disabled"></tag-input>
    <tag-input class="is-invalid" [(ngModel)]="items" [editable]="!disabled" [disable]="disabled"></tag-input>
  </div>
</div>
  `,
  styleUrls: [
    '../../../vendor/libs/ngx-chips/ngx-chips.scss',
    '../../../vendor/libs/ng2-dropdown-menu/ng2-dropdown-menu.scss'
  ],
  // Have to use `ViewEncapsulation.None` to restyle ng2-dropdown-menu
  encapsulation: ViewEncapsulation.None
})
export class NgxChipsExampleComponent {
  items = ['Spider-Man', 'Superman', 'Iron Man'];
  autocompleteItems = [
    'Spider-Man', 'Superman', 'Iron Man', 'Wolverine', 'Captain America', 'Ant-Man',
    'Wonder Woman', 'Hulk', 'Flash', 'Green Arrow', 'Silver Surfer', 'Thor', 'Batman',
    'Deadpool', 'The Green Lantern', 'Daredevil', 'Black Widow', 'Hawkeye', 'Catwoman',
  ];
  disabled = false;
}
