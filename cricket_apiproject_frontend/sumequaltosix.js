let x=[1,5,7,1,3,3];
let k=6;
let count=0;
for(let i=0;i<x.length;i++)
{
    for(let j=i+1; j<x.length;j++)
    {
        if(x[i]+x[j]==k)
        {
          count++;
        }
    }
}
console.log(count)