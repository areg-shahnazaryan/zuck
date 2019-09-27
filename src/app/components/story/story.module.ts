import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoryRoutingModule} from '@app/components/story/story-routing.module';
import {StoryComponent} from '@app/components/story/story.component';


@NgModule({
  declarations: [StoryComponent],
  imports: [
    CommonModule,
    StoryRoutingModule,
  ]
})
export class StoryModule {
}
