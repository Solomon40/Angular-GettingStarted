import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges
{
    @Input() rating: number;
    cropWidth: number = 75;
    @Output() onRatingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5
    }

    OnClick(): void{
      this.onRatingClicked.emit(`the rating ${this.rating} was clicked!`);
    }
}
