import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { GeonamesService } from '../geonames.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() weatherRequest = new EventEmitter<{ city: string}>();
  @Output() cancelRequest = new EventEmitter<void>();

  
  city: string = 'London';
  cities: any[] = [];
  
  

  onSubmit(): void {
    this.weatherRequest.emit({ city: this.city});
  }
  onCancel(): void {
    this.cancelRequest.emit();
  }
  constructor(private geonamesService: GeonamesService) { }

  ngOnInit():void {
    this.geonamesService.getCities().subscribe(data => {
      this.cities = data.geonames;
    });
  }

  

}
