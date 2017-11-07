/**
 * @date: 2017/09/30
 * @author: zhangbin
 * @e-mail: superbinlin@163.com
 * @see: http://binlin.site
 */
import { OnChanges, EventEmitter } from '@angular/core';
export declare class IonFilterSelectComponent implements OnChanges {
    /**
     * 控制对话框显示
     */
    showDialog: boolean;
    searchInput: string;
    isSearch: boolean;
    /**
     * [{text:'',value:''}]
     */
    setData: Array<any>;
    labelItem: string;
    dispatchId: EventEmitter<string>;
    constructor();
    ngOnChanges(change: any): void;
    /**
     * 控制选项及遮罩的显示
     */
    toggleDialog(): void;
    /**
     * 点击待选择选项
     */
    selectOption(dataObj: any): void;
    inputBlur(): void;
    inputFocus(): void;
}
