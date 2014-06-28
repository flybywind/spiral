set -x
username="root@spiral.pro"
passwd="75299115"
host="ftp://ftp.spiral.pro/"
git status |grep -E "modified|new file"|awk '{print $NF}' | \
	while read file;
	do
		file=`echo $file|tr '"' ' '`
		dir=`dirname $file`
		if [ "x$dir" = "x." ];then
			dir=""
		fi
		curl -k --ftp-ssl -T $file $host"$dir/" --user $username:$passwd
	done
set +x
