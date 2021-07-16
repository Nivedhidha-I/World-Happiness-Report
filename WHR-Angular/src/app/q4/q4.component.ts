import { Component, OnInit } from '@angular/core';
declare var tableau: any;
@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css']
})
export class Q4Component implements OnInit {
  tableauViz: any;
  constructor() { }

  ngOnInit(): void {
    var placeholderDiv = document.getElementById('tableauViz');
    var url = 'https://public.tableau.com/views/WorldsSmile/MoneyandHappiness?:language=en-US&:display_count=n&:origin=viz_share_link';
    var options = {
      hideTabs: true,
      width: '1200px',
      height: '730px',
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
      }
    };
    this.tableauViz = new tableau.Viz(placeholderDiv, url, options);   
  }

}
