function getStarted() {
    alert("Thank you for your interest! We'll guide you through the remodeling journey.");
  }
  
// // Initialize Sketchfab Viewer
// const iframe = document.createElement("iframe");
// iframe.style.position = "absolute";
// iframe.style.top = "0";
// iframe.style.left = "0";
// iframe.style.width = "100%";
// iframe.style.height = "100%";
// iframe.style.border = "none";
// iframe.style.zIndex = "-1"; // Place it behind the overlay text
// document.getElementById("model-container").appendChild(iframe);

// // Sketchfab API URL and Options
// const client = new Sketchfab(iframe);
// const modelUid = "0d28b7e4568341bca576ee22d45d3d2c"; // Model ID
// const options = {
//   autospin: 0,
//   autostart: 1,
//   preload: 1,
//   ui_controls: 0, // Remove all UI controls
//   ui_stop: 0, // Remove stop button
//   ui_hint: 0, // Remove hints
//   transparent: 1, // Make the background transparent
// };

// // Load the model
// client.init(modelUid, options, function (success) {
//   if (success) {
//     // Mouse movement interaction logic
//     document.addEventListener("mousemove", function (event) {
//       const x = (event.clientX / window.innerWidth) * 2 - 1;
//       const y = (event.clientY / window.innerHeight) * 2 - 1;

//       // Send rotation commands to the Sketchfab viewer
//       client.api.setCameraLookAt([x * 2, y * 2, 1], [0, 0, 0]); // Adjust camera target
//     });
//   } else {
//     console.error("Sketchfab API failed to load.");
//   }
// });


// function spinTextAnimation() {
//     const textElement = document.getElementById("animated-text");
//     const finalText = textElement.textContent; // Get the final text
//     textElement.textContent = ""; // Clear the text initially
//     const delay = 100; // Delay between each character animation
//     const spinSpeed = 50; // Speed of each character's spinning animation
  
//     // Loop through each character in the final text
//     finalText.split("").forEach((char, index) => {
//       const span = document.createElement("span");
//       span.textContent = ""; // Empty at first
//       textElement.appendChild(span);
  
//       let charIndex = 0; // Start cycling through A-Z
//       const cycle = setInterval(() => {
//         span.textContent = String.fromCharCode(65 + charIndex); // Cycle A-Z (ASCII 65-90)
//         charIndex = (charIndex + 1) % 26; // Wrap around after Z
//       }, spinSpeed);
  
//       // Stop cycling and set the final character after a delay
//       setTimeout(() => {
//         clearInterval(cycle);
//         span.textContent = char; // Set the correct character
//       }, delay * index + 500); // Delay grows with each character's position
//     });
//   }
  
//   // Trigger the animation when the page loads
//   window.addEventListener("DOMContentLoaded", spinTextAnimation);
  
function sequentialSpinTextAnimation() {
    const textElement = document.getElementById("animated-text");
    const finalText = textElement.textContent; // Get the final text
    textElement.textContent = ""; // Clear the text initially
  
    const spinSpeed = 250; // Speed of each letter's spinning animation
    const delayBetweenLetters = 500; // Delay before moving to the next letter
  
    let index = 0;
  
    function animateLetter() {
      if (index < finalText.length) {
        const char = finalText[index]; // Current character
        const span = document.createElement("span");
        textElement.appendChild(span);
  
        let charIndex = 0; // Start cycling through A-Z
        const cycle = setInterval(() => {
          span.textContent = String.fromCharCode(65 + charIndex); // Cycle A-Z (ASCII 65-90)
          charIndex = (charIndex + 1) % 26; // Wrap around after Z
        }, spinSpeed);
  
        // Stop spinning and display the final character
        setTimeout(() => {
          clearInterval(cycle);
          span.textContent = char; // Set the correct character
          index++;
          animateLetter(); // Move to the next letter
        }, delayBetweenLetters);
      }
    }
  
    animateLetter(); // Start animating the first letter
  }
  
  // Trigger the animation when the page loads
  window.addEventListener("DOMContentLoaded", sequentialSpinTextAnimation);
  

  




  
  

  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
  
    const animateCounter = (counter) => {
      const target = +counter.getAttribute("data-target");
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // Update every ~16ms
  
      let count = 0;
  
      const updateCounter = () => {
        count += increment;
        if (count < target) {
          counter.textContent = Math.floor(count);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
  
      updateCounter();
    };
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            animateCounter(counter);
            observer.unobserve(counter); // Stop observing once animation completes
          }
        });
      },
      { threshold: 0.5 }
    );
  
    counters.forEach((counter) => observer.observe(counter));
  });
  



  const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const section = document.querySelector(".counters-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(section); // Stop observing after animation
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(section);

  function startCounting() {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const increment = target / 100; // Divide by steps
      let currentValue = 0;

      const updateCounter = () => {
        currentValue += increment;
        if (currentValue < target) {
          counter.textContent = Math.ceil(currentValue);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target; // Set the final value
        }
      };

      updateCounter();
    });
  }
});






document.addEventListener("DOMContentLoaded", () => {
  const typingSection = document.querySelector(".typing-animation");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the typing animation class when the section is visible
          typingSection.style.animation = "typing 4s steps(40, end) forwards, blink 0.7s infinite";
          typingSection.style.opacity = 1; // Make the text visible
          observer.unobserve(typingSection); // Stop observing once the animation is triggered
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
  );

  observer.observe(typingSection); // Start observing the typing section
});



document.querySelector('a[href="#projects"]').addEventListener("click", function(e) {
  e.preventDefault(); // Prevent default link behavior
  
  // Select the target section
  const targetSection = document.querySelector('#projects');
  
  // Scroll to the target section
  targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start', // Scroll to the top of the section
  });
});
