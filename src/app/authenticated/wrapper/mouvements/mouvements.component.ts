import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  Mouvement,
  ItemsDocument,
  MouvementsDocument,
} from 'src/generated-types';

@Component({
  selector: 'app-mouvements',
  templateUrl: './mouvements.component.html',
  styleUrls: ['./mouvements.component.scss'],
})
export class MouvementsComponent implements OnInit {
  mouvements$!: Observable<Mouvement[]>;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .query({
        query: MouvementsDocument,
      })
      .subscribe((results: any) => {
        this.mouvements$ = results.data.mouvements;
      });
  }
}
