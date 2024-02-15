import { NgModule } from "@angular/core";
import { CorePage } from "./page/core.page";
import { BrowserModule } from "@angular/platform-browser";
import { CardPokemonComponent } from "./components/card-pokemon/card-pokemon.component";

@NgModule({
    declarations:[
        CorePage,
        CardPokemonComponent,
    ],
    imports:[
        BrowserModule
    ],
    bootstrap:[
        CorePage
    ],
})
export class CoreModule {}
