var google_event_links =
  "https://calendar.google.com/calendar/u/0/r/eventedit?dates=STARTTIME/ENDTIME&details=General+open+QnA+with+members+of+the+Ivy+team+and+others+in+the+community:+Ask+us+Anything!%0A%0AThere+is+no+particular+agenda,+there+are+no+silly+questions,+just+an+opportunity+for+you+to+ask+anything+you+want,+and+for+us+to+explain+some+of+the+more+complex+aspects+of+Ivy.%0A%0AEveryone%27s+welcome!+:)%0A%0AJoin+here:%0Ahttps://discord.com/events/799879767196958751/990010857373196359&location=Discord:+Ivy+server,+ask-us-anything!&text=Ask+Us+Anything!";
var yahoo_event_links =
  "https://calendar.yahoo.com/?desc=General%20open%20QnA%20with%20members%20of%20the%20Ivy%20team%20and%20others%20in%20the%20community%3A%20Ask%20us%20Anything%21%0A%0AThere%20is%20no%20particular%20agenda%2C%20there%20are%20no%20silly%20questions%2C%20just%20an%20opportunity%20for%20you%20to%20ask%20anything%20you%20want%2C%20and%20for%20us%20to%20explain%20some%20of%20the%20more%20complex%20aspects%20of%20Ivy.%0A%0AEveryone%27s%20welcome%21%20%3A%29%0A%0AJoin%20here%3A%0Ahttps%3A%2F%2Fdiscord.com%2Fevents%2F799879767196958751%2F990010857373196359&et=ENDTIME&in_loc=Discord%3A%20Ivy%20server%2C%20ask-us-anything%21&st=STARTTIME&title=Ask%20Us%20Anything%21&v=60";

const dates = [
  "July 02, 2022 17:00:00 UTC",
  "July 10, 2022 7:00:00 UTC",
  "July 16, 2022 17:00:00 UTC",
  "July 24, 2022 7:00:00 UTC",
  "July 30, 2022 17:00:00 UTC",
  "Aug 07, 2022 7:00:00 UTC",
  "Aug 13, 2022 17:00:00 UTC",
  "Aug 21, 2022 7:00:00 UTC",
  "Aug 27, 2022 17:00:00 UTC",
  "Sep 04, 2022 7:00:00 UTC",
  "Sep 10, 2022 17:00:00 UTC",
  "Sep 18, 2022 7:00:00 UTC",
  "Sep 24, 2022 17:00:00 UTC",
  "Oct 02, 2022 7:00:00 UTC",
  "Oct 08, 2022 17:00:00 UTC",
  "Oct 16, 2022 7:00:00 UTC",
  "Oct 22, 2022 17:00:00 UTC",
  "Oct 30, 2022 7:00:00 UTC",
  "Nov 05, 2022 17:00:00 UTC",
  "Nov 13, 2022 7:00:00 UTC",
  "Nov 19, 2022 17:00:00 UTC",
  "Nov 27, 2022 7:00:00 UTC",
  "Dec 03, 2022 17:00:00 UTC",
  "Dec 11, 2022 7:00:00 UTC",
  "Dec 17, 2022 17:00:00 UTC",
  "Dec 25, 2022 7:00:00 UTC",
  "Dec 31, 2022 17:00:00 UTC",
];

//get the date in terms of time to compare
var times = [];
for (let i = 0; i < dates.length; i++) {
  var newdate = new Date(dates[i]);
  times[i] = newdate.getTime();
}

// get the index of the next event
function checkDate(dat) {
  //get current date in UTC
  var c = new Date();
  var curr_date = new Date(c.toUTCString());
  return dat > curr_date.getTime();
}

var index = times.findIndex(checkDate);
var next_event = new Date(dates[index]);
document.getElementById("utc").innerHTML = next_event.toUTCString();

var local = new Date(next_event.toString());
document.getElementById("local").innerHTML = local;
var l = local.toString();
l = l.split("+")[0];
var k = new Date(l);
k = k.toISOString();
k = k.replace(/[.:-]/g, "");
k = k.slice(0, -4);
//document.getElementById("test").innerHTML = k;

var google_link = document.querySelector("#google_id");
var yahoo_link = document.querySelector("#yahoo_id");

var str = k;
var a = parseInt(str.slice(9, 11)) + 1;
str = str.substring(0, 9) + a + str.substring(11, str.length);

google_link.href = google_event_links
  .replace("STARTTIME", k)
  .replace("ENDTIME", str);
yahoo_link.href = yahoo_event_links
  .replace("STARTTIME", k)
  .replace("ENDTIME", str);
