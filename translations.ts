
export const translations = {
  en: {
    // App.tsx
    headerTitle: "GURU KRIPA SHORTZ",
    headerSubtitle: "Inspired by Sant Rajinder Singh Ji Maharaj",
    booksSectionTitle: "Spiritual Books",
    poetrySectionTitle: "Poetry",
    photoGallerySectionTitle: "Photo Gallery",
    animatedBooksSectionTitle: "Animated Spiritual Books",
    feedbackButton: "Share your feedback",
    viewRating: "View community rating for this app",
    toggleLanguage: "Toggle language",
    goToTop: "Go to Top",
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
    
    // BookCard.tsx
    readPdf: "Read PDF",
    listenAudio: "Listen Audio",
    watchVideo: "Watch Video",
    takeQuiz: "Take Quiz",

    // Fix: Add missing translations for video components.
    // VideoCard.tsx & VideoPlayerModal.tsx
    videoUnavailableAria: "Video {titlePrefix} #{videoNumber} is currently unavailable",
    playVideoAria: "Play video {titlePrefix} #{videoNumber}",
    thumbnailAlt: "Thumbnail for video {titlePrefix} #{videoNumber}",
    youTubePlayerTitle: "YouTube Player for {titlePrefix} #{videoNumber}",
    videoUnavailable: "Video Unavailable",
    watch: "Watch",
    download: "Download",
    downloadStarting: "Starting...",
    downloadStarted: "Download Started!",
    notAvailable: "Not Available",

    // PoetryCard.tsx
    listenToPoem: "Listen to Poem",
    showMeaning: "Show Meaning",
    hideMeaning: "Hide Meaning",

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

    // PhotoGallery.tsx & ImageModal.tsx
    kirpalSinghTitle: "Sant Kirpal Singh Ji Maharaj (1894-1974)",
    photoGallerySubheading: "A Glimpse into a Life of Love and Service",
    kirpalSinghP1: "Sant Kirpal Singh Ji Maharaj was a renowned spiritual Master who taught the universal path of Surat Shabd Yoga (the yoga of the Sound Current). His teachings emphasized the unity of all religions and the importance of a living Master to guide seekers on the inner spiritual journey back to God.",
    photoGalleryPreview: "Photo Gallery Preview",
    watchVideoPreview: "Watch Video Preview",
    watchVideoPreviewAria: "Watch the video preview about the life of Sant Kirpal Singh Ji Maharaj",
    darshanSinghTitle: "Sant Darshan Singh Ji Maharaj (1921-1989)",
    darshanSinghSubheading: "The Poet Saint of Divine Love",
    darshanSinghP1: "Sant Darshan Singh Ji Maharaj was a world-renowned spiritual Master and one of the 20th century's greatest mystic poets. His teachings, like his poetry, centered on the theme of divine love as the practical means to experience God. He founded the Sawan Kirpal Ruhani Mission (Science of Spirituality) and traveled the globe, tirelessly sharing the message of unity and the path of meditation.",
    darshanVideoPreviewAria: "Watch the video preview about the life of Sant Darshan Singh Ji Maharaj",
    jumpToDarshanSection: "Jump to Sant Darshan Singh Ji Maharaj",
    close: "Close",
    next: "Next",
    previous: "Previous",

    // Poetry Section
    poetryCollectionTitle: "A Selection of Divine Verse",
    poetryCollectionSubtitle: "Sant Darshan Singh Ji Maharaj composed over 700 ghazals and poems. This collection presents a curated selection of his profound work.",
    poetryResetTitle: "You've seen all the poems!",
    poetryResetSubtitle: "Enjoy them again from the beginning.",
  },
  hi: {
    // App.tsx
    headerTitle: "गुरु कृपा शॉर्ट्स",
    headerSubtitle: "संत राजिंदर सिंह जी महाराज से प्रेरित",
    booksSectionTitle: "आध्यात्मिक पुस्तकें",
    poetrySectionTitle: "कविता",
    photoGallerySectionTitle: "फोटो गैलरी",
    animatedBooksSectionTitle: "एनिमेटेड आध्यात्मिक पुस्तकें",
    feedbackButton: "अपनी प्रतिक्रिया साझा करें",
    viewRating: "इस ऐप के लिए सामुदायिक रेटिंग देखें",
    toggleLanguage: "भाषा बदलें",
    goToTop: "ऊपर जाएं",
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
    
    // BookCard.tsx
    readPdf: "पीडीएफ पढ़ें",
    listenAudio: "ऑड़ीओ सुनें",
    watchVideo: "वीडियो देखें",
    takeQuiz: "प्रश्नोत्तरी करें",
    
    // Fix: Add missing translations for video components.
    // VideoCard.tsx & VideoPlayerModal.tsx
    videoUnavailableAria: "वीडियो {titlePrefix} #{videoNumber} अभी अनुपलब्ध है",
    playVideoAria: "वीडियो {titlePrefix} #{videoNumber} चलाएं",
    thumbnailAlt: "वीडियो {titlePrefix} #{videoNumber} के लिए थंबनेल",
    youTubePlayerTitle: "वीडियो {titlePrefix} #{videoNumber} के लिए यूट्यूब प्लेयर",
    videoUnavailable: "वीडियो अनुपलब्ध है",
    watch: "देखें",
    download: "डाउनलोड करें",
    downloadStarting: "शुरू हो रहा है...",
    downloadStarted: "डाउनलोड शुरू हुआ!",
    notAvailable: "उपलब्ध नहीं है",

    // PoetryCard.tsx
    listenToPoem: "कविता सुनें",
    showMeaning: "अर्थ देखें",
    hideMeaning: "अर्थ छिपाएं",

    // IntroAnimation.tsx
    skip: "छोड़ें",
    introQuote: { text: '"ईश्वर प्रेम है।"', author: "संत दर्शन सिंह जी महाराज" },
    
    // SurveyModal.tsx
    surveyTitle: "अपनी प्रतिक्रिया साझा करें",
    surveySubtitle: "आप अपने अनुभव को कैसे रेट करेंगे?",
    // Added missing surveyPlaceholder for Hindi translation
    surveyPlaceholder: "कोई टिप्पणी या सुझाव? (वैकल्पिक)",
    cancel: "रद्द करें",
    submit: "भेजें",
    thankYou: "धन्यवाद!",
    feedbackAppreciated: "आपकी प्रतिक्रिया की सराहना की जाती है।",

    // RatingModal.tsx
    ratingTitle: "सामुदायिक रेटिंग",
    ratingDescription: "यह हमारे समुदाय द्वारा प्रदान की गई औसत रेटिंग है। धन्यवाद!",

    // PhotoGallery.tsx & ImageModal.tsx
    kirpalSinghTitle: "संत किरपाल सिंह जी महाराज (१८९४-१९७४)",
    photoGallerySubheading: "प्रेम और सेवा के जीवन की एक झलक",
    kirpalSinghP1: "संत किरपाल सिंह जी महाराज एक प्रसिद्ध आध्यात्मिक गुरु थे जिन्होंने सूरत शब्द योग (शब्द-धारा का योग) का सार्वभौमिक मार्ग सिखाया। उनकी शिक्षाओं ने सभी धर्मों की एकता और साधकों को वापस ईश्वर की ओर ले जाने वाली आंतरिक आध्यात्मिक यात्रा पर मार्गदर्शन करने के लिए एक जीवित गुरु के महत्व पर जोर दिया।",
    photoGalleryPreview: "फोटो गैलरी प्रीव्यू",
    watchVideoPreview: "वीडियो प्रीव्यू देखें",
    watchVideoPreviewAria: "संत किरपाल सिंह जी महाराज के जीवन पर वीडियो प्रीव्यू देखें",
    darshanSinghTitle: "संत दर्शन सिंह जी महाराज (१९२१-१९८९)",
    darshanSinghSubheading: "दिव्य प्रेम के कवि संत",
    darshanSinghP1: "संत दर्शन सिंह जी महाराज एक विश्व-प्रसिद्ध आध्यात्मिक गुरु और 20वीं सदी के महानतम रहस्यवादी कवियों में से एक थे। उनकी शिक्षाएं, उनकी कविता की तरह, ईश्वर का अनुभव करने के व्यावहारिक साधन के रूप में दिव्य प्रेम के विषय पर केंद्रित थीं। उन्होंने सावन कृपाल रूहानी मिशन (आध्यात्मिकता का विज्ञान) की स्थापना की और दुनिया भर की यात्रा की, एकता और ध्यान के मार्ग का संदेश अथक रूप से साझा किया।",
    darshanVideoPreviewAria: "संत दर्शन सिंह जी महाराज के जीवन पर वीडियो प्रीव्यू देखें",
    jumpToDarshanSection: "संत दर्शन सिंह जी महाराज के अनुभाग पर जाएं",
    close: "बंद करें",
    next: "अगला",
    previous: "पिछला",

    // Poetry Section
    poetryCollectionTitle: "दिव्य छंदों का एक चयन",
    poetryCollectionSubtitle: "संत दर्शन सिंह जी महाराज ने ७०० से अधिक ग़ज़लें और कविताएँ रचीं। यह संग्रह उनके गहन कार्यों का एक क्यूरेटेड चयन प्रस्तुत करता है।",
    poetryResetTitle: "आपने सारी कविताएँ देख ली हैं!",
    poetryResetSubtitle: "शुरू से फिर से उनका आनंद लें।",
  }
};

export type Language = keyof typeof translations;
