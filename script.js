// Virtual Pet Simulator - Main Game Logic

class VirtualPet {
    constructor(type, name) {
        this.type = type;
        this.name = name;
        this.hunger = 50;
        this.happiness = 50;
        this.energy = 50;
        this.age = 0;
        this.birthDate = new Date();
        this.lastUpdate = Date.now();
        this.achievements = [];
        this.isSleeping = false;
        
        // Pet type configurations with different faces for different states
        this.petConfig = {
            cat: { 
                emoji: '🐱', 
                names: ['Whiskers', 'Shadow', 'Luna', 'Oliver', 'Bella'],
                faces: {
                    happy: '😸',
                    hungry: '😿',
                    sleepy: '😴',
                    normal: '🐱',
                    veryHungry: '😾',
                    veryHappy: '😺',
                    sleeping: '😴'
                }
            },
            dog: { 
                emoji: '🐕', 
                names: ['Buddy', 'Max', 'Daisy', 'Rocky', 'Lucy'],
                faces: {
                    happy: '🐶',
                    hungry: '🥺',
                    sleepy: '😴',
                    normal: '🐕',
                    veryHungry: '😢',
                    veryHappy: '😄',
                    sleeping: '😴'
                }
            },
            rabbit: { 
                emoji: '🐰', 
                names: ['Bunny', 'Hoppy', 'Cotton', 'Thumper', 'Snowball'],
                faces: {
                    happy: '🐰',
                    hungry: '😔',
                    sleepy: '😴',
                    normal: '🐰',
                    veryHungry: '😞',
                    veryHappy: '😊',
                    sleeping: '😴'
                }
            },
            hamster: { 
                emoji: '🐹', 
                names: ['Nibbles', 'Peanut', 'Chewy', 'Pip', 'Tiny'],
                faces: {
                    happy: '🐹',
                    hungry: '😟',
                    sleepy: '😴',
                    normal: '🐹',
                    veryHungry: '😰',
                    veryHappy: '😃',
                    sleeping: '😴'
                }
            }
        };
        
        // Initialize pet with random name if not provided
        if (!this.name) {
            const names = this.petConfig[this.type].names;
            this.name = names[Math.floor(Math.random() * names.length)];
        }
    }
    
    // Update pet attributes over time
    update() {
        const now = Date.now();
        const timeDiff = (now - this.lastUpdate) / 1000; // Convert to seconds
        this.lastUpdate = now;
        
        // Natural attribute changes over time
        if (!this.isSleeping) {
            this.hunger = Math.min(100, this.hunger + timeDiff * 0.5); // Hunger increases slowly
            this.happiness = Math.max(0, this.happiness - timeDiff * 0.2); // Happiness decreases slowly
            this.energy = Math.max(0, this.energy - timeDiff * 0.3); // Energy decreases slowly
        } else {
            // When sleeping, energy restores and hunger increases slowly
            this.energy = Math.min(100, this.energy + timeDiff * 1.5);
            this.hunger = Math.min(100, this.hunger + timeDiff * 0.1);
        }
        
        // Update age (in days)
        const ageInMs = now - this.birthDate.getTime();
        this.age = Math.floor(ageInMs / (1000 * 60 * 60 * 24));
        
        // Check for achievements
        this.checkAchievements();
        
        // Update pet state based on attributes
        this.updatePetState();
    }
    
    // Feed the pet
    feed() {
        if (this.isSleeping) return false;
        
        this.hunger = Math.max(0, this.hunger - 30);
        this.happiness = Math.min(100, this.happiness + 10);
        this.energy = Math.min(100, this.energy + 5);
        
        return true;
    }
    
    // Play with the pet
    play() {
        if (this.isSleeping || this.energy < 20) return false;
        
        this.happiness = Math.min(100, this.happiness + 25);
        this.energy = Math.max(0, this.energy - 20);
        this.hunger = Math.min(100, this.hunger + 10);
        
        return true;
    }
    
    // Put pet to sleep
    sleep() {
        this.isSleeping = !this.isSleeping;
        return true;
    }
    
    // Get current pet state
    getState() {
        if (this.isSleeping) return 'sleeping';
        if (this.hunger > 90) return 'veryHungry';
        if (this.hunger > 80) return 'hungry';
        if (this.energy < 10) return 'verySleepy';
        if (this.energy < 20) return 'sleepy';
        if (this.happiness > 90) return 'veryHappy';
        if (this.happiness > 70) return 'happy';
        return 'normal';
    }
    
    // Get pet mood description
    getMood() {
        const state = this.getState();
        const moods = {
            veryHungry: 'Starving',
            hungry: 'Hungry',
            verySleepy: 'Exhausted',
            sleepy: 'Sleepy',
            veryHappy: 'Ecstatic',
            happy: 'Happy',
            sleeping: 'Sleeping',
            normal: 'Content'
        };
        return moods[state] || 'Content';
    }
    
    // Get current pet face based on state
    getCurrentFace() {
        const state = this.getState();
        const faces = this.petConfig[this.type].faces;
        
        // Map states to face types
        let faceType = 'normal';
        
        if (state === 'sleeping') {
            faceType = 'sleeping';
        } else if (state === 'veryHungry') {
            faceType = 'veryHungry';
        } else if (state === 'hungry') {
            faceType = 'hungry';
        } else if (state === 'verySleepy') {
            faceType = 'sleepy';
        } else if (state === 'sleepy') {
            faceType = 'sleepy';
        } else if (state === 'veryHappy') {
            faceType = 'veryHappy';
        } else if (state === 'happy') {
            faceType = 'happy';
        }
        
        return faces[faceType] || faces.normal;
    }
    
    // Check for achievements
    checkAchievements() {
        const newAchievements = [];
        
        // Age achievements
        if (this.age >= 1 && !this.achievements.includes('First Day')) {
            newAchievements.push({ id: 'First Day', title: 'First Day!', description: 'Your pet survived its first day!' });
        }
        if (this.age >= 7 && !this.achievements.includes('Week Old')) {
            newAchievements.push({ id: 'Week Old', title: 'Week Old!', description: 'Your pet is a week old!' });
        }
        if (this.age >= 30 && !this.achievements.includes('Month Old')) {
            newAchievements.push({ id: 'Month Old', title: 'Month Old!', description: 'Your pet is a month old!' });
        }
        
        // Attribute achievements
        if (this.happiness >= 100 && !this.achievements.includes('Perfect Happiness')) {
            newAchievements.push({ id: 'Perfect Happiness', title: 'Perfect Happiness!', description: 'Your pet is perfectly happy!' });
        }
        if (this.energy >= 100 && !this.achievements.includes('Full Energy')) {
            newAchievements.push({ id: 'Full Energy', title: 'Full Energy!', description: 'Your pet is full of energy!' });
        }
        
        // Add new achievements
        newAchievements.forEach(achievement => {
            this.achievements.push(achievement.id);
            showNotification(achievement.title, achievement.description, 'achievement');
        });
    }
    
    // Update pet visual state
    updatePetState() {
        const petElement = document.getElementById('pet');
        const state = this.getState();
        
        // Remove all state classes
        petElement.classList.remove('hungry', 'sleepy', 'happy', 'normal', 'veryHungry', 'verySleepy', 'veryHappy', 'sleeping');
        
        // Add current state class
        petElement.classList.add(state);
        
        // Update pet face
        this.updatePetFace();
    }
    
    // Update pet face emoji
    updatePetFace() {
        const petEmoji = document.getElementById('petEmoji');
        if (petEmoji) {
            const newFace = this.getCurrentFace();
            if (petEmoji.textContent !== newFace) {
                // Add face change animation
                petEmoji.classList.add('face-change');
                petEmoji.textContent = newFace;
                
                // Remove animation class after animation completes
                setTimeout(() => {
                    petEmoji.classList.remove('face-change');
                }, 500);
            }
        }
    }
}

// Game state management
let currentPet = null;
let gameInterval = null;
let isDayMode = true;

// DOM elements
const petSelection = document.getElementById('petSelection');
const gameArea = document.getElementById('gameArea');
const petEmoji = document.getElementById('petEmoji');
const petName = document.getElementById('petName');
const petStatus = document.getElementById('petStatus');
const hungerBar = document.getElementById('hungerBar');
const happinessBar = document.getElementById('happinessBar');
const energyBar = document.getElementById('energyBar');
const hungerValue = document.getElementById('hungerValue');
const happinessValue = document.getElementById('happinessValue');
const energyValue = document.getElementById('energyValue');
const ageValue = document.getElementById('ageValue');
const moodValue = document.getElementById('moodValue');
const feedBtn = document.getElementById('feedBtn');
const playBtn = document.getElementById('playBtn');
const sleepBtn = document.getElementById('sleepBtn');
const resetBtn = document.getElementById('resetBtn');
const toggleDayNightBtn = document.getElementById('toggleDayNight');
const notifications = document.getElementById('notifications');

// Initialize the game
function initGame() {
    // Load saved pet if exists
    const savedPet = localStorage.getItem('virtualPet');
    if (savedPet) {
        const petData = JSON.parse(savedPet);
        currentPet = new VirtualPet(petData.type, petData.name);
        currentPet.hunger = petData.hunger;
        currentPet.happiness = petData.happiness;
        currentPet.energy = petData.energy;
        currentPet.age = petData.age;
        currentPet.birthDate = new Date(petData.birthDate);
        currentPet.achievements = petData.achievements || [];
        currentPet.isSleeping = petData.isSleeping || false;
        startGame();
    }
    
    // Set up event listeners
    setupEventListeners();
}

// Set up all event listeners
function setupEventListeners() {
    // Pet selection
    document.querySelectorAll('.pet-option').forEach(option => {
        option.addEventListener('click', () => selectPet(option.dataset.pet));
    });
    
    // Game interactions
    feedBtn.addEventListener('click', () => interact('feed'));
    playBtn.addEventListener('click', () => interact('play'));
    sleepBtn.addEventListener('click', () => interact('sleep'));
    
    // Reset button
    resetBtn.addEventListener('click', resetGame);
    
    // Day/Night toggle
    toggleDayNightBtn.addEventListener('click', toggleDayNight);
}

// Select a pet type
function selectPet(petType) {
    // Remove previous selection
    document.querySelectorAll('.pet-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    event.target.closest('.pet-option').classList.add('selected');
    
    // Create new pet
    currentPet = new VirtualPet(petType);
    
    // Start the game
    startGame();
}

// Start the game
function startGame() {
    // Hide pet selection and show game area
    petSelection.style.display = 'none';
    gameArea.style.display = 'block';
    
    // Update pet display
    updatePetDisplay();
    
    // Start game loop
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(() => {
        if (currentPet) {
            currentPet.update();
            updateDisplay();
            saveGame();
        }
    }, 1000); // Update every second
    
    // Initial display update
    updateDisplay();
}

// Update pet display
function updatePetDisplay() {
    if (!currentPet) return;
    
    const petConfig = currentPet.petConfig[currentPet.type];
    petEmoji.textContent = currentPet.getCurrentFace();
    petName.textContent = currentPet.name;
    petStatus.textContent = currentPet.getMood();
}

// Update all displays
function updateDisplay() {
    if (!currentPet) return;
    
    // Update progress bars
    hungerBar.style.width = `${currentPet.hunger}%`;
    happinessBar.style.width = `${currentPet.happiness}%`;
    energyBar.style.width = `${currentPet.energy}%`;
    
    // Update values
    hungerValue.textContent = `${Math.round(currentPet.hunger)}%`;
    happinessValue.textContent = `${Math.round(currentPet.happiness)}%`;
    energyValue.textContent = `${Math.round(currentPet.energy)}%`;
    
    // Update stats
    ageValue.textContent = `${currentPet.age} days`;
    moodValue.textContent = currentPet.getMood();
    
    // Update pet status
    petStatus.textContent = currentPet.getMood();
    
    // Update button states
    updateButtonStates();
    
    // Update pet visual state
    currentPet.updatePetState();
}

// Update button states based on pet condition
function updateButtonStates() {
    // Disable play button if energy is too low
    playBtn.disabled = currentPet.energy < 20;
    
    // Update sleep button text
    const sleepIcon = sleepBtn.querySelector('.btn-icon');
    const sleepText = sleepBtn.querySelector('.btn-text');
    
    if (currentPet.isSleeping) {
        sleepIcon.textContent = '😴';
        sleepText.textContent = 'Wake Up';
    } else {
        sleepIcon.textContent = '😴';
        sleepText.textContent = 'Sleep';
    }
}

// Handle pet interactions
function interact(action) {
    if (!currentPet) return;
    
    let success = false;
    let message = '';
    
    switch (action) {
        case 'feed':
            success = currentPet.feed();
            message = success ? 'Yum! Your pet enjoyed the food!' : 'Your pet is sleeping!';
            break;
        case 'play':
            success = currentPet.play();
            message = success ? 'Your pet had fun playing!' : currentPet.energy < 20 ? 'Your pet is too tired to play!' : 'Your pet is sleeping!';
            break;
        case 'sleep':
            success = currentPet.sleep();
            message = currentPet.isSleeping ? 'Your pet is now sleeping...' : 'Your pet woke up!';
            break;
    }
    
    if (success) {
        showNotification('Success!', message);
        updateDisplay();
        // Force face update after interaction
        if (currentPet) {
            currentPet.updatePetFace();
        }
        saveGame();
    } else {
        showNotification('Cannot do that!', message, 'warning');
    }
}

// Show notification
function showNotification(title, message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <strong>${title}</strong><br>
        ${message}
    `;
    
    notifications.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Toggle day/night mode
function toggleDayNight() {
    isDayMode = !isDayMode;
    const body = document.body;
    const button = toggleDayNightBtn;
    
    if (isDayMode) {
        body.classList.remove('night-mode');
        body.classList.add('day-mode');
        button.textContent = '🌙';
    } else {
        body.classList.remove('day-mode');
        body.classList.add('night-mode');
        button.textContent = '☀️';
    }
}

// Save game state
function saveGame() {
    if (!currentPet) return;
    
    const gameData = {
        type: currentPet.type,
        name: currentPet.name,
        hunger: currentPet.hunger,
        happiness: currentPet.happiness,
        energy: currentPet.energy,
        age: currentPet.age,
        birthDate: currentPet.birthDate.getTime(),
        achievements: currentPet.achievements,
        isSleeping: currentPet.isSleeping
    };
    
    localStorage.setItem('virtualPet', JSON.stringify(gameData));
}

// Reset the game
function resetGame() {
    if (confirm('Are you sure you want to start with a new pet? This will delete your current pet.')) {
        // Clear saved data
        localStorage.removeItem('virtualPet');
        
        // Stop game loop
        if (gameInterval) {
            clearInterval(gameInterval);
            gameInterval = null;
        }
        
        // Reset current pet
        currentPet = null;
        
        // Show pet selection
        gameArea.style.display = 'none';
        petSelection.style.display = 'block';
        
        // Clear notifications
        notifications.innerHTML = '';
        
        // Reset day/night mode
        isDayMode = true;
        document.body.classList.remove('night-mode', 'day-mode');
        document.body.classList.add('day-mode');
        toggleDayNightBtn.textContent = '🌙';
        
        // Clear selections
        document.querySelectorAll('.pet-option').forEach(option => {
            option.classList.remove('selected');
        });
    }
}

// Auto-save every 30 seconds
setInterval(() => {
    if (currentPet) {
        saveGame();
    }
}, 30000);

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', initGame);

// Add some fun easter eggs
document.addEventListener('keydown', (e) => {
    // Press 'H' for hidden happiness boost
    if (e.key.toLowerCase() === 'h' && currentPet) {
        currentPet.happiness = Math.min(100, currentPet.happiness + 5);
        showNotification('Secret!', 'You found a hidden happiness boost!', 'achievement');
        updateDisplay();
    }
    
    // Press 'E' for energy boost
    if (e.key.toLowerCase() === 'e' && currentPet) {
        currentPet.energy = Math.min(100, currentPet.energy + 5);
        showNotification('Secret!', 'You found a hidden energy boost!', 'achievement');
        updateDisplay();
    }
});

// Add pet click interaction
document.addEventListener('click', (e) => {
    if (e.target.closest('#pet') && currentPet && !currentPet.isSleeping) {
        currentPet.happiness = Math.min(100, currentPet.happiness + 2);
        showNotification('Pet Love!', 'Your pet loves the attention!');
        updateDisplay();
        // Force face update after petting
        currentPet.updatePetFace();
    }
});
