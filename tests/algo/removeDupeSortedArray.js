/*function removeDupeSortedArray(arr)
{
	var temp;
	var length = 0;
	for (var i=0; i<arr.length; i++)
	{
		for(var j=1; j<arr.length; j++)
		{
			if(arr[i]===arr[j])
			{	
	
				length++;
				var temp = arr[j];
				for (var n=j; n<(arr.length -j); n++)
				{
					arr[j]=arr[j+1]; 
				}
				arr[length-1]= temp
			}
		}
	}
console.log("length: " +length);
console.log(arr);

}
removeDupeSortedArray([1,1,2,2,3])
*/
//Remove duplicates from a sorted array
var removeDuplicates = function(nums) {
	if(nums === null || nums.length === 0) return 0;
	if(nums.length == 1) return 1;
	var count = 0;
    for(var i = 0; i< nums.length; i++) {
        if(nums[i] != nums[i+1]){
            count ++;
            nums[count] = nums[i+1];
        }
    }
    
    return count;
}
console.log(removeDuplicates([1,1,1,2,2,3]))