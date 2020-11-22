import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProgrammingComponent implements OnInit {
  languages = [
    {
      name: 'Java',
      level: 'Expert',
      icon:
        'https://seeklogo.com/images/J/java-logo-7F8B35BAB3-seeklogo.com.png',
      progress: 70,
    },
    {
      name: 'Typescript',
      level: 'Expert',
      icon:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
      progress: 70,
    },
    {
      name: 'Angular',
      level: 'Expert',
      icon:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
      progress: 70,
    },
    {
      name: 'HTML',
      level: 'Expert',
      icon: 'https://icon-library.com/images/html5-icon/html5-icon-13.jpg',
      progress: 80,
    },
    {
      name: 'CSS3',
      level: 'Expert',
      icon:
        'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png',
      progress: 80,
    },
    {
      name: 'PHP',
      level: 'Proficient',
      icon: 'https://www.php.net//images/logos/new-php-logo.svg',
      progress: 50,
    },
    {
      name: 'C++',
      level: 'Proficient',
      icon:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
      progress: 40,
    },
    {
      name: 'Python',
      level: 'Expert',
      icon:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png',
      progress: 40,
    },
    {
      name: 'NodeJS',
      level: 'Proficient',
      icon:
        'https://www.clipartmax.com/png/middle/89-894960_js-discord-bot-logo-node-js-and-react-js.png',
      progress: 60,
    },
    {
      name: 'ExpressJS',
      level: 'Proficient',
      icon:
        'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png',
      progress: 60,
    },
    {
      name: 'REST',
      level: 'Proficient',
      icon: 'https://restfulapi.net/wp-content/uploads/rest.png',
      progress: 60,
    },
  ];
  dataBase = [
    {
      icon: 'https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png',
      level: 'Proficient',
      name: 'MongoDB',
    },
    {
      icon:
        'https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s1600/image00.png',
      level: 'Proficient',
      name: 'Firebase',
    },
    {
      icon: 'https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg',
      level: 'Proficient',
      name: 'MySQL',
    },
  ];
  stacks = [
    {
      name: 'Mean Stack',
      icon: 'https://miro.medium.com/max/640/1*kkXbE9GlS73U7x1iXHP_vQ.png',
      level: 'Proficient',
    },
    {
      name: 'Object Oriented Programming',
      icon:
        'https://i.pinimg.com/originals/45/03/98/450398f4ff10d0253602b6a6d99419ed.png',
      level: 'Proficient',
    },
    {
      name: 'Full Stack',
      icon:
        'https://www.jobboardfinder.com/upload/7480cf6f7ec084752d8e78ca4f021bd37c1b30eb/logo_jobboard.png',
      level: 'Proficient',
    },
    {
      name: 'Data Normalization',
      icon:
        'https://pngimage.net/wp-content/uploads/2018/05/accesibilidad-png-1.png',
      level: 'Proficient',
    },
    {
      name: 'Model View Controller',
      icon: 'https://i.stack.imgur.com/qV32f.png',
      level: 'Proficient',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
