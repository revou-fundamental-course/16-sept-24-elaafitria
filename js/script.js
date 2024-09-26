//java
function replacename(){
    let name = prompt("siapa nama kamu? :)", "");
    document.getElementById("name").innerHTML = name
} 
replacename();
document.getElementById("tombol").addEventListener("click", function(){
    replacename();
})


// Function to get the current time
function getCurrentTime() {
    const now = new Date();
    const timeString = now.toUTCString();
    document.getElementById('currentTime').textContent = timeString;
}

// Form submission handling
function validateForm(){
    document.getElementById('submit').addEventListener("click", function(event) {
        event.preventDefault();
    
        const nama = document.getElementById('nama').value;
        const tanggalLahir = document.getElementById('tanggalLahir').value;
        const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
        const pesan = document.getElementById('pesan').value;
    
        const output = `
            <strong>Nama:</strong> ${nama}<br>
            <strong>Tanggal Lahir:</strong> ${tanggalLahir}<br>
            <strong>Jenis Kelamin:</strong> ${jenisKelamin}<br>
            <strong>Pesan:</strong> ${pesan}
        `;
    
        document.getElementById('output').innerHTML = output;
        getCurrentTime(); // Update the time after form submission
    });
    // Initialize time on page load
    window.onload = function() {
        getCurrentTime();
    };
}

let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(index) {
    // Get DOM semua Image Banner
    let listImage = document.getElementsByClassName('photo-banner');
    console.log(indexSlide);
    console.log(listImage);

    // Reset IndexSlide
    if (index > listImage.length) indexSlide = 1;

    // Hide All Images
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    // Show Selected Image
    listImage[indexSlide - 1].style.display = 'block';
}

// Autorun Banner Photo
setInterval(() => nextSlide(1), 2000);