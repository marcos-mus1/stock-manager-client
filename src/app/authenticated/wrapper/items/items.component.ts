import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { Item, ItemsDocument, ItemsGQL } from 'src/generated-types';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  items$!: Observable<Item[]>;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .query({
        query: ItemsDocument,
      })
      .subscribe((results: any) => {
        this.items$ = results.data.items;
      });
  }
}
