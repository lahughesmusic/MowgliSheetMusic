const songEntries = [
  {
    id: "1",
    title: "As The Deer",
    category: "hymn",
    images: [
      require('../assets/hymns/AsTheDeer-0.jpg'),
      require('../assets/hymns/AsTheDeer-1.jpg'),
      require('../assets/hymns/AsTheDeer-2.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "2",
    title: "Be Thou My Vision",
    category: "hymn",
    images: [
      require('../assets/hymns/BeThouMyVision-0.jpg'),
      require('../assets/hymns/BeThouMyVision-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "3",
    title: "Blessed Assurance",
    category: "hymn",
    images: [
      require('../assets/hymns/BlessedAssurance-0.jpg'),
      require('../assets/hymns/BlessedAssurance-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "4",
    title: "His Eye Is On The Sparrow",
    category: "hymn",
    images: [
      require('../assets/hymns/HisEyeIsOnTheSparrow-0.jpg'),
      require('../assets/hymns/HisEyeIsOnTheSparrow-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "5",
    title: "Holy God We Praise Thy Name",
    category: "hymn",
    images: [
      require('../assets/hymns/HolyGodWePraiseThyName.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "6",
    title: "Holy Holy Holy",
    category: "hymn",
    images: [
      require('../assets/hymns/HolyHolyHoly-0.jpg'),
      require('../assets/hymns/HolyHolyHoly-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "7",
    title: "How Great Thou Art",
    category: "hymn",
    images: [
      require('../assets/hymns/HowGreatThouArt-0.jpg'),
      require('../assets/hymns/HowGreatThouArt-1.jpg'),
      require('../assets/hymns/HowGreatThouArt-2.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "8",
    title: "I'll Praise My Maker While I've Breath",
    category: "hymn",
    images: [
      require('../assets/hymns/IllPraiseMyMakerWhileIveBreath.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "9",
    title: "In The Garden",
    category: "hymn",
    images: [
      require('../assets/hymns/InTheGarden-0.jpg'),
      require('../assets/hymns/InTheGarden-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "10",
    title: "It Is Well",
    category: "hymn",
    images: [
      require('../assets/hymns/ItIsWell-0.jpg'),
      require('../assets/hymns/ItIsWell-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "11",
    title: "Jesus Loves Me",
    category: "hymn",
    images: [
      require('../assets/hymns/JesusLovesMe-0.jpg'),
      require('../assets/hymns/JesusLovesMe-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "12",
    title: "Just As I Am",
    category: "hymn",
    images: [
      require('../assets/hymns/JustAsIAm.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "13",
    title: "Men And Children Everywhere",
    category: "hymn",
    images: [
      require('../assets/hymns/MenAndChildrenEverywhere.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "14",
    title: "Nearer My God To Thee",
    category: "hymn",
    images: [
      require('../assets/hymns/NearerMyGodToThee-0.jpg'),
      require('../assets/hymns/NearerMyGodToThee-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "15",
    title: "Redeemed",
    category: "hymn",
    images: [
      require('../assets/hymns/Redeemed-0.jpg'),
      require('../assets/hymns/Redeemed-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "16",
    title: "Seek Ye First (1)",
    category: "hymn",
    images: [
      require('../assets/hymns/SeekYeFirst-0.jpg'),
      require('../assets/hymns/SeekYeFirst-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "17",
    title: "Seek Ye First (2)",
    category: "hymn",
    images: [
      require('../assets/hymns/SeekYeFirst1-0.jpg'),
      require('../assets/hymns/SeekYeFirst1-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "18",
    title: "See The Morning Sun Ascending",
    category: "hymn",
    images: [
      require('../assets/hymns/SeeTheMorningSunAscending.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "19",
    title: "We Thy People Praise Thee",
    category: "hymn",
    images: [
      require('../assets/hymns/WeThyPeoplePraiseThee-0.jpg'),
      require('../assets/hymns/WeThyPeoplePraiseThee-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "20",
    title: "What A Friend We Have In Jesus",
    category: "hymn",
    images: [
      require('../assets/hymns/WhatAFriendWeHaveInJesus-0.jpg'),
      require('../assets/hymns/WhatAFriendWeHaveInJesus-1.jpg'),
      require('../assets/hymns/WhatAFriendWeHaveInJesus-2.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "21",
    title: "When I Survey Thy Wondrous Cross (1)",
    category: "hymn",
    images: [
      require('../assets/hymns/WhenISurvey-0.jpg'),
      require('../assets/hymns/WhenISurvey-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "22",
    title: "When I Survey Thy Wondrous Cross (2)",
    category: "hymn",
    images: [
      require('../assets/hymns/WhenISurveyTheWondrousCross-0.jpg'),
      require('../assets/hymns/WhenISurveyTheWondrousCross-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "23",
    title: "Without Him",
    category: "hymn",
    images: [
      require('../assets/hymns/WithoutHim-0.jpg'),
      require('../assets/hymns/WithoutHim-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "24",
    title: "Blue Danube Waltz",
    category: "popular",
    images: [
      require('../assets/hymns/BlueDanubeWaltz-0.jpg'),
      require('../assets/hymns/BlueDanubeWaltz-1.jpg'),
      // Add more images as needed
    ],
  },
  {
    id: "25",
    title: "I've Got Peace",
    category: "hymn",
    images: [
      require('../assets/hymns/IveGotPeace-0.jpg'),
      require('../assets/hymns/IveGotPeace-1.jpg'),

    ],
  },
  {
    id: "26",
    title: "My Favorite Things",
    category: "popular",
    images: [
      require('../assets/hymns/MyFavoriteThings-0.jpg'),
      require('../assets/hymns/MyFavoriteThings-1.jpg'),
      require('../assets/hymns/MyFavoriteThings-2.jpg'),

    ],
  },
  {
    id: "27",
    title: "Pop Goes The Weasel",
    category: "children",
    images: [
      require('../assets/hymns/PopGoesTheWeasel.jpg'),

    ],
  },
  {
    id: "28",
    title: "You Are My Sunshine",
    category: "popular",
    images: [
      require('../assets/hymns/YouAreMySunshine-0.jpg'),
      require('../assets/hymns/YouAreMySunshine-1.jpg'),

    ],
  },
  {
    id: "29",
    title: "Surely The Presence",
    category: "hymn",
    images: [
      require('../assets/hymns/SurelyThePresence-0.jpg'),
      require('../assets/hymns/SurelyThePresence-1.jpg'),

    ],
  },

];

export default songEntries;
