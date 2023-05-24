
import { Component,ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  serverElements = [{type: 'server',name: 'Testserver', content: 'Just a test!'},{type: 'server',name: 'sex',content: 'more of it'}];

    onServerAdded(serverData: {serverName: string, serverContent:string}) {
        this.serverElements.push({
          type: 'server',
          name: serverData.serverName,
          content: serverData.serverContent
        });
      }

      onBlueprintAdded(blueprintData: {serverName: string, serverContent:string}) {
       console.log('blue 2');
        this.serverElements.push({
          type: 'blueprint',
          name: blueprintData.serverName,
          content: blueprintData.serverContent
        });
      }

}
