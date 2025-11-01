# 🐾 Virtual Pet Simulator

A delightful web-based virtual pet simulation game built with HTML, CSS, and JavaScript. Take care of your virtual pet by feeding, playing, and ensuring it gets enough rest!
## Web Preview Link.
https://aditya03126.github.io/Virtual-Pet-Simulator/

## 🌟 Features

### Core Gameplay
- **Multiple Pet Types**: Choose from Cat, Dog, Rabbit, or Hamster
- **Three Core Attributes**: 
  - **Hunger**: Decreases when feeding, increases over time
  - **Happiness**: Increases when playing, decreases slowly over time
  - **Energy**: Restores when sleeping, decreases when playing
- **Real-time Updates**: Pet attributes change dynamically every second
- **Pet States**: Visual feedback based on pet condition (Happy, Hungry, Sleepy, Content)

### Interactive Features
- **Feed Button**: Reduces hunger, slightly increases happiness and energy
- **Play Button**: Increases happiness, decreases energy (requires energy > 20)
- **Sleep Button**: Toggles sleep mode, restores energy while sleeping
- **Pet Clicking**: Click your pet for extra happiness boost!

### Visual & UI Features
- **Day/Night Cycle**: Toggle between day and night modes with different backgrounds
- **Smooth Animations**: Pet animations change based on state (bounce, shake, sleep)
- **Progress Bars**: Real-time visual indicators for all pet attributes
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Glassmorphism design with beautiful gradients and blur effects

### Advanced Features
- **Achievement System**: Unlock achievements for milestones (First Day, Week Old, etc.)
- **Auto-save**: Game progress is automatically saved to localStorage
- **Pet Aging**: Track your pet's age in days
- **Random Pet Names**: Each pet type has unique, themed names
- **Notifications**: Real-time feedback for all actions and achievements

### Easter Eggs & Secrets
- **Keyboard Shortcuts**: 
  - Press 'H' for hidden happiness boost
  - Press 'E' for hidden energy boost
- **Pet Interaction**: Click your pet for extra love and happiness

## 🚀 How to Run

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required!

### Setup Instructions
1. **Download/Clone** the project files to your local machine
2. **Open** `index.html` in your web browser
3. **Start Playing** - Choose your pet and begin caring for it!

### File Structure
```
Virtual Pet Simulator/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Game logic and interactions
└── README.md           # This file
```

## 🎮 How to Play

### Getting Started
1. **Choose Your Pet**: Select from Cat, Dog, Rabbit, or Hamster
2. **Monitor Attributes**: Watch the progress bars for Hunger, Happiness, and Energy
3. **Interact Regularly**: Use the Feed, Play, and Sleep buttons to care for your pet

### Pet Care Guide

#### Feeding (🍽️)
- **When to use**: When hunger is high (>50%)
- **Effect**: Reduces hunger by 30%, increases happiness by 10%, energy by 5%
- **Note**: Cannot feed while pet is sleeping

#### Playing (🎾)
- **When to use**: When energy > 20% and pet is awake
- **Effect**: Increases happiness by 25%, decreases energy by 20%, increases hunger by 10%
- **Note**: Requires energy to play

#### Sleeping (😴)
- **When to use**: When energy is low or to restore energy
- **Effect**: Toggles sleep mode, restores energy while sleeping
- **Note**: Hunger increases slowly while sleeping

### Pet States & Behaviors
- **Happy**: Pet bounces with bright colors (happiness > 70%)
- **Hungry**: Pet shakes and appears gray (hunger > 80%)
- **Sleepy**: Pet scales down and appears drowsy (energy < 20%)
- **Content**: Normal pet behavior (default state)

### Natural Changes Over Time
- **Hunger**: Increases slowly when awake, very slowly when sleeping
- **Happiness**: Decreases slowly when awake
- **Energy**: Decreases slowly when awake, restores when sleeping

## 🏆 Achievements

Unlock achievements by reaching milestones:
- **First Day**: Pet survives its first day
- **Week Old**: Pet reaches 7 days old
- **Month Old**: Pet reaches 30 days old
- **Perfect Happiness**: Pet reaches 100% happiness
- **Full Energy**: Pet reaches 100% energy

## 🎨 Design Features

### Visual Design
- **Glassmorphism**: Modern glass-like UI elements with blur effects
- **Gradient Backgrounds**: Beautiful color transitions
- **Smooth Animations**: CSS animations for all interactions
- **Responsive Layout**: Adapts to any screen size

### Color Scheme
- **Day Mode**: Purple-blue gradient background
- **Night Mode**: Dark blue-gray gradient background
- **Progress Bars**: 
  - Hunger: Red gradient
  - Happiness: Teal gradient
  - Energy: Yellow gradient

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **Vanilla JavaScript**: ES6+ features, classes, and modern APIs
- **LocalStorage**: Persistent game data storage

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- **Efficient Updates**: 1-second intervals for smooth gameplay
- **Auto-save**: Every 30 seconds to prevent data loss
- **Memory Management**: Proper cleanup of intervals and event listeners

## 🐛 Troubleshooting

### Common Issues
1. **Game not loading**: Ensure all files are in the same directory
2. **Progress not saving**: Check if localStorage is enabled in your browser
3. **Animations not working**: Update to a modern browser version

### Browser Settings
- Enable JavaScript
- Allow localStorage (for save functionality)
- Disable popup blockers (for notifications)

## 🎯 Future Enhancements

Potential features for future versions:
- Multiple pets at once
- Pet accessories and customization
- Mini-games and activities
- Pet evolution/aging system
- Social features (pet sharing)
- Sound effects and background music
- More pet types and breeds

## 📝 Code Structure

### JavaScript Architecture
- **VirtualPet Class**: Main pet logic and state management
- **Game State Management**: Handles current pet and game loop
- **Event Handlers**: User interactions and UI updates
- **Utility Functions**: Notifications, saving, and helper functions

### CSS Organization
- **Base Styles**: Reset and fundamental styling
- **Layout**: Container and grid systems
- **Components**: Buttons, progress bars, notifications
- **Animations**: Keyframes and transitions
- **Responsive**: Media queries for different screen sizes

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Improving the code
- Adding new pet types or animations

## 📄 License

This project is open source and available under the MIT License.

---

**Enjoy taking care of your virtual pet! 🐾✨**

