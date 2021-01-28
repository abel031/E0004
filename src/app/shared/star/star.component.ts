import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

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

  ngOnChanges(): void {
    this.starWidth = Math.round(this.rating); 
  }

  onClick(): void {
    this.ratingClicked.emit({msg:'The rating ${this.rating} was clicked!',id: this.id});
  }

  Una():boolean{ return this.starWidth>=1?true:false};
  Dos():boolean{ return this.starWidth>=2?true:false};
  Tres():boolean{ return this.starWidth>=3?true:false};
  Cuatro():boolean{ return this.starWidth>=4?true:false};
  Cinco():boolean{ return this.starWidth>=5?true:false};

}

