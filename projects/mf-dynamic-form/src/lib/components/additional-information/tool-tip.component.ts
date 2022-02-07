import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.css'],
})
export class ToolTipComponent implements OnInit {

  @Input()
  helpText: string;

  innerHTML: string;


  ngOnInit(): void {
    this.convertHTML(this.helpText);
  }

  convertHTML(helpText: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(helpText, 'text/html');
    this.innerHTML = doc.body.innerHTML;
  }

}
