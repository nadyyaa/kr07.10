import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: string[] = ['Monument of the hero battle for the Moscow, the general Efremov was opened in the capital.', 'The owl from Red Book was rescued in Moscow.', 'Brown fox, Persey, appeared in the Saint-Petersburg"s zoo.', 'If you want to cool down hot tea or coffee faster, you should put in your cup 3-4 teaspoons or 1-2 tablepoons.', 'From November 28, 2022 to January 6, 2023, the Christmas fast begins.']
  constructor() { }

  ngOnInit(): void {}

}
