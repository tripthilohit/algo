var reverse = function(x) {
	var rev = 0
   while(x>0)
   {
      
    rev = rev * 10 + x%10;
    x=Math.abs(x/10);
   }
   console.log("the num is"+rev) 
    
};
reverse(123)