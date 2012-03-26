package view

uses ronin.RoninTemplate
uses java.lang.StringBuilder
uses java.util.StringTokenizer

class TwitterTimelineHelper extends RoninTemplate {

  static function linkMentions(tweet : String) : String {
    var sb = new StringBuilder()
    
    var tokenizer = new StringTokenizer(tweet, " ", true)
    
    while(tokenizer.hasMoreTokens()) {
      var token = tokenizer.nextToken()
      if(token.startsWith("@")) {
        sb.append("<a href='")
        sb.append(urlFor(controller.Main#hitTwitter(token.substring(1))))
        sb.append("'>")
        sb.append(token)
        sb.append("</a>")
      } else {
        sb.append(token)
      }
    }
    return sb.toString()
  }
  
}