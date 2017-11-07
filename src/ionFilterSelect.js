"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @date: 2017/09/30
 * @author: zhangbin
 * @e-mail: superbinlin@163.com
 * @see: http://binlin.site
 */
const core_1 = require("@angular/core");
const _ = require("lodash");
let IonFilterSelectComponent = class IonFilterSelectComponent {
    constructor() {
        /**
         * 控制对话框显示
         */
        this.showDialog = false;
        this.labelItem = '医院';
        this.dispatchId = new core_1.EventEmitter();
    }
    ngOnChanges(change) {
        console.log(change);
        /**
         * 联动后重置
         */
        this.searchInput = "";
    }
    /**
     * 控制选项及遮罩的显示
     */
    toggleDialog() {
        this.showDialog = !this.showDialog;
        this.isSearch = false;
    }
    /**
     * 点击待选择选项
     */
    selectOption(dataObj) {
        console.log(this.setData);
        _.map(this.setData, (dataEach) => {
            if (dataEach.value == dataObj.value) {
                dataEach.active = true;
                this.searchInput = dataEach.text;
                this.dispatchId.emit(dataEach.value);
                this.toggleDialog();
            }
            else {
                dataEach.active = false;
            }
        });
    }
    inputBlur() {
        setTimeout(() => {
            this.showDialog = false;
            this.isSearch = false;
        }, 500);
    }
    inputFocus() {
        this.showDialog = true;
        this.isSearch = true;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], IonFilterSelectComponent.prototype, "setData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], IonFilterSelectComponent.prototype, "labelItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonFilterSelectComponent.prototype, "dispatchId", void 0);
IonFilterSelectComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [])
], IonFilterSelectComponent);
exports.IonFilterSelectComponent = IonFilterSelectComponent;
//# sourceMappingURL=ionFilterSelect.js.map