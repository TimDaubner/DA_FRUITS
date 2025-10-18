import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './singlefruit.html',
  styleUrl: './singlefruit.scss'
})
export class Singlefruit {
  counter=[1,2,3,4,5];

  @Input()fruit =   {
      name: "Apfel",
      img:"apple.png",
      description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
      genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
      stars: 3.3,
      reviews:[{name:"",text:""}],
    };
  // @Input("testNumber")fruitNumber = 0;

inputData = "";

  @Output()fruitname = new EventEmitter<string>();

  sendInputData(){
    this.fruitname.emit(this.inputData);
    this.inputData = "";
    // this.inputData = "Moin";    
  }
}
