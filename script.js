document.addEventListener("DOMContentLoaded", function() {
  const animatedText = document.getElementById("animated-text");
  const welcomeText1 = "One moment origin is setup..";
  const welcomeText2 = "all files are modified..server is online";
  const combinedText = welcomeText1 + '\n' + welcomeText2;
  console.log(combinedText);
  let currentIndex = 0;

  function startTextAnimation() {
      const intervalId = setInterval(function() {
          if (currentIndex <= combinedText.length) {
              animatedText.textContent = combinedText.substring(0, currentIndex);
              currentIndex++;
          } else {
              clearInterval(intervalId); // Clear the interval after the animation is complete
          }
      }, 100); // You can adjust the delay (in milliseconds) between each character appearance
  }

  startTextAnimation();

  gsap.fromTo(".loading-page", { opacity: 1 }, { opacity: 0, display: "none", duration: 1.5, delay: 3.5 });

  gsap.fromTo(".logo-name", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2, delay: 0.5 });

  // Stop the animation and close the window after 20 seconds
  setTimeout(function() {
      clearInterval(startTextAnimation);
      // Perform any additional actions or cleanup here before exiting

      // Close the window
      window.close();
  }, 15000); // 20 seconds (20000 milliseconds)
});
