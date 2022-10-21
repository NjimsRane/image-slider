const reviews =[
    {
        id:1,
        img:"/images/blog-1.jpg"
    },
    {
        id:2,
        img:"/images/blog-2.jpg"
    },
    {
        id:3,
        img:"/images/blog-3.jpg"
    },
    {
        id:4,
        img:"/images/blog-4.jpg"
    },
    {
        id:5,
        img:"/images/blog-5.jpg"
    },
    {
        id:6,
        img:"/images/blog-6.jpg"
    },
    {
        id:7,
        img:"/images/blog-7.jpg"
    },
    {
        id:8,
        img:"/images/blog-8.jpg"
    },
    {
        id:9,
        img:"/images/blog-9.jpg"
    },
    {
        id:10,
        img:"/images/blog-10.jpg"
    },
    {
        id:11,
        img:"/images/blog-11.jpg"
    },
    {
        id:12,
        img:"/images/blog-12.jpg"
    },
    {
        id:13,
        img:"/images/blog-13.jpg"
    },
    {
        id:14,
        img:"/images/blog-14.jpg"
    },
    {
        id:15,
        img:"/images/blog-15.jpg"
    },
    {
        id:16,
        img:"/images/blog-16.jpg"
    },
    {
        id:17,
        img:"/images/blog-17.jpg"
    },
   
];
const imgShow = document.querySelector(".imgShow");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

let sliderShow = 0;
// infinit slideshow
/*function imageShow(){
    let item = reviews[sliderShow];
     sliderShow++;
     if(sliderShow > reviews.length - 1){
         sliderShow = 0;
     }
     imgShow.src = item.img;
}
setInterval(imageShow,1000);
*/
function imageShow(){
    let item = reviews[sliderShow];
    imgShow.src = item.img;
}
// use button to slide

// next slide
nextBtn.addEventListener("click",function(){
    sliderShow++;
    if(sliderShow > reviews.length - 1){
        sliderShow = 0;
    }
    imageShow();
});

// preview slide
prevBtn.addEventListener("click",function(){
    sliderShow--;
    if(sliderShow < 0){
        sliderShow = reviews.length -1;
    }
    imageShow();
});



