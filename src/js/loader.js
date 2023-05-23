// document.addEventListener("DOMContentLoaded", function() {
//     const lazyImages = document.querySelectorAll('img[loading="lazy"]');
//
//     const observer = new IntersectionObserver(function(entries, observer) {
//         entries.forEach(function(entry) {
//             if (entry.isIntersecting) {
//                 const image = entry.target;
//                 const loader = image.parentNode.querySelector('.loader');
//
//                 if (loader && image.complete) {
//                     loader.style.opacity = '0';
//                     loader.style.display = 'none';
//                 } else if(loader){
//                     loader.style.transition = '0.5s';
//                     image.addEventListener("load", function() {
//                         setTimeout(() => {
//                             loader.style.opacity = '0';
//                         }, 500);
//                     });
//                 }
//
//                 observer.unobserve(image);
//             }
//         });
//     });
//
//     lazyImages.forEach(function(image) {
//         observer.observe(image);
//     });
// });
