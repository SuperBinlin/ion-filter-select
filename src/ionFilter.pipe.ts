import { Pipe, PipeTransform,Injectable } from '@angular/core';
 
@Pipe({
    name: 'searchInfos',
    pure: true
})

@Injectable()
 
export class SearchFilter implements PipeTransform{
 
  transform ( items,args: any ) {
    var searchCtrl = ( data: any ) => {
      var all = false;
      if ( typeof data === 'object' ) {
        for ( var z in data ) {
          if ( all = searchCtrl( data[z] ) ) {
              break;
          };
        };
      } else {
        if ( typeof data === 'number' ) {
           all = data === args;
        } else {
           all = data.toString().match( new RegExp( args, 'i' ) );
        };
      };
      return all;
    };
    console.log(items.filter(searchCtrl))
    return items.filter(searchCtrl);

  };
 
};