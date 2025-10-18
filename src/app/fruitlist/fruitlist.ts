import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Singlefruit } from './singlefruit/singlefruit';
import { Fruitlistdata } from '../fruitlistdata';
@Component({
  selector: 'app-fruitlist',
  imports: [CommonModule, Singlefruit],
  templateUrl: './fruitlist.html',
  styleUrl: './fruitlist.scss'
})
export class Fruitlist {
  fontColorR = 'red';
  fontColorG = 'green';
  fontColorY = 'yellow';

  fruitlistdata = inject(Fruitlistdata);

  addCommentNotExported(comment: string, index: number) {
    this.fruitlistdata.fruitlist[index].reviews.push(
      {
        name: "Tim",
        text: comment
      });
    console.log(comment, index);
  }

  numLog(index: number) {
    console.log(index);
  }

  nameLog(name: string) {
    console.log(name);
  }


}
