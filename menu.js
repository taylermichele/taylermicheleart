function toggleMenu()
{

    var menu = document.getElementById("mobileMenu");
    var menuSwitch = document.getElementById("dropdownButton");

    if(menu.style.display == "flex")
    {
    menu.style.display="none";

    menuSwitch.innerHTML = "<h1>≡</h1>"
    }

    else
    {
    menu.style.display="flex";

    menuSwitch.innerHTML = "<h1>⤫</h1>"
    }

}