$(function (){
	var blog_post = $(".blog-main");	
	function show_blog(tag_name, type)
	{
		blog_post.empty();
		type = type || "tag";
		$.each(blog_dict, function (blog_name, blog_info){
			if (tag_name != "all" && blog_info[type].indexOf(tag_name) < 0)
			{
				return;
			}
			var tag_str = blog_info.tag + blog_info.stag; 
			var html_str = "<div class='blog-post'>" + 
								"<h2 class='blog-post-title'>" + blog_name + "</h2>" + 
									"<p>" + blog_info.desc +' <a href="./' + 
									blog_info.tag + "/" + blog_info.html + ".html" + '">more...</a></p>' +
									'<p class="blog-post-meta">' + 
									'<span class="label label-default">tag: ' + tag_str + "</span>" + blog_info.time + '</p>' +
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

	$.each(subtag_cnt, function(stag, cnt){
		var list_html = '<h4><a class="tags-cnt" href="#" alt= "' + stag + '" style="marging-top:5px; margin-bottom:5px;">' +
						'<span class="label label-primary">' + 
						stag + ' ×' + cnt +
						'</span></a></h4>';
		$("#tags-list").append(list_html);
	});
	$(".tags-cnt").click(function(){
		var stag = $(this).attr("alt");
		show_blog(stag, "stag");	
	});
});
var subtag_cnt = {}
function blog_struct(tag_name, description, time, html, sub_tag)
{
	sub_tag = sub_tag || "";

	return {
		tag: tag_name,
		desc: description,
		time: time,
		html: html,
		stag: sub_tag
	};
}
function subtag()
{
	var ret_str = "[";
	arg_len = arguments.length;
	$.each(arguments, function(i, v){
		if (subtag_cnt.hasOwnProperty(v))
			subtag_cnt[v]++;
		else
			subtag_cnt[v] = 1;
		if (i < arg_len - 1)
			ret_str += (v + ", ");
		else
			ret_str += (v + "]");
	});
	return ret_str;
}
