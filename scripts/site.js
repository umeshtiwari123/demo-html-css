function ClearForm(){
    // alert("You Clicked Clear");
    //document.getElementById("fullname").value = '';
    document.getElementById("contactSite").reset();
}

function hidePTags(){
    let ptags = document.getElementsByTagName('p');
    for(let item of ptags){
        // item.style.visibility = 'hidden'; //removes elements , leaves spaces
        item.style.display='none'; // remove elements and remove space
    }
}

$('#jqueryBtn').click(function(){
    $('p').hide();
})

$(function(){
    var pages = ['index','about','contact'];
    var pathname = window.location.pathname;

    $('.nav-link').each(function(item){
        if(pathname.includes(pages[item])){
            $(this).addClass('active');
            $(this).attr('aria-current', 'page');
        }
    })
});