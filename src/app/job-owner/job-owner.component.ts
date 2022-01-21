import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-owner',
  templateUrl: './job-owner.component.html',
  styleUrls: ['./job-owner.component.scss']
})
export class JobOwnerComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document: any) {}

  public themeColors(): void {
    Array.from(this._document.querySelectorAll('.theme-color')).forEach((el: HTMLElement) => {
      const background = getStyle('background-color', el);
      const table = this._document.createElement('table');
      table.innerHTML = `
        <table class="w-100">
          <tr>
            <td class="text-muted">HEX:</td>
            <td class="font-weight-bold">${rgbToHex(background)}</td>
          </tr>
          <tr>
            <td class="text-muted">RGB:</td>
            <td class="font-weight-bold">${background}</td>
          </tr>
        </table>
      `;
      el.parentNode.appendChild(table);
    });
  }
  ngOnInit(): void {
  }

}
function getStyle(arg0: string, el: HTMLElement) {
  throw new Error('Function not implemented.');
}

function rgbToHex(background: void) {
  throw new Error('Function not implemented.');
}

