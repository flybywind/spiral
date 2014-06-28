#!/bin/sh
while read type value;
do
	eval "$type=\"\$value\""
done < $1
echo "title:$title"
echo "tag:$tag"
echo "description:$description"
echo "subtag:$subtag"
date_stamp=`date "+%Y/%m/%d %H:%M"`
#if [ 0 -eq 1 ];then

awk -v title="$title" \
   	-v tag="$tag" \
   	-v subtag="$subtag" \
	-v description="$description" \
	-v date_stamp="$date_stamp" \
	-v html="$html"	'{
	print $0
}
/^\/\/ blog_struct:/{
	printf("\"%s\":\n\tblog_struct(\"%s\",", title, tag) 
	printf("\n\t\t\"%s\",", description)
	printf("\n\t\t\"%s\",", date_stamp)
	printf("\n\t\t\"%s\",", html)
	printf("\n\t\t\"%s\"),\n", subtag)
}' js/blog_struct.js > js/blog_struct2.js

awk -v title="$title" '{
	print $0
}
/<!--title><\/title-->/{
	print "<title>"title"<\/title>"
}
/<!--h1 class=\"blog-title\"><\/h1-->/{
	print "<h1 class=\"blog-title\">"title"<\/h1>"
}
' template.blog.html > $tag/$html.html

mv js/blog_struct.js  js/blog_struct.js.bak
mv js/blog_struct2.js js/blog_struct.js


git add js/blog_struct.js
git add $tag/$html.html
