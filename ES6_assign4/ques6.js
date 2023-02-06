
    function numberOfDigit(N)
    {

        let digit = 0;
   
       
        while (N > 0) {
   
           
            digit++;
   
         
            N = Math.floor( N / 10);
        }
        return digit;
    }
   
   
    function rotateNumberByK(N, K)
    {
   
       
        let X = numberOfDigit(N);
   
       
        K = ((K % X) + X) % X;
   
      
        let left_no = Math.floor (N / Math.floor(Math.pow(10,X - K)));
   
      
        N = N % Math.floor(Math.pow(10, X - K));
   
       
        let left_digit = numberOfDigit(left_no);
   
       
        N = (N * Math.floor(Math.pow(10, left_digit))) + left_no;
   
        console.log(N);
    }
    let N = 12345, K = 1;
   
        rotateNumberByK(N, K);