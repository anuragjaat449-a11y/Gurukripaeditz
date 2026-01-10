export interface Video {
    id: string; // youtube ID or GDrive file ID
    type: 'youtube' | 'gdrive';
    downloadUrl?: string;
}

export interface Book {
    id:string;
    titleEn: string;
    titleHi: string;
    coverImageUrl: string;
    pdfUrl?: string;
    audioUrl?: string;
    video?: Video;
    category?: 'animated';
    quizzes?: { id: string; titleEn: string; titleHi: string; url?: string }[];
}

export interface Poem {
    id: string;
    author: string;
    titleEn: string;
    titleHi: string;
    textEn: string[];
    textHi: string[];
    audioUrl?: string;
    meaningEn?: string;
    meaningHi?: string;
}

export interface GalleryImage {
    id: string;
    thumbnailUrl: string;
    fullUrl: string;
    altEn: string;
    altHi: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
    { id: 'k1', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1yGyOXM4HOwtA38tI5C3mpoPWbDQRyQ1S&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1yGyOXM4HOwtA38tI5C3mpoPWbDQRyQ1S&sz=w1280', altEn: 'A portrait of Sant Kirpal Singh Ji Maharaj', altHi: 'संत किरपाल सिंह जी महाराज का एक चित्र' },
    { id: 'k2', thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Sant_Kirpal_Singh_Ji_Maharaj.jpg/800px-Sant_Kirpal_Singh_Ji_Maharaj.jpg', fullUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Sant_Kirpal_Singh_Ji_Maharaj.jpg', altEn: 'Sant Kirpal Singh Ji Maharaj in a thoughtful pose', altHi: 'संत किरपाल सिंह जी महाराज एक विचारशील मुद्रा में' },
    { id: 'k3', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1-raL_oWOXZdp8nr4hT21H7DctvUfFSKh&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1-raL_oWOXZdp8nr4hT21H7DctvUfFSKh&sz=w1280', altEn: 'Sant Kirpal Singh Ji Maharaj speaking to an audience', altHi: 'संत किरपाल सिंह जी महाराज एक सभा को संबोधित करते हुए' },
    { id: 'k4', thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sant_Kirpal_Singh_portrait.jpg/800px-Sant_Kirpal_Singh_portrait.jpg', fullUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Sant_Kirpal_Singh_portrait.jpg', altEn: 'A smiling photo of Sant Kirpal Singh Ji Maharaj', altHi: 'संत किरपाल सिंह जी महाराज की एक मुस्कुराती हुई तस्वीर' },
    { id: 'k5', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1ZibbB1oi8M4NPoCTEypkquDGe3dymSeG&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1ZibbB1oi8M4NPoCTEypkquDGe3dymSeG&sz=w1280', altEn: 'Sant Kirpal Singh Ji Maharaj during a tour abroad', altHi: 'संत किरपाल सिंह जी महाराज विदेश यात्रा के दौरान' },
    { id: 'k6', thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sant_Kirpal_Singh_with_followers.jpg/1024px-Sant_Kirpal_Singh_with_followers.jpg', fullUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sant_Kirpal_Singh_with_followers.jpg', altEn: 'A candid moment of Sant Kirpal Singh Ji Maharaj', altHi: 'संत किरपाल सिंह जी महाराज का एक स्पष्ट क्षण' },
    { id: 'k7', thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sant_Kirpal_Singh_portrait.jpg/800px-Sant_Kirpal_Singh_portrait.jpg', fullUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Sant_Kirpal_Singh_portrait.jpg', altEn: 'Sant Kirpal Singh Ji Maharaj in meditation', altHi: 'संत किरपाल सिंह जी महाराज ध्यान में' },
    { id: 'k8', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1Cxzm6sxR7yz9_uIUBPoQxtAPNwG6RXf0&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1Cxzm6sxR7yz9_uIUBPoQxtAPNwG6RXf0&sz=w1280', altEn: 'An infant photograph of Sant Kirpal Singh Ji Maharaj', altHi: 'संत किरपाल सिंह जी महाराज की एक शिशु तस्वीर' },
    { id: 'k9', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1R32zSfHp05ZUtREudJb7wEol8lGDZaLs&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1R32zSfHp05ZUtREudJb7wEol8lGDZaLs&sz=w1280', altEn: 'Sant Kirpal Singh Ji Maharaj with his Master, Baba Sawan Singh Ji', altHi: 'संत किरपाल सिंह जी महाराज अपने गुरु, बाबा सावन सिंह जी के साथ' },
    { id: 'k10', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1FxM8ipIXi__i0WODSXs-5BDjGbFkyBtG&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1FxM8ipIXi__i0WODSXs-5BDjGbFkyBtG&sz=w1280', altEn: 'Sawan Ashram in Delhi, India', altHi: 'सावन आश्रम, दिल्ली, भारत' },
    { id: 'k11', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1WXhaORL9cQQ9eEKQCtaREucC7eOAos0t&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1WXhaORL9cQQ9eEKQCtaREucC7eOAos0t&sz=w1280', altEn: 'Sant Kirpal Singh Ji speaking at the World Fellowship of Religions', altHi: 'संत किरपाल सिंह जी विश्व धर्म सम्मेलन में बोलते हुए' },
    { id: 'k12', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1cfHFnqBlKnCe4PD_ksB7EOUxmMKFPJOG&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1cfHFnqBlKnCe4PD_ksB7EOUxmMKFPJOG&sz=w1280', altEn: 'Sant Kirpal Singh Ji on one of his world tours', altHi: 'संत किरपाल सिंह जी अपनी एक विश्व यात्रा पर' },
    { id: 'k15', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1U0ntU9FbnpANWpPYBqgHWeH52q3F76V_&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1U0ntU9FbnpANWpPYBqgHWeH52q3F76V_&sz=w1280', altEn: 'Sant Kirpal Singh Ji at the World Conference on Unity of Man', altHi: 'संत किरपाल सिंह जी मानव एकता पर विश्व सम्मेलन में' },
    { id: 'd1', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1MMUFWMhonUYv_62rNSDc1Tjn-7p_I_6B&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1MMUFWMhonUYv_62rNSDc1Tjn-7p_I_6B&sz=w1280', altEn: 'A young Sant Darshan Singh Ji Maharaj', altHi: 'युवा संत दर्शन सिंह जी महाराज' },
    { id: 'd2', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1Y0_6sEA6cls_n82NILVNTgJ4WB_vdGIX&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1Y0_6sEA6cls_n82NILVNTgJ4WB_vdGIX&sz=w1280', altEn: 'Sant Darshan Singh Ji Maharaj with his father, Sant Kirpal Singh Ji Maharaj', altHi: 'संत दर्शन सिंह जी महाराज अपने पिता संत किरपाल सिंह जी महाराज के साथ' },
    { id: 'd3', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1DGHPCqGYHzs87xxAn44gL2Aq5-6uIPZO&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1DGHPCqGYHzs87xxAn44gL2Aq5-6uIPZO&sz=w1280', altEn: 'Sant Darshan Singh Ji Maharaj, a renowned poet of mysticism', altHi: 'संत दर्शन सिंह जी महाराज, रहस्यवाद के एक प्रसिद्ध कवि' },
    { id: 'd4', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1-V2nJ_xY6zR_aP5bB8cE9dF7gI_kL_mD&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1-V2nJ_xY6zR_aP5bB8cE9dF7gI_kL_mD&sz=w1280', altEn: 'Sant Darshan Singh Ji Maharaj giving a spiritual discourse (Satsang)', altHi: 'संत दर्शन सिंह जी महाराज एक आध्यात्मिक प्रवचन (सत्संग) देते हुए' },
    { id: 'd5', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1HQd2tHw0YXQlgpKujlu15l8VKL7KKyGz&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1HQd2tHw0YXQlgpKujlu15l8VKL7KKyGz&sz=w1280', altEn: 'Sant Darshan Singh Ji Maharaj during one of his world tours', altHi: 'संत दर्शन सिंह जी महाराज अपनी एक विश्व यात्रा के दौरान' },
    { id: 'd6', thumbnailUrl: 'https://drive.google.com/thumbnail?id=19PDUwidhXK4VUUZ4N3n2XblnmG2YxFgn&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=19PDUwidhXK4VUUZ4N3n2XblnmG2YxFgn&sz=w1280', altEn: 'Sant Darshan Singh Ji Maharaj at a World Conference on Mysticism', altHi: 'संत दर्शन सिंह जी महाराज रहस्यवाद पर विश्व सम्मेलन में' },
    { id: 'd7', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1gEFI_DhIePLeLyCuDYaTHJyTEVSj7EhN&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1gEFI_DhIePLeLyCuDYaTHJyTEVSj7EhN&sz=w1280', altEn: 'Kirpal Bagh, the center for Sawan Kirpal Ruhani Mission in Delhi', altHi: 'कृपाल बाग, दिल्ली में सावन कृपाल रूहानी मिशन का केंद्र' },
    { id: 'd8', thumbnailUrl: 'https://drive.google.com/thumbnail?id=1jqjIjVYEit-CTdIfVKjh6loOMdAhbucE&sz=w800', fullUrl: 'https://drive.google.com/thumbnail?id=1jqjIjVYEit-CTdIfVKjh6loOMdAhbucE&sz=w1280', altEn: 'A portrait of Sant Darshan Singh Ji Maharaj in his later years', altHi: 'संत दर्शन सिंह जी महाराज का उनके बाद के वर्षों का एक चित्र' },
];

export interface TimelineEvent {
    year: string;
    titleEn: string;
    titleHi: string;
    descriptionEn: string;
    descriptionHi: string;
    imageId: string; // Corresponds to the id in GALLERY_IMAGES
}

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '1894',
    titleEn: 'Birth and Early Life',
    titleHi: 'जन्म और प्रारंभिक जीवन',
    descriptionEn: 'Sant Kirpal Singh Ji Maharaj was born on February 6, 1894, in Sayyad Kasran, a rural town in what is now Pakistan. From a young age, He showed a deep interest in spirituality and a profound compassion for all living beings.',
    descriptionHi: 'संत किरपाल सिंह जी महाराज का जन्म 6 फरवरी, 1894 को सय्यद कसरान में हुआ था, जो अब पाकिस्तान में एक ग्रामीण कस्बा है। छोटी उम्र से ही, उन्होंने आध्यात्मिकता में गहरी रुचि और सभी जीवित प्राणियों के प्रति गहन करुणा दिखाई।',
    imageId: 'k8'
  },
  {
    year: '1924',
    titleEn: 'Meeting the Master',
    titleHi: 'गुरु से भेंट',
    descriptionEn: 'After a long and sincere search for a true spiritual guide, He met his Satguru, Baba Sawan Singh Ji Maharaj, in 1924 at the ashram on the banks of the Beas river. He was initiated into the path of Surat Shabd Yoga on February 15, 1924.',
    descriptionHi: 'एक सच्चे आध्यात्मिक मार्गदर्शक की लंबी और सच्ची खोज के बाद, वह 1924 में ब्यास नदी के तट पर स्थित आश्रम में अपने सतगुरु, बाबा सावन सिंह जी महाराज से मिले। उन्हें 15 फरवरी, 1924 को सूरत शब्द योग के मार्ग में दीक्षित किया गया।',
    imageId: 'k9'
  },
  {
    year: '1948',
    titleEn: 'Assuming the Mantle',
    titleHi: 'गुरु पद का दायित्व',
    descriptionEn: 'Following the passing of his Master Baba Sawan Singh Ji in April 1948, Sant Kirpal Singh Ji began his spiritual mission as entrusted to him. He moved to Delhi and began carrying on the spiritual work.',
    descriptionHi: 'अप्रैल 1948 में अपने गुरु बाबा सावन सिंह जी के निधन के बाद, संत किरपाल सिंह जी ने उन्हें सौंपे गए आध्यात्मिक मिशन को शुरू किया। वह दिल्ली चले गए और आध्यात्मिक कार्य को आगे बढ़ाने लगे।',
    imageId: 'k1'
  },
  {
    year: '1951',
    titleEn: 'Founding of Sawan Ashram',
    titleHi: 'सावन आश्रम की स्थापना',
    descriptionEn: 'In 1951, He established Sawan Ashram on the outskirts of Delhi. This center became the heart of his spiritual mission, a place where people from all over the world could come to receive spiritual guidance and instruction in meditation.',
    descriptionHi: '1951 में, उन्होंने दिल्ली के बाहरी इलाके में सावन आश्रम की स्थापना की। यह केंद्र उनके आध्यात्मिक मिशन का हृदय बन गया, एक ऐसा स्थान जहाँ दुनिया भर से लोग आध्यात्मिक मार्गदर्शन और ध्यान में निर्देश प्राप्त करने के लिए आ सकते थे।',
    imageId: 'k10'
  },
  {
    year: '1955',
    titleEn: 'First World Tour',
    titleHi: 'प्रथम विश्व यात्रा',
    descriptionEn: 'He was the first Sant Mat Master to travel outside of India. His first world tour in 1955 took him to major cities across the United States and Europe, where He introduced the practical science of spirituality to thousands of seekers.',
    descriptionHi: 'वह भारत से बाहर यात्रा करने वाले पहले संत मत गुरु थे। 1955 में उनकी पहली विश्व यात्रा उन्हें संयुक्त राज्य अमेरिका और यूरोप के प्रमुख शहरों में ले गई, जहाँ उन्होंने हजारों साधकों को आध्यात्मिकता के व्यावहारिक विज्ञान से परिचित कराया।',
    imageId: 'k5'
  },
  {
    year: '1957',
    titleEn: 'World Fellowship of Religions',
    titleHi: 'विश्व धर्म सम्मेलन',
    descriptionEn: 'In recognition of his work for human unity, Sant Kirpal Singh Ji was unanimously elected President of the World Fellowship of Religions, a position he held for fifteen years, presiding over four world conferences.',
    descriptionHi: 'मानव एकता के लिए उनके काम की मान्यता में, संत किरपाल सिंह जी को सर्वसम्मति से विश्व धर्म सम्मेलन का अध्यक्ष चुना गया, इस पद पर वह पंद्रह वर्षों तक रहे और चार विश्व सम्मेलनों की अध्यक्षता की।',
    imageId: 'k11'
  },
  {
    year: '1963',
    titleEn: 'Second World Tour',
    titleHi: 'द्वितीय विश्व यात्रा',
    descriptionEn: 'His second world tour in 1963 further spread the message of self-knowledge and God-knowledge. He met with numerous religious and state leaders, emphasizing that the core teachings of all religions are the same.',
    descriptionHi: '1963 में उनकी दूसरी विश्व यात्रा ने आत्म-ज्ञान और ईश्वर-ज्ञान के संदेश को और फैलाया। उन्होंने कई धार्मिक और राज्य के नेताओं से मुलाकात की, इस बात पर जोर देते हुए कि सभी धर्मों की मूल शिक्षाएं समान हैं।',
    imageId: 'k12'
  },
  {
    year: '1972',
    titleEn: 'Third World Tour',
    titleHi: 'तृतीय विश्व यात्रा',
    descriptionEn: 'During his final world tour, He continued his tireless work of uniting humanity, giving talks and holding meditation sittings, and offering the gift of Naam initiation to sincere seekers everywhere.',
    descriptionHi: 'अपनी अंतिम विश्व यात्रा के दौरान, उन्होंने मानवता को एकजुट करने का अपना अथक कार्य जारी रखा, वार्ताएं दीं और ध्यान सभाएं आयोजित कीं, और हर जगह सच्चे साधकों को नाम दीक्षा का उपहार दिया।',
    imageId: 'k3'
  },
  {
    year: '1974',
    titleEn: 'Unity of Man & Passing',
    titleHi: 'मानव एकता और महाप्रयाण',
    descriptionEn: 'In February 1974, He convened the first World Conference on Unity of Man. On August 21, 1974, having completed his mission on earth, Sant Kirpal Singh Ji Maharaj left his physical body, leaving behind a legacy of love and a universal teaching for all humanity.',
    descriptionHi: 'फरवरी 1974 में, उन्होंने मानव एकता पर पहला विश्व सम्मेलन आयोजित किया। 21 अगस्त, 1974 को, पृथ्वी पर अपना मिशन पूरा करने के बाद, संत किरपाल सिंह जी महाराज ने अपना भौतिक शरीर छोड़ दिया, और अपने पीछे प्रेम की विरासत और पूरी मानवता के लिए एक सार्वभौमिक शिक्षा छोड़ गए।',
    imageId: 'k15'
  }
];

export const DARSHAN_SINGH_TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '1921',
    titleEn: 'Birth and Heritage',
    titleHi: 'जन्म और विरासत',
    descriptionEn: 'Sant Darshan Singh Ji Maharaj was born on September 14, 1921, to his illustrious father and Master, Sant Kirpal Singh Ji Maharaj. From an early age, he was immersed in a deeply spiritual environment.',
    descriptionHi: 'संत दर्शन सिंह जी महाराज का जन्म 14 सितंबर, 1921 को उनके यशस्वी पिता और गुरु, संत किरपाल सिंह जी महाराज के घर हुआ था। छोटी उम्र से ही, वह गहरे आध्यात्मिक वातावरण में डूबे हुए थे।',
    imageId: 'd1'
  },
  {
    year: '1942',
    titleEn: 'Government Service & Poetic Beginnings',
    titleHi: 'सरकारी सेवा और काव्य की शुरुआत',
    descriptionEn: 'He entered government service in 1942 and served for 37 years, while simultaneously nurturing his gift for mystical poetry. He wrote under the pen name "Darshan".',
    descriptionHi: 'उन्होंने 1942 में सरकारी सेवा में प्रवेश किया और 37 वर्षों तक सेवा की, साथ ही साथ अपनी रहस्यमय कविता की प्रतिभा को भी निखारा। उन्होंने "दर्शन" के उपनाम से लिखा।',
    imageId: 'd3'
  },
  {
    year: '1974',
    titleEn: 'Carrying the Torch Forward',
    titleHi: 'मशाल को आगे बढ़ाते हुए',
    descriptionEn: 'After the passing of Sant Kirpal Singh Ji Maharaj, he took up the spiritual mission entrusted to him, guiding souls on the path of Sant Mat.',
    descriptionHi: 'संत किरपाल सिंह जी महाराज के महाप्रयाण के बाद, उन्होंने उन्हें सौंपे गए आध्यात्मिक मिशन को संभाला और आत्माओं को संत मत के मार्ग पर मार्गदर्शन किया।',
    imageId: 'd2'
  },
  {
    year: '1978',
    titleEn: 'First of Many World Tours',
    titleHi: 'अनेक विश्व यात्राओं में से पहली',
    descriptionEn: 'He embarked on his first of four world tours, traveling to Europe, the Americas, and Africa to share the universal message of love and inner experience.',
    descriptionHi: 'उन्होंने अपनी चार विश्व यात्राओं में से पहली यात्रा शुरू की, प्रेम और आंतरिक अनुभव के सार्वभौमिक संदेश को साझा करने के लिए यूरोप, अमेरिका और अफ्रीका की यात्रा की।',
    imageId: 'd5'
  },
  {
    year: '1981',
    titleEn: 'Founding of Sawan Kirpal Ruhani Mission',
    titleHi: 'सावन कृपाल रूहानी मिशन की स्थापना',
    descriptionEn: 'He founded the Sawan Kirpal Ruhani Mission (Science of Spirituality) to continue the work of his predecessors and established its international headquarters, Kirpal Bagh, in Delhi.',
    descriptionHi: 'उन्होंने अपने पूर्ववर्तियों के काम को जारी रखने के लिए सावन कृपाल रूहानी मिशन (आध्यात्मिकता का विज्ञान) की स्थापना की और दिल्ली में इसका अंतरराष्ट्रीय मुख्यालय, कृपाल बाग, स्थापित किया।',
    imageId: 'd7'
  },
  {
    year: '1988',
    titleEn: 'World Conference on Mysticism',
    titleHi: 'रहस्यवाद पर विश्व सम्मेलन',
    descriptionEn: 'He convened the 6th World Conference of the World Fellowship of Religions and the 15th International Human Unity Conference, emphasizing interfaith harmony and the core unity of all spiritual paths.',
    descriptionHi: 'उन्होंने विश्व धर्म सम्मेलन के छठे विश्व सम्मेलन और 15वें अंतर्राष्ट्रीय मानव एकता सम्मेलन का आयोजन किया, जिसमें अंतर-धार्मिक सद्भाव और सभी आध्यात्मिक मार्गों की मूल एकता पर जोर दिया गया।',
    imageId: 'd6'
  },
  {
    year: '1989',
    titleEn: 'Merging with the Light',
    titleHi: 'ज्योति में ज्योति लीन',
    descriptionEn: 'On May 30, 1989, Sant Darshan Singh Ji Maharaj left his physical body, leaving behind a rich legacy of spiritual poetry and a global mission dedicated to peace and self-knowledge.',
    descriptionHi: '30 मई, 1989 को, संत दर्शन सिंह जी महाराज ने अपना भौतिक शरीर छोड़ दिया, और अपने पीछे आध्यात्मिक कविता की एक समृद्ध विरासत और शांति और आत्म-ज्ञान को समर्पित एक वैश्विक मिशन छोड़ गए।',
    imageId: 'd8'
  }
];


export const BOOKS: Book[] = [
    {
        id: 'insaan-apne-aap-ko-jaan',
        titleEn: 'Man! Know Thyself',
        titleHi: 'इंसान! अपने आप को जान',
        coverImageUrl: 'https://drive.google.com/thumbnail?id=1JuFHZRQ_Df6z1qoKv7SfuM-w5b6HBe0e&sz=w640',
        pdfUrl: 'https://drive.google.com/file/d/1rHLCvsrOWgdubA_uZJUZYOFqV30JJu9j/view?usp=drivesdk',
        audioUrl: 'https://drive.google.com/file/d/1cytP6SOQwXcBY8phaf7db8hZCi6vO7lL/view?usp=drivesdk',
        video: { id: '1JuFHZRQ_Df6z1qoKv7SfuM-w5b6HBe0e', type: 'gdrive' },
        // Quiz removed as requested
    },
    {
        id: 'jeevan-ka-uddeshya',
        titleEn: 'The Purpose of Life',
        titleHi: 'जीवन का उद्देश्य',
        coverImageUrl: 'https://drive.google.com/thumbnail?id=1GaahQVnqkGIFkW3-eoZQfJ7QSXnm1B-p&sz=w640',
        pdfUrl: 'https://drive.google.com/file/d/1VEcCBfkhKk4YCLPJrtvEPAAHyK0Mmy-w/view?usp=drivesdk',
        audioUrl: 'https://drive.google.com/file/d/1l5NAhP3HNJD4z3GuksUPQ9EFAiirE43G/view?usp=drivesdk',
        video: { id: '1ZA-hChsk8VqSQgDDEBKjk36lme0EpMX9', type: 'gdrive' },
    },
    {
        id: 'adhyatmikta-kya-hai',
        titleEn: 'What is Spirituality?',
        titleHi: 'अध्यात्मिकता क्या है?',
        coverImageUrl: 'https://drive.google.com/thumbnail?id=1aQa1uRKRpYNV-wXlwi8YsgqsPxeb7KXe&sz=w640',
        pdfUrl: 'https://drive.google.com/file/d/1aQa1uRKRpYNV-wXlwi8YsgqsPxeb7KXe/view?usp=drivesdk',
        audioUrl: 'https://drive.google.com/file/d/1UDNhkt3i1IFYlzLp-GpgXzYkFKSXJEK_/view?usp=drivesdk',
        video: { id: '1Sk31C4d8g-ESF62CiDw5Ski8LaQqTLr_', type: 'gdrive' },
    }
];

export const POETRY: Poem[] = [
    {
        id: 'particle-of-dust',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'A Particle of Dust',
        titleHi: 'तेरे कूचे की ख़ाक',
        textEn: [
            'My only wish is to be a particle of dust in Your lane,',
            'So that I may cling to the feet of those who pass by.',
        ],
        textHi: [
            'मेरी बस एक ही तमन्ना है, कि तेरे कूचे की ख़ाक का ज़र्रा बन जाऊं,',
            'ताकि गुज़रने वालों के क़दमों से लिपट जाऊं।',
        ],
        meaningEn: 'This couplet expresses profound humility and a deep yearning for closeness to the Divine. The "lane" is the path to God, and the "dust" symbolizes the ultimate surrender of the ego. The poet wishes to become so insignificant that they can be near the holy saints ("those who pass by") who walk this path, absorbing their grace and blessings.',
        meaningHi: 'यह कविता गहरी नम्रता और भगवान के पास रहने की इच्छा दिखाती है। "कूचा" का मतलब है भगवान का रास्ता, और "ख़ाक" का मतलब है अपने अहंकार को पूरी तरह मिटा देना। कवि चाहते हैं कि वे इतने छोटे बन जाएं कि उस रास्ते पर चलने वाले संतों के पैरों से लगकर उनका आशीर्वाद पा सकें।'
    },
    {
        id: 'path-of-love',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Path of Love',
        titleHi: 'इश्क़ की राह',
        textEn: [
            'O seeker, the path of love is not so easy,',
            'One has to lose oneself to find the Beloved.',
        ],
        textHi: [
            'ऐ साधक, इश्क़ की राह इतनी आसान नहीं,',
            'महबूब को पाने के लिए खुद को खोना पड़ता है।',
        ],
        meaningEn: 'This verse highlights the central tenet of mystic love (Ishq). The "path of love" is the spiritual journey, which requires the annihilation of the self (ego, worldly desires, and identity). Only by "losing oneself"—transcending the ego—can a seeker merge with the "Beloved," who is God.',
        meaningHi: 'यह कविता बताती है कि प्यार का रास्ता आसान नहीं है। "इश्क़ की राह" यानी भगवान तक पहुँचने का सफ़र। इस रास्ते पर अपने प्यारे (भगवान) को पाने के लिए, इंसान को पहले खुद को (अपने अहंकार और इच्छाओं को) मिटाना पड़ता है।'
    },
    {
        id: 'stranger-to-myself',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'A Stranger to Myself',
        titleHi: 'ख़ुद से बेगाना',
        textEn: [
            'I was a stranger to myself,',
            'You revealed my own secret to me.',
        ],
        textHi: [
            'मैं ख़ुद से बेगाना था,',
            'तूने ही मेरा राज़ मुझ पर खोला।',
        ],
        meaningEn: 'This reflects the state of the soul before spiritual awakening. The "I" was ignorant of its true nature (the soul). The "You" refers to the spiritual Master (Satguru), who, through initiation and guidance, reveals the "secret"—that our true identity is not the body or mind, but a divine spark, a soul connected to God.',
        meaningHi: 'यह कविता बताती है कि गुरु से मिलने से पहले हम खुद को नहीं जानते थे। हम अपने असली रूप, यानी आत्मा, से अनजान थे। "तू" का मतलब गुरु है, जिन्होंने हमें यह राज़ बताया कि हम शरीर या मन नहीं, बल्कि भगवान का एक अंश, एक आत्मा हैं।'
    },
    {
        id: 'gaze-of-the-beloved',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Gaze of the Beloved',
        titleHi: 'निगाह-ए-यार',
        textEn: [
            'A single glance from the Beloved is enough,',
            'It turns a lifetime of autumn into spring.',
        ],
        textHi: [
            'बस एक निगाह-ए-यार ही काफ़ी है,',
            'जो उम्र भर की ख़िज़ाँ को बहार कर दे।',
        ],
        meaningEn: 'The "glance of the Beloved" refers to the grace of the spiritual Master. A moment of this grace can instantly transform the seeker\'s spiritual state, eradicating past karmas ("autumn") and filling the soul with divine life and love ("spring").',
        meaningHi: '"यार की एक नज़र" का मतलब है गुरु की कृपा। उनकी कृपा का एक पल ही साधक की रूहानी हालत को पूरी तरह बदल सकता है। यह हमारे बुरे कर्मों ("पतझड़") को मिटाकर आत्मा को रूहानी खुशी और प्यार ("बहार") से भर देता है।'
    },
    {
        id: 'ocean-of-mercy',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'Ocean of Mercy',
        titleHi: 'रहमत का समंदर',
        textEn: [
            'I am but a sinner, You are an Ocean of Mercy,',
            'My flaws are many, but Your forgiveness is infinite.',
        ],
        textHi: [
            'मैं तो गुनहगार हूँ, तू रहमत का समंदर है,',
            'मेरे ऐब बहुत हैं, पर तेरी बख़्शिश की कोई हद नहीं।',
        ],
        meaningEn: 'This verse is a prayer of surrender. The seeker acknowledges their imperfections ("sinner," "flaws") before the boundless compassion ("Ocean of Mercy") of God and the Master. It is a plea for grace, recognizing that spiritual progress depends not on our own merit, but on divine forgiveness.',
        meaningHi: 'यह कविता भगवान के आगे समर्पण की प्रार्थना है। साधक अपनी गलतियों ("गुनहगार") को भगवान और गुरु की अपार दया ("रहमत का समंदर") के सामने मानता है। यह कृपा के लिए एक विनती है, क्योंकि रूहानी तरक्की हमारी अपनी अच्छाई से नहीं, बल्कि भगवान की माफी से होती है।'
    },
    {
        id: 'moth-and-flame',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Moth and the Flame',
        titleHi: 'शमा और परवाना',
        textEn: [
            'Like a moth drawn to the flame, I circle Your light,',
            'To burn my false self is my only desire.',
        ],
        textHi: [
            'परवाने की तरह तेरी शमा के गिर्द घूमता हूँ,',
            'बस अपने नफ़्स को जला देने की हसरत है।',
        ],
        meaningEn: 'A classic mystical metaphor. The seeker is the "moth" (parwana) and the Master/God is the "flame" (shama). The moth\'s ultimate goal is to merge with the flame, sacrificing its individual existence. Similarly, the seeker longs to annihilate the ego ("false self") in the divine Light of the Beloved.',
        meaningHi: 'यह एक सुंदर उदाहरण है। साधक एक "परवाने" (कीट) की तरह है और गुरु या भगवान "शमा" (लौ) की तरह हैं। परवाने का लक्ष्य शमा में मिलकर खुद को मिटा देना होता है। उसी तरह, साधक भी अपने अहंकार ("मैं") को भगवान के दिव्य प्रकाश में खत्म कर देना चाहता है।'
    },
    {
        id: 'heart-a-mirror',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'My Heart, a Mirror',
        titleHi: 'दिल आईना है',
        textEn: [
            'I have polished the mirror of my heart with tears,',
            'Now, wherever I look, I see only Your reflection.',
        ],
        textHi: [
            'अश्कों से दिल के आईने को साफ़ किया है,',
            'अब जिधर देखता हूँ, बस तेरा ही अक्स नज़र आता है।',
        ],
        meaningEn: 'The heart is seen as a mirror that reflects the Divine. However, it is covered by the dust of worldly desires. The "tears" of repentance and longing wash away this dust. Once the heart is pure, the seeker perceives the presence of God ("Your reflection") everywhere.',
        meaningHi: 'दिल को एक आईने की तरह माना गया है जिसमें भगवान दिखते हैं। लेकिन यह दुनिया की इच्छाओं की धूल से ढका होता है। पश्चाताप और याद के "आँसू" इस धूल को साफ कर देते हैं। जब दिल साफ हो जाता है, तो साधक को हर जगह भगवान ही नज़र आते हैं।'
    },
    {
        id: 'call-of-the-flute',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Call of the Flute',
        titleHi: 'बांसुरी की पुकार',
        textEn: [
            'From within comes the call of a divine flute,',
            'It makes me forget the sorrows of both worlds.',
        ],
        textHi: [
            'अंदर से आती है एक दिव्य बांसुरी की पुकार,',
            'जो मुझे दोनों जहान के ग़म भुला देती है।',
        ],
        meaningEn: 'The "divine flute" refers to the Anhad Shabad, the Unstruck Melody or the Sound Current that reverbrates throughout creation. Hearing this inner music during meditation stills the mind and elevates the soul above all worldly and karmic suffering ("sorrows of both worlds").',
        meaningHi: '"दिव्य बांसुरी" का मतलब है अनहद शब्द, यानी वो दिव्य संगीत जो पूरी सृष्टि में गूंज रहा है। ध्यान में इस अंदरूनी संगीत को सुनने से मन शांत हो जाता है और आत्मा दुनिया के सभी दुखों से ऊपर उठ जाती है।'
    },
    {
        id: 'lost-in-your-lane',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'Lost in Your Lane',
        titleHi: 'तेरे कूचे में गुम',
        textEn: [
            'Let me be lost in Your lane, never to be found,',
            'For in being lost from the world, I find myself.',
        ],
        textHi: [
            'तेरे कूचे में ऐसा गुम हो जाऊँ कि कोई पता न पाए,',
            'क्योंकि दुनिया से खो कर ही मैं ख़ुद को पाता हूँ।',
        ],
        meaningEn: 'Again, "Your lane" is the path of God-realization. To be "lost" here means to be completely absorbed in spiritual practice and remembrance of the Beloved, forgetting worldly identity and concerns. This state of being "lost to the world" is where the true self, the soul, is discovered.',
        meaningHi: 'यहाँ "तेरा कूचा" भगवान को पाने का रास्ता है। इसमें "गुम हो जाने" का मतलब है कि दुनिया की चिंताओं को भूलकर, पूरी तरह से ध्यान और सुमिरन में डूब जाना। जब इंसान दुनिया के लिए खो जाता है, तभी वह अपने असली स्वरूप, यानी आत्मा को पाता है।'
    },
    {
        id: 'currency-of-tears',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Currency of Tears',
        titleHi: 'अश्कों का सौदा',
        textEn: [
            'In the marketplace of love, tears are the currency,',
            'With them, I have bought the pain of Your separation.',
        ],
        textHi: [
            'इश्क़ के बाज़ार में अश्कों का सिक्का चलता है,',
            'मैंने इन्हीं से तेरे हिज्र का दर्द ख़रीदा है।',
        ],
        meaningEn: 'Spiritual longing (viraha or birha) is a prized state for a mystic. The "marketplace of love" is the spiritual path. The "tears" of longing are the price one willingly pays to experience the sweet "pain of separation," for this very pain keeps the seeker focused on the Beloved and purifies the heart.',
        meaningHi: 'भगवान से मिलने की तड़प एक कीमती एहसास है। "इश्क़ का बाज़ार" रूहानी रास्ता है। इस रास्ते पर, याद में बहाए गए "आँसू" वो कीमत हैं जिनसे जुदाई का मीठा दर्द मिलता है। यही दर्द साधक का ध्यान भगवान पर लगाए रखता है और दिल को साफ करता है।'
    },
    {
        id: 'drunk-without-wine',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'Drunk Without Wine',
        titleHi: 'बिन पिए शराबी',
        textEn: [
            'I am intoxicated, though I have not touched wine,',
            'The Saki of my soul has filled my cup from His eyes.',
        ],
        textHi: [
            'मैं बिन पिए ही शराबी हूँ, कि मैंने जाम नहीं छुआ,',
            'मेरे साक़ी ने अपनी आँखों से मेरा प्याला भर दिया।',
        ],
        meaningEn: 'The "Saki" (cup-bearer) is the spiritual Master. The intoxication is not from worldly wine but from the divine grace that flows from the Master\'s "eyes" (their spiritual attention). This inner intoxication fills the soul with ecstatic love and joy.',
        meaningHi: '"साक़ी" का मतलब है गुरु, जो रूहानी मस्ती का जाम पिलाते हैं। यह नशा दुनिया की शराब का नहीं, बल्कि गुरु की आँखों से मिलने वाली कृपा का है। यह अंदरूनी नशा आत्मा को दिव्य प्रेम और आनंद से भर देता है।'
    },
    {
        id: 'cage-of-bones',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'A Cage of Bones',
        titleHi: 'हड्डियों का पिंजरा',
        textEn: [
            'This cage of bones and flesh is not my home,',
            'My soul yearns for its true abode beyond the stars.',
        ],
        textHi: [
            'यह हड्डियों और मांस का पिंजरा मेरा घर नहीं,',
            'मेरी रूह तो सितारों से परे अपने वतन के लिए तड़पती है।',
        ],
        meaningEn: 'The physical body is described as a temporary prison or "cage" for the soul. The soul\'s inherent nature is to fly free and return to its "true abode"—the purely spiritual regions from which it descended. This expresses the soul\'s innate longing for liberation.',
        meaningHi: 'हमारा शरीर आत्मा के लिए एक "पिंजरे" की तरह है, जो अस्थायी है। आत्मा का असली घर तो बहुत ऊपर, रूहानी मंडलों में है। यह कविता आत्मा की अपने असली घर वापस जाने की तड़प को दिखाती है।'
    },
    {
        id: 'river-to-the-ocean',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The River to the Ocean',
        titleHi: 'नदी से सागर तक',
        textEn: [
            'I am a restless river, You are the tranquil ocean,',
            'My journey ends the moment I merge into You.',
        ],
        textHi: [
            'मैं एक बेचैन नदी हूँ, तू शांत सागर है,',
            'मेरा सफ़र उसी पल ख़त्म होता है जब मैं तुझमें मिल जाती हूँ।',
        ],
        meaningEn: 'The individual soul is the "river," full of the "restlessness" of desires and karmas. God is the "tranquil ocean" of infinite peace and consciousness. The entire spiritual journey is the river\'s flow towards the ocean, and liberation (merging with God) is its ultimate destination and cessation of individual struggle.',
        meaningHi: 'आत्मा एक "नदी" की तरह है, जो इच्छाओं और कर्मों के कारण बेचैन है। भगवान एक "शांत सागर" की तरह हैं। आत्मा का पूरा सफ़र नदी का सागर की तरफ बहना है। जब आत्मा भगवान में मिल जाती है, तो उसका सफ़र और संघर्ष खत्म हो जाता है।'
    },
    {
        id: 'unstruck-melody',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Unstruck Melody',
        titleHi: 'अनहद नाद',
        textEn: [
            'My heart now listens to a melody without strings,',
            'It is the music of Your love that plays within my soul.',
        ],
        textHi: [
            'मेरा दिल अब एक ऐसी धुन सुनता है जिसमें तार नहीं,',
            'यह तेरे इश्क़ का संगीत है जो मेरी रूह में बजता है।',
        ],
        meaningEn: 'This refers to the Anhad Shabad or the Sound Current. It is a "melody without strings" because it is not produced by any physical instrument. This divine vibration is the creative power of God, and experiencing it in meditation is a sign of spiritual progress and connection.',
        meaningHi: 'यह कविता "अनहद शब्द" के बारे में है। यह एक ऐसी धुन है जो बिना किसी बाजे के बजती है। यह भगवान की दिव्य शक्ति है। ध्यान में इस धुन को सुनना रूहानी तरक्की और भगवान से जुड़ाव का संकेत है।'
    },
    {
        id: 'your-name-my-breath',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'Your Name, My Breath',
        titleHi: 'तेरा नाम, मेरी साँस',
        textEn: [
            'Let Your name become the rhythm of my every breath,',
            'So that even in forgetting, I may remember You.',
        ],
        textHi: [
            'तेरा नाम मेरी हर साँस की लय बन जाए,',
            'ताकि मैं भूलकर भी तुझे याद करता रहूँ।',
        ],
        meaningEn: 'This is the practice of Simran or repetition of God\'s name(s). The goal is for this remembrance to become so automatic and ingrained that it continues effortlessly with every breath, ensuring constant connection to the Divine, even when the conscious mind is occupied.',
        meaningHi: 'यह कविता सुमिरन के अभ्यास के बारे में है, यानी भगवान के नाम को याद करना। इसका लक्ष्य यह है कि भगवान का नाम हमारी हर साँस के साथ अपने आप चले, ताकि हम कभी भी, किसी भी हाल में, उन्हें न भूलें।'
    },
    {
        id: 'desert-of-separation',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Desert of Separation',
        titleHi: 'हिज्र का सहरा',
        textEn: [
            'My life is a desert of separation,',
            'Your memory is the only oasis in it.',
        ],
        textHi: [
            'मेरी ज़िन्दगी हिज्र का एक सहरा है,',
            'तेरी याद ही इसमें एकमात्र नखलिस्तान है।',
        ],
        meaningEn: 'A life without the direct experience of God is likened to a barren "desert." In this state of spiritual dryness, the only solace and source of life is the "memory" (remembrance) of the Beloved. This constant remembrance sustains the seeker on their arduous journey.',
        meaningHi: 'भगवान के अनुभव के बिना जीवन एक सूखे "रेगिस्तान" जैसा है। इस सूखेपन में, केवल भगवान की "याद" ही एक "नखलिस्तान" (ओएसिस) की तरह है जो राहत और सहारा देती है। यही याद साधक को मुश्किल सफ़र में हिम्मत देती है।'
    },
    {
        id: 'garden-of-union',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Garden of Union',
        titleHi: 'वस्ल का बाग़',
        textEn: [
            'When I closed my outer eyes, a new world opened,',
            'I found the garden of union within my own heart.',
        ],
        textHi: [
            'जब मैंने अपनी बाहरी आँखें बंद कीं, तो एक नई दुनिया खुल गई,',
            'मैंने अपने ही दिल में वस्ल का बाग़ पाया।',
        ],
        meaningEn: 'This describes the process of meditation. By withdrawing attention from the outer world ("closing outer eyes"), the seeker gains access to the inner spiritual realms ("a new world"). The ultimate experience of union ("garden of union") with God is not found outside, but within oneself.',
        meaningHi: 'यह कविता ध्यान की प्रक्रिया को बताती है। जब हम बाहरी दुनिया से ध्यान हटाकर ("बाहरी आँखें बंद करके") अंदर देखते हैं, तो एक नई रूहानी दुनिया खुल जाती है। भगवान से मिलने का अनुभव ("वस्ल का बाग़") कहीं बाहर नहीं, बल्कि हमारे अपने अंदर ही होता है।'
    },
    {
        id: 'beggar-at-your-door',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'A Beggar at Your Door',
        titleHi: 'तेरे दर का भिखारी',
        textEn: [
            'I have come to Your door as a beggar, with an empty bowl,',
            'I ask not for the world, but for a glimpse of You.',
        ],
        textHi: [
            'एक भिखारी बन तेरे दर पर आया हूँ, खाली कासा लिए,',
            'मैं दुनिया नहीं, बस तेरा एक दीदार मांगता हूँ।',
        ],
        meaningEn: 'This expresses the single-pointed desire of a true seeker. The "beggar" symbolizes humility and dependence on divine grace. The "empty bowl" represents a heart emptied of worldly desires. The ultimate prize sought is not material wealth but the divine "glimpse" (darshan) of the Beloved.',
        meaningHi: 'यह कविता एक सच्चे साधक की इच्छा को दिखाती है। "भिखारी" का मतलब है विनम्रता और कृपा पर निर्भरता। "खाली कटोरा" का मतलब है ऐसा दिल जिसमें दुनिया की कोई इच्छा न हो। साधक दुनिया की दौलत नहीं, बल्कि अपने भगवान की एक "झलक" (दीदार) मांगता है।'
    },
    {
        id: 'color-of-the-beloved',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Color of the Beloved',
        titleHi: 'पिया का रंग',
        textEn: [
            'I have been dyed in the color of my Beloved,',
            'Now no other color can stain me.',
        ],
        textHi: [
            'मैं तो अपने पिया के रंग में रंग गई,',
            'अब कोई दूजा रंग मुझ पर चढ़ नहीं सकता।',
        ],
        meaningEn: 'To be "dyed in the color of the Beloved" means to be completely permeated by His love and consciousness. When one has achieved this state of spiritual absorption, worldly attractions and distractions ("other colors") lose their power and cannot "stain" the soul.',
        meaningHi: '"पिया के रंग में रंगने" का मतलब है पूरी तरह से भगवान के प्यार में डूब जाना। जब कोई इस रूहानी अवस्था को पा लेता है, तो दुनिया की कोई भी चीज़ ("दूसरा रंग") उसे अपनी ओर खींच नहीं सकती और उसकी आत्मा पर असर नहीं डाल सकती।'
    },
    {
        id: 'pain-of-longing',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Pain of Longing',
        titleHi: 'तड़प का दर्द',
        textEn: [
            'Do not try to heal this sweet pain of my heart,',
            'It is this very longing that keeps me alive.',
        ],
        textHi: [
            'मेरे दिल के इस मीठे दर्द की दवा न कर,',
            'यही तड़प तो मुझे ज़िंदा रखे हुए है।',
        ],
        meaningEn: 'The pain of separation from the Beloved is considered a "sweet pain" by mystics. It is a sign of true love and a powerful motivator for spiritual practice. The seeker treasures this "longing" because it constantly reminds them of their goal and prevents complacency.',
        meaningHi: 'भगवान से जुदाई का दर्द एक "मीठा दर्द" होता है। यह सच्चे प्यार की निशानी है और हमें ध्यान-भजन करने के लिए प्रेरित करता है। साधक इस "तड़प" को बहुत कीमती समझता है क्योंकि यह उसे हमेशा अपने लक्ष्य की याद दिलाती है।'
    },
    {
        id: 'your-footprints-my-path',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'Your Footprints, My Path',
        titleHi: 'तेरे क़दमों के निशाँ',
        textEn: [
            'I need no other map, no other guide,',
            'Your footprints are the only path I follow.',
        ],
        textHi: [
            'मुझे किसी और नक़्शे, किसी और रहबर की ज़रूरत नहीं,',
            'तेरे क़दमों के निशाँ ही मेरा एकमात्र रास्ता हैं।',
        ],
        meaningEn: 'This signifies absolute faith in the spiritual Master. The Master has already walked the spiritual path. His teachings and example ("footprints") are the only reliable "map" for the seeker to follow to reach the same destination. It is a declaration of complete surrender to the Master\'s guidance.',
        meaningHi: 'यह कविता गुरु में पूरे विश्वास को दिखाती है। गुरु पहले ही रूहानी रास्ते पर चल चुके हैं। उनकी शिक्षाएं ("कदमों के निशान") ही साधक के लिए एकमात्र सही "नक्शा" हैं। यह गुरु के मार्गदर्शन में पूरी तरह से समर्पण करने जैसा है।'
    },
    {
        id: 'the-night-of-vigil',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Night of Vigil',
        titleHi: 'इंतज़ार की रात',
        textEn: [
            'My nights are spent awake, waiting for You,',
            'Perhaps tonight, the moon of my Beloved will rise.',
        ],
        textHi: [
            'मेरी रातें तेरे इंतज़ार में जागते हुए गुज़रती हैं,',
            'शायद आज रात मेरे महबूब का चाँद निकल आए।',
        ],
        meaningEn: 'The "night" represents the period of spiritual seeking and separation. "Staying awake" symbolizes meditation and constant remembrance. The seeker perseveres with the hope ("perhaps tonight") that their efforts will be blessed with a divine vision or experience ("the moon of my Beloved will rise").',
        meaningHi: '"रात" का मतलब है जुदाई और खोज का समय। "जागते रहना" का मतलब है ध्यान और सुमिरन करना। साधक इस उम्मीद में लगा रहता है कि शायद आज उसकी मेहनत सफल हो और उसे भगवान का दर्शन ("महबूब का चाँद") हो जाए।'
    },
    {
        id: 'light-within-the-light',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Light within the Light',
        titleHi: 'नूर में नूर',
        textEn: [
            'I saw a light, and within that light, another light,',
            'And in that ultimate light, I saw my Beloved\'s face.',
        ],
        textHi: [
            'मैंने एक नूर देखा, और उस नूर के अंदर एक और नूर,',
            'और उस आख़िरी नूर में, मैंने अपने महबूब का चेहरा देखा।',
        ],
        meaningEn: 'This describes the progressive experience of inner spiritual planes. As the soul travels inward during meditation, it encounters increasingly brilliant regions of light ("light within... another light"). The "ultimate light" is the source of all, where the soul finally beholds God ("my Beloved\'s face").',
        meaningHi: 'यह कविता ध्यान के अंदरूनी अनुभव को बताती है। जब आत्मा ध्यान में ऊपर जाती है, तो उसे एक के बाद एक रौशनी के मंडल ("नूर में नूर") दिखाई देते हैं। जो "आखिरी नूर" है, वही सबका स्रोत है, जहाँ आत्मा को आखिरकार भगवान का चेहरा दिखाई देता है।'
    },
    {
        id: 'arrow-of-your-glance',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Arrow of Your Glance',
        titleHi: 'तेरी नज़र का तीर',
        textEn: [
            'The arrow of Your glance pierced my heart directly,',
            'Now it suffers a wound that I never wish to heal.',
        ],
        textHi: [
            'तेरी नज़र का तीर सीधा मेरे दिल में लगा,',
            'अब इसमें एक ऐसा ज़ख़्म है जिसे मैं कभी भरना नहीं चाहता।',
        ],
        meaningEn: 'The Master\'s graceful "glance" is like an "arrow" that awakens the soul and fills it with divine love. This awakening creates a "wound" of longing and separation, a spiritual condition so precious and transformative that the seeker wishes to preserve it forever.',
        meaningHi: 'गुरु की कृपा भरी "नज़र" एक "तीर" की तरह है जो आत्मा को जगा देती है और उसे भगवान के प्यार से भर देती है। इस जागृति से दिल में तड़प का एक "ज़ख्म" बन जाता है, जो इतना कीमती है कि साधक उसे कभी ठीक नहीं करना चाहता।'
    },
    {
        id: 'dust-of-your-feet',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Dust of Your Feet',
        titleHi: 'तेरे क़दमों की धूल',
        textEn: [
            'Make me the dust of Your feet, O my Master,',
            'For that dust is more precious than the throne of kings.',
        ],
        textHi: [
            'ऐ मेरे मुर्शिद, मुझे अपने क़दमों की धूल बना ले,',
            'क्योंकि वह धूल बादशाहों के तख़्त से भी ज़्यादा क़ीमती है।',
        ],
        meaningEn: 'This expresses extreme humility. The "dust of the Master\'s feet" symbolizes the lowest, most humble position, yet it is considered priceless because it signifies closeness to the Master and absorption of his spiritual vibrations. All worldly power and wealth ("throne of kings") pale in comparison.',
        meaningHi: 'यह कविता अत्यधिक विनम्रता दिखाती है। "गुरु के कदमों की धूल" बनना सबसे छोटा स्थान है, लेकिन यह बहुत कीमती है क्योंकि इससे गुरु का साथ मिलता है। दुनिया की कोई भी ताकत या दौलत ("राजा का सिंहासन") इसके सामने कुछ भी नहीं है।'
    },
    {
        id: 'story-of-my-heart',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Story of My Heart',
        titleHi: 'मेरे दिल की कहानी',
        textEn: [
            'My heart has only one story to tell,',
            'It begins with Your name and ends with Your name.',
        ],
        textHi: [
            'मेरे दिल के पास सुनाने को बस एक ही कहानी है,',
            'इसकी शुरुआत भी तेरे नाम से होती है और अंत भी तेरे नाम से।',
        ],
        meaningEn: 'This shows a state of complete devotion. The seeker\'s entire existence, their inner life ("story of my heart"), revolves around the Beloved. All thoughts, feelings, and aspirations are centered on the remembrance of God, making His name the alpha and omega of their life.',
        meaningHi: 'यह पूरी भक्ति की अवस्था को दर्शाता है। साधक का पूरा जीवन ("दिल की कहानी") उसके भगवान के चारों ओर घूमता है। उसके सभी विचार और भावनाएं केवल भगवान की याद में केंद्रित हैं। भगवान का नाम ही उसके जीवन की शुरुआत और अंत है।'
    },
    {
        id: 'secret-of-the-heart',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Secret of the Heart',
        titleHi: 'दिल का राज़',
        textEn: [
            'Don\'t search for Him in temples and mosques,',
            'The Beloved you seek resides within your own heart.',
        ],
        textHi: [
            'उसे मंदिरों और मस्जिदों में मत ढूंढो,',
            'जिस महबूब को तुम ढूंढते हो, वह तुम्हारे अपने दिल में रहता है।',
        ],
        meaningEn: 'A core teaching of Sant Mat. It redirects the seeker from external rituals and places of worship to the inner path. The "secret" is that God is not a distant entity to be found outside, but an inner reality to be experienced within the "heart" or soul.',
        meaningHi: 'यह संत मत की एक मुख्य शिक्षा है। यह साधक को बाहरी पूजा-पाठ से हटाकर अंदर के रास्ते पर लाती है। "राज़" यह है कि भगवान कहीं बाहर नहीं, बल्कि हमारे अपने "दिल" या आत्मा के अंदर ही मौजूद हैं।'
    },
    {
        id: 'price-of-a-glimpse',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Price of a Glimpse',
        titleHi: 'एक झलक की क़ीमत',
        textEn: [
            'If I have to offer my life for a single glimpse of You,',
            'Believe me, the transaction would still be in my favor.',
        ],
        textHi: [
            'अगर तेरी एक झलक के लिए मुझे अपनी जान भी देनी पड़े,',
            'यकीन मान, यह सौदा फिर भी मेरे हक़ में होगा।',
        ],
        meaningEn: 'This verse illustrates the infinite value of a divine experience ("a single glimpse"). The seeker considers their own life a small price to pay for such a blessing. It shows that for a true lover of God, spiritual union is the most valuable attainment, far surpassing physical existence.',
        meaningHi: 'यह कविता भगवान के दर्शन ("एक झलक") की अनमोल कीमत को बताती है। साधक के लिए, भगवान का दर्शन इतना कीमती है कि उसके लिए अपनी जान देना भी एक फायदे का सौदा है। यह दिखाता है कि भगवान के सच्चे प्रेमी के लिए, रूहानी मिलाप ही सबसे बड़ी दौलत है।'
    },
    {
        id: 'the-tavern-of-love',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Tavern of Love',
        titleHi: 'इश्क़ का मैख़ाना',
        textEn: [
            'The Master\'s eye is the tavern of divine love,',
            'A single glance fills the cup of the soul for all eternity.',
        ],
        textHi: [
            'मुर्शिद की नज़र इश्क़ का मैख़ाना है,',
            'एक निगाह रूह का प्याला हमेशा के लिए भर देती है।',
        ],
        meaningEn: 'The "tavern" is a metaphor for the place where one receives spiritual intoxication. Here, it is the Master\'s graceful glance ("nazar") which is the source of this divine wine. This grace is so powerful that a single moment of it can grant everlasting spiritual bliss.',
        meaningHi: '"मैख़ाना" वह जगह है जहाँ रूहानी नशा मिलता है। यहाँ, गुरु की कृपा भरी नज़र ही उस दिव्य शराब का स्रोत है। उनकी कृपा इतनी शक्तिशाली है कि एक पल की नज़र भी आत्मा को हमेशा के लिए रूहानी आनंद से भर सकती है।'
    },
    {
        id: 'the-unseen-artist',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Unseen Artist',
        titleHi: 'अनदेखा कलाकार',
        textEn: [
            'I see Your artistry in every leaf and every star,',
            'But my eyes still long to see the Artist Himself.',
        ],
        textHi: [
            'हर पत्ते और हर सितारे में तेरी कलाकारी देखता हूँ,',
            'पर मेरी आँखें तो खुद कलाकार को देखने के लिए तरसती हैं।',
        ],
        meaningEn: 'The seeker acknowledges the beauty of creation as a manifestation of the Creator ("the Artist"). However, appreciating the creation is not enough; the ultimate desire is to go beyond the creation and have a direct vision of the Creator Himself.',
        meaningHi: 'साधक दुनिया की हर चीज़ में बनाने वाले ("कलाकार") की कला को देखता है। लेकिन सिर्फ दुनिया की सुंदरता देखना काफी नहीं है; उसकी असली इच्छा तो उस बनाने वाले को सीधे देखने की है।'
    },
    {
        id: 'the-wine-of-oneness',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Wine of Oneness',
        titleHi: 'वहदत की शराब',
        textEn: [
            'I drank the wine of Oneness and lost all duality,',
            'Now I see my Beloved in myself, and myself in my Beloved.',
        ],
        textHi: [
            'मैंने वहदत की शराब पी और सारी द्वैत खो दी,',
            'अब मैं अपने महबूब को अपने में, और अपने को अपने महबूब में देखता हूँ।',
        ],
        meaningEn: 'The "wine of Oneness" (Wahdat) is the experience of non-duality, the ultimate goal of mysticism. When the soul realizes its unity with God, the illusion of separation ("duality") vanishes. The lover and the Beloved become one.',
        meaningHi: '"एकता की शराब" पीने का मतलब है उस अवस्था को पाना जहाँ कोई दूसरा नहीं रहता, सब एक हो जाते हैं। जब आत्मा को यह एहसास होता है कि वह भगवान से एक है, तो अलगाव का भ्रम मिट जाता है। प्रेमी और प्रियतम एक हो जाते हैं।'
    },
    {
        id: 'pilgrim-of-the-heart',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Pilgrim of the Heart',
        titleHi: 'दिल का तीर्थयात्री',
        textEn: [
            'Why wander to distant lands on pilgrimage?',
            'The holiest of shrines lies within your own heart.',
        ],
        textHi: [
            'तीर्थयात्रा पर दूर देशों में क्यों भटकें?',
            'सबसे पवित्र तीर्थ तो तुम्हारे अपने दिल के भीतर है।',
        ],
        meaningEn: 'This verse reiterates the core principle of inward-focused spirituality. It discourages external pilgrimages, teaching that the true journey is one of introspection to find God, who resides within the "shrine" of the human heart.',
        meaningHi: 'यह कविता अंदर की यात्रा पर जोर देती है। यह बाहरी तीर्थ यात्राओं के बजाय यह सिखाती है कि असली सफ़र तो अपने अंदर भगवान को खोजने का है, जो हमारे "दिल" के मंदिर में ही बैठे हैं।'
    },
    {
        id: 'language-of-silence',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Language of Silence',
        titleHi: 'ख़ामोशी की ज़ुबान',
        textEn: [
            'My lips are silent, but my heart converses with You,',
            'In the language of love that needs no words.',
        ],
        textHi: [
            'मेरे होंठ ख़ामोश हैं, पर मेरा दिल तुझसे बातें करता है,',
            'इश्क़ की उस ज़ुबान में जिसे शब्दों की ज़रूरत नहीं।',
        ],
        meaningEn: 'True spiritual communion transcends language. The "language of silence" is the telepathic connection of love between the soul and God. In the depths of meditation, the heart speaks directly to the Beloved without the need for spoken or written words.',
        meaningHi: 'सच्चा रूहानी संवाद शब्दों से परे होता है। "ख़ामोशी की ज़ुबान" आत्मा और भगवान के बीच प्रेम का वो कनेक्शन है जिसमें बोलने की ज़रूरत नहीं होती। गहरे ध्यान में, दिल सीधे भगवान से बात करता है।'
    },
    {
        id: 'drop-in-the-ocean-reprise',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'A Drop in the Ocean',
        titleHi: 'सागर में बूँद',
        textEn: [
            'For ages, this drop has been separate from its Ocean,',
            'Now it yearns for nothing but to merge and disappear.',
        ],
        textHi: [
            'युगों से यह बूँद अपने सागर से अलग रही है,',
            'अब इसे विलीन होकर मिट जाने के सिवा और कुछ नहीं चाहिए।',
        ],
        meaningEn: 'This is a powerful metaphor for the soul\'s journey. The "drop" is the individual soul, and the "Ocean" is God. The soul has been separated for countless lifetimes. Its deepest, innate desire is to end this separation and lose its individual identity by merging back into its Source.',
        meaningHi: 'यह आत्मा के सफ़र का एक सुंदर उदाहरण है। "बूँद" आत्मा है और "सागर" भगवान है। आत्मा कई जन्मों से भगवान से अलग है। उसकी सबसे गहरी इच्छा यही है कि वह इस जुदाई को खत्म करके वापस अपने स्रोत (भगवान) में मिल जाए।'
    },
    {
        id: 'king-and-the-beggar',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The King and the Beggar',
        titleHi: 'शाह और गदा',
        textEn: [
            'You are the King of all worlds, I am a beggar at Your door,',
            'Yet in Your court of love, there is no difference between us.',
        ],
        textHi: [
            'तू सारे जहानों का शाह है, मैं तेरे दर का गदा हूँ,',
            'फिर भी तेरे इश्क़ के दरबार में, हम में कोई फ़र्क नहीं।',
        ],
        meaningEn: 'This verse explores the paradox of divine love. The seeker acknowledges the infinite greatness of God ("King") and their own humility ("beggar"). However, in the realm of pure love, God erases all distinctions and embraces the soul as an equal.',
        meaningHi: 'यह कविता दिव्य प्रेम के एक अनोखे पहलू को दिखाती है। साधक मानता है कि भगवान महान "राजा" हैं और वह खुद एक "भिखारी" है। लेकिन, सच्चे प्यार के दरबार में, भगवान कोई भेदभाव नहीं करते और आत्मा को बराबर समझते हैं।'
    },
    {
        id: 'shadow-of-your-mercy',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Shadow of Your Mercy',
        titleHi: 'तेरी रहमत का साया',
        textEn: [
            'The world\'s harsh sun burns me at every step,',
            'My only refuge is the cool shadow of Your mercy.',
        ],
        textHi: [
            'दुनिया की तेज़ धूप मुझे हर क़दम पर जलाती है,',
            'मेरा एकमात्र आसरा तेरी रहमत का ठंडा साया है।',
        ],
        meaningEn: 'The "harsh sun" represents the trials, tribulations, and sufferings of worldly existence. The seeker finds that the only true protection and peace from this suffering comes from seeking refuge in the divine grace ("mercy") of God and the Master.',
        meaningHi: '"तेज़ धूप" का मतलब है दुनिया के दुख और परेशानियाँ। साधक को इन दुखों से बचने के लिए एकमात्र सच्ची शांति और सुरक्षा भगवान और गुरु की "कृपा" की ठंडी छाँव में ही मिलती है।'
    },
    {
        id: 'thirst-of-the-soul',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Thirst of the Soul',
        titleHi: 'रूह की प्यास',
        textEn: [
            'I have tasted all the waters of the world,',
            'But only the nectar of Your Name can quench my soul\'s thirst.',
        ],
        textHi: [
            'मैंने दुनिया के सारे पानी चख लिए हैं,',
            'पर केवल तेरे नाम का अमृत ही मेरी रूह की प्यास बुझा सकता है।',
        ],
        meaningEn: 'The "waters of the world" are worldly pleasures and attachments, which can never provide lasting satisfaction. The soul has an innate "thirst" for God. This deep spiritual longing can only be quenched by the "nectar" of Naam or Shabad—the divine Word or Sound Current.',
        meaningHi: '"दुनिया का पानी" मतलब दुनिया के सुख, जो कभी सच्ची शांति नहीं दे सकते। आत्मा को भगवान के लिए एक गहरी "प्यास" है। यह प्यास केवल "नाम" या "शब्द" के अमृत से ही बुझ सकती है, जो दिव्य शक्ति है।'
    },
    {
        id: 'doctor-of-hearts',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Doctor of Hearts',
        titleHi: 'दिलों का हकीम',
        textEn: [
            'My heart is sick with the disease of separation,',
            'O Master, You are the only doctor who holds the cure.',
        ],
        textHi: [
            'मेरा दिल हिज्र की बीमारी से बीमार है,',
            'ऐ मुर्शिद, तू ही एकमात्र हकीम है जिसके पास इसका इलाज है।',
        ],
        meaningEn: 'The "disease" is the pain and suffering caused by the soul\'s separation from God. Worldly remedies cannot heal this spiritual ailment. Only the true Master, the "doctor of hearts," possesses the "cure," which is the spiritual practice that reunites the soul with the Beloved.',
        meaningHi: '""बीमारी"" का मतलब है भगवान से जुदाई का दर्द। दुनिया की कोई भी दवा इस रूहानी बीमारी को ठीक नहीं कर सकती। केवल सच्चे गुरु, जो ""दिलों के डॉक्टर"" हैं, के पास इसका ""इलाज"" है, और वह है ध्यान-सुमिरन का अभ्यास।'
    },
    {
        id: 'prison-of-i',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Prison of \'I\'',
        titleHi: '\'मैं\' का ज़िंदान',
        textEn: [
            'I have been trapped for ages in the prison of "I" and "mine,"',
            'Break these chains, O Lord, and set my soul free.',
        ],
        textHi: [
            'मैं युगों से "मैं" और "मेरे" के ज़िंदान में क़ैद हूँ,',
            'ऐ मालिक, इन ज़ंजीरों को तोड़ दे और मेरी रूह को आज़ाद कर दे।',
        ],
        meaningEn: 'The ego, the sense of "I" and "mine," is described as a "prison" that confines the soul. It is the root of all attachment and suffering. The verse is a prayer for divine help to overcome the ego and attain spiritual liberation ("set my soul free").',
        meaningHi: 'अहंकार, यानी "मैं" और "मेरा" की भावना, एक "जेल" की तरह है जिसमें आत्मा फँसी हुई है। यही सभी दुखों की जड़ है। यह कविता अहंकार को खत्म करने और आत्मा की आज़ादी के लिए भगवान से की गई प्रार्थना है।'
    },
    {
        id: 'fragrance-of-the-beloved',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Fragrance of the Beloved',
        titleHi: 'यार की ख़ुशबू',
        textEn: [
            'Every breeze that blows brings the fragrance of my Beloved,',
            'The whole world has become a garden because of You.',
        ],
        textHi: [
            'जो भी हवा चलती है, मेरे यार की ख़ुशबू लाती है,',
            'तेरे दम से सारी दुनिया एक बाग़ बन गई है।',
        ],
        meaningEn: 'When the seeker\'s heart is filled with love, they begin to perceive the presence of the Divine everywhere. Just as a fragrance permeates a garden, the presence of the Beloved is felt in all of creation, transforming the mundane world into a place of beauty and wonder.',
        meaningHi: 'जब साधक का दिल प्यार से भर जाता है, तो उसे हर जगह भगवान की मौजूदगी महसूस होने लगती है। जैसे फूल की खुशबू पूरे बाग में फैल जाती है, वैसे ही भगवान का एहसास पूरी दुनिया को एक सुंदर बाग बना देता है।'
    },
    {
        id: 'echo-of-the-word',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Echo of the Word',
        titleHi: 'शब्द की गूँज',
        textEn: [
            'The universe is but an echo of the Divine Word,',
            'Listen closely within, and you will hear its music.',
        ],
        textHi: [
            'यह ब्रह्मांड उस दिव्य शब्द की एक गूँज मात्र है,',
            'अंदर ध्यान से सुनो, और तुम इसका संगीत सुनोगे।',
        ],
        meaningEn: 'This refers to the concept of Shabad, Naam, or the Word—the creative power that brought all of creation into being. The entire universe is a manifestation and "echo" of this divine vibration. Through meditation, one can turn the attention inward and listen to this inner "music."',
        meaningHi: 'यह कविता "शब्द" या "नाम" के बारे में है, जो वो दिव्य शक्ति है जिसने पूरी दुनिया को बनाया। सारी दुनिया उसी दिव्य शक्ति की एक "गूँज" है। ध्यान के ज़रिए, हम अपने अंदर उस दिव्य "संगीत" को सुन सकते हैं।'
    },
    {
        id: 'gift-of-pain',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Gift of Pain',
        titleHi: 'दर्द का तोहफ़ा',
        textEn: [
            'The pain of Your love is a gift I treasure,',
            'It is a constant reminder that my heart belongs to You.',
        ],
        textHi: [
            'तेरे इश्क़ का दर्द एक तोहफ़ा है जिसे मैं संजोता हूँ,',
            'यह एक निरंतर याद दिलाता है कि मेरा दिल तेरा है।',
        ],
        meaningEn: 'For a mystic, the pain of longing (viraha) is not a negative state but a precious "gift." It keeps the fire of love burning and prevents the seeker from becoming complacent or distracted by the world. It is a sign of a true and living connection to the Beloved.',
        meaningHi: 'एक साधक के लिए, भगवान से मिलने की तड़प का दर्द एक कीमती "तोहफा" है। यह प्यार की आग को जलाए रखता है और दुनिया में भटकने से बचाता है। यह भगवान के साथ एक सच्चे और गहरे रिश्ते की निशानी है।'
    },
    {
        id: 'promise-of-dawn',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Promise of Dawn',
        titleHi: 'सुबह का वादा',
        textEn: [
            'This long night of separation will surely end,',
            'Every tear I shed holds the promise of a new dawn.',
        ],
        textHi: [
            'यह जुदाई की लंबी रात ज़रूर ख़त्म होगी,',
            'मेरा हर आँसू एक नई सुबह का वादा लिए हुए है।',
        ],
        meaningEn: 'The spiritual journey is often described as a "long night" of waiting and separation. However, the seeker maintains faith that this period will end. The "tears" of longing are not shed in vain; they are seeds of hope that guarantee the eventual "dawn" of divine union.',
        meaningHi: 'रूहानी सफ़र को अक्सर जुदाई की एक "लंबी रात" कहा जाता है। लेकिन साधक को विश्वास है कि यह रात खत्म होगी। उसकी याद में बहाया गया हर "आँसू" एक नई "सुबह" का वादा है, जब उसका भगवान से मिलाप होगा।'
    },
    {
        id: 'alchemy-of-a-glance',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Alchemy of a Glance',
        titleHi: 'एक नज़र का कीमिया',
        textEn: [
            'Your single glance worked its alchemy on me,',
            'Turning the dust of my being into pure gold.',
        ],
        textHi: [
            'तेरी एक नज़र ने मुझ पर अपना कीमिया कर दिया,',
            'मेरे वजूद की ख़ाक को ख़ालिस सोना बना दिया।',
        ],
        meaningEn: '"Alchemy" is the art of transformation. The Master\'s graceful glance is the ultimate catalyst that transforms the seeker. It purifies the heart and elevates the soul, turning the worthless "dust" of our ego-bound existence into the "pure gold" of divine consciousness.',
        meaningHi: '"कीमिया" बदलने की कला है। गुरु की कृपा भरी एक नज़र साधक को पूरी तरह बदल देती है। यह दिल को साफ करती है और आत्मा को ऊँचा उठाती है, जिससे हमारे अहंकार की "धूल" दिव्य चेतना का "शुद्ध सोना" बन जाती है।'
    },
    {
        id: 'path-of-surrender',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Path of Surrender',
        titleHi: 'तस्लीम की राह',
        textEn: [
            'I tried to walk with my own strength and I faltered,',
            'Now I have surrendered all to You, and the path has become smooth.',
        ],
        textHi: [
            'मैंने अपनी ताक़त से चलने की कोशिश की और लड़खड़ा गया,',
            'अब मैंने सब कुछ तुझे सौंप दिया है, और राह आसान हो गई है।',
        ],
        meaningEn: 'This verse teaches the importance of surrender (taslim). Relying on one\'s own efforts and ego ("my own strength") leads to failure. When the seeker completely surrenders to the will of the Master and God, divine grace takes over and makes the difficult spiritual journey easy.',
        meaningHi: 'यह कविता समर्पण का महत्व सिखाती है। अपनी ताकत और अहंकार पर भरोसा करने से हम असफल होते हैं। जब साधक खुद को पूरी तरह से गुरु और भगवान की इच्छा पर छोड़ देता है, तो उनकी कृपा से मुश्किल रूहानी सफ़र भी आसान हो जाता है।'
    },
    {
        id: 'the-inner-garden',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Inner Garden',
        titleHi: 'अंदर का बाग़',
        textEn: [
            'The flowers of this world wither and die,',
            'But the garden within my heart blooms for all eternity.',
        ],
        textHi: [
            'इस दुनिया के फूल मुरझा कर मर जाते हैं,',
            'लेकिन मेरे दिल के अंदर का बाग़ हमेशा के लिए खिलता है।',
        ],
        meaningEn: 'Worldly beauty and pleasures are transient ("wither and die"). In contrast, the spiritual beauty and bliss experienced within ("the inner garden") are eternal and unchanging. The seeker is encouraged to cultivate this inner garden through meditation.',
        meaningHi: 'दुनिया की सुंदरता और सुख अस्थायी हैं, वे खत्म हो जाते हैं। लेकिन जो रूहानी खुशी और सुंदरता हमारे अंदर ("अंदर का बाग़") है, वह हमेशा रहती है। साधक को ध्यान के द्वारा इस अंदरूनी बाग को सींचना चाहिए।'
    },
    {
        id: 'boat-of-his-name',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Boat of His Name',
        titleHi: 'नाम की नाव',
        textEn: [
            'The ocean of life is vast and stormy,',
            'The Name of my Beloved is the only boat that can carry me across.',
        ],
        textHi: [
            'जीवन का सागर विशाल और तूफ़ानी है,',
            'मेरे महबूब का नाम ही एकमात्र नाव है जो मुझे पार ले जा सकती है।',
        ],
        meaningEn: 'Life in the material world is compared to a "stormy ocean" of karma and illusion. The practice of Simran (repetition of God\'s Name) is the "boat" that provides safety and guidance, enabling the soul to safely navigate the challenges of life and reach the shore of liberation.',
        meaningHi: 'यह दुनिया कर्मों और भ्रम का एक "तूफानी सागर" है। सुमिरन (भगवान के नाम का जाप) एक "नाव" की तरह है जो हमें सुरक्षा देती है और इस सागर को पार करके मुक्ति के किनारे तक ले जाती है।'
    },
    {
        id: 'unending-journey',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Unending Journey',
        titleHi: 'अंतहीन सफ़र',
        textEn: [
            'My journey towards You is unending,',
            'For every destination reveals a new path to Your heart.',
        ],
        textHi: [
            'तेरी ओर मेरा सफ़र अंतहीन है,',
            'क्योंकि हर मंज़िल तेरे दिल तक एक नई राह दिखाती है।',
        ],
        meaningEn: 'The path of love is infinite. As the seeker progresses, they realize that God\'s love and glory are boundless. Each spiritual milestone ("destination") does not end the journey but opens up new, deeper dimensions of love and experience, leading ever closer to the infinite Beloved.',
        meaningHi: 'प्यार का रास्ता कभी खत्म नहीं होता। जैसे-जैसे साधक आगे बढ़ता है, उसे पता चलता है कि भगवान का प्यार असीम है। हर रूहानी पड़ाव ("मंज़िल") सफ़र को खत्म नहीं करता, बल्कि प्यार के नए और गहरे रास्ते खोलता है।'
    },
    {
        id: 'the-lock-and-key',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Lock and Key',
        titleHi: 'ताला और चाबी',
        textEn: [
            'The door to my heart was locked from the inside,',
            'You came as the Master and gave me the key.',
        ],
        textHi: [
            'मेरे दिल का दरवाज़ा अंदर से बंद था,',
            'तू मुर्शिद बनकर आया और मुझे चाबी दे गया।',
        ],
        meaningEn: 'The "door to the heart" represents the portal to the inner spiritual realms. It is "locked from the inside" by our own mind and ego. The spiritual Master provides the "key"—the technique of meditation and his grace—which allows the seeker to unlock this inner door and begin the journey.',
        meaningHi: '""दिल का दरवाज़ा"" अंदर की रूहानी दुनिया का रास्ता है। यह हमारे अपने मन और अहंकार ने ""अंदर से बंद"" कर रखा है। गुरु हमें वह ""चाबी"" देते हैं - यानी ध्यान की विधि और अपनी कृपा - जिससे हम इस दरवाज़े को खोलकर अपनी यात्रा शुरू कर सकते हैं।'
    },
    {
        id: 'the-final-destination',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Final Destination',
        titleHi: 'आख़िरी मंज़िल',
        textEn: [
            'All roads I traveled led me astray,',
            'Until I realized You are not the path, but the destination.',
        ],
        textHi: [
            'मैंने जिन भी राहों पर सफ़र किया, वे मुझे भटका गईं,',
            'जब तक कि मुझे यह एहसास नहीं हुआ कि तू रास्ता नहीं, बल्कि मंज़िल है।',
        ],
        meaningEn: 'The seeker realizes that different paths, philosophies, and practices can be confusing. The ultimate truth is that the goal is not to perfect a method or a "path," but to reach the "destination," which is the Beloved Himself. He is the beginning, the journey, and the end.',
        meaningHi: 'साधक को एहसास होता है कि अलग-अलग रास्ते भटका सकते हैं। असली सच यह है कि लक्ष्य किसी रास्ते को पूरा करना नहीं, बल्कि "मंज़िल" तक पहुँचना है, और वह मंज़िल खुद भगवान हैं। वही शुरुआत, सफ़र और अंत हैं।'
    },
    {
        id: 'poem-51',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The True Friend',
        titleHi: 'सच्चा दोस्त',
        textEn: [
            'In this world of fleeting friendships,',
            'You are the only friend who never leaves my side.',
        ],
        textHi: [
            'इस बदलते दोस्तों की दुनिया में,',
            'बस तू ही एक ऐसा दोस्त है जो कभी मेरा साथ नहीं छोड़ता।',
        ],
        meaningEn: 'This couplet contrasts the temporary nature of worldly relationships with the eternal companionship of the Divine. The poet expresses that God or the Master is the only constant and true friend who remains with the soul through all circumstances.',
        meaningHi: 'यह कविता दुनिया के अस्थायी रिश्तों और भगवान के शाश्वत साथ के बीच का अंतर बताती है। कवि कहते हैं कि केवल भगवान या गुरु ही सच्चे और स्थायी मित्र हैं जो हर हाल में आत्मा के साथ रहते हैं।'
    },
    {
        id: 'poem-52',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Empty Heart',
        titleHi: 'खाली दिल',
        textEn: [
            'Empty your heart of everything but Him,',
            'For the king does not enter a house already occupied.',
        ],
        textHi: [
            'अपने दिल को उसके सिवा हर चीज़ से खाली कर दो,',
            'क्योंकि बादशाह पहले से भरे हुए घर में दाखिल नहीं होता।',
        ],
        meaningEn: 'This verse teaches the necessity of detachment for spiritual progress. To experience the presence of God (the "king"), the heart must be emptied of worldly desires and attachments. Only a pure and vacant heart can become a worthy vessel for the Divine.',
        meaningHi: 'यह कविता आध्यात्मिक उन्नति के लिए वैराग्य की आवश्यकता सिखाती है। भगवान ("बादशाह") का अनुभव करने के लिए, दिल को दुनिया की इच्छाओं और मोह से खाली करना पड़ता है। केवल एक शुद्ध और खाली दिल ही भगवान के रहने के योग्य बन सकता है।'
    },
    {
        id: 'poem-53',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Law of Love',
        titleHi: 'प्रेम का विधान',
        textEn: [
            'In the law of love, the first condition is to lose your head,',
            'If you cannot, then do not step onto this path.',
        ],
        textHi: [
            'इश्क़ के क़ानून में, पहली शर्त है सर दे देना,',
            'अगर यह मंज़ूर नहीं, तो इस राह पर क़दम न रखना।',
        ],
        meaningEn: 'This highlights the radical nature of divine love. "Losing your head" means surrendering the ego, intellect, and personal will completely. It is a path of total self-annihilation, and the poet warns that without this readiness to surrender, one should not even begin the journey.',
        meaningHi: 'यह दिव्य प्रेम के क्रांतिकारी स्वरूप को उजागर करता है। "सर दे देना" का अर्थ है अहंकार, बुद्धि और व्यक्तिगत इच्छा को पूरी तरह से त्याग देना। यह पूर्ण आत्म-विनाश का मार्ग है, और कवि चेतावनी देते हैं कि इस समर्पण की तैयारी के बिना, किसी को यह यात्रा शुरू भी नहीं करनी चाहिए।'
    },
    {
        id: 'poem-54',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Veiled Face',
        titleHi: 'नक़ाबपोश चेहरा',
        textEn: [
            'You have veiled Your face with the beauty of Your own creation,',
            'I was lost in the veil, forgetting the Face behind it.',
        ],
        textHi: [
            'तूने अपनी ही बनाई कायनात की खूबसूरती से अपना चेहरा छुपा लिया,',
            'मैं नक़ाब में ही खो गया, और उसके पीछे का चेहरा भूल गया।',
        ],
        meaningEn: 'The beauty of the material world (the "veil") is a manifestation of God, but it can also become a distraction. The seeker laments having been mesmerized by the creation, forgetting the ultimate goal of seeing the Creator.',
        meaningHi: 'भौतिक दुनिया की सुंदरता ("नक़ाब") भगवान की ही एक रचना है, लेकिन यह ध्यान भटकाने वाली भी हो सकती है। साधक इस बात पर अफ़सोस करता है कि वह सृष्टि की सुंदरता में इतना खो गया कि बनाने वाले को देखने का असली लक्ष्य ही भूल गया।'
    },
    {
        id: 'poem-55',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Divine Thief',
        titleHi: 'दिव्य चोर',
        textEn: [
            'You are a wondrous thief who has stolen my heart,',
            'And now, having lost everything, I feel like a king.',
        ],
        textHi: [
            'तू भी क्या अजब चोर है जिसने मेरा दिल चुरा लिया,',
            'अब सब कुछ खोकर, मैं खुद को बादशाह महसूस करता हूँ।',
        ],
        meaningEn: 'This is a loving complaint to the Beloved. When God "steals" the seeker\'s heart, it means He captures their love and attention completely. By losing the heart to God, the seeker is freed from all worldly attachments and anxieties, which makes them feel spiritually rich and liberated ("like a king").',
        meaningHi: 'यह प्रियतम से एक प्रेमपूर्ण शिकायत है। जब भगवान साधक का दिल "चुरा" लेते हैं, तो इसका मतलब है कि वे उसका पूरा प्यार और ध्यान अपनी ओर खींच लेते हैं। भगवान को दिल देकर, साधक दुनिया के सभी मोह और चिंताओं से मुक्त हो जाता है, जिससे वह आध्यात्मिक रूप से अमीर और स्वतंत्र ("एक बादशाह की तरह") महसूस करता है।'
    },
    {
        id: 'poem-56',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Ocean in a Drop',
        titleHi: 'बूँद में सागर',
        textEn: [
            'Do not mistake me for a mere drop of water,',
            'I have held the entire ocean within my heart.',
        ],
        textHi: [
            'मुझे पानी की महज़ एक बूँद समझने की ग़लती न करना,',
            'मैंने पूरे सागर को अपने दिल में समा रखा है।',
        ],
        meaningEn: 'This verse speaks from the state of God-realization. The soul (the "drop"), upon merging with the Divine (the "ocean"), realizes its own infinite nature. It is no longer just a part, but contains the consciousness of the whole within itself.',
        meaningHi: 'यह कविता ईश्वर-प्राप्ति की अवस्था से बोलती है। आत्मा ("बूँद"), जब परमात्मा ("सागर") में विलीन हो जाती है, तो उसे अपनी अनंत प्रकृति का एहसास होता है। यह अब केवल एक अंश नहीं है, बल्कि अपने भीतर संपूर्ण की चेतना को समाहित किए हुए है।'
    },
    {
        id: 'poem-57',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Religion of Love',
        titleHi: 'प्रेम का मज़हब',
        textEn: [
            'My religion is love, my scripture is the Beloved\'s face,',
            'My place of worship is the lane where my Beloved dwells.',
        ],
        textHi: [
            'मेरा मज़हब इश्क़ है, मेरी किताब महबूब का चेहरा है,',
            'मेरी इबादतगाह वह गली है जहाँ मेरा यार रहता है।',
        ],
        meaningEn: 'The poet transcends all external religious formalities. For the lover of God, the only true "religion" is love itself. The direct vision of the Beloved is the only "scripture," and closeness to Him is the only "place of worship."',
        meaningHi: 'कवि सभी बाहरी धार्मिक औपचारिकताओं से ऊपर उठ जाता है। ईश्वर के प्रेमी के लिए, एकमात्र सच्चा "धर्म" स्वयं प्रेम है। प्रियतम का सीधा दर्शन ही एकमात्र "पवित्र ग्रंथ" है, और उसके निकट रहना ही एकमात्र "पूजा स्थल" है।'
    },
    {
        id: 'poem-58',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Conversation of Eyes',
        titleHi: 'आँखों की गुफ़्तगू',
        textEn: [
            'What need is there for words between you and me?',
            'Let our eyes do the talking, for they know the language of the heart.',
        ],
        textHi: [
            'तेरे और मेरे दरमियान लफ़्ज़ों की क्या ज़रूरत है?',
            'आँखों को बात करने दे, क्योंकि वे दिल की ज़ुबान जानती हैं।',
        ],
        meaningEn: 'This describes the silent, deep communication between the disciple and the Master. Spiritual transmission often occurs beyond words, through a glance or a look that conveys volumes of love, grace, and understanding directly to the soul.',
        meaningHi: 'यह शिष्य और गुरु के बीच के मौन, गहरे संवाद का वर्णन करता है। आध्यात्मिक संचार अक्सर शब्दों से परे होता है, एक नज़र या दृष्टि के माध्यम से जो सीधे आत्मा तक प्रेम, कृपा और समझ की गहराई को पहुंचाती है।'
    },
    {
        id: 'poem-59',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The True Intoxication',
        titleHi: 'सच्चा नशा',
        textEn: [
            'The intoxication of worldly wine fades by morning,',
            'The wine I have drunk from His eyes keeps me intoxicated for a lifetime.',
        ],
        textHi: [
            'दुनिया की शराब का नशा तो सुबह उतर जाता है,',
            'जो शराब मैंने उसकी आँखों से पी है, वह उम्र भर का नशा देती है।',
        ],
        meaningEn: 'The poet contrasts the fleeting pleasure of worldly intoxication with the everlasting bliss of divine love. The "wine from His eyes" is the grace of the Master, which bestows a permanent state of spiritual ecstasy that never diminishes.',
        meaningHi: 'कवि दुनिया के नशे के क्षणिक आनंद और दिव्य प्रेम के शाश्वत आनंद के बीच अंतर करता है। "उसकी आँखों से पी गई शराब" गुरु की कृपा है, जो आध्यात्मिक परमानंद की एक स्थायी अवस्था प्रदान करती है जो कभी कम नहीं होती।'
    },
    {
        id: 'poem-60',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Condition for a Vision',
        titleHi: 'दीदार की शर्त',
        textEn: [
            'If you wish to see Him, then first, lose sight of yourself,',
            'For the Beloved cannot be seen as long as "you" remain.',
        ],
        textHi: [
            'अगर उसे देखने की हसरत है, तो पहले खुद को देखना छोड़ दे,',
            'क्योंकि जब तक "तू" बाक़ी है, यार नज़र नहीं आ सकता।',
        ],
        meaningEn: 'This verse reiterates the necessity of annihilating the ego. The sense of a separate self ("you") acts as a barrier that prevents the vision of God. Only when the ego is completely dissolved can the soul experience its unity with the Divine.',
        meaningHi: 'यह कविता अहंकार को मिटाने की आवश्यकता को दोहराती है। एक अलग "मैं" की भावना एक बाधा के रूप में कार्य करती है जो ईश्वर के दर्शन को रोकती है। केवल जब अहंकार पूरी तरह से भंग हो जाता है, तभी आत्मा परमात्मा के साथ अपनी एकता का अनुभव कर सकती है।'
    },
    {
        id: 'poem-61',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Awakened Heart',
        titleHi: 'जागा हुआ दिल',
        textEn: [
            'A heart that has awakened to His love,',
            'Finds a hundred Kaabas within its own self.',
        ],
        textHi: [
            'जो दिल उसके इश्क़ में जाग गया,',
            'वह अपने ही अंदर सैकड़ों काबे पाता है।',
        ],
        meaningEn: 'The Kaaba is the holiest shrine in Islam. The poet states that once the heart is filled with divine love, it becomes the true sanctuary. The inner spiritual experience is far superior to any external pilgrimage, as God Himself resides within that awakened heart.',
        meaningHi: 'काबा इस्लाम का सबसे पवित्र तीर्थ है। कवि कहता है कि जब दिल दिव्य प्रेम से भर जाता है, तो वह सच्चा तीर्थ बन जाता है। आंतरिक आध्यात्मिक अनुभव किसी भी बाहरी तीर्थयात्रा से कहीं बेहतर है, क्योंकि स्वयं ईश्वर उस जागे हुए दिल में निवास करते हैं।'
    },
    {
        id: 'poem-62',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Complaint of the Reed Flute',
        titleHi: 'बांसुरी की शिकायत',
        textEn: [
            'Listen to the reed flute, it tells a tale of separation,',
            'Ever since I was cut from the reed bed, I have been crying.',
        ],
        textHi: [
            'बांसुरी को सुनो, यह जुदाई की कहानी कहती है,',
            'जब से मुझे सरकंडे के जंगल से काटा गया है, मैं रो रही हूँ।',
        ],
        meaningEn: 'This classic Sufi metaphor, famously used by Rumi, is adopted here. The "reed flute" is the human soul. Its music is a cry of longing for its source, the "reed bed" (God), from which it has been separated.',
        meaningHi: 'यह प्रसिद्ध सूफी रूपक, जिसे रूमी ने प्रसिद्ध रूप से इस्तेमाल किया था, यहाँ अपनाया गया है। "बांसुरी" मानव आत्मा है। इसका संगीत अपने स्रोत, "सरकंडे के जंगल" (ईश्वर) के लिए तड़प की एक पुकार है, जिससे इसे अलग कर दिया गया है।'
    },
    {
        id: 'poem-63',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Way of the Lover',
        titleHi: 'आशिक़ का तरीक़ा',
        textEn: [
            'Neither in the mosque, nor in the temple, nor in the church do I reside,',
            'I, the lover, live in the heart of my Beloved.',
        ],
        textHi: [
            'न मस्जिद में, न मंदिर में, न गिरजे में रहता हूँ,',
            'मैं आशिक़ हूँ, अपने यार के दिल में रहता हूँ।',
        ],
        meaningEn: 'The true lover of God is not confined to any physical place of worship. Their entire existence is centered around the Beloved. Their true "residence" is a state of constant remembrance and absorption in the love of God.',
        meaningHi: 'ईश्वर का सच्चा प्रेमी किसी भी भौतिक पूजा स्थल तक सीमित नहीं है। उसका पूरा अस्तित्व प्रियतम के इर्द-गिर्द केंद्रित है। उसका सच्चा "निवास" ईश्वर के प्रेम में निरंतर स्मरण और लीन रहने की अवस्था है।'
    },
    {
        id: 'poem-64',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Cure for All Ills',
        titleHi: 'हर मर्ज़ की दवा',
        textEn: [
            'The doctors offered many cures, but none could heal me,',
            'The only cure for my heart was a glimpse of my Beloved.',
        ],
        textHi: [
            'हकीमों ने बहुत इलाज बताए, पर कोई शिफ़ा न दे सका,',
            'मेरे दिल का इलाज तो बस मेरे महबूब का एक दीदार था।',
        ],
        meaningEn: 'The fundamental sickness of the soul is its separation from God. No worldly remedy can cure this spiritual ailment. The only true healing comes from the "glimpse" (darshan) or experience of the Divine, which alone can bring peace and wholeness.',
        meaningHi: 'आत्मा की मूल बीमारी ईश्वर से उसका अलगाव है। कोई भी सांसारिक उपाय इस आध्यात्मिक बीमारी को ठीक नहीं कर सकता। एकमात्र सच्चा उपचार "दीदार" या परमात्मा के अनुभव से मिलता है, जो अकेले ही शांति और पूर्णता ला सकता है।'
    },
    {
        id: 'poem-65',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Secret of Life',
        titleHi: 'ज़िंदगी का राज़',
        textEn: [
            'I thought life was about gaining, but it is about losing,',
            'I found true life only when I lost myself in You.',
        ],
        textHi: [
            'मैं समझता था कि ज़िंदगी पाने का नाम है, पर यह तो खोने का नाम है,',
            'मैंने सच्ची ज़िंदगी तभी पाई जब मैंने खुद को तुझमें खो दिया।',
        ],
        meaningEn: 'This verse reveals a spiritual paradox. The world teaches us to accumulate wealth, power, and possessions. However, the spiritual path teaches that true fulfillment ("true life") is found not in gaining, but in "losing" the ego and merging with the Divine.',
        meaningHi: 'यह कविता एक आध्यात्मिक विरोधाभास को उजागर करती है। दुनिया हमें धन, शक्ति और संपत्ति जमा करना सिखाती है। हालाँकि, आध्यात्मिक मार्ग सिखाता है कि सच्ची संतुष्टि ("सच्ची ज़िंदगी") पाने में नहीं, बल्कि अहंकार को "खोने" और परमात्मा में विलीन होने में है।'
    },
    {
        id: 'poem-66',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The World, a Dream',
        titleHi: 'दुनिया, एक ख़्वाब',
        textEn: [
            'This world is but a dream from which we must awaken,',
            'O Lord, grant me the grace to open my inner eye.',
        ],
        textHi: [
            'यह दुनिया बस एक ख़्वाब है जिससे हमें जागना है,',
            'ऐ मालिक, मुझे अपनी अंदर की आँख खोलने की कृपा प्रदान कर।',
        ],
        meaningEn: 'From the spiritual perspective, our worldly existence is like a dream compared to the higher reality. The poet prays for the awakening of the "inner eye" (the third eye or Shiv Netra), which allows the soul to perceive the reality beyond this illusion.',
        meaningHi: 'आध्यात्मिक दृष्टिकोण से, हमारा सांसारिक अस्तित्व उच्च वास्तविकता की तुलना में एक सपने जैसा है। कवि "आंतरिक आंख" (तीसरी आंख या शिव नेत्र) के जागरण के लिए प्रार्थना करता है, जो आत्मा को इस भ्रम से परे की वास्तविकता को देखने की अनुमति देती है।'
    },
    {
        id: 'poem-67',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Sound of Silence',
        titleHi: 'सन्नाटे की आवाज़',
        textEn: [
            'There is a sound that resonates in the deepest silence,',
            'It is Your call, and my soul dances to its rhythm.',
        ],
        textHi: [
            'गहरे सन्नाटे में एक आवाज़ गूँजती है,',
            'यह तेरी पुकार है, और मेरी रूह इसकी धुन पर नाचती है।',
        ],
        meaningEn: 'This refers to the Anhad Shabad, the Unstruck Melody. It is the "sound of silence" because it is not heard with the physical ears but with the inner ear of the soul during meditation. This divine music is the call of the Beloved, drawing the soul back home.',
        meaningHi: 'यह अनहद शब्द, यानी बिना बजाए बजने वाली धुन को संदर्भित करता है। यह "सन्नाटे की आवाज़" है क्योंकि इसे भौतिक कानों से नहीं बल्कि ध्यान के दौरान आत्मा के आंतरिक कान से सुना जाता है। यह दिव्य संगीत प्रियतम की पुकार है, जो आत्मा को वापस घर बुला रही है।'
    },
    {
        id: 'poem-68',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Only Knowledge',
        titleHi: 'एकमात्र ज्ञान',
        textEn: [
            'I read countless books, but remained ignorant,',
            'True knowledge came when I learned to read the page of my own heart.',
        ],
        textHi: [
            'मैंने अनगिनत किताबें पढ़ीं, पर अनजान ही रहा,',
            'सच्चा ज्ञान तब मिला जब मैंने अपने दिल का पन्ना पढ़ना सीखा।',
        ],
        meaningEn: 'Intellectual or scriptural knowledge is limited. The poet emphasizes that true wisdom comes not from external sources, but from introspection. The "page of the heart" is the inner self, where all divine secrets are revealed through direct experience in meditation.',
        meaningHi: 'बौद्धिक या शास्त्रीय ज्ञान सीमित है। कवि इस बात पर जोर देता है कि सच्ची बुद्धि बाहरी स्रोतों से नहीं, बल्कि आत्म-निरीक्षण से आती है। "दिल का पन्ना" आंतरिक स्व है, जहाँ ध्यान में प्रत्यक्ष अनुभव के माध्यम से सभी दिव्य रहस्य प्रकट होते हैं।'
    },
    {
        id: 'poem-69',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Perfect Pearl',
        titleHi: 'कामिल मोती',
        textEn: [
            'I dived into the ocean of the world and found only shells,',
            'The perfect pearl I sought was hidden within a single tear of longing.',
        ],
        textHi: [
            'मैं दुनिया के समंदर में गोता लगाया और सिर्फ़ सीपियाँ पाईं,',
            'जिस कामिल मोती की मुझे तलाश थी, वह तड़प के एक आँसू में छिपा था।',
        ],
        meaningEn: 'Worldly pursuits ("ocean of the world") yield worthless things ("shells"). The most precious spiritual treasure ("the perfect pearl") is found not in the outer world, but within the seeker\'s own heart, specifically within the state of intense, prayerful longing ("a tear of longing").',
        meaningHi: 'सांसारिक खोज ("दुनिया का समंदर") बेकार चीजें ("सीपियाँ") देती है। सबसे कीमती आध्यात्मिक खजाना ("कामिल मोती") बाहरी दुनिया में नहीं, बल्कि साधक के अपने दिल के भीतर, विशेष रूप से तीव्र, प्रार्थनापूर्ण तड़प ("तड़प का एक आँसू") की अवस्था में पाया जाता है।'
    },
    {
        id: 'poem-70',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Point and the Circle',
        titleHi: 'नुक्ता और दायरा',
        textEn: [
            'I wandered the circumference, but the center remained elusive,',
            'You taught me that the path to the circle lies through its very point.',
        ],
        textHi: [
            'मैं दायरे की परिधि पर भटकता रहा, पर केंद्र elusive रहा,',
            'तूने मुझे सिखाया कि दायरे का रास्ता उसके नुक्ते से होकर जाता है।',
        ],
        meaningEn: 'This is a metaphor for spiritual seeking. The "circumference" represents external rituals and searches. The "center" or "point" is the soul, the gateway within. The Master teaches that to understand the whole (the circle of creation), one must first go to the center point within oneself.',
        meaningHi: 'यह आध्यात्मिक खोज के लिए एक रूपक है। "परिधि" बाहरी अनुष्ठानों और खोजों का प्रतिनिधित्व करती है। "केंद्र" या "नुक्ता" आत्मा है, भीतर का प्रवेश द्वार। गुरु सिखाते हैं कि संपूर्ण (सृष्टि का दायरा) को समझने के लिए, पहले अपने भीतर के केंद्र बिंदु पर जाना होगा।'
    },
    {
        id: 'poem-71',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Dust of the Master\'s Lane',
        titleHi: 'मुर्शिद के कूचे की ख़ाक',
        textEn: [
            'The dust of my Master\'s lane is the kohl for my eyes,',
            'It has granted me a vision that sees beyond the veil of this world.',
        ],
        textHi: [
            'मेरे मुर्शिद के कूचे की ख़ाक मेरी आँखों का सुरमा है,',
            'इसने मुझे ऐसी नज़र दी है जो दुनिया के पर्दे के पार देखती है।',
        ],
        meaningEn: 'Kohl is used to beautify and clarify the eyes. Here, the "dust of the Master\'s lane" (symbolizing humility and closeness to him) acts as a spiritual kohl, purifying the seeker\'s inner vision and allowing them to perceive spiritual realities.',
        meaningHi: 'सुरमा आँखों को सुंदर बनाने और साफ़ करने के लिए इस्तेमाल किया जाता है। यहाँ, "गुरु के कूचे की ख़ाक" (विनम्रता और उनके प्रति निकटता का प्रतीक) एक आध्यात्मिक सुरमे के रूप में कार्य करती है, जो साधक की आंतरिक दृष्टि को शुद्ध करती है और उन्हें आध्यात्मिक वास्तविकताओं को देखने की अनुमति देती है।'
    },
    {
        id: 'poem-72',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Heart\'s Fire',
        titleHi: 'दिल की आग',
        textEn: [
            'Let the fire of Your love burn away everything in my heart,',
            'Until nothing remains but the ashes of my surrendered self.',
        ],
        textHi: [
            'तेरे इश्क़ की आग मेरे दिल में सब कुछ जला दे,',
            'जब तक कि मेरे समर्पित स्व की राख के सिवा कुछ न बचे।',
        ],
        meaningEn: 'The poet prays for a complete purification through divine love. This "fire" is not destructive but transformative. It is meant to burn away all impurities—ego, desires, karmas—leaving only the pure essence of a soul completely surrendered to the Divine.',
        meaningHi: 'कवि दिव्य प्रेम के माध्यम से पूर्ण शुद्धि के लिए प्रार्थना करता है। यह "आग" विनाशकारी नहीं बल्कि परिवर्तनकारी है। इसका उद्देश्य सभी अशुद्धियों—अहंकार, इच्छाओं, कर्मों—को जलाना है, जिससे केवल परमात्मा को पूरी तरह से समर्पित आत्मा का शुद्ध सार बच जाए।'
    },
    {
        id: 'poem-73',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The True Wealth',
        titleHi: 'सच्ची दौलत',
        textEn: [
            'The kings of this world are beggars in the lane of love,',
            'The only true wealth is the pain of longing for You.',
        ],
        textHi: [
            'इस दुनिया के बादशाह इश्क़ की गली में भिखारी हैं,',
            'एकमात्र सच्ची दौलत तेरी याद में तड़पने का दर्द है।',
        ],
        meaningEn: 'This verse inverts worldly values. Material wealth and power are meaningless compared to spiritual riches. For a mystic, the most treasured possession is "viraha," the intense pain of separation from God, because this pain is the very engine of the spiritual journey.',
        meaningHi: 'यह कविता सांसारिक मूल्यों को उलट देती है। आध्यात्मिक धन की तुलना में भौतिक धन और शक्ति अर्थहीन हैं। एक रहस्यवादी के लिए, सबसे कीमती संपत्ति "विरह" है, ईश्वर से अलगाव का तीव्र दर्द, क्योंकि यह दर्द ही आध्यात्मिक यात्रा का मुख्य इंजन है।'
    },
    {
        id: 'poem-74',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Homeless Wanderer',
        titleHi: 'बेघर बंजारा',
        textEn: [
            'I am a homeless wanderer in both worlds,',
            'My only address is the dust on Your doorstep.',
        ],
        textHi: [
            'मैं दोनों जहान में एक बेघर बंजारा हूँ,',
            'मेरा एकमात्र पता तेरी दहलीज़ की धूल है।',
        ],
        meaningEn: 'The seeker feels detached from the material world and has not yet reached the ultimate spiritual home. In this state, their only identity and place of belonging is in extreme humility and closeness to the Master ("the dust on Your doorstep").',
        meaningHi: 'साधक भौतिक दुनिया से अलग महसूस करता है और अभी तक अंतिम आध्यात्मिक घर तक नहीं पहुंचा है। इस अवस्था में, उसकी एकमात्र पहचान और अपनेपन की जगह अत्यधिक विनम्रता और गुरु के प्रति निकटता ("तेरी दहलीज़ की धूल") है।'
    },
    {
        id: 'poem-75',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Reflection in the Water',
        titleHi: 'पानी में अक्स',
        textEn: [
            'The fool tries to catch the moon\'s reflection in the water,',
            'The wise one looks up and beholds the moon itself.',
        ],
        textHi: [
            'नादान पानी में चाँद का अक्स पकड़ने की कोशिश करता है,',
            'समझदार ऊपर देखकर खुद चाँद को निहारता है।',
        ],
        meaningEn: 'This metaphor distinguishes between indirect and direct spiritual knowledge. The "reflection" is the beauty of the created world and scriptural knowledge. The "moon itself" is the direct experience of God. The poet advises seeking the source, not its reflection.',
        meaningHi: 'यह रूपक अप्रत्यक्ष और प्रत्यक्ष आध्यात्मिक ज्ञान के बीच अंतर करता है। "अक्स" बनाई गई दुनिया की सुंदरता और शास्त्रीय ज्ञान है। "खुद चाँद" ईश्वर का प्रत्यक्ष अनुभव है। कवि स्रोत की तलाश करने की सलाह देता है, न कि उसके प्रतिबिंब की।'
    },
    {
        id: 'poem-76',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Guest of the Heart',
        titleHi: 'दिल का मेहमान',
        textEn: [
            'For years my heart was an empty, desolate house,',
            'Since You became its guest, it has turned into a festive garden.',
        ],
        textHi: [
            'बरसों तक मेरा दिल एक खाली, वीरान घर था,',
            'जब से तू इसका मेहमान बना है, यह एक उत्सव का बाग़ बन गया है।',
        ],
        meaningEn: 'Before spiritual awakening, the heart is "empty" and devoid of true joy. When the presence of the Divine ("the guest") is felt within, the heart is transformed, filled with the perpetual "festive" bliss and beauty of a blooming garden.',
        meaningHi: 'आध्यात्मिक जागृति से पहले, दिल "खाली" और सच्चे आनंद से रहित होता है। जब भीतर परमात्मा ("मेहमान") की उपस्थिति महसूस होती है, तो दिल बदल जाता है, और एक खिले हुए बगीचे के स्थायी "उत्सव" आनंद और सुंदरता से भर जाता है।'
    },
    {
        id: 'poem-77',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Only Question',
        titleHi: 'एक ही सवाल',
        textEn: [
            'I have only one question for the learned and the wise,',
            'If you have not seen Him, what have you seen?',
        ],
        textHi: [
            'मेरा आलिमों और अक़्लमंदों से बस एक ही सवाल है,',
            'अगर तुमने उसे नहीं देखा, तो क्या देखा है?',
        ],
        meaningEn: 'This boldly challenges the value of all worldly knowledge and experience if it does not lead to God-realization. The poet asserts that the ultimate purpose of perception and knowledge is to see God. Everything else is secondary and ultimately meaningless.',
        meaningHi: 'यह साहसपूर्वक सभी सांसारिक ज्ञान और अनुभव के मूल्य को चुनौती देता है यदि वह ईश्वर-प्राप्ति की ओर नहीं ले जाता है। कवि जोर देकर कहता है कि धारणा और ज्ञान का अंतिम उद्देश्य ईश्वर को देखना है। बाकी सब कुछ गौण और अंततः अर्थहीन है।'
    },
    {
        id: 'poem-78',
        author: 'Sant Darshan सिंह जी महाराज',
        titleEn: 'The Soul\'s Story',
        titleHi: 'रूह की दास्ताँ',
        textEn: [
            'Don\'t ask me for stories of this world,',
            'My breath itself is a tale of longing for another world.',
        ],
        textHi: [
            'मुझसे इस दुनिया के क़िस्से न पूछो,',
            'मेरी तो हर साँस ही किसी और दुनिया की तड़प की दास्ताँ है।',
        ],
        meaningEn: 'The seeker has lost interest in worldly matters. Their entire being is consumed by the yearning for their true spiritual home. Every breath is a reminder of their separation and their desire to return to the divine source.',
        meaningHi: 'साधक ने सांसारिक मामलों में रुचि खो दी है। उसका पूरा अस्तित्व अपने सच्चे आध्यात्मिक घर के लिए तड़प से भर गया है। हर साँस उसे अपने अलगाव और दिव्य स्रोत पर लौटने की उसकी इच्छा की याद दिलाती है।'
    },
    {
        id: 'poem-79',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Master\'s Hand',
        titleHi: 'मुर्शिद का हाथ',
        textEn: [
            'I was drowning in the ocean of existence,',
            'A hand reached out from the unseen and saved me; it was Yours.',
        ],
        textHi: [
            'मैं वजूद के समंदर में डूब रहा था,',
            'ग़ैब से एक हाथ आया और मुझे बचा लिया; वह हाथ तेरा था।',
        ],
        meaningEn: 'This describes the saving grace of the spiritual Master. The "ocean of existence" is the cycle of birth and death and worldly suffering. The seeker acknowledges that it was the Master\'s grace ("Your hand") that rescued them from this perilous state.',
        meaningHi: 'यह आध्यात्मिक गुरु की बचाने वाली कृपा का वर्णन करता है। "वजूद का समंदर" जन्म और मृत्यु का चक्र और सांसारिक दुख है। साधक स्वीकार करता है कि यह गुरु की कृपा ("तेरा हाथ") थी जिसने उन्हें इस खतरनाक स्थिति से बचाया।'
    },
    {
        id: 'poem-80',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Debt of Love',
        titleHi: 'इश्क़ का क़र्ज़',
        textEn: [
            'How can I ever repay the debt of a single glance of Your grace?',
            'Even if I offer my life a thousand times, it would not be enough.',
        ],
        textHi: [
            'मैं तेरी एक निगाह-ए-करम का क़र्ज़ कैसे चुका सकता हूँ?',
            'अगर मैं हज़ार बार भी अपनी जान दे दूँ, तो भी यह काफ़ी नहीं होगा।',
        ],
        meaningEn: 'The seeker feels an overwhelming sense of gratitude for the Master\'s grace. A single moment of that grace is considered so priceless that no sacrifice, not even giving one\'s life repeatedly, can ever be sufficient to repay it.',
        meaningHi: 'साधक गुरु की कृपा के लिए अत्यधिक कृतज्ञता की भावना महसूस करता है। उस कृपा का एक क्षण भी आध्यात्मिक जागरूकता के बिना बिताए गए जीवन की लंबी अवधियों से आध्यात्मिक रूप से अधिक शक्तिशाली और सार्थक है।'
    },
    {
        id: 'poem-81',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Center of My World',
        titleHi: 'मेरी दुनिया का मरकज़',
        textEn: [
            'The world revolves around its axis,',
            'My world revolves around the thought of You.',
        ],
        textHi: [
            'दुनिया अपने मेहवर के गिर्द घूमती है,',
            'मेरी दुनिया तेरे ख़याल के गिर्द घूमती है।',
        ],
        meaningEn: 'This expresses a state of complete single-pointed devotion. For the seeker, the central, organizing principle of their entire existence—their thoughts, feelings, and actions—is the remembrance and love of the Beloved.',
        meaningHi: 'यह पूर्ण एकनिष्ठ भक्ति की स्थिति को व्यक्त करता है। साधक के लिए, उसके पूरे अस्तित्व—उसके विचारों, भावनाओं और कार्यों—का केंद्रीय, संगठित सिद्धांत प्रियतम का स्मरण और प्रेम है।'
    },
    {
        id: 'poem-82',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The True Prayer',
        titleHi: 'सच्ची दुआ',
        textEn: [
            'My prayer is not in words, but in the silent turning of my heart,',
            'Like a sunflower, it constantly seeks Your light.',
        ],
        textHi: [
            'मेरी दुआ लफ़्ज़ों में नहीं, बल्कि मेरे दिल के ख़ामोश मुड़ने में है,',
            'सूरजमुखी की तरह, यह हमेशा तेरे नूर की तलाश में रहता है।',
        ],
        meaningEn: 'True prayer is not a formulated request but an unceasing, natural orientation of the soul towards God. Like a sunflower that instinctively follows the sun, the awakened heart constantly and silently yearns for the divine light.',
        meaningHi: 'सच्ची प्रार्थना एक तैयार की गई विनती नहीं है, बल्कि आत्मा का ईश्वर की ओर एक निरंतर, स्वाभाविक झुकाव है। जैसे एक सूरजमुखी सहज रूप से सूर्य का अनुसरण करता है, वैसे ही जागा हुआ दिल लगातार और चुपचाप दिव्य प्रकाश के लिए तरसता है।'
    },
    {
        id: 'poem-83',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Logic of Love',
        titleHi: 'इश्क़ की मंतिक़',
        textEn: [
            'The intellect asked for proof, my heart simply bowed its head,',
            'The logic of love is beyond all reason and argument.',
        ],
        textHi: [
            'अक़्ल ने सुबूत मांगा, मेरे दिल ने बस सर झुका दिया,',
            'इश्क़ की मंतिक़ हर दलील और बहस से परे है।',
        ],
        meaningEn: 'This verse highlights the conflict between intellect and faith. The mind demands rational proof, but the heart, in matters of love and spirituality, operates on faith, intuition, and surrender. Divine love is an experience that transcends logic.',
        meaningHi: 'यह कविता बुद्धि और विश्वास के बीच के संघर्ष को उजागर करती है। मन तर्कसंगत प्रमाण मांगता है, लेकिन दिल, प्रेम और आध्यात्मिकता के मामलों में, विश्वास, अंतर्ज्ञान और समर्पण पर काम करता है। दिव्य प्रेम एक ऐसा अनुभव है जो तर्क से परे है।'
    },
    {
        id: 'poem-84',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Ocean of Formlessness',
        titleHi: 'बे-सूरत का समंदर',
        textEn: [
            'Every form I see is a wave on the ocean of Formlessness,',
            'I have learned to see the ocean in every wave.',
        ],
        textHi: [
            'हर सूरत जो मैं देखता हूँ, वह बे-सूरत के समंदर की एक लहर है,',
            'मैंने हर लहर में समंदर देखना सीख लिया है।',
        ],
        meaningEn: 'This expresses the Vedantic or Sufi realization of unity in diversity. All the diverse forms of creation ("waves") are temporary manifestations of the one, formless reality ("ocean"). The realized soul perceives this underlying unity in all things.',
        meaningHi: 'यह वेदांत या सूफी की अनेकता में एकता की अनुभूति को व्यक्त करता है। सृष्टि के सभी विविध रूप ("लहरें") एक, निराकार वास्तविकता ("समंदर") की अस्थायी अभिव्यक्तियाँ हैं। सिद्ध आत्मा सभी चीजों में इस अंतर्निहित एकता को देखती है।'
    },
    {
        id: 'poem-85',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Pilgrim\'s Goal',
        titleHi: 'यात्री का लक्ष्य',
        textEn: [
            'The pilgrim longs to reach the shrine,',
            'My pilgrimage ends where I lose myself and only You remain.',
        ],
        textHi: [
            'तीर्थयात्री काबा पहुँचने को तरसता है,',
            'मेरी तीर्थयात्रा वहाँ ख़त्म होती है जहाँ मैं खो जाता हूँ और बस तू रह जाता है।',
        ],
        meaningEn: 'The goal of the spiritual journey is not to arrive at a physical or even a spiritual location. The true destination is a state of consciousness—the annihilation of the self, where the illusion of a separate identity is lost and only God remains.',
        meaningHi: 'आध्यात्मिक यात्रा का लक्ष्य किसी भौतिक या आध्यात्मिक स्थान पर पहुँचना नहीं है। सच्चा गंतव्य चेतना की एक अवस्था है—स्वयं का विनाश, जहाँ एक अलग पहचान का भ्रम खो जाता है और केवल ईश्वर ही रहता है।'
    },
    {
        id: 'poem-86',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'A Single Breath',
        titleHi: 'एक साँस',
        textEn: [
            'A single breath spent in Your remembrance,',
            'Is more valuable than a hundred lifetimes spent in heedlessness.',
        ],
        textHi: [
            'एक साँस जो तेरी याद में गुज़रे,',
            'ग़फ़लत में गुज़री सौ ज़िंदगियों से ज़्यादा क़ीमती है।',
        ],
        meaningEn: 'This verse emphasizes the immense value of conscious spiritual practice. Even a moment of sincere remembrance of God is spiritually more potent and worthwhile than long periods of life lived without spiritual awareness.',
        meaningHi: 'यह कविता सचेत आध्यात्मिक अभ्यास के immense मूल्य पर जोर देती है। ईश्वर का ईमानदारी से स्मरण का एक क्षण भी आध्यात्मिक जागरूकता के बिना बिताए गए जीवन की लंबी अवधियों से आध्यात्मिक रूप से अधिक शक्तिशाली और सार्थक है।'
    },
    {
        id: 'poem-87',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Unread Letter',
        titleHi: 'अनपढ़ा ख़त',
        textEn: [
            'The human body is a letter sent to you from God,',
            'Alas, you have spent your life without ever reading its contents.',
        ],
        textHi: [
            'यह इंसानी जिस्म ख़ुदा का भेजा हुआ एक ख़त है तेरे नाम,',
            'अफ़सोस, तूने ज़िंदगी गुज़ार दी और इसका मज़मून पढ़ा ही नहीं।',
        ],
        meaningEn: 'The human form is a precious and rare opportunity for God-realization. It is like a "letter" from God containing the secret of how to return to Him. The tragedy is that most people live and die without "reading" it, i.e., without undertaking the inner journey it was designed for.',
        meaningHi: 'मानव रूप ईश्वर-प्राप्ति के लिए एक कीमती और दुर्लभ अवसर है। यह ईश्वर का एक "ख़त" जैसा है जिसमें उस तक लौटने का रहस्य है। त्रासदी यह है कि अधिकांश लोग इसे "पढ़े" बिना ही जीते और मर जाते हैं, यानी उस आंतरिक यात्रा को किए बिना जिसके लिए इसे बनाया गया था।'
    },
    {
        id: 'poem-88',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Spark and the Sun',
        titleHi: 'चिंगारी और सूरज',
        textEn: [
            'I was a mere spark, You are the infinite sun,',
            'By Your grace, the spark has realized it was never separate from the sun.',
        ],
        textHi: [
            'मैं एक मामूली चिंगारी था, तू असीम सूरज है,',
            'तेरी कृपा से, चिंगारी को एहसास हुआ कि वह सूरज से कभी अलग थी ही नहीं।',
        ],
        meaningEn: 'The soul ("spark") is a part of God ("sun"). In its state of ignorance, it feels small and separate. Through divine grace, it comes to the realization that its essence is the same as its source, and the separation was only an illusion.',
        meaningHi: 'आत्मा ("चिंगारी") ईश्वर ("सूरज") का एक हिस्सा है। अपनी अज्ञानता की स्थिति में, यह छोटा और अलग महसूस करती है। दैवीय कृपा के माध्यम से, उसे यह एहसास होता है कि उसका सार उसके स्रोत के समान ही है, और अलगाव केवल एक भ्रम था।'
    },
    {
        id: 'poem-89',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Way to His Lane',
        titleHi: 'उसके कूचे का रास्ता',
        textEn: [
            'The way to the Beloved\'s lane passes through the marketplace of infamy,',
            'Be prepared to lose your honor if you wish to walk this path.',
        ],
        textHi: [
            'यार के कूचे का रास्ता रुस्वाई के बाज़ार से होकर गुज़रता है,',
            'अगर इस राह पर चलना है तो अपनी इज़्ज़त खोने को तैयार रह।',
        ],
        meaningEn: 'The path of true devotion often requires going against societal norms and expectations. The seeker must be willing to endure ridicule and lose their worldly reputation ("infamy") for the sake of their love for God.',
        meaningHi: 'सच्ची भक्ति के मार्ग पर अक्सर सामाजिक मानदंडों और अपेक्षाओं के विरुद्ध जाना पड़ता है। साधक को ईश्वर के प्रति अपने प्रेम के लिए उपहास सहने और अपनी सांसारिक प्रतिष्ठा ("रुस्वाई") खोने के लिए तैयार रहना चाहिए।'
    },
    {
        id: 'poem-90',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Final Plea',
        titleHi: 'आख़िरी इल्तिजा',
        textEn: [
            'When my final breath arrives, let this be my only plea,',
            'Let my eyes be fixed on You, and Your name be on my tongue.',
        ],
        textHi: [
            'जब मेरी आख़िरी साँस आए, तो बस यही इल्तिजा हो,',
            'मेरी आँखें तुझ पर टिकी हों, और ज़बान पर तेरा नाम हो।',
        ],
        meaningEn: 'This is the ultimate aspiration of a devotee. They pray that at the moment of death, their consciousness is completely absorbed in the Beloved—seeing Him with their inner eye and remembering Him with their last breath, ensuring a graceful transition.',
        meaningHi: 'यह एक भक्त की अंतिम आकांक्षा है। वे प्रार्थना करते हैं कि मृत्यु के क्षण में, उनकी चेतना पूरी तरह से प्रियतम में लीन हो—उन्हें अपनी आंतरिक आंख से देखते हुए और अपनी अंतिम सांस के साथ उन्हें याद करते हुए, एक सुंदर पारगमन सुनिश्चित करते हुए।'
    },
     {
        id: 'poem-91',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Silent Complaint',
        titleHi: 'ख़ामोश गिला',
        textEn: [
            'My silence is a complaint against Your indifference,',
            'Listen to the story my unblinking eyes tell.',
        ],
        textHi: [
            'मेरी ख़ामोशी तेरी बेरुखी के ख़िलाफ़ एक गिला है,',
            'मेरी बे-मिसाल आँखों की कहानी को सुन।',
        ],
        meaningEn: 'In the state of intense longing, the seeker feels the Beloved is distant. Their silent, tearful meditation is a form of complaint, a plea for grace. The constant vigil ("unblinking eyes") is itself a story of their unwavering love and pain.',
        meaningHi: 'तीव्र तड़प की अवस्था में, साधक को लगता है कि प्रियतम दूर है। उनका मौन, अश्रुपूर्ण ध्यान एक प्रकार की शिकायत है, कृपा के लिए एक प्रार्थना। निरंतर जागरण ("बे-मिसाल आँखें") ही उनके अटूट प्रेम और दर्द की कहानी है।'
    },
    {
        id: 'poem-92',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The World and the Heart',
        titleHi: 'दुनिया और दिल',
        textEn: [
            'The world is too small to contain my love for You,',
            'Yet my small heart contains both You and the world.',
        ],
        textHi: [
            'यह दुनिया तेरे लिए मेरे इश्क़ को समाने के लिए बहुत छोटी है,',
            'फिर भी मेरा छोटा सा दिल तुझे और दुनिया दोनों को समाए हुए है।',
        ],
        meaningEn: 'A mystical paradox. The love for God is infinite and cannot be contained by the entire universe. Yet, the human heart, when expanded by love, has the capacity to hold the Infinite Beloved, making it greater than the cosmos itself.',
        meaningHi: 'एक रहस्यमय विरोधाभास। ईश्वर के लिए प्रेम अनंत है और इसे पूरे ब्रह्मांड में नहीं समाया जा सकता। फिर भी, मानव हृदय, जब प्रेम से फैलता है, तो उसमें अनंत प्रियतम को धारण करने की क्षमता होती है, जो इसे ब्रह्मांड से भी बड़ा बना देता है।'
    },
    {
        id: 'poem-93',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The True Prostration',
        titleHi: 'सच्चा सजदा',
        textEn: [
            'I offered a prostration in which I did not lift my head again,',
            'For the one who has found Your doorstep needs no other shrine.',
        ],
        textHi: [
            'मैंने एक ऐसा सजदा किया कि फिर सर नहीं उठाया,',
            'क्योंकि जिसे तेरी दहलीज़ मिल गई, उसे किसी और काबे की ज़रूरत नहीं।',
        ],
        meaningEn: 'True prostration (sajda) is not a physical act but a permanent state of surrender. Once the seeker has found the true Master ("Your doorstep"), their ego is permanently bowed, and they no longer need to search for God in any other place.',
        meaningHi: 'सच्चा सजदा एक शारीरिक क्रिया नहीं बल्कि समर्पण की एक स्थायी अवस्था है। जब साधक को सच्चा गुरु ("तेरी दहलीज़") मिल जाता है, तो उसका अहंकार स्थायी रूप से झुक जाता है, और उसे किसी अन्य स्थान पर ईश्वर को खोजने की आवश्यकता नहीं रहती।'
    },
    {
        id: 'poem-94',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Color of Submission',
        titleHi: 'र रंग-ए-तस्लीम',
        textEn: [
            'Dye me in Your color, O Dyer of hearts,',
            'So that my own color ceases to exist.',
        ],
        textHi: [
            'मुझे अपने रंग में रंग दे, ऐ दिलों के रंगरेज़,',
            'ताकि मेरा अपना कोई रंग बाक़ी न रहे।',
        ],
        meaningEn: 'The seeker prays to be completely absorbed into the being of the Beloved. They wish for their individual identity and personality ("my own color") to be completely effaced and replaced by the divine consciousness ("Your color").',
        meaningHi: 'साधक प्रियतम के अस्तित्व में पूरी तरह से विलीन होने की प्रार्थना करता है। वह चाहता है कि उसकी व्यक्तिगत पहचान और व्यक्तित्व ("मेरा अपना रंग") पूरी तरह से मिट जाए और उसकी जगह दिव्य चेतना ("तेरा रंग") ले ले।'
    },
    {
        id: 'poem-95',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Madman\'s Wisdom',
        titleHi: 'दीवाने की समझ',
        textEn: [
            'The wise call me mad, and the mad call me wise,',
            'Only You and I know the secret of my condition.',
        ],
        textHi: [
            'अक़्लमंद मुझे दीवाना कहते हैं, और दीवाने मुझे अक़्लमंद,',
            'मेरी हालत का राज़ तो बस तू जानता है या मैं।',
        ],
        meaningEn: 'The lover of God lives in a state that is incomprehensible to the worldly-wise. Their actions may seem like madness. Yet, in their "madness" of divine love lies a higher wisdom. Only the lover and the Beloved understand this sacred relationship.',
        meaningHi: 'ईश्वर का प्रेमी एक ऐसी अवस्था में रहता है जो दुनिया के समझदार लोगों के लिए समझ से बाहर है। उसके कार्य पागलपन जैसे लग सकते हैं। फिर भी, उसके दिव्य प्रेम के "पागलपन" में एक उच्च ज्ञान निहित है। केवल प्रेमी और प्रियतम ही इस पवित्र रिश्ते को समझते हैं।'
    },
    {
        id: 'poem-96',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Agony and the Ecstasy',
        titleHi: 'दर्द और दवा',
        textEn: [
            'You are the source of my pain, and You are its only cure,',
            'How strange is my ailment, that the doctor himself is the disease.',
        ],
        textHi: [
            'तू ही मेरे दर्द का सबब है, और तू ही इसकी एकमात्र दवा,',
            'मेरा मर्ज़ भी क्या अजीब है, कि हकीम खुद ही बीमारी है।',
        ],
        meaningEn: 'The pain of separation is caused by the absence of the Beloved, yet the only cure for that pain is the Beloved Himself. This beautiful paradox captures the all-encompassing nature of God in the seeker\'s life, being both the cause of longing and its ultimate fulfillment.',
        meaningHi: 'जुदाई का दर्द प्रियतम की अनुपस्थिति के कारण होता है, फिर भी उस दर्द का एकमात्र इलाज स्वयं प्रियतम है। यह सुंदर विरोधाभास साधक के जीवन में ईश्वर की सर्वव्यापी प्रकृति को दर्शाता है, जो तड़प का कारण भी है और उसकी अंतिम पूर्ति भी।'
    },
    {
        id: 'poem-97',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Two Worlds',
        titleHi: 'दो जहान',
        textEn: [
            'Give the two worlds to those who desire them,',
            'For me, a single particle of dust from Your lane is enough.',
        ],
        textHi: [
            'दोनों जहान उन्हें दे दे जो इसके तलबगार हैं,',
            'मेरे लिए तो तेरे कूचे का एक ज़र्रा ही काफ़ी है।',
        ],
        meaningEn: 'The poet renounces all rewards, both earthly and heavenly ("the two worlds"). The ultimate desire is not for paradise or worldly pleasure, but for the profound humility and nearness to the Beloved symbolized by the "dust from Your lane".',
        meaningHi: 'कवि सांसारिक और स्वर्गीय ("दोनों जहान") सभी पुरस्कारों का त्याग करता है। अंतिम इच्छा स्वर्ग या सांसारिक सुख के लिए नहीं है, बल्कि "तेरे कूचे की धूल" द्वारा प्रतीक गहन विनम्रता और प्रियतम के प्रति निकटता के लिए है।'
    },
    {
        id: 'poem-98',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'Beyond Reason',
        titleHi: 'अक़्ल से परे',
        textEn: [
            'Let reason wander in its own labyrinths,',
            'The path of love begins where reason ends.',
        ],
        textHi: [
            'अक़्ल को उसकी अपनी गलियों में भटकने दे,',
            'इश्क़ का रास्ता वहाँ से शुरू होता है जहाँ अक़्ल की हद ख़त्म होती है।',
        ],
        meaningEn: 'This verse emphasizes that the spiritual journey of love cannot be navigated by the rational mind. The intellect has its limits. True spiritual experience and the mysteries of divine love are accessible only when one transcends logic and embraces faith and intuition.',
        meaningHi: 'यह कविता इस बात पर जोर देती है कि प्रेम की आध्यात्मिक यात्रा को तार्किक मन से नहीं तय किया जा सकता है। बुद्धि की अपनी सीमाएँ हैं। सच्चा आध्यात्मिक अनुभव और दिव्य प्रेम के रहस्य केवल तभी सुलभ होते हैं जब कोई तर्क से परे जाकर विश्वास और अंतर्ज्ञान को अपनाता है।'
    },
    {
        id: 'poem-99',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The Broken Heart',
        titleHi: 'शिकस्ता दिल',
        textEn: [
            'Do not look down upon my broken heart,',
            'For the Beloved often chooses to reside in ruins.',
        ],
        textHi: [
            'मेरे शिकस्ता दिल को हिकारत से न देख,',
            'यार तो अक्सर वीரானों में ही रहना पसंद करता है।',
        ],
        meaningEn: 'A "broken heart" in this context is one that is broken from worldly attachments and filled with humility and longing for God. Such a heart, free from pride, becomes a suitable dwelling place for the Divine, who values humility over worldly perfection.',
        meaningHi: 'इस संदर्भ में "टूटा हुआ दिल" वह है जो सांसारिक मोह से टूट गया है और ईश्वर के लिए विनम्रता और तड़प से भर गया है। ऐसा हृदय, जो अभिमान से मुक्त है, परमात्मा के लिए एक उपयुक्त निवास स्थान बन जाता है, जो सांसारिक पूर्णता पर विनम्रता को महत्व देता है।'
    },
    {
        id: 'poem-100',
        author: 'Sant Darshan Singh Ji Maharaj',
        titleEn: 'The End of the Story',
        titleHi: 'कहानी का अंत',
        textEn: [
            'The story began when "I" and "You