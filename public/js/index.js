

portfolioList = [];

function onLoadPortfolio()
{
    
    console.log("test");
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "../js/data/portfolio.json", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                
                
                
                
                var jsonifiedText = JSON.parse(allText);
                
                console.log(jsonifiedText['data']);

                portfolioList = jsonifiedText['data'];
                
                
                
                
                for(var portfolio of portfolioList)
                {
                    console.log(portfolio['name']);
                    
                    
                    var portfolioParent = document.getElementById("portfolio-body-div");
                    
                    
                    portfolioParent.innerHTML +=

                        "<div class=\"portfolio-body\">" +

                            "<div class=\"portfolio-body-header\">" +


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
    
    
    rawFile.send(null);
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