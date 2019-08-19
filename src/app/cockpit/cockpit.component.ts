import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // @ts-ignore
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  // newServerName = '';
  // newServerContent = '';

  constructor() {
  }

  ngOnInit() {
  }
  // onAddServer(serverInput) {
  //   console.log(serverInput.value);
  //   this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  // }
  onAddServer(serverInput: HTMLInputElement) {
    // console.log(this.serverContentInput);
    this.serverCreated.emit({serverName: serverInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  // }
  onAddBlueprint(serverInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: serverInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

}
