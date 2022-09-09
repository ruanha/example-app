import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ItemEventData } from "@nativescript/core";

import { FlickService } from "~/app/core/services/flick.service";

@Component({
  moduleId: module.id,
  selector: "ns-home",
  templateUrl: "home.component.html",
})
export class HomeComponent {
  flicks = this.flickService.getFlicks();

  constructor(
    private flickService: FlickService,
    private routerExtensions: RouterExtensions
  ) {}

  onFlickTap(args: ItemEventData): void {
    this.routerExtensions.navigate(["details", this.flicks[args.index].id]);
  }
}
