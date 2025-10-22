export const translations = {
  en: {
    // App.tsx
    headerTitle: "GURU KRIPA SHORTZ",
    headerSubtitle: "VIDEOS",
    sectionTitle: "Guru Kripa Shortz",
    feedbackButton: "Share your feedback",
    viewRating: "View community rating for this app",
    unmute: "Unmute background music",
    mute: "Mute background music",
    toggleLanguage: "Toggle language",
    quotes: [
      { text: "Meditation is the journey from the head to the heart.", author: "Sant Rajinder Singh Ji Maharaj" },
      { text: "Love is the only way back to God.", author: "Sant Darshan Singh Ji Maharaj" },
      { text: "Spirituality is a living and practical subject. It is a science of the soul.", author: "Sant Kirpal Singh Ji Maharaj" },
      { text: "The soul is a drop from the ocean of all-consciousness.", author: "Sant Rajinder Singh Ji Maharaj" },
      { text: "In the silence of meditation, we can hear the voice of our soul.", author: "Sant Rajinder Singh Ji Maharaj" },
      { text: "The purpose of human life is to know oneself and to know God.", author: "Sant Kirpal Singh Ji Maharaj" },
      { text: "Let us become ambassadors of peace and love in the world.", author: "Sant Darshan Singh Ji Maharaj" },
      { text: "We are all children of the same one God, and our souls are parcels of that divine light.", author: "Sant Rajinder Singh Ji Maharaj" },
    ],
    
    // VideoCard.tsx
    videoTitle: "Video #",
    watch: "Watch",
    download: "Download",
    downloadStarting: "Starting...",
    downloadStarted: "Started!",
    videoUnavailable: "Video Unavailable",
    thumbnailAlt: "Thumbnail for Video {videoNumber}",
    watchOnYoutube: "Watch Video {videoNumber} on YouTube",
    videoUnavailableAria: "Video {videoNumber} is unavailable",
    notAvailable: "N/A",

    // IntroAnimation.tsx
    skip: "SKIP",
    introQuote: { text: '"God is love."', author: "Sant Darshan Singh Ji Maharaj" },

    // SurveyModal.tsx
    surveyTitle: "Share Your Feedback",
    surveySubtitle: "How would you rate your experience?",
    surveyPlaceholder: "Any comments or suggestions? (Optional)",
    cancel: "Cancel",
    submit: "Submit",
    thankYou: "Thank You!",
    feedbackAppreciated: "Your feedback is appreciated.",

    // RatingModal.tsx
    ratingTitle: "Community Rating",
    ratingDescription: "This is the average rating provided by our community. Thank you!",
  },
  hi: {
    // App.tsx
    headerTitle: "गुरु कृपा शॉर्ट्स",
    headerSubtitle: "वीडियो",
    sectionTitle: "गुरु कृपा शॉर्ट्स",
    feedbackButton: "अपनी प्रतिक्रिया साझा करें",
    viewRating: "इस ऐप के लिए सामुदायिक रेटिंग देखें",
    unmute: "पृष्ठभूमि संगीत अनम्यूट करें",
    mute: "पृष्ठभूमि संगीत म्यूट करें",
    toggleLanguage: "भाषा बदलें",
    quotes: [
      { text: "ध्यान सिर से हृदय तक की यात्रा है।", author: "संत राजिंदर सिंह जी महाराज" },
      { text: "प्रेम ही ईश्वर के पास वापस जाने का एकमात्र रास्ता है।", author: "संत दर्शन सिंह जी महाराज" },
      { text: "अध्यात्म एक जीवंत और व्यावहारिक विषय है। यह आत्मा का विज्ञान है।", author: "संत किरपाल सिंह जी महाराज" },
      { text: "आत्मा सर्व-चेतना के महासागर से एक बूंद है।", author: "संत राजिंदर सिंह जी महाराज" },
      { text: "ध्यान की खामोशी में, हम अपनी आत्मा की आवाज सुन सकते हैं।", author: "संत राजिंदर सिंह जी महाराज" },
      { text: "मानव जीवन का उद्देश्य स्वयं को जानना और ईश्वर को जानना है।", author: "संत किरपाल सिंह जी महाराज" },
      { text: "आइए हम दुनिया में शांति और प्रेम के दूत बनें।", author: "संत दर्शन सिंह जी महाराज" },
      { text: "हम सब एक ही ईश्वर की संतान हैं, और हमारी आत्माएं उस दिव्य प्रकाश का अंश हैं।", author: "संत राजिंदर सिंह जी महाराज" },
    ],
    
    // VideoCard.tsx
    videoTitle: "वीडियो #",
    watch: "देखें",
    download: "डाउनलोड",
    downloadStarting: "शुरू हो रहा है...",
    downloadStarted: "शुरू हुआ!",
    videoUnavailable: "वीडियो अनुपलब्ध",
    thumbnailAlt: "वीडियो {videoNumber} का थंबनेल",
    watchOnYoutube: "यूट्यूब पर वीडियो {videoNumber} देखें",
    videoUnavailableAria: "वीडियो {videoNumber} अनुपलब्ध है",
    notAvailable: "लागू नहीं",

    // IntroAnimation.tsx
    skip: "छोड़ें",
    introQuote: { text: '"ईश्वर प्रेम है।"', author: "संत दर्शन सिंह जी महाराज" },
    
    // SurveyModal.tsx
    surveyTitle: "अपनी प्रतिक्रिया साझा करें",
    surveySubtitle: "आप अपने अनुभव को कैसे रेट करेंगे?",
    surveyPlaceholder: "कोई टिप्पणी या सुझाव? (वैकल्पिक)",
    cancel: "रद्द करें",
    submit: "भेजें",
    thankYou: "धन्यवाद!",
    feedbackAppreciated: "आपकी प्रतिक्रिया की सराहना की जाती है।",

    // RatingModal.tsx
    ratingTitle: "सामुदायिक रेटिंग",
    ratingDescription: "यह हमारे समुदाय द्वारा प्रदान की गई औसत रेटिंग है। धन्यवाद!",
  }
};

export type Language = keyof typeof translations;
