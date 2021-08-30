const { writeFileSync } = require("fs")

// copied from table in google sheet
let string = `1
10:00 to 12:00
Introduction ZOOM/Slack/VM
Mr. Sai Raj Ali
1
2:00 to 4:00
Introduction to LINUX OS and Vi/Emacs
Dr. Satish Dasari
2
10:00 to 12:00
Shell script writing 
Dr. Niharika Joshi
2
2:00 to 4:00
Discussion on visualisers
Dr. Sathish Dasari
3
10:00 to 12:00
Plotting softwares & HPC access
Dr. Niharika Joshi
3
2:00 to 4:00
Case study of SARS-Cov-2 and inhibitors
Introduction on ADFR tools 
Mrs. K. Kavya, Ms. Sandra Jose, Mr. sarun jonchhe
4
10:00 to 12:00
Hands-on Auto-docking (HPC)
Mr. Sarun Jonchhe, Dr. Rajendra A
4
2:00 to 4:00
Project-1 on auto-docking
Mrs. K. Kavya, Ms. Sandra Jose
5
10:00 to 12:00
3D rendering software
Mr. Rafeeque 
5
2:00 to 4:00
Hands-on session
6
6:00 - 7:30 PM
Introduction to MD
Dr. anmol kumar
Topic
1
9:00 to 10:15
Inauguration ceremony
Dr. C. S. Praveen and Dr. Rajendra A
1
11:00 to 12:15
Case study-1: 
Prof. K. Narayanan, Nepal
1
2:00 to 4:00
Hands-on MD [Basics of MD/Forcefield/..]
Dr. Reman Kumar S, Dr. Satish Dasari, Dr. Subrahmanyam S
2
9:00 to 10:15
Case study-2:
Dr. Subbarao Kanchi, SSSIHL, India.
2
11:00 to 12:15
Case study-3: Lipids
Prof. Himanshu M, Denmark
2
2:00 to 4:00
Hands-on MD [Protein]
Dr. Reman Kumar S, Dr. Satish Dasari, Dr. Subrahmanyam S
3
9:00 to 10:15
Case study-4: QSAR
Prof. Dr. Mukesh Doble (IIT Madras)
3
11:00 to 12:15
Case study-5: Lipids
Prof. Jacek Czub, Poland
3
2:00 to 4:00
Hands-on MD 
[Enhanced samplings]
Dr. Reman Kumar S,Dr. Satish Dasari,Dr. Subrahmanyam S
3
6:00 to 7:15
Case study
Prof. Nolan 
4
11:00 to 12:15
AIMD
Prof. Sandro Scandlo (ICTP)
4
2:00 to 3:15
AIMD
Dr. Riccardo Bertossa (SISSA, Italy), Dr. Davide TISI (SISSA, Italy) or Dr. Paolo PEGOLO (SISSA, Italy).
4
6:00 to 7:15
ML
Dr. anmol kumar
5
9:00 to 10:15
Project report
Dr. Subrahmanyam S
`

let arr = string.split("\n")

let details = []
for (let ii in arr) {
    if (isNormalInteger(arr[ii])) {
        let jj = arr.slice(ii, ii + 4)
        details.push({
            day: jj[0],
            time: jj[1],
            topic: jj[2],
            prof: jj[3],
        })
    }
}

console.log(details)
let exportD = ""
for (let detailI in details.slice(0, 10)) {
    let detail = details[detailI]
    exportD += `     <div class="accordion-item">
    <h2 class="accordion-header">
        <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#id-${detailI}"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
        >
            September ${5 + parseInt(detail.day)} Day-${detail.day}: ${
        detail.topic
    }
        </button>
    </h2>
    <div
        id="id-${detailI}"
        class="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingOne"
    >
        <div class="accordion-body">
            <ul>
                <li>Time: [${detail.time}]</li>
                <li>
                    Teaching Assistants: ${detail.prof}
                </li>
            </ul>
        </div>
    </div>
</div>`
}
writeFileSync("generated1.html", exportD)

exportD = ""
for (let detailI in details.slice(11, 99)) {
    let detail = details.slice(11, 99)[detailI]
    console.log(detail)
    exportD += `     <div class="accordion-item">
    <h2 class="accordion-header">
        <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#id-${detailI + 10}"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
        >
            September ${12 + parseInt(detail.day)} Day-${detail.day}: ${
        detail.topic
    }
        </button>
    </h2>
    <div
        id="id-${detailI + 10}"
        class="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingOne"
    >
        <div class="accordion-body">
            <ul>
                <li>Time: [${detail.time}]</li>
                <li>
                    Teaching Assistants: ${detail.prof}
                </li>
            </ul>
        </div>
    </div>
</div>`
}
writeFileSync("generated2.html", exportD)

function isNormalInteger(str) {
    var n = Math.floor(Number(str))
    return n !== Infinity && String(n) === str && n >= 0
}
