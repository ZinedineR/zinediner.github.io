function form(){
    const email = document.forms["form"]["email"].value;
    const kritik = document.forms["form"]["kritik"].value;
    const tableOutput = document.getElementById('show')
    tableOutput.rows[1].cells[0].innerHTML = email
    tableOutput.rows[1].cells[1].innerHTML = kritik
}

<<<<<<< HEAD
function button() {
    var txt;
    if (confirm("Terima kasih atas dukungan anda")) {
      txt = "Selesai";
    } else {
      txt = "Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }
=======
var navbar = document
    .querySelectorAll(
        'ul.navbar-responsive li.navbar-children a'
    );
console.log('links', navbar);
navbar.forEach(function(link) {
    console.log('each link', link);
});

var submenu = navbar.length;
for (var i=0; i<submenu; i++) {
    var link = navbar[i];
    console.log('each submenu', link)
}
navbar.forEach(function (link){
    link.addEventListener('click', function (ev){
        console.log('link clicked', link)
    var parent = link.parentElement;
    if (parent.classList.contains('active')){
        parent.classList.remove('active');}
    else {
        parent.classList.add('active')
        }
    })
});

// fungsi pop upimage
// Get the modal
var modal = document.getElementById("thepopup");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("popup-img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function showImg(ele){
    modal.style.display = "block";
    modalImg.src = ele.src;
    captionText.innerHTML = ele.alt;
}
var close = document.getElementsByClassName("close")[0];
>>>>>>> 71afccb04dd78468a7d765a475c9646be56ccfff
