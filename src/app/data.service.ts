import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

constructor() { }

cars=["ford","evo"];

method(){
    return "from service"
}

}