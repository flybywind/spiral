function blog_struct(tag_name, description, sub_tag)
{
	sub_tag = sub_tag || "";

	return {
		tag: tag_name,
		desc: description,
		stag: sub_tag
	};
}

var blog_dict = {
	"第一篇博客" :
		blog_struct("big_data", "本博主第一篇博客", "hadoop, spark"),
	"第二部小说" :
		blog_struct("thinking", "这是一个复杂的世界")
	};


