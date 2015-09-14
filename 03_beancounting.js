function countChar(string,ch) {
  	var counted = 0;
	for (var x = 0; x < string.length; x++)
      if (string.charAt(x) == ch)
        counted += 1;
  		return counted;
}

function countBs(string) {
	return countChar(string,"B");
}