'use strict';

// Define the controller.
var bitrateinfo = {
  query: new Array(2),
  values: new Array(),
  data: [
    // Time:
    {
      canonical: "seconds",
      singular: "second",
      lexicon: "sec secs second seconds",
      identifier: "unit",
      datatype: "time",
      magnitude: 1
    },
    {
      canonical: "minutes",
      singular: "minute",
      lexicon: "min mins minute minutes",
      identifier: "unit",
      datatype: "time",
      magnitude: 60,
    },
    {
      canonical: "hours",
      singular: "hour",
      lexicon: "hr hrs hour hours",
      identifier: "unit",
      datatype: "time",
      magnitude: 3600
    },
    // Rate:
    {
      canonical: "bits per second",
      singular: "bit per second",
      lexicon: "bits bits/s b/s bps",
      identifier: "unit",
      datatype: "rate",
      magnitude: 1
    },
    {
      canonical: "kilobits per second",
      singular: "kilobit per second",
      lexicon: "kilobits kilobits/s kb/s kbps",
      identifier: "unit",
      datatype: "rate",
      magnitude: 1000
    },
    {
      canonical: "megabits per second",
      singular: "megabit per second",
      lexicon: "megabits megabits/s mb/s mbps",
      identifier: "unit",
      datatype: "rate",
      magnitude: 1000000,
      preference: true
    },
    {
      canonical: "gigabits per second",
      singular: "gigabit per second",
      lexicon: "gigabits gigabits/s gb/s gbps",
      identifier: "unit",
      datatype: "rate",
      magnitude: 1000000000
    },
    {
      canonical: "megabytes per second",
      singular: "megabyte per second",
      lexicon: "m/s",
      identifier: "unit",
      datatype: "rate",
      magnitude: 8000000
    },
    {
      canonical: "gigabytes per second",
      singular: "gigabyte per second",
      lexicon: "g/s",
      identifier: "unit",
      datatype: "rate",
      magnitude: 8000000000
    },
    // Size:
    {
      canonical: "bytes",
      singular: "byte",
      lexicon: "byte bytes",
      identifier: "unit",
      datatype: "size",
      magnitude: 1
    },
    {
      canonical: "kilobytes",
      singular: "kilobyte",
      lexicon: "kilobyte kilobytes KB KBs kilo kilos",
      identifier: "unit",
      datatype: "size",
      magnitude: 1000
    },
    {
      canonical: "megabytes",
      singular: "megabyte",
      lexicon: "megabyte megabytes MB MBs meg megs",
      identifier: "unit",
      datatype: "size",
      magnitude: 1000000,
      preference: true
    },
    {
      canonical: "gigabytes",
      singular: "gigabyte",
      lexicon: "gigabyte gigabytes GB GBs gig gigs",
      identifier: "unit",
      datatype: "size",
      magnitude: 1000000000
    },
    {
      canonical: "terabytes",
      singular: "terabyte",
      lexicon: "terabyte terabytes TB TBs",
      identifier: "unit",
      datatype: "size",
      magnitude: 1000000000000
    },
    {
      canonical: "kibibytes",
      singular: "kibibyte",
      lexicon: "kibibyte kibibytes KiB KiBs",
      identifier: "unit",
      datatype: "size",
      magnitude: 1024
    },
    {
      canonical: "mebibytes",
      singular: "mebibyte",
      lexicon: "mebibyte mebibytes MiB MiBs",
      identifier: "unit",
      datatype: "size",
      magnitude: 1048576
    },
    {
      canonical: "gibibytes",
      singular: "gibibyte",
      lexicon: "gibibyte gibibytes GiB GiBs",
      identifier: "unit",
      datatype: "size",
      magnitude: 1073741824
    },
    {
      canonical: "tebibytes",
      singular: "tebibyte",
      lexicon: "tebibyte tebibytes TiB TiBs",
      identifier: "unit",
      datatype: "size",
      magnitude: 1099511627776
    },
    // Keywords:
    {
      canonical: "CD-R 74 minutes (Audio)",
      lexicon: "cd",
      identifier: "keyword",
      datatype: "size",
      quantity: 783216000,
      magnitude: 1
    },
    {
      canonical: "CD-R 80 minutes (Mode 1)",
      lexicon: "cdr cdrom",
      identifier: "keyword",
      datatype: "size",
      quantity: 737280000,
      magnitude: 1
    },
    {
      canonical: "DVD±R SL",
      lexicon: "dvd dvdr dvdsl dvd5",
      identifier: "keyword",
      datatype: "size",
      quantity: 4707319808,
      magnitude: 1
    },
    {
      canonical: "DVD±R DL",
      lexicon: "dvddl dvd9",
      identifier: "keyword",
      datatype: "size",
      quantity: 8543666176,
      magnitude: 1
    },
    {
      canonical: "BD-R 25 GB",
      lexicon: "bdr25",
      identifier: "keyword",
      datatype: "size",
      quantity: 25000000000,
      magnitude: 1
    },
    {
      canonical: "BD-R 50 GB",
      lexicon: "bdr50",
      identifier: "keyword",
      datatype: "size",
      quantity: 50000000000,
      magnitude: 1
    },
    {
      canonical: "BD-ROM 66 GB",
      lexicon: "bdr66",
      identifier: "keyword",
      datatype: "size",
      quantity: 66800000000,
      magnitude: 1
    },
    {
      canonical: "BD-ROM 100 GB",
      lexicon: "bdr100",
      identifier: "keyword",
      datatype: "size",
      quantity: 100200000000,
      magnitude: 1
    },
    {
      canonical: "Sony XDCAM EX",
      lexicon: "xdcamex",
      identifier: "keyword",
      datatype: "rate",
      quantity: 35000000,
      magnitude: 1
    },
    {
      canonical: "Sony HDCAM",
      lexicon: "hdcam",
      identifier: "keyword",
      datatype: "rate",
      quantity: 135000000,
      magnitude: 1
    },
    {
      canonical: "Sony HDCAM SR",
      lexicon: "hdcamsr",
      identifier: "keyword",
      datatype: "rate",
      quantity: 440000000,
      magnitude: 1
    },
    {
      canonical: "Avid DNxHD 145",
      lexicon: "dnxhd dnxhd145",
      identifier: "keyword",
      datatype: "rate",
      quantity: 145000000,
      magnitude: 1
    },
    {
      canonical: "Avid DNxHD 220",
      lexicon: "dnxhd220",
      identifier: "keyword",
      datatype: "rate",
      quantity: 220000000,
      magnitude: 1
    },
    {
      canonical: "Compact Disc Digital Audio",
      lexicon: "cdda audio",
      identifier: "keyword",
      datatype: "rate",
      quantity: 1411200,
      magnitude: 1
    },
    {
      canonical: "PCM Stereo 48 KHz 16-Bit",
      lexicon: "pcm stereo",
      identifier: "keyword",
      datatype: "rate",
      quantity: 1536000,
      magnitude: 1
    },
    {
      canonical: "PCM Mono 48 KHz 16-Bit",
      lexicon: "mono",
      identifier: "keyword",
      datatype: "rate",
      quantity: 768000,
      magnitude: 1
    },
    {
      canonical: "PCM Stereo 48 KHz 32-Bit",
      lexicon: "float",
      identifier: "keyword",
      datatype: "rate",
      quantity: 3072000,
      magnitude: 1
    },
    {
      canonical: "MP3 128 Kbps",
      lexicon: "mp3",
      identifier: "keyword",
      datatype: "rate",
      quantity: 128000,
      magnitude: 1
    }
  ],
  examples: [
    "5 mins at 800 Kbps",
    "1 hour of xdcam-ex in GBs",
    "60 minutes on bdr25",
    "How much audio fits on a cd?",
    "40 gigs of dnxhd",
    "10 secs @ 50 mbps",
    "2 hours on bdr100",
    "25 mbps for 63 minutes",
    "Size of 25 mins at 8 Mb/s",
    "dvd9 at 8 mbps in hours",
    "stereo for 8 hours",
    "hdcam-sr on bdr-50 hrs",
    "Mbps, 35 minutes, 25gb file?",
    "1.2 Gbps for 60 secs",
    "1 Mbps on cdr",
    "cdda on cd",
    "2 hours on bdr50",
    "Bitrate for 25 min on bdr66?",
    "90 mins at 50 mb/s in GiB",
    "120 minutes on DVD-DL in kbps",
    "dnxhd220 for 180 mins in GiB",
    "float on cdr",
    "30 minutes of hdcam in GB",
    "mono for 2.5 hours",
    "2 hours of mp3",
    "bdr100 at 100mbps",
    "2 hours 100 gigs",
    "1 hour mp3 in mebibytes",
    "dnxhd220 1 TB in mins",
    "5 hrs cdr in mb/s",
    "10 min @ 100 m/s",
    "bdr25 at 75 mb/s in min"
  ],
  ui: {
    container: undefined,
    form: undefined,
    input: undefined,
    result: undefined,
    example: undefined,
    lexicon: undefined
  },
  fn: {
    init: function() {
      // Define UI elements.
      bitrateinfo.ui.container = document.getElementById("bitrateinfo_container");
      bitrateinfo.ui.form = document.getElementById("bitrateinfo_form");
      bitrateinfo.ui.input = document.getElementById("bitrateinfo_input");
      bitrateinfo.ui.result = document.getElementById("bitrateinfo_result");
      bitrateinfo.ui.example = document.getElementById("button_example");
      bitrateinfo.ui.lexicon = document.getElementById("switch_lexicon");

      // Add handlers.
      window.addEventListener(
        "popstate",
        bitrateinfo.fn.popstate
      );

      bitrateinfo.ui.form.addEventListener(
        "submit",
        bitrateinfo.fn.change
      );

      bitrateinfo.ui.input.addEventListener(
        "change",
        bitrateinfo.fn.change
      );

      bitrateinfo.ui.example.addEventListener(
        "click",
        bitrateinfo.fn.show_example
      );

      bitrateinfo.ui.lexicon.addEventListener(
        "click",
        bitrateinfo.fn.toggle_lexicon
      );

      // Unhide the app.
      bitrateinfo.ui.container.classList.remove("hidden");

      // Get query param.
      bitrateinfo.fn.get_query();
    },
    reset: function() {
      bitrateinfo.query[0] = new Array();
      bitrateinfo.query[1] = new Array();
      bitrateinfo.values = new Array();

      bitrateinfo.ui.result.classList.add("hidden");
      bitrateinfo.ui.form.classList.remove("error");

      document.getElementById("bitrateinfo_value0").innerHTML = "";
      document.getElementById("bitrateinfo_value1").innerHTML = "";
      document.getElementById("bitrateinfo_value2").innerHTML = "";
    },
    prepare: function() {
      var found;
      var query = bitrateinfo.ui.input.value;

      // Convert all white space to a single space.
      query = query.replace(/\s+/g, " ");

      // Strip irrelevant chars.
      query = query.replace(/[^A-Za-z0-9.\/ ]/g, "");

      // Separate units, e.g. "1GB" => "1 GB"
      query = query.replace(/([0-9])([A-Za-z])/g, "$1 $2");

      // Split the query into an array.
      bitrateinfo.query[0] = query.split(" ").filter(
        (item) => item !== ""
      );

      // Set "parsed" flags to false.
      for (var z = 0; z < bitrateinfo.query[0].length; z++) {
         bitrateinfo.query[1][z] = false;
      }
    },
    popstate: function(e) {
      e.preventDefault();

      if (typeof e.state === "string") {
        bitrateinfo.ui.input.value = e.state;
        bitrateinfo.fn.analyze();
      }
    },
    change: function(e) {
      e.preventDefault();
      bitrateinfo.fn.analyze();
      bitrateinfo.fn.set_query();
    },
    analyze: function() {
      bitrateinfo.fn.reset();
      bitrateinfo.fn.prepare();

      for (var z = 0; z < bitrateinfo.query[0].length; z++) {
         bitrateinfo.fn.parse(z);
      }

      bitrateinfo.fn.calculate();
      bitrateinfo.fn.display();
    },
    parse: function(z) {
      var parsed = {
        identifier: undefined,
        datatype: undefined,
        magnitude: undefined,
        quantity: undefined,
        canonical: undefined,
        singular: undefined
      };

      // Check the "parsed" flag before proceeding.
      if (!bitrateinfo.query[1][z]) {

        // Word is NaN - do heuristic analysis.
        if (isNaN(bitrateinfo.query[0][z])) {
          // Iterate over items in the data.
          heuristics: {
            for (var x = 0; x < bitrateinfo.data.length; x++) {
              var lexicon = bitrateinfo.data[x].lexicon.split(" ");

              // Iterate over the lexicon for this item.
              for (var y = 0; y < lexicon.length; y++) {
                if (
                  lexicon[y].toLowerCase()
                  ==
                  bitrateinfo.query[0][z].toLowerCase()
                ) {
                  parsed.identifier = bitrateinfo.data[x].identifier;
                  parsed.datatype = bitrateinfo.data[x].datatype;
                  parsed.magnitude = bitrateinfo.data[x].magnitude;
                  parsed.canonical = bitrateinfo.data[x].canonical;

                  if (bitrateinfo.data[x].identifier != "keyword")
                    parsed.singular = bitrateinfo.data[x].singular;

                  if (bitrateinfo.data[x].identifier == "keyword") {
                    // Found a keyword!
                    bitrateinfo.values.push(
                      {
                        identifier: "keyword",
                        datatype: bitrateinfo.data[x].datatype,
                        quantity: bitrateinfo.data[x].quantity,
                        magnitude: bitrateinfo.data[x].magnitude,
                        canonical: bitrateinfo.data[x].canonical
                      }
                    );
                  } else if (
                    bitrateinfo.values.length == 2
                    && bitrateinfo.data[x].identifier == "unit"
                  ) {
                    // Found a hint!
                    bitrateinfo.values.push(
                      {
                        identifier: bitrateinfo.data[x].identifier,
                        datatype: bitrateinfo.data[x].datatype,
                        quantity: bitrateinfo.data[x].quantity,
                        magnitude: bitrateinfo.data[x].magnitude,
                        canonical: bitrateinfo.data[x].canonical,
                        singular: bitrateinfo.data[x].singular
                      }
                    );
                  }

                  break heuristics;
                }
              }
            }
          }

        // Word is a number.
        } else if (
          isFinite(bitrateinfo.query[0][z].valueOf())
          && (bitrateinfo.query[0][z].valueOf() > 0)
        ) {
          parsed.identifier = "number";
          parsed.quantity = bitrateinfo.query[0][z].valueOf();

          // Read ahead in search of a unit for this number.
          if (bitrateinfo.query[0].length > (z + 1)) {
            var readAhead = bitrateinfo.fn.parse(z + 1);

            if (readAhead.identifier == "unit") {
              // Found a value!
              bitrateinfo.values.push(
                {
                  identifier: "value",
                  datatype: readAhead.datatype,
                  quantity: bitrateinfo.query[0][z].valueOf(),
                  magnitude: readAhead.magnitude,
                  canonical: readAhead.canonical,
                  singular: readAhead.singular
                }
              );
            }
          }
        }

        // Set the "parsed" flag and return the value - required for nested parsing.
        bitrateinfo.query[1][z] = true;
        return parsed;
      }
    },
    calculate: function() {
      var computed = {
        identifier: undefined,
        datatype: undefined,
        quantity: undefined,
        magnitude: undefined,
        canonical: undefined,
        singular: undefined,
        hint: false
      };

      // More than 3 values means we don't understand the query.
      if (bitrateinfo.values.length == 2 || bitrateinfo.values.length == 3) {
        // Calculating time:
        if (
          bitrateinfo.values[0].datatype == "size"
          && bitrateinfo.values[1].datatype == "rate"
        ) {
          computed.quantity = Math.round(
            (bitrateinfo.values[0].quantity * bitrateinfo.values[0].magnitude)
            /
            (
              (bitrateinfo.values[1].quantity * bitrateinfo.values[1].magnitude)
              /
              8
            )
          );

          computed.datatype = "time";
          computed.magnitude = 1;
          computed.identifier = "result";
          computed.canonical = "seconds";
          computed.singular = "second";

        } else if (
          bitrateinfo.values[0].datatype == "rate"
          && bitrateinfo.values[1].datatype == "size"
        ) {
          computed.quantity = Math.round(
            (bitrateinfo.values[1].quantity * bitrateinfo.values[1].magnitude)
            /
            (
              (bitrateinfo.values[0].quantity * bitrateinfo.values[0].magnitude)
              /
              8
            )
          );

          computed.datatype = "time";
          computed.magnitude = 1;
          computed.identifier = "result";
          computed.canonical = "seconds";
          computed.singular = "second";

        // Calculating size:
        } else if (
          bitrateinfo.values[0].datatype == "time"
          && bitrateinfo.values[1].datatype == "rate"
        ) {
          computed.quantity = (
            (
              (bitrateinfo.values[1].quantity * bitrateinfo.values[1].magnitude)
              /
              8
            )
            *
            (bitrateinfo.values[0].quantity * bitrateinfo.values[0].magnitude)
          );

          computed.datatype = "size";
          computed.magnitude = 1;
          computed.identifier = "result";
          computed.canonical = "bytes";
          computed.singular = "byte";

        } else if (
          bitrateinfo.values[0].datatype == "rate"
          && bitrateinfo.values[1].datatype == "time"
        ) {
          computed.quantity = (
            (
              (bitrateinfo.values[0].quantity * bitrateinfo.values[0].magnitude)
              /
              8
            )
            *
            (bitrateinfo.values[1].quantity * bitrateinfo.values[1].magnitude)
          );

          computed.datatype = "size";
          computed.magnitude = 1;
          computed.identifier = "result";
          computed.canonical = "bytes";
          computed.singular = "byte";

        // Calculating rate:
        } else if (
          bitrateinfo.values[0].datatype == "size"
          && bitrateinfo.values[1].datatype == "time"
        ) {
          computed.quantity = (
            (
              (bitrateinfo.values[0].quantity * bitrateinfo.values[0].magnitude)
              *
              8
            )
            /
            (bitrateinfo.values[1].quantity * bitrateinfo.values[1].magnitude)
          );

          computed.datatype = "rate";
          computed.magnitude = 1;
          computed.identifier = "result";
          computed.canonical = "bits per second";
          computed.singular = "bit per second";

        } else if (
          bitrateinfo.values[0].datatype == "time"
          && bitrateinfo.values[1].datatype == "size"
        ) {
          computed.quantity = (
            (
              (bitrateinfo.values[1].quantity * bitrateinfo.values[1].magnitude)
              *
              8
            )
            /
            (bitrateinfo.values[0].quantity * bitrateinfo.values[0].magnitude)
          );

          computed.datatype = "rate";
          computed.magnitude = 1;
          computed.identifier = "result";
          computed.canonical = "bits per second";
          computed.singular = "bit per second";

        }

        // If there's a third value, try to use it as a hint.
        if (
          (bitrateinfo.values.length == 3)
          && (bitrateinfo.values[2].identifier == "unit")
          && (bitrateinfo.values[2].datatype == computed.datatype)
        ) {
          computed.quantity = (
            computed.quantity
            /
            bitrateinfo.values[2].magnitude
          );

          computed.magnitude = bitrateinfo.values[2].magnitude;
          computed.canonical = bitrateinfo.values[2].canonical;
          computed.singular = bitrateinfo.values[2].singular;
          computed.hint = true;

        } else {
          // Search for a preferred display unit.
          preferred: {
            for (var a = 0; a < bitrateinfo.data.length; a++) {
              if (
                bitrateinfo.data[a].datatype == computed.datatype
                && bitrateinfo.data[a].preference == true
              ) {
                computed.quantity = (
                  computed.quantity
                  /
                  bitrateinfo.data[a].magnitude
                );

                computed.magnitude = bitrateinfo.data[a].magnitude;
                computed.canonical = bitrateinfo.data[a].canonical;
                computed.singular = bitrateinfo.data[a].singular;
                break preferred;
              }
            }
          }
        }
      }

      bitrateinfo.values[2] = computed;
    },
    display: function() {
      if (
        bitrateinfo.values.length == 3
        && bitrateinfo.values[2].identifier == "result"
      ) {
        for (var b = 0; b < bitrateinfo.values.length; b++) {
          var value_n = document.getElementById("bitrateinfo_value" + b);

          switch(bitrateinfo.values[b].identifier) {
            case "value":
              if (bitrateinfo.values[b].quantity == 1) {
                value_n.innerHTML = (
                  bitrateinfo.values[b].quantity
                  + " "
                  + bitrateinfo.values[b].singular
                );
              } else {
                value_n.innerHTML = (
                  bitrateinfo.values[b].quantity
                  + " "
                  + bitrateinfo.values[b].canonical
                );
              }

              break;

            case "keyword":
              value_n.innerHTML = bitrateinfo.values[b].canonical;

              break;

            default:
              var sum = bitrateinfo.values[b].quantity, result = "";

              if (
                (bitrateinfo.values[b].datatype == "time")
                && (bitrateinfo.values[b].hint != true)
                && (bitrateinfo.values[b].magnitude == 1)
              ) {
                // Display time as hh:mm:ss if no hint was given.
                var hh = 0, mm = 0, ss = sum;

                while (ss > 3599) {
                  ss = (ss - 3600);
                  hh = hh + 1;
                }

                while (ss > 59) {
                  ss = (ss - 60);
                  mm = mm + 1;
                }

                // Add leading zeros to a number.
                function leadingZeros(num, max) {
                  var str = String(num);

                  while (str.length < max) {
                    str = "0" + str;
                  }

                  return str;
                }

                hh = leadingZeros(hh, 2);
                mm = leadingZeros(mm, 2);
                ss = leadingZeros(ss, 2);
                result = hh + ":" + mm + ":" + ss;
              } else {
                // Proceed as normal.
                if (!Number.isInteger(sum))
                  sum = sum.toFixed(2);

                if (sum == 1) {
                  result = (
                    sum
                    + " "
                    + bitrateinfo.values[b].singular
                  );
                } else {
                  result = (
                    sum
                    + " "
                    + bitrateinfo.values[b].canonical
                  );
                }
              }

              value_n.innerHTML = result;
          }
        }

        bitrateinfo.ui.result.classList.remove("hidden");
      } else {
        bitrateinfo.ui.form.classList.add("error");

        setTimeout(
          function() {
            bitrateinfo.ui.form.classList.remove("error");
          },
          1000
        );
      }
    },
    get_query: function() {
      var query = new URLSearchParams(
        document.location.search
      );

      if (query.has("q")) {
        bitrateinfo.ui.input.value = query.get("q");
        bitrateinfo.fn.analyze();
      }

      history.replaceState(
        bitrateinfo.ui.input.value,
        "",
        document.location
      );
    },
    set_query: function() {
        var url = new URL(document.location);
        var query = new URLSearchParams();

        if (bitrateinfo.ui.input.value == "") {
          query.delete("q");
        } else {
          query.set("q", bitrateinfo.ui.input.value);
        }

        url.search = query.toString();

        history.pushState(
          bitrateinfo.ui.input.value,
          "",
          url.toString()
        );
    },
    show_example: function(e) {
      e.preventDefault();

      // Pick a random start for the loop of examples.
      var n = Math.round(
        Math.random() * (bitrateinfo.examples.length - 1)
      );

      bitrateinfo.ui.input.value = bitrateinfo.examples[n];
      bitrateinfo.fn.analyze();
      bitrateinfo.fn.set_query();
    },
    toggle_lexicon: function(e) {
      e.preventDefault();

      var legend = document.getElementById("legend");

      if (!!legend) {
        legend.remove();
        return;
      }

      var table = document.createElement("table");
      var thead = document.createElement("thead");
      var tbody = document.createElement("tbody");

      var keyCanonical = document.createElement("td");
      var keyLexicon = document.createElement("td");

      keyCanonical.innerHTML = "Unit of measurement";
      keyLexicon.innerHTML = "Accepted terms (case insensitive)";

      for (var a = 0; a < bitrateinfo.data.length; a++) {
        var thisRow = document.createElement("tr");
        var thisCanonical = document.createElement("td");
        var thisLexicon = document.createElement("td");

        thisCanonical.className = "canonical";
        thisCanonical.innerHTML = bitrateinfo.data[a].canonical;
        thisLexicon.className = "lexicon";
        thisLexicon.innerHTML = bitrateinfo.data[a].lexicon;

        thisRow.appendChild(thisCanonical);
        thisRow.appendChild(thisLexicon);
        tbody.appendChild(thisRow);
      }

      table.id = "legend";
      thead.appendChild(keyCanonical);
      thead.appendChild(keyLexicon);
      table.appendChild(thead);
      table.appendChild(tbody);
      bitrateinfo.ui.container.appendChild(table);
    }
  }
};

// Initialize.
document.addEventListener("DOMContentLoaded", bitrateinfo.fn.init);
