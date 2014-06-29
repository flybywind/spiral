var subtag_cnt = {};

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
var blog_dict = {
// blog_struct:	
"simrank原理":
	blog_struct("big_data",
		"如果你可以把手头的问题抽象成一个graph，并且你已知了某些节点的类    型，想知道其他节点和这些已知节点的相似度，simrank可能是一个比较好的方案。",
		"2014/06/29 22:44",
		"simrank-intro",
		subtag("graph")),
"cycle detect: 龟兔赛跑算法":
	blog_struct("prog",
		"给定一个链表，判断这个链表中是否存在环，有的话给出环的位置和长度",
		"2014/06/28 22:11",
		"cycle-detect-hare-tor",
		subtag("job-interview")),
	"PLSA && LDA对比":
		blog_struct("big_data", 
				"二者都有一个doc-topic、topic-word 分布，但是plsa把他们看成固定的参数，而LDA则把他们看成随机变量，用Dirichlet分布来表示先验概率。", "2014/06/26 21:55", "PLSA--vs--LDA", subtag("nlp")),
	"圆内2n个点求n个不交叉弦的画法" :
		blog_struct("prog", "Given 2n points on a circle.find the number of ways to draw n non intersecting chords.", "2014/06/25 23:53","nonintersect-chord-2n-points-in-circle", subtag("job-interview")), 
	"面试题" :
		blog_struct("prog", "收集的一些面试题，详见<a href='https://github.com/flybywind/job_review'>github</a>", "2014/06/25 08:53", "README", subtag("job-interview")),
	"使用curl结合git实现文件自动上传" :
		blog_struct("prog", 
				"折腾了好几个mac ftpclient，最后发现还是curl最好使", "2014/06/24 23:52", "upload-file-by-curl", subtag("web")),
	"无题小诗" :
		blog_struct("thinking", "凭栏浮旧事， 闲坐惹凉思", "2014/06/20 00:51", "poem"),
	};
