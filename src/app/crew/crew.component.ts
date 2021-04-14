import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  memberBeingEdited: object = null;

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    this.crew.push({name: memberName, firstMission: isFirst});
  } 

  remove(member: object) {
    this.crew.splice(this.crew.indexOf(member), 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(memberName: string, isFirst: boolean) {
    this.memberBeingEdited["name"] = memberName;
    this.memberBeingEdited["firstMission"] = isFirst;
    this.memberBeingEdited = null;
  }
}
