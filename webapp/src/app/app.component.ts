import { Component } from '@angular/core';
import { RealTime } from './shared/sdk/services';
import { Project, FireLoopRef } from './shared/sdk/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private ProjectReference: FireLoopRef<Project>;
  private project: Project = new Project({ name: 'Hello FireLoop Project' });

  constructor(private realTime: RealTime) {
    this.realTime
      .onReady()
      .subscribe(() => {
        this.ProjectReference = this.realTime.FireLoop.ref<Project>(Project);
        this.ProjectReference.create(this.project).subscribe((instance: Project) => console.log(instance));
      }

      );
  }
}
