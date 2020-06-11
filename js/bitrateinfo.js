var bitrateinfo = {
    query: new Array(2),
    values: new Array(),
    dataset: new Array(),
    examples: new Array(),
    example: 0
};

// Time:

bitrateinfo.dataset.push({
    canonical: "seconds",
    singular: "second",
    lexicon: "sec secs second seconds",
    identifier: "unit",
    datatype: "time",
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "minutes",
    singular: "minute",
    lexicon: "min mins minute minutes",
    identifier: "unit",
    datatype: "time",
    magnitude: 60,
});
bitrateinfo.dataset.push({
    canonical: "hours",
    singular: "hour",
    lexicon: "hr hrs hour hours",
    identifier: "unit",
    datatype: "time",
    magnitude: 3600
});

// Rate:

bitrateinfo.dataset.push({
    canonical: "bits per second",
    singular: "bit per second",
    lexicon: "bits bits/s b/s bps",
    identifier: "unit",
    datatype: "rate",
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "kilobits per second",
    singular: "kilobit per second",
    lexicon: "kilobits kilobits/s kb/s kbps",
    identifier: "unit",
    datatype: "rate",
    magnitude: 1000
});
bitrateinfo.dataset.push({
    canonical: "megabits per second",
    singular: "megabit per second",
    lexicon: "megabits megabits/s mb/s mbps",
    identifier: "unit",
    datatype: "rate",
    magnitude: 1000000,
    preference: true
});
bitrateinfo.dataset.push({
    canonical: "gigabits per second",
    singular: "gigabit per second",
    lexicon: "gigabits gigabits/s gb/s gbps",
    identifier: "unit",
    datatype: "rate",
    magnitude: 1000000000
});
bitrateinfo.dataset.push({
    canonical: "megabytes per second",
    singular: "megabyte per second",
    lexicon: "m/s",
    identifier: "unit",
    datatype: "rate",
    magnitude: 8000000
});
bitrateinfo.dataset.push({
    canonical: "gigabytes per second",
    singular: "gigabyte per second",
    lexicon: "g/s",
    identifier: "unit",
    datatype: "rate",
    magnitude: 8000000000
});

// Size:

bitrateinfo.dataset.push({
    canonical: "bytes",
    singular: "byte",
    lexicon: "byte bytes",
    identifier: "unit",
    datatype: "size",
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "kilobytes",
    singular: "kilobyte",
    lexicon: "kilobyte kilobytes KB KBs kilo kilos",
    identifier: "unit",
    datatype: "size",
    magnitude: 1000
});
bitrateinfo.dataset.push({
    canonical: "megabytes",
    singular: "megabyte",
    lexicon: "megabyte megabytes MB MBs meg megs",
    identifier: "unit",
    datatype: "size",
    magnitude: 1000000,
    preference: true
});
bitrateinfo.dataset.push({
    canonical: "gigabytes",
    singular: "gigabyte",
    lexicon: "gigabyte gigabytes GB GBs gig gigs",
    identifier: "unit",
    datatype: "size",
    magnitude: 1000000000
});
bitrateinfo.dataset.push({
    canonical: "terabytes",
    singular: "terabyte",
    lexicon: "terabyte terabytes TB TBs",
    identifier: "unit",
    datatype: "size",
    magnitude: 1000000000000
});
bitrateinfo.dataset.push({
    canonical: "kibibytes",
    singular: "kibibyte",
    lexicon: "kibibyte kibibytes KiB KiBs",
    identifier: "unit",
    datatype: "size",
    magnitude: 1024
});
bitrateinfo.dataset.push({
    canonical: "mebibytes",
    singular: "mebibyte",
    lexicon: "mebibyte mebibytes MiB MiBs",
    identifier: "unit",
    datatype: "size",
    magnitude: 1048576
});
bitrateinfo.dataset.push({
    canonical: "gibibytes",
    singular: "gibibyte",
    lexicon: "gibibyte gibibytes GiB GiBs",
    identifier: "unit",
    datatype: "size",
    magnitude: 1073741824
});
bitrateinfo.dataset.push({
    canonical: "tebibytes",
    singular: "tebibyte",
    lexicon: "tebibyte tebibytes TiB TiBs",
    identifier: "unit",
    datatype: "size",
    magnitude: 1099511627776
});

// Keywords:

bitrateinfo.dataset.push({
    canonical: "CD-R 74 minutes (Audio)",
    lexicon: "cd",
    identifier: "keyword",
    datatype: "size",
    quantity: 783216000,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "CD-R 80 minutes (Mode 1)",
    lexicon: "cdr cdrom",
    identifier: "keyword",
    datatype: "size",
    quantity: 737280000,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "DVD±R SL",
    lexicon: "dvd dvdr dvdsl dvd5",
    identifier: "keyword",
    datatype: "size",
    quantity: 4707319808,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "DVD±R DL",
    lexicon: "dvddl dvd9",
    identifier: "keyword",
    datatype: "size",
    quantity: 8543666176,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "BD-R 25",
    lexicon: "bdr bdr25 bluray",
    identifier: "keyword",
    datatype: "size",
    quantity: 25025314816,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "BD-R 50",
    lexicon: "bdr50",
    identifier: "keyword",
    datatype: "size",
    quantity: 50050629632,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "Sony XDCAM EX",
    lexicon: "xdcamex",
    identifier: "keyword",
    datatype: "rate",
    quantity: 35000000,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "Sony HDCAM",
    lexicon: "hdcam",
    identifier: "keyword",
    datatype: "rate",
    quantity: 135000000,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "Sony HDCAM SR",
    lexicon: "hdcamsr",
    identifier: "keyword",
    datatype: "rate",
    quantity: 440000000,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "ProRes 422",
    lexicon: "prores prores422",
    identifier: "keyword",
    datatype: "rate",
    quantity: 122000000,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "Avid DNxHD 145",
    lexicon: "dnxhd dnxhd145",
    identifier: "keyword",
    datatype: "rate",
    quantity: 145000000,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "Avid DNxHD 220",
    lexicon: "dnxhd220",
    identifier: "keyword",
    datatype: "rate",
    quantity: 220000000,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "Compact Disc Digital Audio",
    lexicon: "cdda audio",
    identifier: "keyword",
    datatype: "rate",
    quantity: 1411200,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "PCM Stereo 16-Bit",
    lexicon: "pcm stereo",
    identifier: "keyword",
    datatype: "rate",
    quantity: 1536000,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "PCM Mono 16-Bit",
    lexicon: "mono",
    identifier: "keyword",
    datatype: "rate",
    quantity: 768000,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "PCM Stereo 32-Bit",
    lexicon: "float",
    identifier: "keyword",
    datatype: "rate",
    quantity: 3072000,
    magnitude: 1
});
bitrateinfo.dataset.push({
    canonical: "MP3 128 Kbps",
    lexicon: "mp3",
    identifier: "keyword",
    datatype: "rate",
    quantity: 128000,
    magnitude: 1
});

bitrateinfo.examples.push("5 minutes at 800 Kbps measured in mebibytes");
bitrateinfo.examples.push("1 hour of xdcam-ex in GBs");
bitrateinfo.examples.push("60 minutes on blu-ray");
bitrateinfo.examples.push("How much audio fits on a cd?");
bitrateinfo.examples.push("40 gigs of dnxhd");
bitrateinfo.examples.push("10 secs @ 50 mbps");
bitrateinfo.examples.push("proRes422 for 3 hrs in gigabytes");
bitrateinfo.examples.push("25 mbps for 63 minutes");
bitrateinfo.examples.push("Space required for 25 mins at 8 Mb/s");
bitrateinfo.examples.push("dvd9 at 8 mbps in hours");
bitrateinfo.examples.push("stereo for 8 hours");
bitrateinfo.examples.push("hdcam-sr on bdr-50 hrs");
bitrateinfo.examples.push("What's the data rate of a 25gb file with 35 mins duration?");
bitrateinfo.examples.push("1.2 Gbps for 60 secs");
bitrateinfo.examples.push("1 Mbps on cdr");
bitrateinfo.examples.push("cdda on cd");
bitrateinfo.examples.push("2 hours on blu-ray");
bitrateinfo.examples.push("What bitrate for a 25 min bluray?");
bitrateinfo.examples.push("90 mins at 50 mb/s in GiB");
bitrateinfo.examples.push("120 minutes on DVD-DL in kbps");
bitrateinfo.examples.push("dnxhd220 for 180 mins in GiB");
bitrateinfo.examples.push("float on cdr");
bitrateinfo.examples.push("Show me 30 minutes of hdcam in GB");
bitrateinfo.examples.push("mono for 2.5 hours");
bitrateinfo.examples.push("2 hours of mp3");

// Utility to manipulate HTML classes.
function classUtil(a, o, c1, c2) {
    switch (a) {
        case "swap":
            o.className =! classUtil("check", o, c1) ? o.className.replace(c2, c1) : o.className.replace(c1, c2) ;
            break;
        case "add":
            if (!classUtil("check", o, c1))
                o.className += o.className ? " " + c1 : c1 ;
            break;
        case "remove":
            var rep = o.className.match(" " + c1) ? " " + c1 : c1 ;
            o.className = o.className.replace(rep, "");
            break;
        case "check":
            return new RegExp("\\b" + c1 + "\\b").test(o.className);
    }
}

// Is the number an integer?
function isInt(value) {
    return !isNaN(parseInt(value, 10)) && (parseFloat(value, 10) == parseInt(value, 10)); 
}

// Add leading zeros to a number.
function leadingZeros(theNumber, max) {
    var numStr = String(theNumber);

    while (numStr.length < max) {
        numStr = "0" + numStr;
    }

    return numStr;
}

// Return a random number scaled to the range.
function longRandom(range) {
    return Math.round(Math.random() * range);
}

// Clean a value from an array.
Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {         
          this.splice(i, 1);
          i--;
        }
    }

    return this;
}

function bitrateinfoInit() {
    // Pick a random start for the loop of examples.
    bitrateinfo.example = longRandom(bitrateinfo.examples.length - 1);

    // Add handlers.
    document.getElementById("bitrateinfo_form").addEventListener("submit", bitrateinfoUpdate);
    document.getElementById("bitrateinfo_input").addEventListener("change", bitrateinfoUpdate);
    document.getElementById("button_example").addEventListener("click", bitrateinfoExample);
    document.getElementById("button_lexicon").addEventListener("click", bitrateinfoLexicon);

    // Unhide the app.
    classUtil("remove", document.getElementById("bitrateinfo_container"), "hidden");
}

function bitrateinfoReset() {
    bitrateinfo.query[0] = new Array();
    bitrateinfo.query[1] = new Array();
    bitrateinfo.values = new Array();
    classUtil("add", document.getElementById("bitrateinfo_result"), "hidden");
    document.getElementById("bitrateinfo_value0").innerHTML = "";
    document.getElementById("bitrateinfo_value1").innerHTML = "";
    document.getElementById("bitrateinfo_value2").innerHTML = "";
}

function bitrateinfoQuery() {
    var found;
    var query = document.getElementById("bitrateinfo_input").value;

    // Convert all white space to a single space.
    query = query.replace(/\s+/g, " ");

    // Strip irrelevant chars.
    query = query.replace(/[^A-Za-z0-9.\/ ]/g, "");

    // Separate units, e.g. "1GB" => "1 GB"
    query = query.replace(/([0-9])([A-Za-z])/g, "$1 $2");

    // Split the query into an array.
    bitrateinfo.query[0] = query.split(" ").clean("");

    for (z = 0; z < bitrateinfo.query[0].length; z++) {
       // Zero the "parsed" flag.
       bitrateinfo.query[1][z] = false;
    }
}

function bitrateinfoUpdate(e) {
    e.preventDefault();
    bitrateinfoAnalyse();
}

function bitrateinfoAnalyse(){
    bitrateinfoReset();
    bitrateinfoQuery();

    for (z = 0; z < bitrateinfo.query[0].length; z++) {
       bitrateinfoParser(z);
    }

    bitrateinfoCalculate();
    bitrateinfoDisplay();
}

function bitrateinfoParser(z){
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
            // Iterate over items in the dataset.
            heuristics: {
                for (x = 0; x < bitrateinfo.dataset.length; x++) {
                    var lexicon = bitrateinfo.dataset[x].lexicon.split(" ");

                    // Iterate over the lexicon for this item.
                    for (y = 0; y < lexicon.length; y++) {
                        if (lexicon[y].toLowerCase() == bitrateinfo.query[0][z].toLowerCase()) {
                            parsed.identifier = bitrateinfo.dataset[x].identifier;
                            parsed.datatype = bitrateinfo.dataset[x].datatype;
                            parsed.magnitude = bitrateinfo.dataset[x].magnitude;
                            parsed.canonical = bitrateinfo.dataset[x].canonical;

                            if (bitrateinfo.dataset[x].identifier != "keyword")
                                parsed.singular = bitrateinfo.dataset[x].singular;

                            if (bitrateinfo.dataset[x].identifier == "keyword") {

                                // Found a keyword!
                                bitrateinfo.values.push({
                                    identifier: "keyword",
                                    datatype: bitrateinfo.dataset[x].datatype,
                                    quantity: bitrateinfo.dataset[x].quantity,
                                    magnitude: bitrateinfo.dataset[x].magnitude,
                                    canonical: bitrateinfo.dataset[x].canonical
                                });

                            } else if (bitrateinfo.values.length == 2 &&
                                       bitrateinfo.dataset[x].identifier == "unit") {

                                // Found a hint!
                                bitrateinfo.values.push({
                                    identifier: bitrateinfo.dataset[x].identifier,
                                    datatype: bitrateinfo.dataset[x].datatype,
                                    quantity: bitrateinfo.dataset[x].quantity,
                                    magnitude: bitrateinfo.dataset[x].magnitude,
                                    canonical: bitrateinfo.dataset[x].canonical,
                                    singular: bitrateinfo.dataset[x].singular
                                });

                            }

                            break heuristics;
                        }
                    }
                }
            }

        // Word is a number.
        } else if (isFinite(bitrateinfo.query[0][z].valueOf()) && (bitrateinfo.query[0][z].valueOf() > 0)) {
            parsed.identifier = "number";
            parsed.quantity = bitrateinfo.query[0][z].valueOf();

            // Read ahead in search of a unit for this number.
            if (bitrateinfo.query[0].length > (z + 1)) {
                var readAhead = bitrateinfoParser(z + 1);

                if (readAhead.identifier == "unit") {

                    // Found a value!
                    bitrateinfo.values.push({
                        identifier: "value",
                        datatype: readAhead.datatype,
                        quantity: bitrateinfo.query[0][z].valueOf(),
                        magnitude: readAhead.magnitude,
                        canonical: readAhead.canonical,
                        singular: readAhead.singular
                    });
                }
            }
        }

        // Set the "parsed" flag and return the value - required for nested parsing.
        bitrateinfo.query[1][z] = true;
        return parsed;
    }
}

function bitrateinfoCalculate() {
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
        if (bitrateinfo.values[0].datatype == "size" && bitrateinfo.values[1].datatype == "rate") {

            computed.quantity = Math.round((bitrateinfo.values[0].quantity * bitrateinfo.values[0].magnitude)
                                        / ((bitrateinfo.values[1].quantity * bitrateinfo.values[1].magnitude) / 8));
            computed.datatype = "time";
            computed.magnitude = 1;
            computed.identifier = "result";
            computed.canonical = "seconds";
            computed.singular = "second";

        } else if (bitrateinfo.values[0].datatype == "rate" && bitrateinfo.values[1].datatype == "size") {

            computed.quantity = Math.round((bitrateinfo.values[1].quantity * bitrateinfo.values[1].magnitude)
                                        / ((bitrateinfo.values[0].quantity * bitrateinfo.values[0].magnitude) / 8));
            computed.datatype = "time";
            computed.magnitude = 1;
            computed.identifier = "result";
            computed.canonical = "seconds";
            computed.singular = "second";

        // Calculating size:
        } else if (bitrateinfo.values[0].datatype == "time" && bitrateinfo.values[1].datatype == "rate") {

            computed.quantity = (((bitrateinfo.values[1].quantity * bitrateinfo.values[1].magnitude) / 8)
                                * (bitrateinfo.values[0].quantity * bitrateinfo.values[0].magnitude));
            computed.datatype = "size";
            computed.magnitude = 1;
            computed.identifier = "result";
            computed.canonical = "bytes";
            computed.singular = "byte";

        } else if (bitrateinfo.values[0].datatype == "rate" && bitrateinfo.values[1].datatype == "time") {

            computed.quantity = (((bitrateinfo.values[0].quantity * bitrateinfo.values[0].magnitude) / 8)
                                * (bitrateinfo.values[1].quantity * bitrateinfo.values[1].magnitude));
            computed.datatype = "size";
            computed.magnitude = 1;
            computed.identifier = "result";
            computed.canonical = "bytes";
            computed.singular = "byte";

        // Calculating rate:
        } else if (bitrateinfo.values[0].datatype == "size" && bitrateinfo.values[1].datatype == "time") {

            computed.quantity = (((bitrateinfo.values[0].quantity * bitrateinfo.values[0].magnitude) * 8)
                                / (bitrateinfo.values[1].quantity * bitrateinfo.values[1].magnitude));
            computed.datatype = "rate";
            computed.magnitude = 1;
            computed.identifier = "result";
            computed.canonical = "bits per second";
            computed.singular = "bit per second";

        } else if (bitrateinfo.values[0].datatype == "time" && bitrateinfo.values[1].datatype == "size") {

            computed.quantity = (((bitrateinfo.values[1].quantity * bitrateinfo.values[1].magnitude) * 8)
                                / (bitrateinfo.values[0].quantity * bitrateinfo.values[0].magnitude));
            computed.datatype = "rate";
            computed.magnitude = 1;
            computed.identifier = "result";
            computed.canonical = "bits per second";
            computed.singular = "bit per second";

        }

        // If there's a third value, try to use it as a hint.
        if ((bitrateinfo.values.length == 3) &&
            (bitrateinfo.values[2].identifier == "unit") &&
            (bitrateinfo.values[2].datatype == computed.datatype)) {

            computed.quantity = (computed.quantity / bitrateinfo.values[2].magnitude);
            computed.magnitude = bitrateinfo.values[2].magnitude;
            computed.canonical = bitrateinfo.values[2].canonical;
            computed.singular = bitrateinfo.values[2].singular;
            computed.hint = true;

        } else {
            // Search for a preferred display unit.
            preferred: {
                for (a = 0; a < bitrateinfo.dataset.length; a++) {
                    if (bitrateinfo.dataset[a].datatype == computed.datatype &&
                        bitrateinfo.dataset[a].preference == true) {

                        computed.quantity = (computed.quantity / bitrateinfo.dataset[a].magnitude);
                        computed.magnitude = bitrateinfo.dataset[a].magnitude;
                        computed.canonical = bitrateinfo.dataset[a].canonical;
                        computed.singular = bitrateinfo.dataset[a].singular;
                        break preferred;
                    }
                }
            }
        }
    }

    bitrateinfo.values[2] = computed;
}

function bitrateinfoDisplay() {
    if (bitrateinfo.values.length == 3 && bitrateinfo.values[2].identifier == "result") {
        for (b = 0; b < bitrateinfo.values.length; b++) {
            switch(bitrateinfo.values[b].identifier) {
                case "value":
                    if (bitrateinfo.values[b].quantity == 1) {
                        document.getElementById("bitrateinfo_value" + b).innerHTML =
                        bitrateinfo.values[b].quantity + " " + bitrateinfo.values[b].singular;
                    } else {
                        document.getElementById("bitrateinfo_value" + b).innerHTML =
                        bitrateinfo.values[b].quantity + " " + bitrateinfo.values[b].canonical;
                    }
                    break;
                case "keyword":
                    document.getElementById("bitrateinfo_value" + b).innerHTML = bitrateinfo.values[b].canonical;
                    break;
                default:
                    var sum = bitrateinfo.values[b].quantity, result = "";

                    if ((bitrateinfo.values[b].datatype == "time") &&
                        (bitrateinfo.values[b].hint != true) &&
                        (bitrateinfo.values[b].magnitude == 1)) {
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

                        hh = leadingZeros(hh, 2);
                        mm = leadingZeros(mm, 2);
                        ss = leadingZeros(ss, 2);
                        result = hh + ":" + mm + ":" + ss;
                    } else {
                        // Proceed as normal.
                        if (!isInt(sum))
                            sum = sum.toFixed(2);

                        if (sum == 1) {
                            result = (sum + " " + bitrateinfo.values[b].singular);
                        } else {
                            result = (sum + " " + bitrateinfo.values[b].canonical);
                        }
                    }

                    document.getElementById("bitrateinfo_value" + b).innerHTML = result;
            }
        }

        classUtil("remove", document.getElementById("bitrateinfo_result"), "hidden");
    }
}

function bitrateinfoExample(e) {
    e.preventDefault();

    if (bitrateinfo.example >= bitrateinfo.examples.length)
        bitrateinfo.example = 0;

    document.getElementById("bitrateinfo_input").value = bitrateinfo.examples[bitrateinfo.example];
    bitrateinfo.example++;
    bitrateinfoAnalyse();
}

function bitrateinfoLexicon(e) {
    e.preventDefault();

    if (!document.getElementById("legend")) {
        var container = document.getElementById("bitrateinfo_container");
        var table = document.createElement("table");
        var thead = document.createElement("thead");
        var tbody = document.createElement("tbody");

        var keyCanonical = document.createElement("td");
        var keyLexicon = document.createElement("td");

        keyCanonical.innerHTML = "Unit of measurement";
        keyLexicon.innerHTML = "Accepted terms (case insensitive)";

        for (a = 0; a < bitrateinfo.dataset.length; a++) {
            var thisRow = document.createElement("tr");
            var thisCanonical = document.createElement("td");
            var thisLexicon = document.createElement("td");

            thisCanonical.className = "canonical";
            thisCanonical.innerHTML = bitrateinfo.dataset[a].canonical;
            thisLexicon.className = "lexicon";
            thisLexicon.innerHTML = bitrateinfo.dataset[a].lexicon;

            thisRow.appendChild(thisCanonical);
            thisRow.appendChild(thisLexicon);
            tbody.appendChild(thisRow);
        }

        table.id = "legend";
        thead.appendChild(keyCanonical);
        thead.appendChild(keyLexicon);
        table.appendChild(thead);
        table.appendChild(tbody);
        container.appendChild(table);
    }
}

document.addEventListener("DOMContentLoaded", bitrateinfoInit);
