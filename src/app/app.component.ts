import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyShop.';
  userInfo = "User"

  greeting = {text: "Hello world!", show:false}
  show(){
    console.log(this.greeting.show);
    this.greeting.show = !this.greeting.show;
  }

  list = false;
  changeView(){
    this.list = !this.list
  }

  menu = [{label:"Men", active:false},
    {label:"Women", active:false},
    {label:"Children", active:false},
    {label:"Contacts", active:false}];

  data = [{type:1,
    heading:'Item 1',
    text:'LoremIpsum',
    img:'https://freepngimg.com/thumb/clothes/2-2-clothes-png-clipart.png',
    rating:5,
    show:true
  },{type:1,
    heading:'Item 2',
    text:'LoremIpsum',
    img:'https://freepngimg.com/thumb/clothes/2-2-clothes-png-clipart.png',
    rating:5,
    show:true
  },{type:1,
    heading:'Item 3',
    text:'LoremIpsum',
    img:'https://freepngimg.com/thumb/clothes/2-2-clothes-png-clipart.png',
    rating:5,
    show:true
  },{type:2,
    heading:'Item 4',
    text:'LoremIpsum',
    img:'https://freepngimg.com/thumb/clothes/2-2-clothes-png-clipart.png',
    rating:5,
    show:false
  },{type:2,
    heading:'Item 5',
    text:'LoremIpsum',
    img:'https://freepngimg.com/thumb/clothes/2-2-clothes-png-clipart.png',
    rating:5,
    show:true
  },{type:2,
    heading:'Item 6',
    text:'LoremIpsum',
    img:'https://freepngimg.com/thumb/clothes/2-2-clothes-png-clipart.png',
    rating:5,
    show:true
  }]

}
