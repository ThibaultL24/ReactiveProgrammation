// RxJS v6+
import { fromEvent } from "https://cdn.jsdelivr.net/npm/rxjs@7.8.1/+esm";
import {
  debounceTime,
  map,
  distinct,
} from "https://cdn.jsdelivr.net/npm/rxjs@7.8.1/operators/+esm";

// elem ref
const searchBox = document.getElementById("search");

// streams
const keyup$ = fromEvent(searchBox, "keyup");

// wait .5s between keyups to emit current value
keyup$
.pipe(
    map((i) => i.currentTarget.value),
    debounceTime(500),
    distinct()
  )
  .subscribe(console.log);
  ;
