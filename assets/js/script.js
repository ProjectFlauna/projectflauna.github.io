console.log(`JavaScript loaded`);

// Sidebar begin
function toggleNav() {
    const sidenav = document.getElementById("mySidebar");
    main = document.getElementById("main");
    sidenav.style.width = sidenav.style.width === "250px" ? '0' : '250px';
    main.style.marginLeft = main.style.marginLeft === "250px" ? '0' : '250px';
}
// Sidebar end