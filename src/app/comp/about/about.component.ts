import { Component, OnInit } from '@angular/core';
//import { MatTabChangeEvent } from '@angular/material/MatTabChangeEvent';



interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];





@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  countries = COUNTRIES;

  selectedIndex: number | null=2; // The index of the active tab.  
  selectedIndex1: number | null=1; 

  VerTabs:boolean=false;
  

  Tab(n){ 
    this.selectedIndex1=n;
    this.VerTabs=true;
   
  }
  NoTabs(){ 
    this.VerTabs=false;
  }

  onTabChanged(event) 
  {
      console.log(event.index);  // indice del Tab       
  }



  constructor() { }

  ngOnInit(): void {
  }

}
