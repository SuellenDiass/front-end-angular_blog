import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
// após criar estrutura do blog,criar propriedade para cada coisa que ficará dinâmico
// input permite que as propriedades sejam chamadas no arquivo home.component.html

  @Input()
  photoCover: string = " "
  @Input()
  cardTitle: string = " "
// Inserir um propriedade id imputável , logo em seguida inserir o id no arquivo home.component.html
  @Input()
  id: string = "0"
  @Input()
  video: string = ""


  constructor() { }

  ngOnInit(): void {
  }

}
