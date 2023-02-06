(function(){let string = "";
let n=5;
let j;

    for(let i=1 ; i<=n ; i++){


        for(j=1;j<=n-i;j++)
        string+=" ";

        for(j=1 ; j<=(2*i)-1 ; j++)
        {
            string+= "*";
        


    }
    string += "\n";
}

console.log(string);}

)();