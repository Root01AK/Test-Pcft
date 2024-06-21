// Scroll Effect SATRT
window.onscroll = function()
{topbar()};

let topButton = document.getElementById('topnav');

function topbar() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topbar").style.top = "0";
    topButton.style.display = "block";
  } else {
    document.getElementById("topbar").style.top = "-100px";
    topButton.style.display = "none";
  }
}
// Scroll Efeect END



// CopRights Automatice Year Running START
const year = document.getElementById('curentYear');
year.innerHTML = new Date().getFullYear();
// CopRights Automatice Year Running END

// PopUp Form Open & Close Function START
function openForm() {
  var openForm = document.getElementById('myForm');
  var bgForm = document.getElementById('form-bg');
  bgForm.classList.add('form-bg');
  openForm.style.display = "block";
  openForm.offsetHeight;
  openForm.style.opacity = "1";    
}

function closeForm() {
  var closeForm = document.getElementById('myForm');
  var bgForm = document.getElementById('form-bg');

  closeForm.style.opacity = "0";

  bgForm.classList.remove('form-bg');

  setTimeout(function () {
    close.style.display = "none";
  }, 500);
}
// PopUp Form Open & Close Function START

// Humbuger Toggle Function SATRT
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
}
// Humbuger Toggle Function END


// Blog AutoPlay START
$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000, //2000ms = 2s;
  autoplayHoverPause: true,
  responsive:{
      0:{ 
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
          loop:true
      }
  }
});
// Blog AutoPlay END


$("#myform").validate({
  rules: {
    name: {
      required: true,
      minlength: 2,
    },
    email: {
      email: true
    },
    Phone: {
      number: true,
      minlength: 10,
      digits: true
    }
  },
  messages: {
    name: {
      required: "Please enter your name",
      minlength: "Name should be at least 2 characters"
    },
    email: {
      email: "Please enter a valid email address"
    },
    Email: {
      email: "Please enter a valid email address"
    },
  },
  submitHandler: function(form) {
    form.submit();
  }
});


//  why choose us 
