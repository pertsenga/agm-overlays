import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { AgmOverlay } from "./AgmOverlay.component"
import { GoogleMapsAPIWrapper } from "@laurentgoudet/agm-core";

@NgModule({
  imports:[
    CommonModule
  ],
  declarations: [ AgmOverlay ],
  exports : [ AgmOverlay ],
  providers: [ GoogleMapsAPIWrapper ],
}) export class AgmOverlays {}
