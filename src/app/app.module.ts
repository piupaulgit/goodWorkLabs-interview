import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormService } from "./services/form.service";
import { FormControlComponent } from "./form-control/form-control.component";

@NgModule({
  declarations: [AppComponent, FormControlComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule {}
