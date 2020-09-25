import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { PortfolioItem } from '../item/item.model';

@Component({
  selector: 'gk-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: PortfolioItem;
  photo$: Observable<string | null>;

  constructor(
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    if (this.item.photo) {
      this.photo$ = this.storage.ref(this.item.photo).getDownloadURL();
    }
  }

}
