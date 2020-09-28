import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'aa-search-lib',
  template: `
    <div class="card">
      <h5 class="card-header">Movie Search</h5>
      <div class="card-body">
        <form #searchForm="ngForm">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              minlength="2"
              maxlength="10"
              pattern="[A-Za-z ]+"
              required
              name="search"
              [(ngModel)]="searchTerm"
              #searchField="ngModel"
            />

            <div class="input-group-append">
              <button
                [disabled]="!searchField.valid"
                class="btn btn-outline-primary"
                type="button"
                (click)="onSearch()"
                aria-label="Search"
              >
                Search
              </button>
            </div>
          </div>
          <div
            *ngIf="searchField.dirty && searchField.invalid"
            role="error-message"
          >
            <div
              *ngIf="searchField.errors.required"
              class="invalid-feedback error-msg"
            >
              {{ errorMessages.get('required') }}
            </div>
            <div
              *ngIf="searchField.errors.pattern"
              class="invalid-feedback error-msg"
            >
              {{ errorMessages.get('pattern') }}
            </div>
            <div
              *ngIf="searchField.errors.minlength"
              class="invalid-feedback error-msg"
            >
              {{ errorMessages.get('minlength') }}
            </div>
            <div
              *ngIf="searchField.errors.maxlength"
              class="invalid-feedback error-msg"
            >
              {{ errorMessages.get('maxlength') }}
            </div>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [
    `
      .error-msg {
        display: none;
      }
      .error-msg:first-child {
        display: block;
      }
      .ng-invalid .ng-touched {
        border: 2px solid #a94442; /* red */
      }
    `,
  ],
})
export class AaSearchLibComponent {
  @Input() errorMessages: Map<string, string>;
  @Output() readonly search = new EventEmitter<string>();
  searchTerm: string;
  patternRegex = `[a-zA-Z\s]`;

  constructor() {}

  onSearch(): void {
    this.search.emit(this.searchTerm);
  }
}
