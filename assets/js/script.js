console.log(`JavaScript loaded`);

// Sidebar begin
function toggleNav() {
    const sidenav = document.getElementById("mySidebar");
    sidenav.style.width = sidenav.style.width === "250px" ? '0' : '250px';
}