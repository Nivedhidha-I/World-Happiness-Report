import { Component, OnInit } from '@angular/core';
declare var tableau: any;
@Component({
  selector: 'app-q0',
  templateUrl: './q0.component.html',
  styleUrls: ['./q0.component.css']
})
export class Q0Component implements OnInit {
  tableauViz: any;
  constructor() { }

  ngOnInit() {
    var placeholderDiv = document.getElementById('tableauViz');
    var url = 'https://public.tableau.com/views/WorldsSmile/WorldsSmile?:language=en-US&:display_count=n&:origin=viz_share_link';
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
