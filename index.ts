let intervalTimerId:	number;
let timeoutTimerId:		number;

/*
compiler errors

index.ts:4:1 - error TS2322: Type 'Timer' is not assignable to type 'number'.

4 intervalTimerId = setInterval(() => 42, 0);
  ~~~~~~~~~~~~~~~


index.ts:5:1 - error TS2322: Type 'Timer' is not assignable to type 'number'.

5 timeoutTimerId = setTimeout(() => 42, 0);
  ~~~~~~~~~~~~~~
*/
intervalTimerId = setInterval(() => 42, 0);
timeoutTimerId = setTimeout(() => 42, 0);

const wrongTypeTimerId: NodeJS.Timer = setInterval(() => 42, 0);
