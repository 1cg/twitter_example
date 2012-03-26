<%@ extends view.TwitterTimelineHelper %>
<%@ params( user: String, tweets : java.util.List<controller.UserTimeline.Element> ) %>
<html>
  <body>
    <form action="${postUrlFor(controller.Main#hitTwitter())}">
      <input name="${controller.Main#hitTwitter().$user}"/><br/>
      <input type="submit"/>
    </form>
    <h1>Tweets for ${user}</h1>
    <ul>
      <% for(tweet in tweets ) { %>
      <li>${linkMentions(tweet.Text)}</li>
      <% } %>
    </ul>
  </body>
</html>