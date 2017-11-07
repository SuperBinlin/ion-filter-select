/**
 * @date: 2017/09/30
 * @author: zhangbin
 * @e-mail: superbinlin@163.com
 * @see: http://binlin.site
 */
import { Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import * as _ from 'lodash';

declare var module: {
  id: any;
}

@Component({
    moduleId: module.id.toString(),
    selector: 'ion-filter-select',
    template: `
      <div class="ion-filter-select-wp">
        <ion-grid class="filter-hospital">
          <ion-row>
            <ion-col col-3><ion-label>{{labelItem}}</ion-label></ion-col>
            <ion-col col-8><ion-input type="text" placeholder="筛选{{labelItem}}" class="filter-input" [(ngModel)]="searchInput" (blur)="inputBlur()" (focus)="inputFocus()"></ion-input></ion-col>
            <ion-col col-1><ion-icon name="ios-arrow-down-outline" class="arrow-bottom" (click)="toggleDialog()" tappable></ion-icon></ion-col>
          </ion-row>
        </ion-grid>

        <div class="hospital-wrap" *ngIf="showDialog">
          <ion-grid>
            <ion-row>
              <ion-col col-4></ion-col>
              <ion-col col-8>
                <ul class="hospital-ul" *ngIf="isSearch">
                  <li *ngFor="let dataObj of setData | searchInfos:searchInput" (click)="selectOption(dataObj);$event.stopPropagation()" [ngClass]="{active: dataObj.active}" tappable>{{dataObj.text}}</li>
                </ul>
                <ul class="hospital-ul" *ngIf="!isSearch">
                  <li *ngFor="let dataObj of setData" (click)="selectOption(dataObj);$event.stopPropagation()" [ngClass]="{active: dataObj.active}" tappable>{{dataObj.text}}</li>
                </ul>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>

        <div class="select-popup" *ngIf="showDialog" (click)="toggleDialog()" tappable></div>
      </div>
    `,
})

export class IonFilterSelectComponent implements OnChanges{
  /**
   * 控制对话框显示
   */
  public showDialog:boolean = false;

  public searchInput:string;

  public isSearch:boolean;

  /**
   * [{text:'',value:''}]
   */
  @Input() setData:Array<any>;

  @Input() labelItem:string = '医院';

  @Output() dispatchId:EventEmitter<string> = new EventEmitter();

  constructor(){
    
  }

  ngOnChanges(change){
     console.log(change)
     /**
      * 联动后重置
      */
     this.searchInput = "";
  }

  /**
   * 控制选项及遮罩的显示
   */
  toggleDialog(){
    this.showDialog = !this.showDialog;
    this.isSearch = false;
  }

  /**
   * 点击待选择选项
   */
  selectOption(dataObj){
    console.log(this.setData)
    _.map(this.setData, (dataEach)=>{
      if(dataEach.value == dataObj.value) {
        dataEach.active = true;
        this.searchInput = dataEach.text;
        this.dispatchId.emit(dataEach.value);
        this.toggleDialog();
      } else{
        dataEach.active = false;
      } 
    })
    
  }

  inputBlur(){
    setTimeout(()=>{
      this.showDialog = false;
      this.isSearch = false;
    },500)
    
  }

  inputFocus(){
    this.showDialog = true;
    this.isSearch = true;
  }














}
