//Scrape adage
$("#scrape_btn").on("click",function(){
   $.post("/scrape",{},function(data){
       location.reload();
   })
});

// Save the article
$(".save_article").on("click",function(){
    console.log("something");
    var this_article = {
        title: $(this).attr("title"),
        link: $(this).attr("link"),
        author:$(this).attr("story-byline")
    };
    $.post("/save_article",this_article,function(data){
        alert("article saved: " + data.title)
    })
});

// Save article notes
$(".submit_note").on("click",function(){
    var article_id = $(this).attr("value");
    var note = {
        id: article_id,
        text: $("#note_text_" + article_id).val()
    }
    $.post("/save_note",note,function(data){
        //alert("you saved: " + data.title);
        $("#" + article_id).modal('hide');
    })
});


// Delete the note
$(".delete_note").on("click",function(){
    var note = $(this).attr("value");
    var delete_info = {
        text: note
    }
    $.post("/delete_note",delete_info,function(data){
        $(".modal").modal('hide');
        location.reload();
    })
});

// Delete the article
$(".delete_article").on("click",function(){
    var article = $(this).attr("value");
    var delete_info = {
        id: article
    };
    $.post("/delete_article",delete_info,function(data){
        $("#container_" + article).css("display","none");
    })
});