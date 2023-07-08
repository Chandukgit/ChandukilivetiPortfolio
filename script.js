console.log("Scriptworking")
about_para=document.getElementById("about-para");
function abouttoggle()
{
     if(about_para.style.display==="none")
     {
        about_para.style.display="block";
     }
     else
     {
        about_para.style.display="none";
     }
}

service_webpara=document.getElementById("servide-webpara");
programmingpara=document.getElementById("Programming-para");
function Servicewebtoggle()
{
     if(service_webpara.style.display==="none" )
     {
       service_webpara.style.display="block";
       
     }
     else
     {
       service_webpara.style.display="none";
       

     }
}

function programmingtoggle()
{
     if(programmingpara.style.display==="none")
     {
       programmingpara.style.display="block";
     }
     else
     {
       programmingpara.style.display="none";

     }
}

function displayContent(element) {
  var wrapper = element.nextElementSibling;
  if (wrapper.style.display === "none") {
    wrapper.style.display = "block";
  } else {
    wrapper.style.display = "none";
  }
}
