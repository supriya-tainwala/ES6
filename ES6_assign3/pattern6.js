(function(){let string = "";
let n=5;
let j;

    for(let i=1 ; i<=n ; i++){


        for(j=1;j<=i;j++)
        string+=" ";

        for(j=1 ; j<=(2*(n-i+1))-1 ; j++)
        {
            string+= "*";
        


    }
    string += "\n";
}

console.log(string);}

)();