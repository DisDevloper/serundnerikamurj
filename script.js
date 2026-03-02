document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('importanceChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['19-34', '35-49', '50+'],
            datasets: [{
                label: 'Մենակության մակարդակը',
                data: [39.7, 43.3, 48.2],
                backgroundColor: [
                    'rgba(245, 222, 192, 0.7)',
                    'rgba(196, 30, 58, 0.5)',
                    'rgba(196, 30, 58, 0.9)'
                ],
                borderColor: '#c41e3a',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    pointLabels: {
                        display: true,
                        centerPointLabels: true,
                        font: { size: 14 }
                    },
                    ticks: { display: false }
                }
            },
            plugins: {
                legend: { position: 'bottom' },
                title: {
                    display: true,
                    text: 'Մենակության աճը ըստ տարիքի',
                    font: { size: 18 }
                }
            }
        }
    });
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    if (data.user_name.trim().split(/\s+/).length !== 2) {
        alert('Խնդրում ենք մուտքագրել անուն և ազգանուն:');
        event.preventDefault();
        return;
    }
    if (data.user_age < 0 || data.user_age > 120) {
        alert('Խնդրում ենք մուտքագրել ձեր իրական տարիքը:');
        event.preventDefault();
        return;
    }
    if (data.user_message.trim().split(/\s+/).length < 30) {
        alert('Խնդրում ենք մուտքագրել առնվազն 30 բառից բաղկացած հաղորդագրություն:');
        event.preventDefault();
        return;
    }
});
