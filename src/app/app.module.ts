import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {TempConverterPipe} from './temp-convertor.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CustomPipePipe } from './custom-pipe.pipe';
import { ReversePipe } from './reverse.pipe';
import { TablePipe } from './table.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TempConverterPipe,
    CustomPipePipe,
    ReversePipe,
    TablePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
