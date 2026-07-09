const correctPassword = "BATAM";

const birthdayLetter = `Happy Birthday, my love. ❤️

Today is about celebrating you, the most beautiful part of mine.

It's amazing that this is already the second birthday I get to spend with you. Last year, we celebrated at the Fullerton Hotel in Singapore. This year, we're celebrating together in Batam, creating another chapter of our love story. Look forward to water activities, lots of good seafood, cafe-hopping and pamper sessions!

Before I met you, birthdays were simply another day on the calendar. Now, your birthday has become one of my favourite days of the year because it's the day the person I love most came into this world. I can't imagine what my life would be like if our paths had never crossed, and every day I'm grateful that somehow, out of all the people in this world, I found you.

When I think about us, I don't just think about the big milestones. I think about all the little chapters that have slowly become our love story.

I think about us singing our hearts out at the CNBLUE concert, and then months later screaming just as loudly at the DAY6 concert. I think about our impromptu decision to catch the BTS Live Viewing concert at GV, and how something so spontaneous turned into one of those memories I'll always smile about. Every concert wasn't just about the music—it was about experiencing the excitement with you, seeing your smile, and making memories that belong only to us.

I think about standing beneath the beautiful sakura in Hiroshima. Surrounded by thousands of cherry blossoms, I realised the scenery was breathtaking, but you were still the most beautiful thing I saw. That trip reminded me that no matter where we travel in the world, my favourite view will always be you standing beside me.

I smile whenever I remember you patiently teaching me how to rollerblade. I know I wasn't exactly the fastest learner, but you never gave up on me. You held my hand, encouraged me every step of the way, and somehow that became such a perfect reflection of our relationship. You've always been there to steady me whenever I lose my balance in life.

Some of my happiest memories are also the simplest ones. Going for spin class together, building toys side by side, laughing over the tiniest things, or just spending the whole day doing absolutely nothing except enjoying each other's company. Somehow, even the ordinary feels extraordinary with you.

I also love thinking about the days we went out to recce Ang Mo Kio, Upper Thomson and Bukit Merah for our future home together. Walking around imagining where we'd live, dreaming about how we'd decorate our place, and picturing the life we'd build together made everything feel so real. Hopefully the BTO gods hear us soon... because I honestly can't wait for the day we finally have a place to call ours. A home filled with laughter, late-night suppers, random game sessions, way too many toys on display (I think I might contribute 80%), and most importantly, us.

One of my favourite memories this year was celebrating my NS milestone at my MR parade with you. After all those years of NS commitments, I felt so happy to see you at my MR parade and it felt so meaningful to celebrate the end of that chapter not alone, but with the person I want to spend the rest of my life with. Somehow every milestone feels bigger because you're there beside me.

And of course, I can never forget surprising you with the BTS Army Bong for your birthday present. Every time I see your excitement, I secretly celebrate too. My mission to turn you into an even bigger ARMY fangirl is still ongoing, and honestly, seeing you so happy is the best reward I could ever ask for. P.S - special thanks TicketMaster/BTS/ARMY for blessing bb and I with BTS concert tickets in December!

Thank you for loving me, believing in me, laughing at my nonsense, holding my hand through life's ups and downs, and making every ordinary day feel extraordinary. Thank you for being my favourite person, my best travel buddy, my concert partner, my workout buddy, my rollerskating coach, my biggest supporter, and the person I want to experience every new adventure with.

I know how hard you work and how much you quietly carry on your shoulders in Decathlon. I wish I could take away every worry and every stressful day. I hope this birthday reminds you how deeply you are loved—not just today, but every single day. I'll always be by your side.

Thank you for letting me love you. Thank you for choosing me every day. Loving you has been the easiest and best decision I've ever made.

As we celebrate your birthday here in Batam, I can't help but wonder where we'll be celebrating your next one, and the one after that, and every birthday after. Maybe another country, another spontaneous adventure, another concert, another dream fulfilled. Wherever life takes us, I only have one wish which is to still be holding your hand through all of it.

One day, when we're old and looking through thousands of photos together, I hope we'll smile at all these little moments and realise that they were never little after all. They were the pieces that built a lifetime of memories.

Happy Birthday, my beautiful bb. I love you, so much so much.

Forever yours. ❤️`;

const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const errorMsg = document.getElementById("errorMsg");
const lockScreen = document.getElementById("lock-screen");
const transitionScreen = document.getElementById("transition-screen");
const birthdayPage = document.getElementById("birthday-page");
const typedLetter = document.getElementById("typedLetter");
const showGalleryBtn = document.getElementById("showGalleryBtn");
const gallerySection = document.getElementById("gallery-section");

unlockBtn.addEventListener("click", unlockSite);
passwordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    unlockSite();
  }
});

function unlockSite() {
  const answer = passwordInput.value.trim().toUpperCase();

  if (answer === correctPassword) {
    errorMsg.textContent = "";
    lockScreen.classList.add("hidden");
    transitionScreen.classList.remove("hidden");

    setTimeout(() => {
      transitionScreen.classList.add("hidden");
      birthdayPage.classList.remove("hidden");

      const music = document.getElementById("bgMusic");
      if (music) {
        music.play().catch(() => {
          console.log("Music autoplay blocked until user interacts again.");
        });
      }

      typeLetter();
    }, 1800);
  } else {
    errorMsg.textContent = "Wrong password leh bb 😝 Try again.";
  }
}

function typeLetter() {
  let index = 0;
  typedLetter.textContent = "";

  const speed = 14;

  function typeNextCharacter() {
    if (index < birthdayLetter.length) {
      typedLetter.textContent += birthdayLetter.charAt(index);
      index++;
      setTimeout(typeNextCharacter, speed);
    } else {
      showGalleryBtn.classList.remove("hidden");
    }
  }

  typeNextCharacter();
}

showGalleryBtn.addEventListener("click", function() {
  gallerySection.classList.remove("hidden");
  showGalleryBtn.classList.add("hidden");
  gallerySection.scrollIntoView({ behavior: "smooth" });
});
