const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        // else{
        //     entry.target.classList.remove("show");
        // }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=>observer.observe(el));

function aboutPage(){
    document.location.href = "about.html"
}

function pdfLink(){
    document.location.href = "./documents/個人情報保護方針20230501[1874].pdf"
}