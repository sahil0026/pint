import {Component, OnInit, Input} from '@angular/core';

import {BasicTablesService} from '../../basicTables.service';

@Component({
  selector: 'hover-table',
  templateUrl: './hoverTable.html'
})
export class HoverTable {
	@Input()
	refreshtime: number = 0;

	tableData:Array<any>;
	metricsTableData:Array<any>;

	constructor(private _basicTablesService: BasicTablesService) {
		// this.tableData = _basicTablesService.tableData;
		this.tableData = _basicTablesService.peopleData;
	}

	ngOnInit() {
		var i:number;
		this.metricsTableData = [];
		for(i = 0;i< 5; i++) {
		 var index = Math.floor(Math.random() * this.tableData.length);
		 this.metricsTableData.push(this.tableData[index]);
	 	}

		setInterval(()=> {
			var i:number;
			this.metricsTableData = [];
			for(i = 0;i< 5; i++) {
			 var index = Math.floor(Math.random() * this.tableData.length);
			 this.metricsTableData.push(this.tableData[index]);
		 	}
		},this.refreshtime);
	}
}
