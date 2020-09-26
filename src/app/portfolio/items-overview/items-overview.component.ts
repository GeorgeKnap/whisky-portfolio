import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PortfolioItem } from '../../models/item.model';

@Component({
  selector: 'gk-items-overview',
  templateUrl: './items-overview.component.html',
  styleUrls: ['./items-overview.component.scss']
})
export class ItemsOverviewComponent implements OnInit {

  items$: Observable<Array<PortfolioItem>>;

  constructor(
    private firestore: AngularFirestore
  ) { }



  ngOnInit(): void {
    this.items$ = this.firestore.collection<PortfolioItem>('portfolio').valueChanges();
  }

}
