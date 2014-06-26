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
	"PLSA--vs--LDA":
		blog_struct("big_data", "二者都有一个doc-topic、topic-word 分布，但是plsa把他们看成固定的参数，而LDA则把他们看成随机变量，用Dirichlet分布来表示先验概率。", "2014/06/26 21:55", subtag("nlp")),
	"upload-file-by-curl" :
		blog_struct("prog", "折腾了好几个mac ftpclient，最后发现还是curl最好使", "2014/06/24 23:52", subtag("web")),
	"nonintersect-chord-2n-points-in-circle" :
		blog_struct("prog", "Given 2n points on a circle.find the number of ways to draw n non intersecting chords.", "2014/06/24 23:53", subtag("job-interview")), 
	"job-interview" :
		blog_struct("prog", "收集的一些面试题，详见github", "2014/06/25 08:53", subtag("job-interview"))
	};
