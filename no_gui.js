
document.getElementById("sub").addEventListener("click", function() {

    var userInput = document.getElementById('input').value;

    var menu = document.getElementById("dataTypes")

    var selection = menu.options[menu.selectedIndex].text

    if (selection == "Byte"){

        convertByte(userInput)
    } 

    if (selection == "Kilobyte"){

        convertKilobyte(userInput)
    } 

    if (selection == "Megabyte"){

        convertMegabyte(userInput)
    } 

    if (selection == "Gigabyte"){

        convertGigabyte(userInput)
    }
    
    if (selection == "Terrabyte"){

        convertTerrabyte(userInput)
    } 

    if (selection == "Petabyte"){

        convertPetabyte(userInput)
    } 

    if (selection == "Exabyte"){

        convertExabyte(userInput)
    } 

    if (selection == "Zettabyte"){

        convertZettabyte(userInput)
    } 

    if (selection == "Yottabyte"){

        convertYottabyte(userInput)
    } 
})