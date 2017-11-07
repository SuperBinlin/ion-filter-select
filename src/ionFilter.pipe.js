"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let SearchFilter = class SearchFilter {
    transform(items, args) {
        var searchCtrl = (data) => {
            var all = false;
            if (typeof data === 'object') {
                for (var z in data) {
                    if (all = searchCtrl(data[z])) {
                        break;
                    }
                    ;
                }
                ;
            }
            else {
                if (typeof data === 'number') {
                    all = data === args;
                }
                else {
                    all = data.toString().match(new RegExp(args, 'i'));
                }
                ;
            }
            ;
            return all;
        };
        console.log(items.filter(searchCtrl));
        return items.filter(searchCtrl);
    }
    ;
};
SearchFilter = __decorate([
    core_1.Pipe({
        name: 'searchInfos',
        pure: true
    }),
    core_1.Injectable()
], SearchFilter);
exports.SearchFilter = SearchFilter;
;
//# sourceMappingURL=ionFilter.pipe.js.map