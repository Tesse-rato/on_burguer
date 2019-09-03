#!/bin/bash

url=$1;
index=14;

if test -e $url
	then
		for ur in `cat $url`;
	    do
    	    curl --url $ur -o "tmp/assets/burguer_list${index}.jpg";
			index=$(($index + 1));
	    done
	else
		echo 'Sem links'
		exit 1;
fi
