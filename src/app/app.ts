import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App implements OnInit {
  constructor(private title: Title, private meta: Meta) {}
  ngOnInit(): void {
    this.title.setTitle('C&C Artesanal Food - Pizzas Artesanais em Portugal');
    this.meta.addTags([
      {
        name: 'description', content: 'Monte sua pizza artesanal escolhendo os ingredientes frescos disponíveis. A C&C ArtFood prepara e entrega na região do Porto com rapidez e qualidade!'},
      { name: 'author', content: 'C&C ArtFood' },
      { name: 'keywords', content: 'pizza artesanal, CEC Artfood, monte sua pizza, escolha ingredientes, pizzas em portugal, pizza no porto, ingredientes frescos, entrega de pizza, comida artesanal, delivery de pizza, pizza vegan' },
      { property: 'og:title', content: 'C&C Artesanal Food - Pizzas Artesanais' },
      { property: 'og:description', content: 'Monte sua pizza artesanal escolhendo os ingredientes frescos disponíveis. A C&C ArtFood prepara e entrega na região do Porto com rapidez e qualidade!' },
      { property: 'og:image', content: 'https://pizzartesanal.pt/assets/pizza.jpg' },
      { property: 'og:url', content: 'https://pizzartesanal.pt' },
      ]);
  }
}

      