const events = [
    { id: 1, name: 'Diwali', date: '2024-06-10', timings: '6pm-11pm', location: 'VAjwa,Vadodara' },
    { id: 2, name: 'Holi events', date: '2024-07-15', timings: '10pm-6pm', location: 'near fun club,Vadodara' },
    { id: 3, name: 'Watermelon club dance', date: '2024-08-20', timings: '8pm-3am', location: 'Baga beach,Goa' }
];

function showBookingForm(eventId) {
    const event = events.find(e => e.id === eventId);
    document.getElementById('eventInfo').textContent = `You are booking tickets for ${event.name} on ${event.date} at ${event.location}.`;
    document.getElementById('events').style.display = 'none';
    document.getElementById('booking').style.display = 'block';

    const bookingForm = document.getElementById('bookingForm');
    bookingForm.removeEventListener('submit', handleFormSubmit); // Remove any previous event listener to avoid duplicates
    bookingForm.addEventListener('submit', handleFormSubmit.bind(null, event));
}

function handleFormSubmit(event, e) {
    e.preventDefault(); // Prevent form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const ph  = document.getElementById('ph number').value;
    const quantity = document.getElementById('quantity').value;
    const currentTime = new Date(); 
    const formattedTime = currentTime.toLocaleTimeString('en-US', { hour12: true });

    document.getElementById('confirmationDetails').textContent = `Name: ${name}, Email: ${email}, Quantity: ${quantity}, Event: ${event.name}, Date: ${event.date}, Location: ${event.location}`;

    document.getElementById('booking').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
    document.getElementById('confirmationTime').textContent = formattedTime;
}
 