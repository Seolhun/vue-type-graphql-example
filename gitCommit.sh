git add .
msg = ""
if [ $# -eq 1 ]
	then msg="$1"
fi
git commit -m "$msg"
