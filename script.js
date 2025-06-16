// Toggle personal details
let heading = document.querySelector('#introduction h2');
const originalText = heading.textContent;
let obj = {
    'Name': 'Priyanshu Kumar',
    'Graduation Year': 2027,
    'Hobbies': ['Mathematics', 'Watching Movies and Series', 'Music', 'Travel'],
    'Favorite Course': ['CS101: Introduction to Programming', 'MA105:Calculus', 'MA110:Linear Algebra and Differential Equation'],
    'Credits Completed': 136
};

document.getElementById('convert').addEventListener('click', function(event) {
    event.preventDefault();
    if (heading.innerHTML === originalText) {
        let displayText = '';
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                displayText += `${key}: ${Array.isArray(obj[key]) ? obj[key].join(', ') : obj[key]}<br>`;
            }
        }
        heading.innerHTML = displayText.trim();
    } else {
        heading.innerHTML = originalText;
    }
});

// Guestbook functionality
const form = document.getElementById('guestbook-form');
const messagesDiv = document.getElementById('messages');
let messages = JSON.parse(localStorage.getItem('guestbook')) || [];

function displayMessages() {
    messagesDiv.innerHTML = messages
        .map(msg => `<p><strong>${msg.name}</strong>: ${msg.message}</p>`)
        .join('');
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    messages.push({ name, message });
    localStorage.setItem('guestbook', JSON.stringify(messages));
    displayMessages();
    form.reset();
});

// Display messages on page load
displayMessages();

// Chart for academic progress
const ctx = document.getElementById('creditsChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Semester 1', 'Semester 2'],
        datasets: [{
            label: 'Credits Completed',
            data: [31, 33],
            backgroundColor: ['#ff0080', '#7928ca'],
            borderColor: ['#cc0066', '#5e2099'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Credits'
                }
            }
        },
        plugins: {
            legend: {
                display: true
            },
            title: {
                display: true,
                text: 'Academic Progress at IITB'
            }
        }
    }
});