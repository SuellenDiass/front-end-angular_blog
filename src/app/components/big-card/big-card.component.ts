import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
// Após criar estrutura do blog,criar propriedade para cada coisa que ficará dinâmico
// Input permite que as propriedades sejam chamadas no arquivo home.component.html

  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""
// Inserir um propriedade id imputável , logo em seguida inserir o id no arquivo home.component.html
  @Input()
  id: string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
