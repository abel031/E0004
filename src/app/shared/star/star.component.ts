import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  
// A este componente le pasamos la var "rating" desde el componente padre padre 
// Es decir, en la vista del padre ponemos: 
//    <app-star [rating]='valor' [id]='id'  (ratingClicked)='metodoPadre($event)'> </app-star>
// Indicando que se muestren tantas estrellas  

  @Input() id = 0;      // si el padre es un array id representa el elemento
  @Input() rating = 0;  // Cantidad de estrellas 3.2 -> 3 estrellas a visualizar
  starWidth = 0; 

  @Output() ratingClicked: EventEmitter<any> = new EventEmitter<any>();

  private snackBarDuration: number = 2000;
  ratingArr = [];
  private starCount=5;
  color="yellow";



  constructor(private snackBar: MatSnackBar) {
  }


  ngOnInit() {
   
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  ngOnChanges(): void {
    this.starWidth = Math.round(this.rating); 
  }

/*
  onClick(): void {
    
  }

  Una():boolean{ return this.starWidth>=1?true:false};
  Dos():boolean{ return this.starWidth>=2?true:false};
  Tres():boolean{ return this.starWidth>=3?true:false};
  Cuatro():boolean{ return this.starWidth>=4?true:false};
  Cinco():boolean{ return this.starWidth>=5?true:false};


*/


onClick(rating:number) {
  
  this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
    duration: this.snackBarDuration
  });  
  this.ratingClicked.emit(rating);
  return false;
}

// https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/
// return 'star_half'; també exist
showIcon(index:number) {
  if (this.rating >= index + 1) {
    return 'star';
  } else {
    return 'star_border';
  }
}


}

