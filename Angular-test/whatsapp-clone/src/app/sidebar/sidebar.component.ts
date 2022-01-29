import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  conversations = [
    {name:"Sapek Maths",time:"16:44",latestmessage:"Boleh ni cip",group:false ,image:"../../assets/images/sapek.jfif"},
    {name:"Ongoing family",time:"16:44",latestmessage:"Humaira: siapa tu",group:true ,image:"../../assets/images/family.jfif"},
    {name:"Mekna nenek",time:"15:30",latestmessage:"Okeyh",group:false,image:"../../assets/images/humaira.jfif"},
    {name:"Farid Stats",time:"00:17",latestmessage:"kenapa bobong nak bunuh zoro",group:false ,image:"../../assets/images/farid.jfif"},
    {name:"Razin Actuary",time:"23:17",latestmessage:"Mano",group:false ,image:"../../assets/images/razin.jfif"},
    {name:"Aidi  Maths",time:"09:33",latestmessage:"Balik dlm sejam camtu",group:false ,image:"../../assets/images/aidi.jfif"},
    {name:"GUNUNG BALING",time:"07:29",latestmessage:"Farid: https://vt.tiktok.com/ZSebyr3hJ/",group:true ,image:"../../assets/images/baling.jfif"},
    {name:"Apis 10 Iq",time:"yesterday",latestmessage:"Gg,dh la makin sakit",group:false ,image:"../../assets/images/apis.jfif"},
    {name:"Chef amar tabarakallah",time:"Wednesday",latestmessage:"Gg",group:true},
    {name:"Projek M+",time:"Monday",latestmessage:"Wow",group:true ,image:"../../assets/images/m+.jfif"},
    {name:"Humaira",time:"Sunday",latestmessage:"Umi suruh gi kedai",group:false ,image:"../../assets/images/humaira.jfif"},
    {name:"Ammar G3",time:"28/12/2021",latestmessage:"Cip, sapek scam aku doh",group:false ,image:"../../assets/images/ammar.jfif"},
    {name:"Nizar G3",time:"22/01/2021",latestmessage:"Bursa sekarang tak best",group:false ,image:"../../assets/images/nizar.jfif"},
    {name:"Saif Actuary",time:"17/12/2021",latestmessage:"Takjak",group:false ,image:"../../assets/images/saif.jfif"},
    {name:"Qiemy",time:"17/12/2021",latestmessage:"E2R2",group:false ,image:"../../assets/images/qiemy.jfif"},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
