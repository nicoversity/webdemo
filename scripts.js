/*
 *  Filename: scripts.js
 *  Description: A simple web page used to accompany the development of a beginner's guide to Git and GitHub with Visual Studio code.
 *
 *  Author: Nico Reski
 *  Version: 2025-02-22
 *  GitHub: https://github.com/nicoversity
 */

/* === IMAGE SWITCHER ======================================================== */
function imageSwitch(img) {

    // This example assumes that the imageSwitch() function is assigned to the "onclick" event of an img HTML element,
    // and it passes a reference to itself (this) as the parameter, here named "img"

    // Any attributes of an HTML element can be accessed via dot notation: element.attribute
    console.log(img.alt);

    // Using JavaScript, HTML element attributes can be accessed (read) and modified (updated)!
    
    // check the current "src" value of the displayed img HTML element node:
    // if the value is equal to "A user interacting with a Virtual Reality headset.", display the alternative image instead
    if(img.alt == "A screenshot from within a Virtual Reality environment.") {
        // update img HTML element attributes
        img.src = "media/02-virtual_reality.jpg";
        img.alt = "A user interacting with a Virtual Reality headset.";
    }
    // if the value is not equal to "A user interacting with a Virtual Reality headset.", display the original image
    else {
        // update img HTML element attributes
        img.src = "media/01-interactable.jpg";
        img.alt = "A screenshot from within a Virtual Reality environment.";
    }

    // Observe: In the index.html file, inspect the img HTML element node as part of the "Image Switcher" example,
    // compare the src and alt attributes, and make sure you understand the logic in this imageSwitch() function.
}
