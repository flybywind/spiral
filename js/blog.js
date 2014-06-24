$(function (){
	var blog_post = $(".blog-main");	
	function show_blog(tag_name)
	{
		blog_post.empty();
		$.each(blog_dict, function (blog_name, blog_info){
			if (tag_name != "all" && tag_name != blog_info.tag)
			{
				return;
			}
			var tag_str = blog_info.stag == "" ? blog_info.tag : blog_info.tag + "["+blog_info.stag+"]"; 
			var html_str = "<div class='blog-post'>" + 
								"<h2 class='blog-post-title'>" + blog_name + "</h2>" + 
									"<p>" + blog_info.desc +' <a href="./' + 
									blog_info.tag + "/" + blog_name + ".html" + '">more...</a></p>' +
									'<p class="blog-post-meta">tag: ' + tag_str + '</p>' +
							"</div>";
			blog_post.append(html_str);	
		});
	}
	function switch_active(prev_active, cur_active){
		$(prev_active).attr("class", "blog-nav-item");
		$(cur_active).attr("class", "blog-nav-item active");
		return $(cur_active);
	}

	show_blog("all");
	var prev_active = $("#nav-blog-home");

	$("#nav-blog-home").click(function (){
		show_blog("all");
		prev_active = switch_active(prev_active, this);
	}
	);
	$("#nav-blog-big_data").click(function (){
		show_blog("big_data");
		prev_active = switch_active(prev_active, this);
	}
	);
	$("#nav-blog-prog").click(function (){
		show_blog("prog");
		prev_active = switch_active(prev_active, this);
	}
	);
	$("#nav-blog-thinking").click(function (){
		show_blog("thinking");
		prev_active = switch_active(prev_active, this);
	}
	);

});
