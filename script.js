function compute()
{
 p = document.getElementById("principal").value;
 r = document.getElementById("rate").value;
 t = document.getElementById("years").value;
 document.getElementById('pval').innerHTML = p;
document.getElementById('rval').innerHTML = r;
document.getElementById('aval').innerHTML = parseInt(p)+p*t*r/100;
document.getElementById ('yval').innerHTML=new Date().getFullYear()+parseInt(t);
document.getElementById("cont1").style.visibility="visible";
       return
    
}

function change()
{
r = document.getElementById("rate").value;
document.getElementById("rateVal").innerHTML=r;
       return
}
        
