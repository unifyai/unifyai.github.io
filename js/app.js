var google_event_links =
  "https://calendar.google.com/calendar/u/0/r/eventedit?dates=STARTTIME/ENDTIME&details=General+open+QnA+with+members+of+the+Ivy+team+and+others+in+the+community:+Ask+us+Anything!%0A%0AThere+is+no+particular+agenda,+there+are+no+silly+questions,+just+an+opportunity+for+you+to+ask+anything+you+want,+and+for+us+to+explain+some+of+the+more+complex+aspects+of+Ivy.%0A%0AEveryone%27s+welcome!+:)%0A%0AJoin+here:%0Ahttps://discord.com/events/799879767196958751/990010857373196359&location=Discord:+Ivy+server,+ask-us-anything!&text=Ask+Us+Anything!";
var yahoo_event_links =
  "https://calendar.yahoo.com/?desc=General%20open%20QnA%20with%20members%20of%20the%20Ivy%20team%20and%20others%20in%20the%20community%3A%20Ask%20us%20Anything%21%0A%0AThere%20is%20no%20particular%20agenda%2C%20there%20are%20no%20silly%20questions%2C%20just%20an%20opportunity%20for%20you%20to%20ask%20anything%20you%20want%2C%20and%20for%20us%20to%20explain%20some%20of%20the%20more%20complex%20aspects%20of%20Ivy.%0A%0AEveryone%27s%20welcome%21%20%3A%29%0A%0AJoin%20here%3A%0Ahttps%3A%2F%2Fdiscord.com%2Fevents%2F799879767196958751%2F990010857373196359&et=ENDTIME&in_loc=Discord%3A%20Ivy%20server%2C%20ask-us-anything%21&st=STARTTIME&title=Ask%20Us%20Anything%21&v=60";

const events = [
  { date: "July 02, 2022 17:00:00 UTC", link: "abc" },
  { date: "July 10, 2022 7:00:00 UTC", link: "abc" },
  { date: "July 16, 2022 17:00:00 UTC", link: "abc" },
  { date: "July 24, 2022 7:00:00 UTC", link: "abc" },
  { date: "July 30, 2022 17:00:00 UTC", link: "abc" },
  { date: "Aug 07, 2022 7:00:00 UTC", link: "abc" },
  { date: "Aug 13, 2022 17:00:00 UTC", link: "abc" },
  { date: "Sep 04, 2022 7:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990850048726274068" },
  { date: "Sep 10, 2022 17:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990851728167551046" },
  { date: "Sep 18, 2022 7:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990851848460189698" },
  { date: "Sep 24, 2022 17:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990851987388125205" },
  { date: "Oct 02, 2022 7:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990852226970968144" },
  { date: "Oct 08, 2022 17:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990852322588504084" },
  { date: "Oct 16, 2022 7:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990852411067351080" },
  { date: "Oct 22, 2022 17:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990852526163234817" },
  { date: "Oct 30, 2022 7:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990852636582490202" },
  { date: "Nov 05, 2022 17:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990852915742769172" },
  { date: "Nov 13, 2022 7:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990853004989202452" },
  { date: "Nov 19, 2022 17:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990853112413691904" },
  { date: "Nov 27, 2022 7:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990853201219715122" },
  { date: "Dec 03, 2022 17:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990853300515667998" },
  { date: "Dec 11, 2022 7:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990853381327298561" },
  { date: "Dec 17, 2022 17:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990853752141533204" },
  { date: "Dec 25, 2022 7:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990853839190126612" },
  { date: "Dec 31, 2022 17:00:00 UTC", link: "https://discord.gg/TnXdCTcR?event=990853953812070490" },
];


//get the date in terms of time to compare
let times = [];
let links = []
for (let i = 0; i < events.length; i++) {
  const newdate = new Date(events[i]['date']);
  times[i] = newdate.getTime();
  links[i] = events[i]['link'];
}

// get the index of the next event
function checkDate(dat) {
  //get current date in UTC
  let c = new Date();
  let curr_date = new Date(c.toUTCString());
  return dat > curr_date.getTime();
}

const index = times.findIndex(checkDate);
const next_event = new Date(events[index]['date']);
const next_link = events[index]['link']

const local = new Date(next_event.toString());
const offset = local.getTimezoneOffset();
const timeString = `${Math.floor(Math.abs(offset / 60))
  .toString()
  .padStart(2, "0")}:${Math.abs(offset % 60)
  .toString()
  .padStart(2, "0")}`;
const timezone = offset > 0 ? `${timeString}` : `+${timeString}`;
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
document.getElementById("local").innerHTML = `<a href="${next_link}" target="_blank">${
  monthNames[local.getMonth()]
} ${local.getDate()}, ${local.getHours().toString().padStart(2, "0")}:${local
  .getMinutes()
  .toString()
  .padStart(2, "0")} (GMT${timezone})</a>`;
let l = local.toString();
l = l.split("+")[0];
let k = new Date(l);
k = k.toISOString();
k = k.replace(/[.:-]/g, "");
k = k.slice(0, -4);
//document.getElementById("test").innerHTML = k;

const google_link = document.querySelector("#google_id");
const yahoo_link = document.querySelector("#yahoo_id");

let str = k;
let a = parseInt(str.slice(9, 11)) + 1;
str = str.substring(0, 9) + a + str.substring(11, str.length);

google_link.href = google_event_links
  .replace("STARTTIME", k)
  .replace("ENDTIME", str);
yahoo_link.href = yahoo_event_links
  .replace("STARTTIME", k)
  .replace("ENDTIME", str);
