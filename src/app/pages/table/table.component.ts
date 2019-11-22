import { Component, OnInit } from '@angular/core';
import { ServerinfoService } from '../../services/serverinfo.service';
import { interval, Subscription } from 'rxjs';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{

    contents: any;
    subscription: Subscription;

    constructor(private serverinfo: ServerinfoService){
        const source = interval(1000);
        this.subscription = source.subscribe(val => this.updateInfo());
    }
    
    updateInfo(){
        this.contents = this.serverinfo.jsonContent.servers
    }

    ngOnInit(){
        
    }
}
