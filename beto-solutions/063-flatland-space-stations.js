function flatlandSpaceStations(n, c) {
  let max = [];
   for(let city=0; city<n; city++){
        max.push(Math.min(...(c.map(citySpace=>Math.abs(city - citySpace)))))
   }
   return Math.max(...max)
}