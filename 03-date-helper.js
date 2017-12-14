function DateHelper(){
}

DateHelper.daysBetweenTwoDates = function( Date1 , Date2 ,timeZoneOffset ){
        /*date1.getTimezoneOffset();
        date2.getTimezoneOffset();

        var requiredTimeZonedDate1 = date1.toUTCString();
        var requiredTimeZonedDate2 = date2.toUTCString();

        console.log(Date1);
        console.log(Date2);
        console.log(requiredTimeZonedDate1);
        console.log(requiredTimeZonedDate2);
        */

        msToDayConverter = 1000 * 60 * 60 * 24 ;
        var differenceInMs = ( Date1.getTime() - Date2.getTime() );
        var dayCount = Math.abs(Math.round( differenceInMs / msToDayConverter )) ;
        return dayCount;   
}

DateHelper.isBefore = function ( Date1 ,Date2 ){
       // console.log ( dayCount );
        msToDayConverter = 1000 * 60 * 60 * 24 ;
        var differenceInMs = ( Date1.getTime() - Date2.getTime() );
        var dayCount = Math.round( differenceInMs / msToDayConverter ) ;
      
        if( dayCount < 0 ){
            console.log ( "date" ,date1 ,"is before date" ,date2 );
            }
        else{
            if( dayCount > 0){
                console.log ( "date" ,date1 ,"is after date" ,date2);
            }
            else{
                console.log ( "date" ,date1 ,"and date" ,date2 ,"are same" );
            }
        }
}


var date1 = new Date(2017 , 11 , 31 , 23 , 59 , 59 , 0);
var date2 = new Date(2017 , 11 , 31 , 24 , 00 , 00 , 0);

/*My Understanding of problem statement for Bonus : I need to pass a timezoneoffset ,-120 in this case 
will represent GMT+2 timezone and my date1 and date2 are in GMT+5.30 timezone format,so I need to 
change date1 and date2 to GMT+2 format and find out no of days between the two dates.I am not sure
about it,if I have understood it properly.
*/

DateHelper.daysBetweenTwoDates ( date1 ,date2 , -120 ) ;  //assuming date1 and date2 both have same timezone offset
DateHelper.isBefore ( date1 ,date2 );   // here I should catch this exception ,as I am passing two arguments,where as function accepts only one argument