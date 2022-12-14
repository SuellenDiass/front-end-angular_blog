import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // Após criar estrutura da nova pagina do blog,criar propriedade para cada coisa que ficará dinâmico
// Input permite que as propriedades sejam chamadas no arquivo content.component.html
// Para finalizar No arquivo content.component.ts, vamos deixar de pegar os conteúdos e retorna-los no datafake
photoCover: string = ""
contentTitle: string =""
contentDescription: string = ""
video:string =""
private id: string | null = "0"


  constructor(
    private route:ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id=(value.get("id"))
    )
    this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article =>article.id== id) [0]
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
    this.video = result.video
    console.log(this.video)


  }

}
