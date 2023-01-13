var chr = -1;
var txt = 'Hello,Glad to see you on my site!';
var l = txt.length;
var p = "_";
function printtext()
{
    chr++;
    t = document.all["text"].innerHTML;
    tt = t.substring(0,t.length-p.length);
    if(txt.charAt(chr)!="<")
    {
        document.all["text"].innerHTML= tt + txt.charAt(chr) + p;
    }
    else {
        document.all["text"].innerHTML= tt + txt.substring(chr, chr+4) + p;
        chr=chr+3;
    }
    setTimeout("printtext()", 40);
}
function str(num) {
    var s = "";
    for(i=0; i<num; i++) {
        s = s + " ";
    }
    return s ;
}
