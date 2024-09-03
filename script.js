document.addEventListener('DOMContentLoaded', () => {
    // Example animals data
    const animals = [
        { name: 'harsh', type: 'Dog', description: 'A friendly dog looking for a home.', image: 'https://via.placeholder.com/150' },
        { name: 'Mittens', type: 'Cat', description: 'A playful cat that loves attention.', image: 'https://via.placeholder.com/150' },
        // Add more animals as needed
    ];

    const animalList = document.getElementById('animal-list');

    animals.forEach(animal => {
        const animalCard = document.createElement('div');
        animalCard.classList.add('animal-card');
        animalCard.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}">
            <h3>${animal.name}</h3>
            <p><strong>Type:</strong> ${animal.type}</p>
            <p>${animal.description}</p>
        `;
        animalList.appendChild(animalCard);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for contacting us!');
        contactForm.reset();
    });
});
