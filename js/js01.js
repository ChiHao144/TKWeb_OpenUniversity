
/*const toP = document.querySelector(".header");*/
window.addEventListener("scroll", function(){
    if(this.scrollY > 60){
        document.querySelector(".container").classList.add("active");
    } else {
       this.document.querySelector(".container").classList.remove("active");
    }
});
window.addEventListener("scroll", function(){
    if(this.scrollY > 60){
        document.querySelector(".tool").classList.add("active-menu");
    } else {
       this.document.querySelector(".tool").classList.remove("active-menu");
    }
    var tool = document.querySelector(".tool");
    var toolPosition = tool.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
  
    if (toolPosition < screenHeight) {
        tool.classList.add("active-scroll");
    } else {
        tool.classList.remove("active-scroll");
    }

});

$(document).ready(() => {
    let n =$(".thongbao > div").length;
    let h = "";
    for (let i = 0; i < n; i++)
    h +=      
   ` <button class = "digit">${i + 1}</button>   
    `;
    $(".thongbao-button :first-child").after(h);
    $(".thongbao").height($(".thongbao img").height() + 5);
    let current = -1;
let showThongbao = (current) =>{
    $(".thongbao > div").hide();
    $(".thongbao > div").eq(current).show();

    $("button.digit").removeClass("active");
    $("button.digit").eq(current).addClass("active");
}
$("button.digit").click(function(){
    current = parseInt($(this).text()) - 1;
    showThongbao(current);
});

$(".next").click(function() {
    current++;
    if (current === n)
    current = 0;
showThongbao(current);

    clearInterval(timer);
    runThongbao();

});

$(".prev").click(function() {
    current--;
    if (current < 0)
    current = n - 1;
showThongbao(current);
});

let timer = null;
let runThongbao = () => {
    timer = setInterval(() => {
        $(".next").click();
    }, 3000);
};
runThongbao();

});

window.addEventListener('scroll', function() {
    var numberElements = document.querySelectorAll('.number');
    var windowHeight = window.innerHeight;
  
    numberElements.forEach(function(numberElement) {
        var numberValue = 0;
        var elementTop = numberElement.getBoundingClientRect().top;
    
        if (elementTop < windowHeight) {
            numberElement.classList.add('ou-active');
            var count = parseInt(numberElement.getAttribute('data-count'));
            var increment = Math.ceil(count / 100); // Số lần tăng trong khoảng thời gian
            var interval = setInterval(function() {
                numberValue += increment;
                if (numberValue >= count) {
                    numberValue = count;
                    clearInterval(interval);
                }
                numberElement.innerText = numberValue;
            }, 10);
        }
    });
});

