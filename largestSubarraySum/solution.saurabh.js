function largestSubarraySum(input){
    let max_arr = [];
  
    input.forEach((e, INDEX) => {
      input.forEach((e, index) => {
        if (input.slice(INDEX, index).length > 2) {
          if (
            max_arr.reduce((a, b) => a + b, 0) <
            input.slice(INDEX, index).reduce((a, b) => a + b, 0)
          ) {
            max_arr = input.slice(INDEX, index);
          }
        }
      });
    });
    return max_arr;
  }
  