import { NgModule } from "@angular/core";
import { CorePage } from "./page/core.page";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[CorePage],
    imports:[BrowserModule],
    bootstrap:[CorePage],
})
export class CoreModule {}
