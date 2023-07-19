const header = document.querySelector("header");
window.addEventListener ("scroll",function(){
    header.classList.toggle ("sticky",window.scrollY > 100);
});
function MyCv(){
    var link = document.createElement('link');
    //creating a downloading file
    link.href = 'file:///C:/Users/thaku/Documents/GitHub/foilo/assest%20image/mycv.pdf';
    link.download = 'LagzenThakuri.png';
    //simulating a click on the download link
    document.body.appendChild(link);
    link.click();
    // clean up temporary link elements
    document.body.removeChild(link);
}