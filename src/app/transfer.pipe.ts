import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transfer'
})
export class TransferPipe implements PipeTransform {

  transform(items: any, Search: any): any {
   if(!items) return [];
   if(!Search) return items;
   return items.filter(a=>{return a.title.toLowerCase().includes(Search.toLowerCase())})
  }
}
