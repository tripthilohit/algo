var removeElement = function(nums,val)
{
	var j=0;
	for (var i=0;i<nums.length;i++)
	{
		if(nums[i]!=val)
		{	
		
			
			nums[j]=nums[i];
				j++;
		
			
		}
	}
	for(n=0;n<nums.length;n++)
	{
		console.log(nums[n])
	}
	console.log("length "+j)
}

removeElement([1,2,2,2,3,2,4],2)
