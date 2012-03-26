package controller

uses ronin.*

/**
 * This is the default out of the box controller.  You can modify it or set a different
 * default controller in config.RoninConfig
 */
class Main extends RoninController {

  function index() {
    view.Main.render(Writer)
  }

  function helloRonin() : String {
    return "Hello Ronin!!!!!!!"
  }

  function hitTwitter(user = "carson_gross") {
    var tweets = controller.UserTimeline.get("https://api.twitter.com/1/statuses/user_timeline.json", {
      "screen_name" -> user
    })
    view.TwitterTimeline.render(Writer, user, tweets)
  }

}