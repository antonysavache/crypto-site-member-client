import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

export interface FilterChip {
  name: string;
  value: string;
  active: boolean;
}

export interface SortOption {
  name: string;
  value: string;
  active: boolean;
}

export interface CategoryControlsConfig {
  filterChips: FilterChip[];
  sortOptions: SortOption[];
  searchPlaceholder: string;
  showSearch?: boolean;
  showSort?: boolean;
}

@Component({
  selector: 'app-category-controls',
  templateUrl: './category-controls.component.html',
  styleUrl: './category-controls.component.scss',
  standalone: true,
  imports: [FormsModule, TitleCasePipe]
})
export class CategoryControlsComponent {
  @Input() config!: CategoryControlsConfig;
  @Input() searchQuery = '';
  @Input() currentFilter = 'all';
  @Input() currentSort = 'newest';

  @Output() filterChange = new EventEmitter<string>();
  @Output() searchChange = new EventEmitter<string>();
  @Output() sortChange = new EventEmitter<string>();
  @Output() clearFilters = new EventEmitter<void>();

  onFilterChange(filter: string) {
    this.filterChange.emit(filter);
  }

  onSearchInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchChange.emit(target.value);
  }

  onSortChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.sortChange.emit(target.value);
  }

  onClearFilters() {
    this.clearFilters.emit();
  }

  get hasActiveFilters(): boolean {
    return this.currentFilter !== 'all' || this.searchQuery.length > 0;
  }
}
