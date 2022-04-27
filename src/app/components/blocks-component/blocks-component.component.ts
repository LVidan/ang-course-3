import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocks-component',
  templateUrl: './blocks-component.component.html',
  styleUrls: ['./blocks-component.component.scss']
})
export class BlocksComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  initialColor: string = 'red';
  spanCnt: string = 'HOVER CHANGE!';

  changeBlock(block: any, span: any): void {
    block.style.backgroundColor = 'green';
    span.style.display = 'block';
  };

  revertBlock(block: any, span: any): void {
    block.style.backgroundColor = this.initialColor;
    span.style.display = 'none';
  }
}
