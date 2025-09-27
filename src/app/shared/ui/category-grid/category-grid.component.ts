import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReviewCardComponent, ReviewCardData } from '../review-card/review-card.component';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { ButtonSecondaryComponent } from '../button-secondary/button-secondary.component';

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrl: './category-grid.component.scss',
  standalone: true,
  imports: [ReviewCardComponent, ButtonPrimaryComponent, ButtonSecondaryComponent]
})
export class CategoryGridComponent {
  @Input() items: ReviewCardData[] = [];
  @Input() showLoadMore = false;
  @Input() emptyStateTitle = 'No items found';
  @Input() emptyStateDescription = 'Try adjusting your filters or search terms.';
  @Input() loadMoreText = 'Load more';

  @Output() loadMore = new EventEmitter<void>();
  @Output() clearFilters = new EventEmitter<void>();

  onLoadMore() {
    this.loadMore.emit();
  }

  onClearFilters() {
    this.clearFilters.emit();
  }
}
