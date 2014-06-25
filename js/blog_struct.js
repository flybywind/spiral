var subtag_cnt = {};

function blog_struct(tag_name, description, time, sub_tag)
{
	sub_tag = sub_tag || "";

	return {
		tag: tag_name,
		desc: description,
		time: time,
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
var blog_dict = {
	"第一篇博客" :
		blog_struct("big_data", "本博主第一篇博客", "2014/06/24 23:52", subtag("hadoop", "spark")),
	"第二部小说" :
		blog_struct("thinking", "这是一个复杂的世界", "2014/06/24 23:53", subtag("spark")), 
	"第3部小说" :
		blog_struct("thinking", "这是一个复杂的世界", "2014/06/25 08:53")
	};
