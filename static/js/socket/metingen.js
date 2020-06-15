const ORIGIN = 'client';

const RECOGNIZE_TEMPERATURE = "Recognize Temperature"

const TASKS =
    [
        {
            task: RECOGNIZE_TEMPERATURE,
            class: "Recognize-Temperature",
            topics: [
                {
                    name: "Temperature",
                    id: "temperature",
                }
            ]
        }
    ];


function getTaskFromName(task_name) {
    for (let i = 0; i < TASKS.length; i++) {
        if (TASKS[i].task == task_name) {
            return TASKS[i];
        }
    }
    return 'None'
}

let task_data_div = null

var socket = null;

const CURRENT_TASK_ELEM = document.getElementById('task_value');
let current_task = CURRENT_TASK_ELEM.innerText;

function connect_socket(conn) {

    task_data_div = document.getElementById('task-data');

    TASKS.forEach(TASK => {
        TASK.topics.forEach(topic => {
            task_data_div.innerHTML += `
                <div id="${topic.id}" class="data ${TASK.class}">
                    <div class="top-line">
                    </div>
                    <div class="topic-container">
                    </div><br><br>
                    <div class="value-container">
                    </div>
                </div>
            `;
        });
    });


    // Create WebSocket connection.
    socket = new WebSocket(conn);

    socket.onerror = function (event) {
    };

    // Connection opened
    socket.addEventListener('open', function (event) {
        socket.send(JSON.stringify({ origin: 'client' }));
    });

    // Listen for messages
    socket.addEventListener('message', function (event) {
        json = JSON.parse(event.data);
        if (!json.origin || json.origin == ORIGIN) return;
        //console.log(`Message from ${json.origin}`);

        if (current_task != json.task) {
            current_task = json.task
            CURRENT_TASK_ELEM.innerHTML = current_task;
            decode(CURRENT_TASK_ELEM, 2, 5);
        }

        let task = getTaskFromName(json.task);

        updateHTML(task, json)
    });

    socket.addEventListener('close', function (event) {
        console.log('Connection Closed ', event.data);
    });
}

function disconnect_socket() {
    if (socket) { socket.close(); }
    socket = null;
}

function arrangeElement(elem) {
    if (elem.parentNode.firstChild.nextElementSibling.className == elem.className) {
        return
    }
    elem.parentNode.insertBefore(elem, elem.parentNode.firstChild);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const ANIMATION_TIME = 500

async function updateHTML(task, json_data, reset = false) {
    let div = task_data_div.querySelector(`#${json_data.topic}`)

    switch (task.task) {
        case RECOGNIZE_TEMPERATURE:
            updateRecognizeTemperature(div, json_data)
            break
    }
    await sleep(ANIMATION_TIME)
    if (div) {
        arrangeElement(div)
    }
}

function updateRecognizeTemperature(div, json_data) {
    switch (json_data.topic) {
        case "Temperature":
            let topic_container = div.querySelector('.topic-container');
            let value_container = div.querySelector('.value-container');
            let colored_line = div.querySelector('.top-line');

            topic_container.innerHTML = `<h1>${json_data.topic}</h1>`;
            let color = ''
            switch (json_data.value) {
                case 'Cold': color = '#00eaff'; break;
                case 'Lukewarm': color = '#ffc800'; break;
                case 'Warm': color = '#ff8c00'; break;
                case "Hot": color = '#ff0000'; break;
            }
            value_container.innerHTML = `<p>${json_data.value}</p>`;
            colored_line.style.background = color
            colored_line.style.boxShadow = `0 0 15px ${color}`;
            decode(value_container.querySelector('p'), 5, 10);
            break;
    }
}