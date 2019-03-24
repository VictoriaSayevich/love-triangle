/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
// function find (arr, value) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === value) return i;
//   }
//   return -1;
// }

// function find_next (arr, index, k) {
//   if (k == 3) return 1;
//   index_next = find (arr, index);
//   index_next++;
//   if (!index_next) {
//     return 0;
//   }
//   k++;
//   find_next (arr, index_next, k);
// }

// module.exports = function getLoveTrianglesCount(preferences = []) {
//   var size = preferences.length, count = 0, i = 0;
//   while (i <= size) {
//     i++;
//     if (!find_next (preferences, i, 0)) continue;
//     count += find_next (preferences, i, 0);
//   }
//   console.log("!!!!!!!!!!!!!!!!!!!!=", count);
//   return count;
// };
// function next (arr, next_index, index) {
//   var buf = 0;
//   next_index = arr[index] - 1;
//   if (next_index != index) {
//     buf = next_index;
//     next_index = arr[buf] - 1;
//     next (arr, next_index, buf);
//   }
//   else return next_index;
// }

module.exports = function getLoveTrianglesCount(preferences = []) {
  var size = preferences.length, count = 0;  
  for (var i = 0; i < size; i++) { 
    var next1 = preferences[i] - 1;
    if (next1 == i) continue;
    var next2 = preferences[next1] - 1;
    if (next1 == next2) continue;
    var next3 = preferences[next2] - 1;
    if (next3 == next2) continue;
    if (next3 == i) {
        count++;
    }
  }
  return count / 3;
}

