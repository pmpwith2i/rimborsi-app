import {CstFilter} from './cst-filter';
import {Delega} from '../../model/delega';

export function filterItem(filterList: CstFilter[], searchStr: string, el: Delega): boolean {
  let find = true;

  if (null != filterList) {
    filterList.forEach(x => {
      if (x.type === 'date') {
        if (null != x.value && 'null' !== x.value) {
          const timeRes = x.value.getTime() <= new Date(el[x.propName]).getTime();
          find = ((x.params === 'before') && timeRes) || ((x.params === 'after') && !timeRes);
        }
      } else {
        if (null != x.value && 'null' !== x.value && 0 < x.value.length) {
          if (!el[x.propName].toLowerCase().includes(x.value.toLowerCase())) {
            find = false;
          }
        }
      }

      if (!find) {
        return find = false;
      }
    });
  }

  if (!find) {
    return find;
  }

  if (null != searchStr) {
    find = el.search(searchStr);
  }
  return find;
}
