let ad="Şükriye Nur "
var mezunyas="22"
var  atanacagıyas=parseInt(prompt("Kaç yaşında atanmayı düşünüyorsun?"));
for(var i=0;i<=35;i++){
   if(i===0){
       document.write( ad + "dogdu.");
   }
    else if(i===22){
        document.write( ad + i +" yaşındasın Mezun oldun Haydi KPSS Kervanına :) " );
    }
     else if(i===atanacagıyas){
        document.write(ad +" "+ atanacagıyas +" düşündüğün yaşta ATANDIN.");
    }
    else if(i==35){
        document.write(ad +" "+ i +"yaşındasın umarım atanmışsındır.");
    }
     else{
         document.write(ad +" "+ i + " yaşındasın.");
     }
    
  
}