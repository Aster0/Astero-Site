

portfolioList = [];



function loadImage()
{
    var image = document.getElementById("image-header1");
    
    var spinner = document.getElementById("image-load-spinner");

    setTimeout(function() {


        animateImage(image)

     
   
        spinner.style.display = "none";
    }, 1000);
}

function animateImage(image)
{
  
    
    if(image.style.opacity < 1)
    {
      
        setTimeout(function() {

     
            
            var imageOpacity = parseFloat(image.style.opacity) + 0.1;

          
      
            image.style.opacity = imageOpacity;
            animateImage(image)


        }, 30);
    }

    
}

function onLoadPortfolio()
{
    
 
    var xmlHttpRequest = new XMLHttpRequest();


    xmlHttpRequest.open("GET", "../js/data/portfolio.json", false);
    xmlHttpRequest.onreadystatechange = function ()
    {
        if(xmlHttpRequest.readyState === 4)
        {
            if(xmlHttpRequest.status === 200 || xmlHttpRequest.status == 0)
            {
                var textContents = xmlHttpRequest.responseText;
                
                
                
                
                var jsonifiedText = JSON.parse(textContents);
                
             

                portfolioList = jsonifiedText['data'];
                
                
                
                
                for(var portfolio of portfolioList)
                {
                    
                    
                    var languages = portfolio['languages'];
                    
             
                    
                    var languageToolTips = "";
                    
                    for(var language of languages)
                    {
                        languageToolTips +=
                            "<span class=\"badge badge-dark language-tool-tip\" >" + language +"</span>" 
                    }
                    
                    var portfolioParent = document.getElementById("portfolio-body-div");
                    
                    
                    portfolioParent.innerHTML +=

                        "<div class=\"portfolio-body\">" +

                            "<div class=\"portfolio-body-header\">" +
                        


                            "</div>" +
                        
                        "<div class=\"language-tool-tip-div\">" +

                        languageToolTips +
                        
                        "</div>" +
                        

                            "<div class=\"portfolio-body-description\">" +

                     

                                "<div class=\"portfolio-body-title-div\"><span class=\"portfolio-body-title\">" + portfolio['name'] + "</span></div>" +


                                "<img src=\"images/speech.svg\" id=\"about-me-speech-icon\"  class=\"opac-icons\">" +

                                    portfolio['description'] +
                        
                            "</div>" +


                            "<div class=\"portfolio-body-title-div portfolio-button\">" +

                                "<a href='" + portfolio['url'] + "'<button type=\"button\" class=\"btn btn-secondary btn-sm portfolio-button-sm\">View Project</button> </a>" +
                            "</div>" +




                        "</div>";
                    
                }
            }
        }
    }


    xmlHttpRequest.send(null);
}


function showToolTip(id)
{
    var t = "      <span class=\"badge badge-dark\">Jump to Home</span>"
    
    var tooltip = document.getElementById("custom-tool-tip");
    

    tooltip.textContent = "Jump to " + id;
    tooltip.style.display = "initial";
}

function hideToolTip()
{
    var tooltip = document.getElementById("custom-tool-tip");
    tooltip.style.display = "none";
}