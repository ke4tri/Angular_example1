import { Component, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class CockpitComponent {
    @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
     newServerName = '';
     newServerContent = '';
    @ViewChild('serverContentInput', {static:true}) serverContentInput: ElementRef;
    @ViewChild('serverNameInput', {static:true}) serverNameInput: ElementRef;
    constructor(){
    }

    onAddServer(nameInput: HTMLInputElement) {
     // console.log(nameInput.value);
        this.serverCreated.emit({
          serverName: nameInput.value,
          serverContent: this.serverContentInput.nativeElement.value
        });
      }

      onAddBlueprint() {
        this.blueprintCreated.emit({
          serverName: this.serverNameInput.nativeElement.value,
          serverContent: this.serverContentInput.nativeElement.value
        });
      }

}
