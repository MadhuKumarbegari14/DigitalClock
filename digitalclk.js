function digitalclok()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var ml=date.getMilliseconds()
    var dt=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var day=date.getDay()
    var am_pm="AM"
    if(hh>=12){
        am_pm="PM"
        if(hh>12)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    if(mo==0)
    {
        mo="Jan";
    }
    else if(mo==1)
    {
        mo="Feb";
    }
    else if(mo==2)
    {
        mo="Mar";
    }
    else if(mo==3)
    {
        mo="Apl";
    } 
    else if(mo==4)
    {
        mo="May";
    }
    else if(mo==5)
    {
        mo="Jun";
    }
    else if(mo==6)
    {
        mo="Jul";
    } 
    else if(mo==7)
    {
        mo="Aug";
    } 
    else if(mo==8)
    {
        mo="Sep";
    } 
    else if(mo==9)
    {
        mo="Oct";
    } 
    else if(mo==10)
    {
        mo="Nov";
    } 
    else
    {
        mo="Dec";
    }
    switch(day)
    {
        case 0: day="Sunday"
        document.body.style.backgroundImage="url(./1.jpg)"
        document.body.style.backgroundSize="100% 100vh"
        break;
        case 1: day="Monday"
        document.body.style.backgroundImage="url(./2.jpg)"
        document.body.style.backgroundSize="100% 100vh"
        break;
        case 2: day="Tuesday"
        document.body.style.backgroundImage="url(./3.jpg)"
        document.body.style.backgroundSize="100% 100vh"
        break;
        case 3: day="Wednesday"
        document.body.style.backgroundImage="url(./8.jpg)"
        document.body.style.backgroundSize="100% 100vh"
        break;
        case 4: day="Thursday"
        document.body.style.backgroundImage="url(./9.jpg)"
        document.body.style.backgroundSize="100% 100vh"
        break;
        case 5: day="Friday"
        document.body.style.backgroundImage="url(./7.jpg)"
        document.body.style.backgroundSize="100% 100vh"
        break;
        case 6: day="Saturday"
        document.body.style.backgroundImage="url(./6.jpg)"
        document.body.style.backgroundSize="100% 100vh"
        break;
    }
    document.getElementById("Date").innerHTML=`${dt}/${mo}/${yy}`
    document.getElementById("Time").innerHTML=`${hh}:${mm} ${am_pm}`
    document.getElementById("Day").innerHTML=day;
    document.getElementById("Sec").innerHTML=ss;
    setTimeout(digitalclok,1000);
}
digitalclok()