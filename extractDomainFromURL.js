/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case. */

function domainName(url){
    let slash = url.indexOf("://"),
        www = url.indexOf("www."),
        name = "";
  
    const urlindex = (slash > www) ? slash+3 : (slash < www) ? www+4 : 0 ;   
    
    for (let i=urlindex; i<url.length; i++) {
      if (url[i] == ".") break
      name += url[i]
    }
    return name
  }