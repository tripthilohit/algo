var twoSum = function(nums, target) {
    for (var i=0;i<nums.length;i++)
        {
            for (var j=1;j<nums.length;j++)
                {
                    if (target == nums[i]+nums[j])
                        console.log("numbers are "+nums[i] + "," + nums[j])
                }
        }
};

twoSum([2,11,7,10],9)