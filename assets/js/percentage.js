// Function to grade the sustainability by different categories
function sustainabilityGrade() {
    const sustainability = document.getElementById("percentage").textContent;
    const grade = document.getElementById("grade");
    if (sustainability >= 85) {
        grade.textContent = "A";
        grade.classList.replace("red", "green");
        grade.classList.replace("limegreen", "green");
        grade.classList.replace("yellow", "green");
        grade.classList.replace("orange", "green");
        grade.classList.replace("darkRed", "green");
    } else if (sustainability >= 70) {
        grade.textContent = "B";
        grade.classList.replace("green", "limegreen");
        grade.classList.replace("red", "limegreen");
        grade.classList.replace("yellow", "limegreen");
        grade.classList.replace("orange", "limegreen");
        grade.classList.replace("darkRed", "limegreen");
    } else if (sustainability >= 55) {
        grade.textContent = "C";
        grade.classList.replace("green", "yellow");
        grade.classList.replace("limegreen", "yellow");
        grade.classList.replace("red", "yellow");
        grade.classList.replace("orange", "yellow");
        grade.classList.replace("darkRed", "yellow");
    } else if (sustainability >= 40) {
        grade.textContent = "D";
        grade.classList.replace("green", "orange");
        grade.classList.replace("limegreen", "orange");
        grade.classList.replace("yellow", "orange");
        grade.classList.replace("red", "orange");
        grade.classList.replace("darkRed", "orange");
    } else if (sustainability >= 25) {
        grade.textContent = "E";
        grade.classList.replace("green", "red");
        grade.classList.replace("limegreen", "red");
        grade.classList.replace("yellow", "red");
        grade.classList.replace("orange", "red");
        grade.classList.replace("darkRed", "red");
    } else {
        grade.textContent = "F";
        grade.classList.replace("green", "darkRed");
        grade.classList.replace("limegreen", "darkRed");
        grade.classList.replace("yellow", "darkRed");
        grade.classList.replace("orange", "darkRed");
        grade.classList.replace("red", "darkRed");
    }
}
sustainabilityGrade();