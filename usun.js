let exercise= "Write a  function to get the maximum date from an array of dates. "

const datesArray=['2021/07/01', '2012/11/02', '2020/01/07']


function maxDate(datesArray){
let max_dt=datesArray[0]
max_dtObj=new Date(datesArray[0])
datesArray.forEach(function(dt, index){
    if(new Date(dt)> max_dtObj){
            max_dt=dt
        max_dtObj=new Date(dt)
    }
})
return max_dt
}


console.log(maxDate(datesArray))


//Output :
"2021/07/01"