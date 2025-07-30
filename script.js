// گرفتن المنت های html
const contactForm = document.getElementById("contactForm") ;
const formAlert = document.getElementById("formAlert") ;

// جلوگیری از ارسال پیشفرض و نمایش موفقیت
contactForm.addEventListener("click" , function(e) {
  e.preventDefault() ;
  
  // در نسخه بعدی اعتبارسنجی اضافه میکنیم
  formAlert.innerHTML = `
  <div class="alert alert-success" role="alert">
      ✅ پیام شما با موفقیت ارسال شد!
  </div>
  ` ;
  
  // پاک کردن فرم
  contactForm.reset() ;
}) ;