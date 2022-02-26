import { Component, OnInit, HostListener } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Subscription } from "rxjs";
import { ApiService } from "./services/api.service";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  toggleHeader: boolean = false; // show or hide header according to condition.
  footerData = [];
  showHeaderButtons: boolean = false;
  showHeader: boolean = true;
  subscription: Subscription;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  // to closing the page this hostLister is called and makes the cartQuantity to 0.
  @HostListener("window:onbeforeunload", ["$event"])
  clearLocalStorage(): void {
    this.apiService.cartValue.next(0);
  }

  ngOnInit(): void {
    // subscribing to router events
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      } else {
        if (
          evt[`url`].includes(`/sign-up`) ||
          evt[`url`].includes(`/sign-in`) ||
          evt[`url`].includes(`/forget-password`)
        ) {
          this.showHeaderButtons = false;
        } 
        // else if (evt[`url`].includes(`/main`) || evt[`url`] === '/') {
        //   this.showHeader = false;
        // } 
        else {
          this.showHeaderButtons = true;
          this.showHeader = true;
        }
      }
      window.scrollTo(0, 0); // used to scroll to top in component loads
    });
  }

  // to unsubscribe the subscriptions
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
function elseif() {
  throw new Error("Function not implemented.");
}
