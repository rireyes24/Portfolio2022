

//Funcion para que oculte o muestre el menu de opciones
function showMenu()
{
    const menu = document.getElementById("ID_nav-menu");

    if(menu.style.display == "none")
    {
        menu.style.display = "block";
    }
    else
    {
        menu.style.display = "none";        
    }
}