import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css'],
})
export class TrainerComponent implements OnInit {
  fil: any;
  cat: any;

  gradovi = [
    { ime: 'Beograd' },
    { ime: 'Novi Sad' },
    { ime: 'Nis' },
    { ime: 'Kragujevac' },
    { ime: 'Pozarevac' },
    { ime: 'Vranje' },
    { ime: 'Cacak' },
    { ime: 'Uzice' },
    { ime: 'Jagodina' },
    { ime: 'Lazarevac' },
    { ime: 'Sabac' },
    { ime: 'Leskovac' },
    { ime: 'Novi Pazar' },
    { ime: 'Obrenovac' },
    { ime: 'Subotica' },
    { ime: 'Kraljevo' },
    { ime: 'Pirot' },
    { ime: 'Pancevo' },
    { ime: 'Smederevo' },
    { ime: 'Cicevac' },
    { ime: 'Krusevac' },
    { ime: 'Sombor' },
    { ime: 'Bor' },
    { ime: 'Prokuplje' },
    { ime: 'Loznica' },
    { ime: 'Sremska Mitrovica' },
    { ime: 'Novi Knezevac' },
    { ime: 'Loznica' },
    { ime: 'Kikinda' },
  ];

  kategorija = [
    { kat: 'Bodybuilding' },
    { kat: 'Powerlifting' },
    { kat: 'Crossfit' },
    { kat: 'Athlete Training' },
    { kat: 'Fat loss' },
    { kat: 'Yoga' },
    { kat: 'Cardio' },
  ];

  treneri = [
    {
      image: '../../../assets/images/baf.webp',
      ime: 'Edin Delibasic',
      opis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepetotam omnis nihil, veritatis quisquam sed aspernatur architecto accusantium aliquam, delectus ducimus.',
      grad: 'Beograd',
      tip: 'Bodybuilding',
    },
    {
      image: '../../../assets/images/beq.webp',
      ime: 'Mirza Basic',
      opis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepetotam omnis nihil, veritatis quisquam sed aspernatur architecto accusantium aliquam, delectus ducimus.',
      grad: 'Leskovac',
      tip: 'Powerlifting',
    },
    {
      image: '../../../assets/images/beq.webp',
      ime: 'Mirza Basic',
      opis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepetotam omnis nihil, veritatis quisquam sed aspernatur architecto accusantium aliquam, delectus ducimus.',
      grad: 'Leskovac',
      tip: 'Powerlifting',
    },
    {
      image: '../../../assets/images/beq.webp',
      ime: 'Mirza Basic',
      opis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepetotam omnis nihil, veritatis quisquam sed aspernatur architecto accusantium aliquam, delectus ducimus.',
      grad: 'Leskovac',
      tip: 'Powerlifting',
    },

    {
      image: '../../../assets/images/t2.jfif',
      ime: 'Lepomir Bakic',
      opis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est saepetotam omnis nihil, veritatis quisquam sed aspernatur architecto accusantium aliquam, delectus ducimus.',
      grad: 'Loznica',
      tip: 'Crossfit',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
