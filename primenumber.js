 
  var count = 0;
  const number = prompt("Enter a Number");
  for(var i = 0; i <= number; i++)
   {
	for(var j = 1; j <= i; j++)
	{
	  if(i %  j== 0)
	    count++;
	}
	   if(count == 2)
              console.log(i);
		count=0;
		}