import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Distillery } from '../../models/distillery.model';
import { PortfolioItem } from '../../models/item.model';

@Component({
  selector: 'gk-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() item: PortfolioItem;
  photo$: Observable<string | null>;
  distilleryIcon$: Observable<string | null>;

  constructor(
    private storage: AngularFireStorage,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    if (this.item.photo) {
      this.photo$ = this.storage.ref(this.item.photo).getDownloadURL();
      this.distilleryIcon$ = this.firestore.collection<Distillery>('distilleries', ref => ref.where('name', '==', this.item.distillery))
      .valueChanges().pipe(
        switchMap(distillery => {
          if (distillery.length) {
            return this.storage.ref(`icons/${distillery[0].icon}`).getDownloadURL();
          } else {
            return of(null);
          }
        }),
        map(url => {
          if (url) {
            return `url(${url})`;
          }
        })
      );
    }
  }

}
