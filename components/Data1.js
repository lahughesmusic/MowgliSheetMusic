const songEntries = [
  {
    id: "1",
    title: "Abide With Me",
    category: "hymn",
    path: [
      require('../assets/hymns/AbideWithMe.jpg')
    ],
  },
  {
    id: "2",
    title: "All Creatures Of Our God And King",
    category: "hymn",
    path: [
      require('../assets/hymns/AllCreaturesOfOurGodAndKing.jpg')
    ],
  },

  {
    id: "3",
    title: "All Glory Laud And Honor",
    category: "hymn",
    path: [
      require('../assets/hymns/AllGloryLaudAndHonor.jpg')
    ],
  },

  {
    id: "4",
    title: "All The Way My Savior Leads Me",
    category: "hymn",
    path: [
      require('../assets/hymns/AllTheWayMySaviorLeadsMe.jpg')
    ],
  },
  {
    id: "6",
    title: "Blessed Assurance",
    category: "hymn",
    path: [
      require('../assets/hymns/BlessedAssurance-0.jpg'),
      require('../assets/hymns/BlessedAssurance-1.jpg'),
    ],
  },
  {
    id: "7",
    title: "His Eye Is On The Sparrow",
    category: "hymn",
    path: [
      require('../assets/hymns/HisEyeIsOnTheSparrow-0.jpg'),
      require('../assets/hymns/HisEyeIsOnTheSparrow-1.jpg'),
    ],
  },

  {
    id: "8",
    title: "Holy Holy Holy",
    category: "hymn",
    path: [
      require('../assets/hymns/HolyHolyHoly-0.jpg'),
      require('../assets/hymns/HolyHolyHoly-1.jpg'),
    ],
  },
  {
    id: "9",
    title: "Jesus Loves Me",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusLovesMe-0.jpg'),
      require('../assets/hymns/JesusLovesMe-1.jpg'),
    ],
  },
  {
    id: "10",
    title: "Just As I Am",
    category: "hymn",
    path: [
      require('../assets/hymns/JustAsIAm.jpg'),
    ],
  },
  {
    id: "11",
    title: "Men And Children Everywhere",
    category: "hymn",
    path: [
      require('../assets/hymns/MenAndChildrenEverywhere.jpg'),
    ],
  },
  {
    id: "12",
    title: "Nearer My God To Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/NearerMyGodToThee-0.jpg'),
      require('../assets/hymns/NearerMyGodToThee-1.jpg'),
    ],
  },



  {
    id: "15",
    title: "We Thy People Praise Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/WeThyPeoplePraiseThee-0.jpg'),
      require('../assets/hymns/WeThyPeoplePraiseThee-1.jpg'),
    ],
  },
  {
    id: "16",
    title: "What A Friend We Have In Jesus (Second Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/WhatAFriendWeHaveInJesus-0.jpg'),
      require('../assets/hymns/WhatAFriendWeHaveInJesus-1.jpg'),
      require('../assets/hymns/WhatAFriendWeHaveInJesus-2.jpg'),
    ],
  },
  {
    id: "17",
    title: "When I Survey Thy Wondrous Cross (First Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/WhenIsurvey-0.jpg'),
      require('../assets/hymns/WhenIsurvey-1.jpg'),
    ],
  },
  {
    id: "18",
    title: "When I Survey Thy Wondrous Cross (Second Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/WhenISurveyTheWondrousCross-0.jpg'),
      require('../assets/hymns/WhenISurveyTheWondrousCross-1.jpg'),
    ],
  },
  {
    id: "19",
    title: "Without Him",
    category: "hymn",
    path: [
      require('../assets/hymns/WithoutHim-0.jpg'),
      require('../assets/hymns/WithoutHim-1.jpg'),
    ],
  },
  {
    id: "21",
    title: "I've Got Peace",
    category: "hymn",
    path: [
      require('../assets/hymns/IveGotPeace-0.jpg'),
      require('../assets/hymns/IveGotPeace-1.jpg'),

    ],
  },



  {
    id: "28",
    title: "My God How Wonderful You Are",
    category: "hymn",
    path: [
      require('../assets/hymns/MyGodHowWonderfulYouAre.jpg'),
    ],
  },
  {
    id: "29",
    title: "Praise To The Lord Almighty",
    category: "hymn",
    path: [
      require('../assets/hymns/PraiseToTheLordAlmighty.jpg'),
    ],
  },
  {
    id: "30",
    title: "To God Be The Glory",
    category: "hymn",
    path: [
      require('../assets/hymns/ToGodBeTheGlory-0.jpg'),
      require('../assets/hymns/ToGodBeTheGlory-1.jpg'),
    ],
  },
  

  {
    id: "32",
    title: "All People That on Earth Do Dwell",
    category: "hymn",
    path: [
      require('../assets/hymns/AllPeopleThatOnEarthDoDwell.jpg')
    ],
  },

  {
    id: "33",
    title: "All Things Bright And Beautiful",
    category: "hymn",
    path: [
      require('../assets/hymns/AllThingsBrightAndBeautiful-0.jpg'),
      require('../assets/hymns/AllThingsBrightAndBeautiful-1.jpg'),
    ],
  },
  {
    id: "34",
    title: "A Mighty Fortress Is Our God",
    category: "hymn",
    path: [
      require('../assets/hymns/AMightyFortressIsOurGod.jpg')

    ],
  },
  {
    id: "35",
    title: "Angels From The Realms of Glory",
    category: "hymn",
    path: [
      require('../assets/hymns/AngelsFromTheRealmsOfGlory.jpg')

    ],
  },
  {
    id: "36",
    title: "Angels We Have Heard On High",
    category: "hymn",
    path: [
      require('../assets/hymns/AngelsWeHaveHeardOnHigh-0.jpg'),
      require('../assets/hymns/AngelsWeHaveHeardOnHigh-1.jpg'),
      require('../assets/hymns/AngelsWeHaveHeardOnHigh-2.jpg'),

    ],
  },
  {
    id: "37",
    title: "Are You Washed In The Blood",
    category: "hymn",
    path: [
      require('../assets/hymns/AreYouWashedInTheBlood-0.jpg'),
      require('../assets/hymns/AreYouWashedInTheBlood-1.jpg')

    ],
  },
  {
    id: "38",
    title: "Arise Your Light Is Come",
    category: "hymn",
    path: [
      require('../assets/hymns/AriseYourLightIsCome.jpg')


    ],
  },
  {
    id: "39",
    title: "As With The Gladness Of Old",
    category: "hymn",
    path: [
      require('../assets/hymns/AsWithGladnessMenOfOld.jpg')


    ],
  },
  {
    id: "40",
    title: "At The Cross",
    category: "hymn",
    path: [
      require('../assets/hymns/AtTheCross.jpg')


    ],
  },
  {
    id: "41",
    title: "Away In A Manger",
    category: "hymn",
    path: [
      require('../assets/hymns/AwayInAManger-0.jpg'),
      require('../assets/hymns/AwayInAManger-1.jpg')


    ],
  },
  {
    id: "42",
    title: "Be Thou My Vision",
    category: "hymn",
    path: [
      require('../assets/hymns/BeThouMyVision-0.jpg'),
      require('../assets/hymns/BeThouMyVision-1.jpg')


    ],
  },
  {
    id: "43",
    title: "Blessed Be The God Of Israel",
    category: "hymn",
    path: [
      require('../assets/hymns/BlessedBeTheGodOfIsrael.jpg')
    ],
  },
  {
    id: "44",
    title: "Carols Sing",
    category: "hymn",
    path: [
      require('../assets/hymns/CarolsSing.jpg')
    ],
  },
  {
    id: "45",
    title: "Child In The Manger",
    category: "hymn",
    path: [
      require('../assets/hymns/ChildInTheManger-0.jpg'),
      require('../assets/hymns/ChildInTheManger-1.jpg')
    ],
  },
  {
    id: "46",
    title: "Children Of The Heavenly Father",
    category: "hymn",
    path: [
      require('../assets/hymns/ChildrenOfTheHeavenlyFather.jpg')
    ],
  },
  {
    id: "47",
    title: "Come Thou Fount",
    category: "hymn",
    path: [
      require('../assets/hymns/ComeThouFount-0.jpg'),
      require('../assets/hymns/ComeThouFount-1.jpg')
    ],
  },
  {
    id: "48",
    title: "Come Thou Long Expected Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/ComeThouLongExpectedJesus-0.jpg'),
      require('../assets/hymns/ComeThouLongExpectedJesus-1.jpg')
    ],
  },
  {
    id: "49",
    title: "Come Ye Disconsolate",
    category: "hymn",
    path: [
      require('../assets/hymns/ComeYeDisconsolate.jpg')

    ],
  },
  {
    id: "50",
    title: "Creator God Creating Still",
    category: "hymn",
    path: [
      require('../assets/hymns/CreatorGodCreatingStill.jpg')

    ],
  },
  {
    id: "51",
    title: "Day by Day",
    category: "hymn",
    path: [
      require('../assets/hymns/DayByDay-0.jpg'),
      require('../assets/hymns/DayByDay-1.jpg')

    ],
  },
  {
    id: "52",
    title: "Eternal Father Strong To Save",
    category: "hymn",
    path: [
      require('../assets/hymns/EternalFatherStrongToSave.jpg')


    ],
  },
  {
    id: "53",
    title: "For The Beauty Of The Earth",
    category: "hymn",
    path: [
      require('../assets/hymns/ForTheBeautyOfTheEarth-0.jpg'),
      require('../assets/hymns/ForTheBeautyOfTheEarth-1.jpg')
    ],
  },
  {
    id: "54",
    title: "From All That Dwell Below The Skies",
    category: "hymn",
    path: [
      require('../assets/hymns/FromAllThatDwellBelowTheSkies.jpg')
    ],
  },
  {
    id: "55",
    title: "Gentle Mary Laid Her Child",
    category: "hymn",
    path: [
      require('../assets/hymns/GentleMaryLaidHerChild.jpg')
    ],
  },
  {
    id: "56",
    title: "God Is So Good (First Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/GodIsSoGood1.jpg')
    ],
  },
  {
    id: "57",
    title: "God Is So Good (Second Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/GodIsSoGood2-0.jpg'),
      require('../assets/hymns/GodIsSoGood2-1.jpg'),
    ],
  },
  {
    id: "58",
    title: "God Moves In A Mysterious Way",
    category: "hymn",
    path: [
      require('../assets/hymns/GodMovesInAMysteriousWay.jpg')
    ],
  },
  {
    id: "59",
    title: "God Who Made The Earth",
    category: "hymn",
    path: [
      require('../assets/hymns/GodWhoMadeTheEarth-0.jpg'),
      require('../assets/hymns/GodWhoMadeTheEarth-1.jpg'),
    ],
  },
  {
    id: "60",
    title: "God Who Stretched The Spangled Heavens",
    category: "hymn",
    path: [
      require('../assets/hymns/GodWhoStretchedTheSpangledHeavens.jpg')
    ],
  },
  {
    id: "61",
    title: "God Will Take Care Of You",
    category: "hymn",
    path: [
      require('../assets/hymns/GodWillTakeCareOfYou-0.jpg'),
      require('../assets/hymns/GodWillTakeCareOfYou-1.jpg'),
    ],
  },
  {
    id: "62",
    title: "Good Christian Men Rejoice",
    category: "hymn",
    path: [
      require('../assets/hymns/GoodChristianMenRejoice.jpg')

    ],
  },
  {
    id: "63",
    title: "Go Tell It On The Mountain",
    category: "hymn",
    path: [
      require('../assets/hymns/GoTellItOnTheMountain-0.jpg'),
      require('../assets/hymns/GoTellItOnTheMountain-1.jpg')
    ],
  },

  {
    id: "65",
    title: "Hark The Herald Angels Sing",
    category: "hymn",
    path: [
      require('../assets/hymns/HarkTheHeraldAngelsSing-0.jpg'),
      require('../assets/hymns/HarkTheHeraldAngelsSing-1.jpg')
    ],
  },
  {
    id: "66",
    title: "Heavenly Host In Ceaseless Worship",
    category: "hymn",
    path: [
      require('../assets/hymns/HeavenlyHostInCeaselessWorship.jpg')
    ],
  },

  {
    id: "67",
    title: "He Is Able To Deliver Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/HeIsAbleToDeliverThee-0.jpg'),
      require('../assets/hymns/HeIsAbleToDeliverThee-1.jpg')
    ],
  },
  {
    id: "68",
    title: "He Is Born",
    category: "hymn",
    path: [
      require('../assets/hymns/HeIsBorn-0.jpg'),
      require('../assets/hymns/HeIsBorn-1.jpg')
    ],
  },
  {
    id: "69",
    title: "He Leadeth Me",
    category: "hymn",
    path: [
      require('../assets/hymns/HeLeadethMe.jpg')

    ],
  },

  {
    id: "70",
    title: "Holy God We Praise Thy Name",
    category: "hymn",
    path: [
      require('../assets/hymns/HolyGodWePraiseThyName.jpg')
    ],
  },
  {
    id: "71",
    title: "Holy Is The Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/HolyIsTheLord-0.jpg'),
      require('../assets/hymns/HolyIsTheLord-1.jpg')
    ],
  },
  {
    id: "72",
    title: "Hosanna Loud Hosanna",
    category: "hymn",
    path: [
      require('../assets/hymns/HosannaLoudHosanna.jpg')
    ],
  },
  {
    id: "73",
    title: "How Great Our God's Majestic Name",
    category: "hymn",
    path: [
      require('../assets/hymns/HowGreatOurGodsMajesticName-0.jpg'),
      require('../assets/hymns/HowGreatOurGodsMajesticName-1.jpg')
    ],
  },
  {
    id: "74",
    title: "How Great Thou Art",
    category: "hymn",
    path: [
      require('../assets/hymns/HowGreatThouArt-0.jpg'),
      require('../assets/hymns/HowGreatThouArt-1.jpg'),
      require('../assets/hymns/HowGreatThouArt-2.jpg')
    ],
  },
  {
    id: "75",
    title: "I Heard The Bells On Christmas Day",
    category: "hymn",
    path: [
      require('../assets/hymns/IHeardTheBellsOnChristmasDay.jpg')
    ],
  },
 
  {
    id: "77",
    title: "I'll Praise My Maker",
    category: "hymn",
    path: [
      require('../assets/hymns/IllPraiseMyMakjer.jpg')
    ],
  },
  {
    id: "78",
    title: "Immortal Invisible God Only Wise",
    category: "hymn",
    path: [
      require('../assets/hymns/ImmortalInvisibleGodOnlyWise.jpg')
    ],
  },
  {
    id: "79",
    title: "Infant Holy Infant Lowly",
    category: "hymn",
    path: [
      require('../assets/hymns/InfantHolyInfantLowly.jpg')
    ],
  },

  {
    id: "82",
    title: "I Sing The Mighty Power Of God",
    category: "hymn",
    path: [
      require('../assets/hymns/ISingTheMightyPowerOfGod-0.jpg'),
      require('../assets/hymns/ISingTheMightyPowerOfGod-1.jpg')
    ],
  },
  {
    id: "838",
    title: "It Came Upon The Midnight Clear",
    category: "hymn",
    path: [
      require('../assets/hymns/ItCameUponTheMidnightClear-0.jpg'),
      require('../assets/hymns/ItCameUponTheMidnightClear-1.jpg')
    ],
  },

  {
    id: "84",
    title: "Jesus Paid It All",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusPaidItAll-0.jpg'),
      require('../assets/hymns/JesusPaidItAll-1.jpg')

    ],
  },
  {
    id: "85",
    title: "Jesus Thy Boundless Love To Me",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusThyBoundlessLoveToMe.jpg')
    ],
  },
  {
    id: "86",
    title: "Joy To The World",
    category: "hymn",
    path: [
      require('../assets/hymns/JoyToTheWorld-0.jpg'),
      require('../assets/hymns/JoyToTheWorld-1.jpg'),
      require('../assets/hymns/JoyToTheWorld-2.jpg')
    ],
  },

  {
    id: "87",
    title: "Just When I Need Him The Most",
    category: "hymn",
    path: [
      require('../assets/hymns/JustWhenINeedHimMost.jpg')
    ],
  },
  {
    id: "88",
    title: "Let All The World In Every Corner Sing",
    category: "hymn",
    path: [
      require('../assets/hymns/LetAllTheWorldInEveryCornerSing.jpg')
    ],
  },
  {
    id: "89",
    title: "Lift Up Your Hands",
    category: "hymn",
    path: [
      require('../assets/hymns/LiftUpYHourHands.jpg')
    ],
  },
  {
    id: "90",
    title: "Like A River Glorious",
    category: "hymn",
    path: [
      require('../assets/hymns/LikeARiverGlorious-0.jpg'),
      require('../assets/hymns/LikeARiverGlorious-1.jpg')
    ],
  },
  {
    id: "91",
    title: "Lo How A Rose E'er Blooming",
    category: "hymn",
    path: [
      require('../assets/hymns/LoHowARoseEerBlooming.jpg')

    ],
  },
  {
    id: "92",
    title: "Many An Great O God",
    category: "hymn",
    path: [
      require('../assets/hymns/ManyAndGreatOGod-0.jpg'),
      require('../assets/hymns/ManyAndGreatOGod-1.jpg')

    ],
  },

  {
    id: "93",
    title: "Morning Has Broken",
    category: "hymn",
    path: [
      require('../assets/hymns/MorningHasBroken-0.jpg'),
      require('../assets/hymns/MorningHasBroken-1.jpg')
    ],
  },

  {
    id: "94",
    title: "My Lord Is With Me All The Time",
    category: "hymn",
    path: [
      require('../assets/hymns/MyLordIsWithMeAllTheTime-0.jpg'),
      require('../assets/hymns/MyLordIsWithMeAllTheTime-1.jpg')
    ],
  },
  {
    id: "95",
    title: "My Shepherd Will Supply My Need",
    category: "hymn",
    path: [
      require('../assets/hymns/MyShepherdWillSupplyMyNeed-0.jpg'),
      require('../assets/hymns/MyShepherdWillSupplyMyNeed-1.jpg'),
      require('../assets/hymns/MyShepherdWillSupplyMyNeed-2.jpg')
    ],
  },

  {
    id: "96",
    title: "Nothing But The Blood",
    category: "hymn",
    path: [
      require('../assets/hymns/NothingButTheBlood.jpg')

    ],
  },
  {
    id: "97",
    title: "O Come All Ye Faithful",
    category: "hymn",
    path: [
      require('../assets/hymns/OComeAllYeFaithful-0.jpg'),
      require('../assets/hymns/OComeAllYeFaithful-1.jpg')
    ],
  },
  {
    id: "98",
    title: "O Come O Come Emmanuel",
    category: "hymn",
    path: [
      require('../assets/hymns/OComeOComeEmmanuel-0.jpg'),
      require('../assets/hymns/OComeOComeEmmanuel-1.jpg')
    ],
  },
  {
    id: "99",
    title: "Our God Our Help In Ages Past",
    category: "hymn",
    path: [
      require('../assets/hymns/OGodOurHelpInAgesPast.jpg')
    ],
  },
  {
    id: "100",
    title: "O Come Little Children",
    category: "hymn",
    path: [
      require('../assets/hymns/OhComeLittleChildren-0.jpg'),
      require('../assets/hymns/OhComeLittleChildren-1.jpg')
    ],
  },
  {
    id: "101",
    title: "O Little Town Of Bethlehem",
    category: "hymn",
    path: [
      require('../assets/hymns/OLittleTownOfBethlehem-0.jpg'),
      require('../assets/hymns/OLittleTownOfBethlehem-1.jpg')
    ],
  },
  {
    id: "102",
    title: "O My Soul Bless God The Father",
    category: "hymn",
    path: [
      require('../assets/hymns/OMySoulBlessGodTheFather.jpg')

    ],
  },

  {
    id: "104",
    title: "Oh Sing A Song Of Bethlehem",
    category: "hymn",
    path: [
      require('../assets/hymns/OSingASongOfBethlehem.jpg')

    ],
  },
  {
    id: "105",
    title: "O Sing A Song To God",
    category: "hymn",
    path: [
      require('../assets/hymns/OSingASongToGod-0.jpg'),
      require('../assets/hymns/OSingASongToGod-1.jpg'),
      require('../assets/hymns/OSingASongToGod-2.jpg')
    ],
  },
  {
    id: "106",
    title: "Our Savior Cries Were Heard",
    category: "hymn",
    path: [
      require('../assets/hymns/OurSaviorsInfantCriesWereHeard-0.jpg'),
      require('../assets/hymns/OurSaviorsInfantCriesWereHeard-1.jpg')
    ],
  },
  {
    id: "107",
    title: "Power In The Blood",
    category: "hymn",
    path: [
      require('../assets/hymns/PowerInTheBlood.jpg')
    ],
  },
  {
    id: "108",
    title: "Praise Him All Ye Little Children",
    category: "hymn",
    path: [
      require('../assets/hymns/PraiseHimAllYeLittleChildren.jpg')
    ],
  },
  {

    id: "109",
    title: "Praise The Lord Who Reigns Above",
    category: "hymn",
    path: [
      require('../assets/hymns/PraiseTheLordWhoReignsAbove.jpg')
    ],
  },
  {
    id: "110",
    title: "Praise The Lord ye Heavens Adore Him",
    category: "hymn",
    path: [
      require('../assets/hymns/PraiseTheLordYeHeavensAdoreHIm-0.jpg'),
      require('../assets/hymns/PraiseTheLordYeHeavensAdoreHIm-1.jpg')
    ],
  },

  {
    id: "111",
    title: "Redeemed",
    category: "hymn",
    path: [
      require('../assets/hymns/Redeemed-0.jpg'),
      require('../assets/hymns/Redeemed-1.jpg')
    ],
  },
  {

    id: "112",
    title: "Rejoice Ye Pure In Heart",
    category: "hymn",
    path: [
      require('../assets/hymns/RejoiceYePureInHeart.jpg')
    ],
  },
  {
    id: "113",
    title: "Savior Like A Shepherd Lead Us",
    category: "hymn",
    path: [
      require('../assets/hymns/SaviousLikeAShepherdLeadUs-0.jpg'),
      require('../assets/hymns/SaviousLikeAShepherdLeadUs-1.jpg')
    ],
  },

  {
    id: "114",
    title: "Silent Night",
    category: "hymn",
    path: [
      require('../assets/hymns/SilentNight-0.jpg'),
      require('../assets/hymns/SilentNight-1.jpg')
    ],
  },
  {

    id: "115",
    title: "See The Morning Sun Ascending",
    category: "hymn",
    path: [
      require('../assets/hymns/SeeTheMorningSunAscending.jpg')
    ],
  },
  {

    id: "116",
    title: "See To Us A Child Is Born",
    category: "hymn",
    path: [
      require('../assets/hymns/SeeToUsAChildIsBorn.jpg')
    ],
  },
  {

    id: "117",
    title: "Sing We Now Of Christmas",
    category: "hymn",
    path: [
      require('../assets/hymns/SingWeNowOfChristmas.jpg')
    ],
  },
  {

    id: "118",
    title: "Stand Up And Bless The Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/StandUpAndBlessTheLord.jpg')
    ],
  },

  {

    id: "119",
    title: "Tell Me The Story Of Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/TellMeTheStoryOfJesus.jpg')
    ],
  },
  {
    id: "120",
    title: "The First Noel",
    category: "hymn",
    path: [
      require('../assets/hymns/TheFirstNoel-0.jpg'),
      require('../assets/hymns/TheFirstNoel-1.jpg')
    ],
  },

  {

    id: "122",
    title: "The God Of Abraham Praise",
    category: "hymn",
    path: [
      require('../assets/hymns/TheGodOfAbrahamPraise.jpg')
    ],
  },
  {

    id: "123",
    title: "Thou Didst Leave Thy Throne",
    category: "hymn",
    path: [
      require('../assets/hymns/ThouDidstLeaveThyThrone.jpg')
    ],
  },

  {
    id: "124",
    title: "We Praise You O God Our Redeemer",
    category: "hymn",
    path: [
      require('../assets/hymns/WePraiseYouOGodOurRedeemer-0.jpg'),
      require('../assets/hymns/WePraiseYouOGodOurRedeemer-1.jpg')
    ],
  },
  {

    id: "125",
    title: "We Three Kings",
    category: "hymn",
    path: [
      require('../assets/hymns/WeThreeKings.jpg')
    ],
  },
  {
    id: "126",
    title: "Why People Praise Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/WeThyPeoplePraiseThee-0.jpg'),
      require('../assets/hymns/WeThyPeoplePraiseThee-1.jpg')
    ],
  },

  {

    id: "127",
    title: "What Child Is This",
    category: "hymn",
    path: [
      require('../assets/hymns/WhatChildIsThis.jpg')
    ],
  },

  {
    id: "128",
    title: "Who Is He In Yonder Stall",
    category: "hymn",
    path: [
      require('../assets/hymns/WhoIsHeInYonderStall-0.jpg'),
      require('../assets/hymns/WhoIsHeInYonderStall-1.jpg')
    ],
  },

  {
    id: "129",
    title: "Worship The Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/WorshipTheLord-0.jpg'),
      require('../assets/hymns/WorshipTheLord-1.jpg')
    ],
  },
  {
    id: "130",
    title: "Alas And did My Savior Bleed",
    category: "hymn",
    path: [
      require('../assets/hymns/AlasAndDidMySaviorBleed.jpg')

    ],
  },
  {
    id: "131",
    title: "And Can It Be",
    category: "hymn",
    path: [
      require('../assets/hymns/AndCanItBe-0.jpg'),
      require('../assets/hymns/AndCanItBe-1.jpg')
    ],
  },
  {
    id: "131",
    title: "Blessed Redeemer",
    category: "hymn",
    path: [
      require('../assets/hymns/BlessedRedeemer-0.jpg'),
      require('../assets/hymns/BlessedRedeemer-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Christmas has Its Cradle",
    category: "hymn",
    path: [
      require('../assets/hymns/ChristmasHasItsCradle.jpg')
    ],
  },
  {
    id: "129",
    title: "Go To Dark Gethsemane",
    category: "hymn",
    path: [
      require('../assets/hymns/GoToDarkGethsemane.jpg')
    ],
  },
  {
    id: "129",
    title: "Oh How He Loves You And Me",
    category: "hymn",
    path: [
      require('../assets/hymns/OhHowHeLovesYouAndMe-0.jpg'),
      require('../assets/hymns/OhHowHeLovesYouAndMe-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Old Rugged Cross",
    category: "hymn",
    path: [
      require('../assets/hymns/OldRuggedCross-0.jpg'),
      require('../assets/hymns/OldRuggedCross-1.jpg')
    ],
  },
  {
    id: "129",
    title: "The Way Of The Cross Leads Home",
    category: "hymn",
    path: [
      require('../assets/hymns/TheWayOfTheCrossLeadsHome-0.jpg'),
      require('../assets/hymns/TheWayOfTheCrossLeadsHome-1.jpg')
    ],
  },
  {
    id: "130",
    title: "Tis Finished! The Messiah Dies",
    category: "hymn",
    path: [
      require('../assets/hymns/TisFinishedTheMessiahDies.jpg')
    ],
  },
  {
    id: "129",
    title: "There Is A Fountain",
    category: "hymn",
    path: [
      require('../assets/hymns/WhatWondrousLoveIsThis-0.jpg'),
      require('../assets/hymns/WhatWondrousLoveIsThis-1.jpg')
    ],
  },
  {
    id: "131",
    title: "Alleluia Alleluia Give Thanks",
    category: "hymn",
    path: [
      require('../assets/hymns/AlleluiaAlleluiaGiveThanks.jpg')
    ],
  },
  {
    id: "131",
    title: "Christ Is Alive",
    category: "hymn",
    path: [
      require('../assets/hymns/ChristIsAlive.jpg')
    ],
  },
  {
    id: "129",
    title: "Christ Is Risen",
    category: "hymn",
    path: [
      require('../assets/hymns/ChristIsRisen-0.jpg'),
      require('../assets/hymns/ChristIsRisen-1.jpg')
    ],
  },
  {
    id: "131",
    title: "Christ The Lord Is Risen Today",
    category: "hymn",
    path: [
      require('../assets/hymns/ChristTheLordIsRisenToday.jpg')
    ],
  },
  {
    id: "129",
    title: "Crown Him With Many Crowns",
    category: "hymn",
    path: [
      require('../assets/hymns/CrownHimWithManyCrowns-0.jpg'),
      require('../assets/hymns/CrownHimWithManyCrowns-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Fairest Lord Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/FairestLordJesus-0.jpg'),
      require('../assets/hymns/FairestLordJesus-1.jpg')
    ],
  },
  {
    id: "131",
    title: "Hail The Day That Sees Him Rise",
    category: "hymn",
    path: [
      require('../assets/hymns/HailTheDayThatSeesHimRise.jpg')
    ],
  },
  {
    id: "131",
    title: "He Arose",
    category: "hymn",
    path: [
      require('../assets/hymns/HeArose.jpg')
    ],
  },
  {
    id: "131",
    title: "He Is Risen! He Is Risen!",
    category: "hymn",
    path: [
      require('../assets/hymns/HeIsRisenHeIsRisen.jpg')
    ],
  },
  {
    id: "131",
    title: "I Know A Fount",
    category: "hymn",
    path: [
      require('../assets/hymns/IKnowAFount.jpg')
    ],
  },
  {
    id: "131",
    title: "Low In The Grave He Lay",
    category: "hymn",
    path: [
      require('../assets/hymns/LowInTheGraveHeLay.jpg')
    ],
  },
  {
    id: "131",
    title: "Man Of Sorrows What A Name",
    category: "hymn",
    path: [
      require('../assets/hymns/ManOfSorrowsWhatAName.jpg')
    ],
  },
  {
    id: "131",
    title: "Sound Aloud The Trumpet",
    category: "hymn",
    path: [
      require('../assets/hymns/SoundAloudTheTrumpet.jpg')
    ],
  },
  {
    id: "131",
    title: "The Day Of Resurrection",
    category: "hymn",
    path: [
      require('../assets/hymns/TheDayOfRessurection.jpg')
    ],
  },
  {
    id: "131",
    title: "The First Lord's Day",
    category: "hymn",
    path: [
      require('../assets/hymns/TheFirstLordsDay.jpg')
    ],
  },
  {
    id: "131",
    title: "The Strife Is O'er",
    category: "hymn",
    path: [
      require('../assets/hymns/TheStrifeIsOer.jpg')
    ],
  },
  {
    id: "129",
    title: "Thine Is The Glory",
    category: "hymn",
    path: [
      require('../assets/hymns/ThineIsTheGlory-0.jpg'),
      require('../assets/hymns/ThineIsTheGlory-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Were You There",
    category: "hymn",
    path: [
      require('../assets/hymns/WereYouThere-0.jpg'),
      require('../assets/hymns/WereYouThere-1.jpg')
    ],
  },
  {
    id: "131",
    title: "We Welcome Glad Easter",
    category: "hymn",
    path: [
      require('../assets/hymns/WeWelcomeGladEaster.jpg')
    ],
  },

  
  {
    id: "129",
    title: "Jesus Lover Of My Soul",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusLoverOfMySoul-0.jpg'),
      require('../assets/hymns/JesusLoverOfMySoul-1.jpg')
    ],
  },
  {
    id: "131",
    title: "Jesus My Friend Is Great",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusMyFriendIsGreat.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesus What A Friend For Sinners",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusWhatAFriendForSinners-0.jpg'),
      require('../assets/hymns/JesusWhatAFriendForSinners-1.jpg'),
      require('../assets/hymns/JesusWhatAFriendForSinners-2.jpg')
    ],
  },
  {
    id: "129",
    title: "No, Not One",
    category: "hymn",
    path: [
      require('../assets/hymns/NoNotOne-0.jpg'),
      require('../assets/hymns/NoNotOne-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Soon And Very Soon",
    category: "hymn",
    path: [
      require('../assets/hymns/SoonAndVerySoon-0.jpg'),
      require('../assets/hymns/SoonAndVerySoon-1.jpg')
    ],
  },

  {
    id: "131",
    title: "The Great Physician",
    category: "hymn",
    path: [
      require('../assets/hymns/TheGreatPhysician.jpg')
    ],
  },
  {
    id: "129",
    title: "Lily Of The Valley",
    category: "hymn",
    path: [
      require('../assets/hymns/TheLilyOfTheValley-0.jpg'),
      require('../assets/hymns/TheLilyOfTheValley-1.jpg')
    ],
  },

  {
    id: "129",
    title: "What A Friend We Have In Jesus (First Verison)",
    category: "hymn",
    path: [
      require('../assets/hymns/WhatAFriend-0.jpg'),
      require('../assets/hymns/WhatAFriend-1.jpg'),
      require('../assets/hymns/WhatAFriend-2.jpg')
    ],
  },
  {
    id: "129",
    title: "All Hail The Power Of Jesus Name (Second Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/AllHailJesusNamev2.jpg')
    ],
  },
  {
    id: "129",
    title: "All Hail The Power Of Jesus Name (First Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/AllHailThePowerOfJesusName.jpg')
    ],
  },
  {
    id: "129",
    title: "All Hail The Power Of Jesus Name (Third Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/AllHailThePowerOfJesusNamev3-0.jpg'),
      require('../assets/hymns/AllHailThePowerOfJesusNamev3-1.jpg')
    ],
  },
  {
    id: "129",
    title: "At The Name Of Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/AtTheNameOfJesus.jpg')
    ],
  },
  {
    id: "129",
    title: "Behold The Lamb",
    category: "hymn",
    path: [
      require('../assets/hymns/BeholdTheLamb-0.jpg'),
      require('../assets/hymns/BeholdTheLamb-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Blessed Be Thy Name",
    category: "hymn",
    path: [
      require('../assets/hymns/BlessedBeThyName-0.jpg'),
      require('../assets/hymns/BlessedBeThyName-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Bless The Wonderful Name",
    category: "hymn",
    path: [
      require('../assets/hymns/BlessThatWonderfullName.jpg')
    ],
  },
  {
    id: "129",
    title: "Break Theou Bread Of Life",
    category: "hymn",
    path: [
      require('../assets/hymns/BreakThouBreadOfLife.jpg')
    ],
  },
  {
    id: "129",
    title: "Breath On Me",
    category: "hymn",
    path: [
      require('../assets/hymns/BreatheOnMe-0.jpg'),
      require('../assets/hymns/BreatheOnMe-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Breath On Me Breath Of God",
    category: "hymn",
    path: [
      require('../assets/hymns/BreatheOnMeBreathOfGod.jpg')
    ],
  },
  {
    id: "129",
    title: "Come Christians Join To Sing",
    category: "hymn",
    path: [
      require('../assets/hymns/ComeChristiansJoinToSing.jpg')
    ],
  },
  {
    id: "129",
    title: "Come Holy Spirit",
    category: "hymn",
    path: [
      require('../assets/hymns/ComeHolySpirit.jpg')
    ],
  },
  {
    id: "129",
    title: "Come Thou Almighty King",
    category: "hymn",
    path: [
      require('../assets/hymns/ComeThouAlmightyKing-0.jpg'),
      require('../assets/hymns/ComeThouAlmightyKing-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Dear Lord And Father Of Mankind",
    category: "hymn",
    path: [
      require('../assets/hymns/DearLordAndFatherOfMankind.jpg')
    ],
  },
  {
    id: "129",
    title: "Dear Lord And Father Of Mankind",
    category: "hymn",
    path: [
      require('../assets/hymns/DearLordAndFatherOfMankindv2.jpg')
    ],
  },
  {
    id: "129",
    title: "Father I Adore You",
    category: "hymn",
    path: [
      require('../assets/hymns/FatherIAdoreYou.jpg')
    ],
  },
  {
    id: "129",
    title: "Freely Freely",
    category: "hymn",
    path: [
      require('../assets/hymns/FreelyFreely.jpg')
    ],
  },
  {
    id: "129",
    title: "Glorify Thy Name",
    category: "hymn",
    path: [
      require('../assets/hymns/GlorifyThyName.jpg')
    ],
  },
  {
    id: "129",
    title: "Glorious Is Thy Name",
    category: "hymn",
    path: [
      require('../assets/hymns/GloriousIsThyName-0.jpg'),
      require('../assets/hymns/GloriousIsThyName-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Glory Be To The Father",
    category: "hymn",
    path: [
      require('../assets/hymns/GloryBeToTheFather.jpg')
    ],
  },
  {
    id: "129",
    title: "God Our Father We Adore Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/GodOurFatherWeAdoreThee-0.jpg'),
      require('../assets/hymns/GodOurFatherWeAdoreThee-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Great Redeemer We Adore Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/GreatRedeemerWeAdoreThee.jpg')
    ],
  },
  {
    id: "129",
    title: "His Name Is Wonderful",
    category: "hymn",
    path: [
      require('../assets/hymns/HisNameIsWonderful-0.jpg'),
      require('../assets/hymns/HisNameIsWonderful-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Holy Bible Book Divine",
    category: "hymn",
    path: [
      require('../assets/hymns/HolyBibleBookDivine.jpg')
    ],
  },
  {
    id: "129",
    title: "Holy Bible Book Of Love",
    category: "hymn",
    path: [
      require('../assets/hymns/HolyBibleBookOfLove.jpg')
    ],
  },
  {
    id: "129",
    title: "Holy Ground",
    category: "hymn",
    path: [
      require('../assets/hymns/HolyGround-0.jpg'),
      require('../assets/hymns/HolyGround-1.jpg')
    ],
  },
  {
    id: "129",
    title: "How I Love You",
    category: "hymn",
    path: [
      require('../assets/hymns/HowILoveYou.jpg')
    ],
  },
  {
    id: "129",
    title: "I Lay My Sins On Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/ILayMySinsOnJesus-0.jpg'),
      require('../assets/hymns/ILayMySinsOnJesus-1.jpg')
    ],
  },
  {
    id: "129",
    title: "I Love Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/ILoveThee-0.jpg'),
      require('../assets/hymns/ILoveThee-1.jpg')
    ],
  },
  {
    id: "129",
    title: "I Love You Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/ILoveYouLord.jpg')
    ],
  },
  {
    id: "129",
    title: "I Surrender All",
    category: "hymn",
    path: [
      require('../assets/hymns/ISurrenderAll-0.jpg'),
      require('../assets/hymns/ISurrenderAll-1.jpg')
    ],
  },
  {
    id: "129",
    title: "I've Come To Tell'",
    category: "hymn",
    path: [
      require('../assets/hymns/IveComeToTell-0.jpg'),
      require('../assets/hymns/IveComeToTell-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesus Is The Sweetest Name I Know",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusIsTheSweetestNameIKnow.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesus Keep Me Near The Cross",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusKeepMeNearTheCross-0.jpg'),
      require('../assets/hymns/JesusKeepMeNearTheCross-1.jpg'),
      require('../assets/hymns/JesusKeepMeNearTheCross-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesus The Very Thought Of Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusTheVeryThoughtOfThee-0.jpg'),
      require('../assets/hymns/JesusTheVeryThoughtOfThee-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Lift Him Up",
    category: "hymn",
    path: [
      require('../assets/hymns/LIftHimUp-0.jpg'),
      require('../assets/hymns/LIftHimUp-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Lo He Comes With Clouds Descending",
    category: "hymn",
    path: [
      require('../assets/hymns/LoHeComesWithCloudsDecending-0.jpg'),
      require('../assets/hymns/LoHeComesWithCloudsDecending-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Love Divine All Loves Excelling",
    category: "hymn",
    path: [
      require('../assets/hymns/LoveDivineAllLovesExcelling-0.jpg'),
      require('../assets/hymns/LoveDivineAllLovesExcelling-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Majestic Sweetness Sits Enthroned",
    category: "hymn",
    path: [
      require('../assets/hymns/MajesticSweetnessSitsEnthroned-0.jpg'),
      require('../assets/hymns/MajesticSweetnessSitsEnthroned-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Majesty",
    category: "hymn",
    path: [
      require('../assets/hymns/Majesty-0.jpg'),
      require('../assets/hymns/Majesty-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Make Me A Captive Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/MakeMeACaptiveLord.jpg')
    ],
  },
  {
    id: "129",
    title: "Name Of All Majesty",
    category: "hymn",
    path: [
      require('../assets/hymns/NameOfAllMajesty.jpg')
    ],
  },
  {
    id: "129",
    title: "O For A Thousand Tongues To Sing",
    category: "hymn",
    path: [
      require('../assets/hymns/OForAThousandTonguesToSingv2.jpg')
    ],
  },
  {
    id: "129",
    title: "O God Almighty Father",
    category: "hymn",
    path: [
      require('../assets/hymns/OGodAlmightyFather.jpg')
    ],
  },
  {
    id: "129",
    title: "Oh How Good Is Christ The Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/OhHowGoodIsChristTheLord.jpg')
    ],
  },
  {
    id: "129",
    title: "Oh How I Love Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/OhHowILoveJesus-0.jpg'),
      require('../assets/hymns/OhHowILoveJesus-1.jpg')
    ],
  },
  {
    id: "129",
    title: "O Jesus I Have Promised",
    category: "hymn",
    path: [
      require('../assets/hymns/OJesusIHavePromised.jpg')
    ],
  },
  {
    id: "129",
    title: "O Master Let Me Walk With Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/OMasterLetMeWalkWithThee-0.jpg'),
      require('../assets/hymns/OMasterLetMeWalkWithThee-1.jpg')
    ],
  },
  {
    id: "129",
    title: "O Praise The Gracious Power",
    category: "hymn",
    path: [
      require('../assets/hymns/OPraiseTheGraciousPower.jpg')
    ],
  },
  {
    id: "129",
    title: "Praise God From Whom All Blessings Flow",
    category: "hymn",
    path: [
      require('../assets/hymns/PraiseGodFromWhomAllBlessingsFlow.jpg')
    ],
  },
  {
    id: "129",
    title: "Praise Him! Praise Him!",
    category: "hymn",
    path: [
      require('../assets/hymns/PraiseHimPraiseHim.jpg')
    ],
  },
  {
    id: "129",
    title: "Praise The Father",
    category: "hymn",
    path: [
      require('../assets/hymns/PraiseTheFather.jpg')
    ],
  },
  {
    id: "129",
    title: "Praise The Lord King Of Glory",
    category: "hymn",
    path: [
      require('../assets/hymns/PraiseTheLordKingOfGlory.jpg')
    ],
  },
  {
    id: "129",
    title: "Rejoice The Lord Is King",
    category: "hymn",
    path: [
      require('../assets/hymns/RejoiceTheLordIsKing.jpg')
    ],
  },
  {
    id: "129",
    title: "Sing Hallelujah To The Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/SingHallelujahToTheLord-0.jpg'),
      require('../assets/hymns/SingHallelujahToTheLord-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Songs Of Praise The Angels Sang",
    category: "hymn",
    path: [
      require('../assets/hymns/SongsOfPraiseTheAngelsSang.jpg')

    ],
  },
  {
    id: "129",
    title: "Speak To My Heart",
    category: "hymn",
    path: [
      require('../assets/hymns/SpeakToMyHeart-0.jpg'),
      require('../assets/hymns/SpeakToMyHeart-1.jpg'),
      require('../assets/hymns/SpeakToMyHeart-2.jpg')
    ],
  },
  {
    id: "129",
    title: "Spirit Now Live In Me",
    category: "hymn",
    path: [
      require('../assets/hymns/SpiritNowLiveInMe.jpg')

    ],
  },

  {
    id: "129",
    title: "Sweet Sweet Spirit",
    category: "hymn",
    path: [
      require('../assets/hymns/SweetSweetSpirit-0.jpg'),
      require('../assets/hymns/SweetSweetSpirit-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Take My Life And Let It Be Consecrated",
    category: "hymn",
    path: [
      require('../assets/hymns/TakeMyLifeandLetItBeConsecrated.jpg')

    ],
  },

  {
    id: "129",
    title: "The Word Of God Is Alive",
    category: "hymn",
    path: [
      require('../assets/hymns/TheWordOfGodIsAlive.jpg')

    ],
  },
  {
    id: "129",
    title: "Tis The Church Triumphant Singing",
    category: "hymn",
    path: [
      require('../assets/hymns/TisTheChurchTriumphantSinging-0.jpg'),
      require('../assets/hymns/TisTheChurchTriumphantSinging-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Tis The Church Triumphant Singing",
    category: "hymn",
    path: [
      require('../assets/hymns/TisTheChurchTriumphantSingingv2-0.jpg'),
      require('../assets/hymns/TisTheChurchTriumphantSingingv2-1.jpg')

    ],
  },
  {
    id: "129",
    title: "We Will Glorify",
    category: "hymn",
    path: [
      require('../assets/hymns/WeWillGlorify.jpg')

    ],
  },
  {
    id: "129",
    title: "Tis The Church Triumphant Singing",
    category: "hymn",
    path: [
      require('../assets/hymns/WhatIfItWereToday-0.jpg'),
      require('../assets/hymns/WhatIfItWereToday-1.jpg'),
      require('../assets/hymns/WhatIfItWereToday-2.jpg'),
      require('../assets/hymns/WhatIfItWereToday-3.jpg')

    ],
  },
  {
    id: "129",
    title: "When Morning Gilds The Skies",
    category: "hymn",
    path: [
      require('../assets/hymns/WhenMorningGildsTheSkies.jpg')

    ],
  },
  {
    id: "129",
    title: "Wonderful Words Of Life",
    category: "hymn",
    path: [
      require('../assets/hymns/WonderfulWordsOfLife-0.jpg'),
      require('../assets/hymns/WonderfulWordsOfLife-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Word Of God Across The Ages",
    category: "hymn",
    path: [
      require('../assets/hymns/WordOfGodAcrossTheAges.jpg')

    ],
  },
  {
    id: "129",
    title: "All On The Altar",
    category: "hymn",
    path: [
      require('../assets/hymns/AllOnTheAltar-0.jpg'),
      require('../assets/hymns/AllOnTheAltar-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Amazing Grace",
    category: "hymn",
    path: [
      require('../assets/hymns/AmazingGrace-0.jpg'),
      require('../assets/hymns/AmazingGrace-1.jpg'),
      require('../assets/hymns/AmazingGrace-2.jpg')

    ],
  },
  {
    id: "129",
    title: "Beneath The Cross Of Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/BeneathTheCrossOfJesus.jpg')

    ],
  },
  {
    id: "129",
    title: "Come Let Us Reason",
    category: "hymn",
    path: [
      require('../assets/hymns/ComeLetUsReason-0.jpg'),
      require('../assets/hymns/ComeLetUsReason-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Come Ye Sinners Poor And Needy",
    category: "hymn",
    path: [
      require('../assets/hymns/ComeYeSinnersPoorAndNeedy-0.jpg'),
      require('../assets/hymns/ComeYeSinnersPoorAndNeedy-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Grace Greater Than Our Sin",
    category: "hymn",
    path: [
      require('../assets/hymns/GraceGreatThanOurSin-0.jpg'),
      require('../assets/hymns/GraceGreatThanOurSin-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Have Thou Own Way Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/HaveThineOwnWayLord-0.jpg'),
      require('../assets/hymns/HaveThineOwnWayLord-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Have You Been To Calvary",
    category: "hymn",
    path: [
      require('../assets/hymns/HaveYouBeenToCalvary-0.jpg'),
      require('../assets/hymns/HaveYouBeenToCalvary-1.jpg')

    ],
  },
  {
    id: "129",
    title: "I Am Thine O Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/IAmThineOLord-0.jpg'),
      require('../assets/hymns/IAmThineOLord-1.jpg')

    ],
  },
  {
    id: "129",
    title: "I Have Decided",
    category: "hymn",
    path: [
      require('../assets/hymns/IHaveDecided-0.jpg'),
      require('../assets/hymns/IHaveDecided-1.jpg')

    ],
  },
  {
    id: "129",
    title: "I Hear Thy Welcome Voice",
    category: "hymn",
    path: [
      require('../assets/hymns/IHearThyWelcomeVoice-0.jpg'),
      require('../assets/hymns/IHearThyWelcomeVoice-1.jpg')

    ],
  },
  {
    id: "129",
    title: "I Saw The Cross Of Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/ISawTheCrossOfJesus-0.jpg'),
      require('../assets/hymns/ISawTheCrossOfJesus-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Jesus Calls Me",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusCallsMe.jpg')

    ],
  },
  {
    id: "129",
    title: "Jesus Calls Us O'er The Tumult",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusCallsUsOerTheTumult.jpg')

    ],
  },
  {
    id: "129",
    title: "Jesus Calls You Now",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusCallsYouNow.jpg')

    ],
  },
  {
    id: "129",
    title: "Jesus Tenderly Calling",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusIsTenderlyCalling.jpg')

    ],
  },
  {
    id: "129",
    title: "Just As I Am",
    category: "hymn",
    path: [
      require('../assets/hymns/JustAsIAm-0.jpg'),
      require('../assets/hymns/JustAsIAm-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Let Jesus Come Into Your Heart",
    category: "hymn",
    path: [
      require('../assets/hymns/LetJesusComeIntoYourHeart.jpg')

    ],
  },
  {
    id: "129",
    title: "Lord I'm Coming Homne",
    category: "hymn",
    path: [
      require('../assets/hymns/LordImComingHome.jpg')

    ],
  },
  {
    id: "129",
    title: "My Lord I Did Not Choose You",
    category: "hymn",
    path: [
      require('../assets/hymns/MyLordIDidNotChooseYou-0.jpg'),
      require('../assets/hymns/MyLordIDidNotChooseYou-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Nail-Scarred Hand",
    category: "hymn",
    path: [
      require('../assets/hymns/NailScarredHand-0.jpg'),
      require('../assets/hymns/NailScarredHand-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Oh Love That Wilt Not Let Me Go",
    category: "hymn",
    path: [
      require('../assets/hymns/OhLoveThatWiltNotLetMeGo.jpg')

    ],
  },
  {
    id: "129",
    title: "Only Trust HIm",
    category: "hymn",
    path: [
      require('../assets/hymns/OnlyTrustHim-0.jpg'),
      require('../assets/hymns/OnlyTrustHim-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Out Of My Bondage Sorrow And Night",
    category: "hymn",
    path: [
      require('../assets/hymns/OutOfMyBondageSorrowAndNight.jpg')

    ],
  },
  {
    id: "129",
    title: "Pass Me Not O Gentle Savior",
    category: "hymn",
    path: [
      require('../assets/hymns/PassMeNotOGentleSavior-0.jpg'),
      require('../assets/hymns/PassMeNotOGentleSavior-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Softly And Tenderly",
    category: "hymn",
    path: [
      require('../assets/hymns/SoftlyAndTenderly.jpg')

    ],
  },
  {
    id: "129",
    title: "Take My Life And Let It Be Consecrated",
    category: "hymn",
    path: [
      require('../assets/hymns/TakeMyLifeAndLetItBeConsecrated-0.jpg'),
      require('../assets/hymns/TakeMyLifeAndLetItBeConsecrated-1.jpg')

    ],
  },
  {
    id: "129",
    title: "The Savior Is Waiting",
    category: "hymn",
    path: [
      require('../assets/hymns/TheSaviorIsWaiting-0.jpg'),
      require('../assets/hymns/TheSaviorIsWaiting-1.jpg'),
      require('../assets/hymns/TheSaviorIsWaiting-2.jpg')

    ],
  },

  {
    id: "129",
    title: "Where He Leads Me",
    category: "hymn",
    path: [
      require('../assets/hymns/WhereHeLeadsMe.jpg')

    ],
  },
  {
    id: "129",
    title: "Whiter Than The Snow",
    category: "hymn",
    path: [
      require('../assets/hymns/WhiterThanSnow.jpg')

    ],
  },
  {
    id: "129",
    title: "Whosoever Will",
    category: "hymn",
    path: [
      require('../assets/hymns/WhosoeverWill.jpg')

    ],
  },
  {
    id: "129",
    title: "Ye Must Be Born Again",
    category: "hymn",
    path: [
      require('../assets/hymns/YeMustBeBornAgain.jpg')

    ],
  },
  {
    id: "129",
    title: "Wherever He Leads I'll Go",
    category: "hymn",
    path: [
      require('../assets/hymns/WhereverHeLeadsIllGo-0.jpg'),
      require('../assets/hymns/WhereverHeLeadsIllGo-1.jpg'),
      require('../assets/hymns/WhereverHeLeadsIllGo-2.jpg')

    ],
  },
  {
    id: "129",
    title: "According To Thy Gracious Word",
    category: "hymn",
    path: [
      require('../assets/hymns/AccordingToThyGraciousWord.jpg')

    ],
  },
  {
    id: "129",
    title: "A Child Of The King",
    category: "hymn",
    path: [
      require('../assets/hymns/AChildOfTheKing.jpg')

    ],
  },
  {
    id: "129",
    title: "All Praise To You My God This Night",
    category: "hymn",
    path: [
      require('../assets/hymns/AllPraiseToYouMyGodThisNight.jpg')

    ],
  },
  {
    id: "129",
    title: "All Day Long",
    category: "hymn",
    path: [
      require('../assets/hymns/AllDayLong.jpg')

    ],
  },
  {
    id: "129",
    title: "All That Thrills My Soul",
    category: "hymn",
    path: [
      require('../assets/hymns/AllThatThrillsMySoul-0.jpg'),
      require('../assets/hymns/AllThatThrillsMySoul-1.jpg')

    ],
  },
  {
    id: "129",
    title: "All To Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/AllToThee.jpg')

    ],
  },
  {
    id: "129",
    title: "Almighty Father Hear Our Prayer",
    category: "hymn",
    path: [
      require('../assets/hymns/AlmightyFatherHearOurPrayer.jpg')

    ],
  },
  {
    id: "129",
    title: "America The Beautiful",
    category: "hymn",
    path: [
      require('../assets/hymns/AmericaTheBeautiful-0.jpg'),
      require('../assets/hymns/AmericaTheBeautiful-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Am I A Soldier Of The Cross",
    category: "hymn",
    path: [
      require('../assets/hymns/AmIASoldierOfTheCross.jpg')

    ],
  },
  {
    id: "129",
    title: "A Parting Hymn We Sing",
    category: "hymn",
    path: [
      require('../assets/hymns/APartingHymnWeSing-0.jpg'),
      require('../assets/hymns/APartingHymnWeSing-1.jpg')

    ],
  },
  {
    id: "129",
    title: "A Servant Of The Least",
    category: "hymn",
    path: [
      require('../assets/hymns/AServantOfTheLeast-0.jpg'),
      require('../assets/hymns/AServantOfTheLeast-1.jpg')

    ],
  },
  {
    id: "129",
    title: "As We Gathered At His Table",
    category: "hymn",
    path: [
      require('../assets/hymns/AsHeGatheredAtHisTable.jpg')

    ],
  },
  {
    id: "129",
    title: "Ask Ye What Great Thing I Know",
    category: "hymn",
    path: [
      require('../assets/hymns/AskYeWhatGreatThingIKnow-0.jpg'),
      require('../assets/hymns/AskYeWhatGreatThingIKnow-1.jpg')

    ],
  },
  {
    id: "129",
    title: "As Men Of Old Their First Fruits Brought",
    category: "hymn",
    path: [
      require('../assets/hymns/AsMenOfOldTheirFirstFruitsBrought.jpg')

    ],
  },
  {
    id: "129",
    title: "As We Gather Around The Table",
    category: "hymn",
    path: [
      require('../assets/hymns/AsWeGatherAroundTheTable.jpg')

    ],
  },
  {
    id: "129",
    title: "Baptized In The Water",
    category: "hymn",
    path: [
      require('../assets/hymns/BaptizedInWater-0.jpg'),
      require('../assets/hymns/BaptizedInWater-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Because He Lives",
    category: "hymn",
    path: [
      require('../assets/hymns/BecauseHeLives-0.jpg'),
      require('../assets/hymns/BecauseHeLives-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Believers All We Bear The Same Name",
    category: "hymn",
    path: [
      require('../assets/hymns/BelieversAllWeBearTheSameName.jpg')

    ],
  },
  {
    id: "129",
    title: "Strong In The Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/BeStrongInTheLord-0.jpg'),
      require('../assets/hymns/BeStrongInTheLord-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Blessed Assurance (Second Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/BlessedAssurancev2-0.jpg'),
      require('../assets/hymns/BlessedAssurancev2-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Blessed Be The Tie",
    category: "hymn",
    path: [
      require('../assets/hymns/BlessedBeTheTie-0.jpg'),
      require('../assets/hymns/BlessedBeTheTie-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Break Out Of Church Of God",
    category: "hymn",
    path: [
      require('../assets/hymns/BreakOutOfChurchOfGod.jpg')

    ],
  },
  {
    id: "129",
    title: "Built On The Rock",
    category: "hymn",
    path: [
      require('../assets/hymns/BuiltOnTheRock-0.jpg'),
      require('../assets/hymns/BuiltOnTheRock-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Burn Me In The Fire Of God",
    category: "hymn",
    path: [
      require('../assets/hymns/BurnInMeFireOfGod.jpg')

    ],
  },
  {
    id: "129",
    title: "Children Of God",
    category: "hymn",
    path: [
      require('../assets/hymns/ChildrenOfGod-0.jpg'),
      require('../assets/hymns/ChildrenOfGod-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Christian Hearts In Love United",
    category: "hymn",
    path: [
      require('../assets/hymns/ChristianHeartsInLoveUnited-0.jpg'),
      require('../assets/hymns/ChristianHeartsInLoveUnited-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Christ Is Made The Sure Foundation",
    category: "hymn",
    path: [
      require('../assets/hymns/ChristIsMadeTheSureFoundation.jpg')
    ],
  },
  {
    id: "129",
    title: "Christ Receiveth Sinful Men",
    category: "hymn",
    path: [
      require('../assets/hymns/ChristReceivethSinfulMen.jpg')
    ],
  },
  {
    id: "129",
    title: "Christ We Do All Adore Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/ChristWeDoAllAdoreThee.jpg')
    ],
  },
  {
    id: "129",
    title: "Come All Christians Be Committed",
    category: "hymn",
    path: [
      require('../assets/hymns/ComeAllChristiansBeCommitted-0.jpg'),
      require('../assets/hymns/ComeAllChristiansBeCommitted-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Come Holy Spirit Dove Divine",
    category: "hymn",
    path: [
      require('../assets/hymns/ComeHolySpiritDoveDivine.jpg')
    ],
  },
  {
    id: "129",
    title: "Come Thou Fount (Second Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/ComeThouFountv2.jpg')
    ],
  },
  {
    id: "129",
    title: "Come We That Love The Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/ComeWeThatLoveTheLord.jpg')
    ],
  },
  {
    id: "129",
    title: "Come Ye Thankful People Come",
    category: "hymn",
    path: [
      require('../assets/hymns/ComeYeThankfulPeopleCome.jpg')
    ],
  },
  {
    id: "129",
    title: "Count Your Blessings",
    category: "hymn",
    path: [
      require('../assets/hymns/CountYourBlessings.jpg')
    ],
  },
  {
    id: "129",
    title: "Creator Of The Universe",
    category: "hymn",
    path: [
      require('../assets/hymns/CreatorOfTheUniverse.jpg')
    ],
  },
  {
    id: "129",
    title: "Dear Lord Lead Me Day By Day",
    category: "hymn",
    path: [
      require('../assets/hymns/DearLordLeadMeDayByDay.jpg')
    ],
  },
  {
    id: "129",
    title: "Easter People Raise You Voices",
    category: "hymn",
    path: [
      require('../assets/hymns/EasterPeopleRaiseYourVoices.jpg')
    ],
  },
  {
    id: "129",
    title: "Face To Face With Christ My Savior",
    category: "hymn",
    path: [
      require('../assets/hymns/FaceToFaceWithChristMySavior.jpg')
    ],
  },
  {
    id: "129",
    title: "Faith Is The Victory",
    category: "hymn",
    path: [
      require('../assets/hymns/FaithIsTheVictory-0.jpg'),
      require('../assets/hymns/FaithIsTheVictory-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Faith Of Our Fathers",
    category: "hymn",
    path: [
      require('../assets/hymns/FaithOfOurFathers.jpg')
    ],
  },
  {
    id: "129",
    title: "Fill The Earth With Music",
    category: "hymn",
    path: [
      require('../assets/hymns/FillTheEarthWithMusic-0.jpg'),
      require('../assets/hymns/FillTheEarthWithMusic-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Footsteps Of Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/FootstepsOfJesus-0.jpg'),
      require('../assets/hymns/FootstepsOfJesus-1.jpg')
    ],
  },
  {
    id: "129",
    title: "For All The Saints",
    category: "hymn",
    path: [
      require('../assets/hymns/ForAllTheSaints.jpg')
    ],
  },
  {
    id: "129",
    title: "Forever with The Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/ForeverWithTheLord-0.jpg'),
      require('../assets/hymns/ForeverWithTheLord-1.jpg')
    ],
  },
  {
    id: "129",
    title: "For He Alone Is Worthy",
    category: "hymn",
    path: [
      require('../assets/hymns/ForHeAloneIsWorthy-0.jpg'),
      require('../assets/hymns/ForHeAloneIsWorthy-1.jpg')
    ],
  },
  {
    id: "129",
    title: "For The Fruit Of All Creation",
    category: "hymn",
    path: [
      require('../assets/hymns/ForTheFruitOfAllCreation.jpg')
    ],
  },
  {
    id: "129",
    title: "Free From The Law O Happy Condition",
    category: "hymn",
    path: [
      require('../assets/hymns/FreeFromTheLawOHappyCondition-0.jpg'),
      require('../assets/hymns/FreeFromTheLawOHappyCondition-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Glorious Things Of Thee Are Spoken",
    category: "hymn",
    path: [
      require('../assets/hymns/GloriousThingsOfTheeAreSpoken.jpg')
    ],
  },
  {
    id: "129",
    title: "God Give Us Christian Homes",
    category: "hymn",
    path: [
      require('../assets/hymns/GodGiveUsChristianHomes.jpg')
    ],
  },
  {
    id: "129",
    title: "God Of Grace And God Of Glory",
    category: "hymn",
    path: [
      require('../assets/hymns/GodOfGraceAndGodOfGlory.jpg')
    ],
  },
  {
    id: "129",
    title: "God Of Love O King Of Peace",
    category: "hymn",
    path: [
      require('../assets/hymns/GodOfLoveOKingOfPeace.jpg')
    ],
  },
  {
    id: "129",
    title: "God Of Our Fathers",
    category: "hymn",
    path: [
      require('../assets/hymns/GodOfOurFathers.jpg')
    ],
  },
  {
    id: "129",
    title: "God Our Father You Have Led Us",
    category: "hymn",
    path: [
      require('../assets/hymns/GodOurFatherYouHaveLedUs.jpg')
    ],
  },
  {
    id: "129",
    title: "God The Father Of Your People",
    category: "hymn",
    path: [
      require('../assets/hymns/GodTheFatherOfYourPeople-0.jpg'),
      require('../assets/hymns/GodTheFatherOfYourPeople-1.jpg')
    ],
  },
  {
    id: "129",
    title: "God Who's Purpose Is To Kindle",
    category: "hymn",
    path: [
      require('../assets/hymns/GodWhosePurposeIsToKindle.jpg')

    ],
  },
  {
    id: "129",
    title: "God Who Touches Earth With Beauty",
    category: "hymn",
    path: [
      require('../assets/hymns/GodWhoTouchesEarthWithBeauty.jpg')

    ],
  },
  {
    id: "129",
    title: "Go Forth And Tell O Church Of God",
    category: "hymn",
    path: [
      require('../assets/hymns/GoForthAndTellOChurchOfGod-0.jpg'),
      require('../assets/hymns/GoForthAndTellOChurchOfGod-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Grace Love And Peace Abide",
    category: "hymn",
    path: [
      require('../assets/hymns/GraceLoveAnPeaceAbide.jpg')

    ],
  },
  {
    id: "129",
    title: "Greater Is He That Is In Me",
    category: "hymn",
    path: [
      require('../assets/hymns/GreaterIsHeThatIsInMe.jpg')

    ],
  },
  {
    id: "129",
    title: "Happy The Home When God Is There",
    category: "hymn",
    path: [
      require('../assets/hymns/HappyTheHomeWhenGodIsThere.jpg')

    ],
  },
  {
    id: "129",
    title: "Hark The Voice Of Jesus Calling",
    category: "hymn",
    path: [
      require('../assets/hymns/HarkTheVoiceOfJesusCalling-0.jpg'),
      require('../assets/hymns/HarkTheVoiceOfJesusCalling-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Have Faith In God",
    category: "hymn",
    path: [
      require('../assets/hymns/HaveFaithInGod.jpg')

    ],
  },
  {
    id: "129",
    title: "Hear Our Prayer O Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/HearOurPrayerOLord.jpg')

    ],
  },
  {
    id: "129",
    title: "Heaven Came Down",
    category: "hymn",
    path: [
      require('../assets/hymns/HeavenCameDown-0.jpg'),
      require('../assets/hymns/HeavenCameDown-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Heavenly Sunlight",
    category: "hymn",
    path: [
      require('../assets/hymns/HeavenlySunlight-0.jpg'),
      require('../assets/hymns/HeavenlySunlight-1.jpg')

    ],
  },
  {
    id: "129",
    title: "He Included Me",
    category: "hymn",
    path: [
      require('../assets/hymns/HeIncludedMe-0.jpg'),
      require('../assets/hymns/HeIncludedMe-1.jpg')

    ],
  },
  {
    id: "129",
    title: "He's So Precious To Me",
    category: "hymn",
    path: [
      require('../assets/hymns/HeIsSoPreciousToMe-0.jpg'),
      require('../assets/hymns/HeIsSoPreciousToMe-1.jpg')

    ],
  },
  {
    id: "129",
    title: "He Keeps Me Singing",
    category: "hymn",
    path: [
      require('../assets/hymns/HeKeepsMeSinging-0.jpg'),
      require('../assets/hymns/HeKeepsMeSinging-1.jpg')

    ],
  },
  {
    id: "129",
    title: "He Lives",
    category: "hymn",
    path: [
      require('../assets/hymns/HeLives-0.jpg'),
      require('../assets/hymns/HeLives-1.jpg')

    ],
  },
  {
    id: "129",
    title: "Here At Your Table Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/HereAtYourTableLord.jpg')
    ],
  },
  {
    id: "129",
    title: "Higher Ground",
    category: "hymn",
    path: [
      require('../assets/hymns/HigherGround.jpg')
    ],
  },
  {
    id: "129",
    title: "Holy Is His Name",
    category: "hymn",
    path: [
      require('../assets/hymns/HolyIsHisName.jpg')
    ],
  },
  {
    id: "129",
    title: "Holy Is Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/HolyIsTheLord.jpg')
    ],
  },
  {
    id: "129",
    title: "Holy Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/HolyLord.jpg')
    ],
  },
  {
    id: "129",
    title: "How Firm A Foundation",
    category: "hymn",
    path: [
      require('../assets/hymns/HowFirmAFoundation-0.jpg'),
      require('../assets/hymns/HowFirmAFoundation-1.jpg')

    ],
  },
  {
    id: "129",
    title: "How Lovely Is Thy Dwelling Place",
    category: "hymn",
    path: [
      require('../assets/hymns/HowLovelyIsThyDwellingPlace.jpg')
    ],
  },
  {
    id: "129",
    title: "How Sweet The Name Of Jesus Sounds",
    category: "hymn",
    path: [
      require('../assets/hymns/HowSweetTheNameOfJesusSounds.jpg')
    ],
  },
  {
    id: "129",
    title: "I Come With Joy To Meet My Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/IComeWithJoyToMeetMyLord-0.jpg'),
      require('../assets/hymns/IComeWithJoyToMeetMyLord-1.jpg')

    ],
  },
  {
    id: "129",
    title: "I'd Rather Have Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/IdRatherHaveJesus-0.jpg'),
      require('../assets/hymns/IdRatherHaveJesus-1.jpg')

    ],
  },
  {
    id: "129",
    title: "I Gave My Life For Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/IGaveMyLifeForThee-0.jpg'),
      require('../assets/hymns/IGaveMyLifeForThee-1.jpg')

    ],
  },
  {
    id: "129",
    title: "I Have Come From The Darkness",
    category: "hymn",
    path: [
      require('../assets/hymns/IHaveComeFromTheDarkness.jpg')
    ],
  },
  {
    id: "129",
    title: "I Know Whom I Believe",
    category: "hymn",
    path: [
      require('../assets/hymns/IKnowWhomIBelieve-0.jpg'),
      require('../assets/hymns/IKnowWhomIBelieve-1.jpg')

    ],
  },
  {
    id: "129",
    title: "I Love Thy Kingdom Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/ILoveThyKingdomLord.jpg')
    ],
  },
  {
    id: "129",
    title: "I Love To Tell The Story",
    category: "hymn",
    path: [
      require('../assets/hymns/ILoveToTellTheStory-0.jpg'),
      require('../assets/hymns/ILoveToTellTheStory-1.jpg')

    ],
  },
  {
    id: "129",
    title: "I'm Just A Child",
    category: "hymn",
    path: [
      require('../assets/hymns/ImJustAChild.jpg')
    ],
  },
  {
    id: "129",
    title: "Immortal Love Forever Full",
    category: "hymn",
    path: [
      require('../assets/hymns/ImmortalLoveForeverFull.jpg')
    ],
  },
  {
    id: "129",
    title: "I Must Tell Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/IMustTellJesus-0.jpg'),
      require('../assets/hymns/IMustTellJesus-1.jpg')

    ],
  },
  {
    id: "129",
    title: "In Christ Our Liberty",
    category: "hymn",
    path: [
      require('../assets/hymns/InChristOurLiberty.jpg')
    ],
  },
  {
    id: "129",
    title: "In Christ There Is No East Or West",
    category: "hymn",
    path: [
      require('../assets/hymns/InChristThereIsNoEastOrWest.jpg')
    ],
  },
  {
    id: "129",
    title: "I Need Thee Every Hour",
    category: "hymn",
    path: [
      require('../assets/hymns/INeedTheeEveryHour-0.jpg'),
      require('../assets/hymns/INeedTheeEveryHour-1.jpg')

    ],
  },
  {
    id: "129",
    title: "In Heavenly Love Abiding",
    category: "hymn",
    path: [
      require('../assets/hymns/InHeavenlyLoveAbiding.jpg')
    ],
  },
  {
    id: "129",
    title: "In Loving Kindness Jesus Came",
    category: "hymn",
    path: [
      require('../assets/hymns/InLovingKindnessJesusCame.jpg')
    ],
  },
  {
    id: "129",
    title: "In The Cross Of Christ I Glory",
    category: "hymn",
    path: [
      require('../assets/hymns/InTheCrossOfChristIGlory-0.jpg'),
      require('../assets/hymns/InTheCrossOfChristIGlory-1.jpg')

    ],
  },
  {
    id: "129",
    title: "In The Family Of God",
    category: "hymn",
    path: [
      require('../assets/hymns/InTheFamilyOfGod-0.jpg'),
      require('../assets/hymns/InTheFamilyOfGod-1.jpg')

    ],
  },
  {
    id: "129",
    title: "In The Presence Of The Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/InThePresenceOfTheLord.jpg')
    ],
  },
  {
    id: "129",
    title: "In The Presence Of The Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/IStandAmazedInThePresence.jpg')
    ],
  },
  {
    id: "129",
    title: "It Is Well With My Soul",
    category: "hymn",
    path: [
      require('../assets/hymns/ItIsWellWithMySoul-0.jpg'),
      require('../assets/hymns/ItIsWellWithMySoul-1.jpg')

    ],
  },
  {
    id: "129",
    title: "I've Got Peace Like A River",
    category: "hymn",
    path: [
      require('../assets/hymns/IveGotPeaceLikeARiver-0.jpg'),
      require('../assets/hymns/IveGotPeaceLikeARiver-1.jpg')

    ],
  },
  {
    id: "129",
    title: "I Will Sing Of My Redeemer",
    category: "hymn",
    path: [
      require('../assets/hymns/IWillSingOfMyRedeemer-0.jpg'),
      require('../assets/hymns/IWillSingOfMyRedeemer-1.jpg')

    ],
  },
  {
    id: "129",
    title: "I Will Sing The Wondrous Story (First Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/IWillSingTheWondrousStory-0.jpg'),
      require('../assets/hymns/IWillSingTheWondrousStory-1.jpg')
    ],
  },
  {
    id: "129",
    title: "I Will Sing The Wondrous Story (Second Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/IWIllSingTheWondrousStoryv2.jpg')
    ],
  },
  {
    id: "129",
    title: "Jeruselum My Happy Home",
    category: "hymn",
    path: [
      require('../assets/hymns/JeruselumMyHappyHome-0.jpg'),
      require('../assets/hymns/JeruselumMyHappyHome-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Jeruselum The Golden",
    category: "hymn",
    path: [
      require('../assets/hymns/JeruselumTheGolden.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesu, Jesu, Fill Us With Your Love",
    category: "hymn",
    path: [
      require('../assets/hymns/JesuJesuFillUsWithYourLove-0.jpg'),
      require('../assets/hymns/JesuJesuFillUsWithYourLove-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesus At Your Holy Table",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusAtYourHolyTable-0.jpg'),
      require('../assets/hymns/JesusAtYourHolyTable-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesus Hands Were Kind Hands",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusHandsWereKindHands.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesus I My Cross Have Taken",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusIMyCrossHaveTaken-0.jpg'),
      require('../assets/hymns/JesusIMyCrossHaveTaken-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesus Is Lord Of All",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusIsLordOfAll.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesus Is Our Lord And King",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusIsOurLordAndKing-0.jpg'),
      require('../assets/hymns/JesusIsOurLordAndKing-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesus Is The Song",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusIsTheSong.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesus Loves Me",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusLovesMev2.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesus Loves The Little Children",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusLovesTheLittleChildren.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesus Our Lord And King",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusOurLordAndKing-0.jpg'),
      require('../assets/hymns/JesusOurLordAndKing-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesus Shall Reign",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusShallReign-0.jpg'),
      require('../assets/hymns/JesusShallReign-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Jesus Was A Loving Teacher",
    category: "hymn",
    path: [
      require('../assets/hymns/JesusWasALovingTeacher.jpg')
    ],
  },
  {
    id: "129",
    title: "Just A Closer Walk With Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/JustACloserWalkWithThee-0.jpg'),
      require('../assets/hymns/JustACloserWalkWithThee-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Lead Me To Calvary",
    category: "hymn",
    path: [
      require('../assets/hymns/LeadMeToClavary.jpg')
    ],
  },
  {
    id: "129",
    title: "Lead On O King Eternal",
    category: "hymn",
    path: [
      require('../assets/hymns/LeadOnOKingEternal.jpg')
    ],
  },
  {
    id: "129",
    title: "Lead Me To Some Soul Today",
    category: "hymn",
    path: [
      require('../assets/hymns/LeaMeToSomeSoulToday-0.jpg'),
      require('../assets/hymns/LeaMeToSomeSoulToday-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Let All Things Now Living",
    category: "hymn",
    path: [
      require('../assets/hymns/LetAllThingsNowLiving-0.jpg'),
      require('../assets/hymns/LetAllThingsNowLiving-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Let Others See Jesus In You",
    category: "hymn",
    path: [
      require('../assets/hymns/LetOthersSeeJesusInYou-0.jpg'),
      require('../assets/hymns/LetOthersSeeJesusInYou-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Lets Us Break Bread Together",
    category: "hymn",
    path: [
      require('../assets/hymns/LetUsBreakBreadTogether.jpg')
    ],
  },
  {
    id: "129",
    title: "Living Stones",
    category: "hymn",
    path: [
      require('../assets/hymns/LivingStones.jpg')
    ],
  },
  {
    id: "129",
    title: "Lord Be Glorified",
    category: "hymn",
    path: [
      require('../assets/hymns/LordBeGlorified.jpg')
    ],
  },
  {
    id: "129",
    title: "Lord For The Gift Of Children",
    category: "hymn",
    path: [
      require('../assets/hymns/LordForTheGiftOfChildren.jpg')
    ],
  },
  {
    id: "129",
    title: "Lord Here I Am",
    category: "hymn",
    path: [
      require('../assets/hymns/LordHereIAm.jpg')
    ],
  },
  {
    id: "129",
    title: "Lord I Want To Be A Christian",
    category: "hymn",
    path: [
      require('../assets/hymns/LordIWantToBeAChristian-0.jpg'),
      require('../assets/hymns/LordIWantToBeAChristian-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Lord Lay Some Soul Upon My Heart",
    category: "hymn",
    path: [
      require('../assets/hymns/LordLaySomeSoulUponMyHeart-0.jpg'),
      require('../assets/hymns/LordLaySomeSoulUponMyHeart-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Lord Make Our Homes",
    category: "hymn",
    path: [
      require('../assets/hymns/LordMakeOurHomes.jpg')
    ],
  },
  {
    id: "129",
    title: "Lord Send A Revival",
    category: "hymn",
    path: [
      require('../assets/hymns/LordSendARevival-0.jpg'),
      require('../assets/hymns/LordSendARevival-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Lord Speak To Me That I May Speak",
    category: "hymn",
    path: [
      require('../assets/hymns/LordSpeakToMeThatIMaySpeak.jpg')
    ],
  },
  {
    id: "129",
    title: "Lord Send A Revival",
    category: "hymn",
    path: [
      require('../assets/hymns/LordThyChurchOnEarthIsSeeking-0.jpg'),
      require('../assets/hymns/LordThyChurchOnEarthIsSeeking-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Lord Thy Church On Earth Is Seeking",
    category: "hymn",
    path: [
      require('../assets/hymns/LordThyChurchOnEarthIsSeeking-0.jpg'),
      require('../assets/hymns/LordThyChurchOnEarthIsSeeking-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Lord Who Across The Ages",
    category: "hymn",
    path: [
      require('../assets/hymns/LordWhoAcrossTheAges.jpg')
    ],
  },
  {
    id: "129",
    title: "Love Lifted Me",
    category: "hymn",
    path: [
      require('../assets/hymns/LoveLIftedMe-0.jpg'),
      require('../assets/hymns/LoveLIftedMe-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Make Me A Blessing",
    category: "hymn",
    path: [
      require('../assets/hymns/MakeMeABlessing-0.jpg'),
      require('../assets/hymns/MakeMeABlessing-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Make Room Within My Heart O God",
    category: "hymn",
    path: [
      require('../assets/hymns/MakeRoomWithinMyHeartOGod.jpg')
    ],
  },
  {
    id: "129",
    title: "Mine Eyes Have Seen The Glory (First Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/MineEyesHaveSeenTheGlory-0.jpg'),
      require('../assets/hymns/MineEyesHaveSeenTheGlory-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Mine Eyes Have Seen The Glory (Second Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/MineEyesHaveSeenTheGlory(AltVersion)-0.jpg'),
      require('../assets/hymns/MineEyesHaveSeenTheGlory(AltVersion)-1.jpg')
    ],
  },
  {
    id: "129",
    title: "Moment By Moment",
    category: "hymn",
    path: [
      require('../assets/hymns/MomentByMoment.jpg')
    ],
  },
  {
    id: "129",
    title: "More About Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/MoreAboutJesus-0.jpg'),
      require('../assets/hymns/MoreAboutJesus-1.jpg')
    ],
  },
  {
    id: "129",
    title: "More Than Love To Thee O Christ",
    category: "hymn",
    path: [
      require('../assets/hymns/MoreThanLoveToTheeOChrist.jpg')
    ],
  },
  {
    id: "129",
    title: "Must Jesus Bear The Cross Alone",
    category: "hymn",
    path: [
      require('../assets/hymns/MustJesusBearTheCrossAlone-0.jpg'),
      require('../assets/hymns/MustJesusBearTheCrossAlone-1.jpg')
    ],
  },
  {
    id: "129",
    title: "My Country Tis Of Thee (First Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/MyCountryTisOfThee.jpg')
    ],
  },
  {
    id: "129",
    title: "My Country Tis Of Thee (Second Version)",
    category: "hymn",
    path: [
      require('../assets/hymns/MyCountryTisOfThee(AltVersion)-0.jpg'),
      require('../assets/hymns/MyCountryTisOfThee(AltVersion)-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "My Faith Has Found A Resting Place",
    category: "hymn",
    path: [
      require('../assets/hymns/MyFaithHasFoundARestingPlace.jpg')
    ],
  },
  {
    id: "129",
    title: "My Faith Looks Up To Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/MyFaithLooksUpToThee-0.jpg'),
      require('../assets/hymns/MyFaithLooksUpToThee-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "My Savior First Of All",
    category: "hymn",
    path: [
      require('../assets/hymns/MySaviorFirstOfAll-0.jpg'),
      require('../assets/hymns/MySaviorFirstOfAll-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "My Singing Is A Prayer",
    category: "hymn",
    path: [
      require('../assets/hymns/MySingingIsAPrayer.jpg')
    ],
  },
  {
    id: "129",
    title: "Nearer My God To Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/NearerMyGodToTheev2-0.jpg'),
      require('../assets/hymns/NearerMyGodToTheev2-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Near To The Heart Of God",
    category: "hymn",
    path: [
      require('../assets/hymns/NearToTheHeartOfGod.jpg')
    ],
  },
  {
    id: "129",
    title: "Not What My Hands Have Done",
    category: "hymn",
    path: [
      require('../assets/hymns/NotWhatMyHandsHaveDone.jpg')
    ],
  },
  {
    id: "129",
    title: "Now I Belong To Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/NowIBelongToJesus-0.jpg'),
      require('../assets/hymns/NowIBelongToJesus-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Now Thank We All Our God",
    category: "hymn",
    path: [
      require('../assets/hymns/NowThankWeAllOurGod.jpg')
    ],
  },
  {
    id: "129",
    title: "O Christ Our Hope Our Heart's Desire",
    category: "hymn",
    path: [
      require('../assets/hymns/OChristOurHopeOurHeartsDesire-0.jpg'),
      require('../assets/hymns/OChristOurHopeOurHeartsDesire-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "O Day Of God Draw Nigh",
    category: "hymn",
    path: [
      require('../assets/hymns/ODayOfGodDrawNigh.jpg')
    ],
  },
  {
    id: "129",
    title: "Of All The Spirit's Gifts To Me",
    category: "hymn",
    path: [
      require('../assets/hymns/OfAllTheSpiritsGiftsToMe.jpg')
    ],
  },
  {
    id: "129",
    title: "O God Of Love Enable Me",
    category: "hymn",
    path: [
      require('../assets/hymns/OGodOfLoveEnableMe.jpg')
    ],
  },
  {
    id: "129",
    title: "O God To Those Who Here Profess",
    category: "hymn",
    path: [
      require('../assets/hymns/OGodToThoseWhoHereProfess.jpg')
    ],
  },
  {
    id: "129",
    title: "O God We Ask For Strength",
    category: "hymn",
    path: [
      require('../assets/hymns/OGodWeAskForStrength.jpg')
    ],
  },
  {
    id: "129",
    title: "O Happy Day That Fixed My Choice",
    category: "hymn",
    path: [
      require('../assets/hymns/OHappyDayThatFixedMyChoice-0.jpg'),
      require('../assets/hymns/OHappyDayThatFixedMyChoice-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "O Lord May Church And Home Combine",
    category: "hymn",
    path: [
      require('../assets/hymns/OLordMayChurchAndHomeCombine-0.jpg'),
      require('../assets/hymns/OLordMayChurchAndHomeCombine-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Once To Every Man And Nation",
    category: "hymn",
    path: [
      require('../assets/hymns/OnceToEveryManAndNation-0.jpg'),
      require('../assets/hymns/OnceToEveryManAndNation-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "One By One",
    category: "hymn",
    path: [
      require('../assets/hymns/OneByOne.jpg')
    ],
  },
  {
    id: "129",
    title: "On Jordan's Stormy Banks",
    category: "hymn",
    path: [
      require('../assets/hymns/OnJordansStormyBanks-0.jpg'),
      require('../assets/hymns/OnJordansStormyBanks-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Only Believe",
    category: "hymn",
    path: [
      require('../assets/hymns/OnlyBelieve.jpg')
    ],
  },
  {
    id: "129",
    title: "Onward Christian Soldiers",
    category: "hymn",
    path: [
      require('../assets/hymns/OnwardChristianSoldiers-0.jpg'),
      require('../assets/hymns/OnwardChristianSoldiers-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Open My Eyes That I May See",
    category: "hymn",
    path: [
      require('../assets/hymns/OpenMyEyesThatIMaySee.jpg')
    ],
  },
  {
    id: "129",
    title: "Open Our Eyes Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/OpenOurEyesLord.jpg')
    ],
  },
  {
    id: "129",
    title: "O Perfect Love",
    category: "hymn",
    path: [
      require('../assets/hymns/OPerfectLove-0.jpg'),
      require('../assets/hymns/OPerfectLove-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "O The Deep Deep Love Of Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/OTheDeepDeepLoveOfJesus-0.jpg'),
      require('../assets/hymns/OTheDeepDeepLoveOfJesus-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Our God Has Made Us One",
    category: "hymn",
    path: [
      require('../assets/hymns/OurGodHasMadeUsOne.jpg')
    ],
  },
  {
    id: "129",
    title: "O What A Wonder It Is",
    category: "hymn",
    path: [
      require('../assets/hymns/OWhatAWonderItIs-0.jpg'),
      require('../assets/hymns/OWhatAWonderItIs-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "O Zion Haste",
    category: "hymn",
    path: [
      require('../assets/hymns/OZionHaste.jpg')
    ],
  },
  {
    id: "129",
    title: "Praise And Thanksgiving",
    category: "hymn",
    path: [
      require('../assets/hymns/PraiseAndThanksgiving.jpg')
    ],
  },
  {
    id: "129",
    title: "Precious Lord Take My Hand",
    category: "hymn",
    path: [
      require('../assets/hymns/PreciousLordTakeMyHand.jpg')
    ],
  },
  {
    id: "129",
    title: "Purer In Heart O God",
    category: "hymn",
    path: [
      require('../assets/hymns/PurerInHeartOGod.jpg')
    ],
  },
  {
    id: "129",
    title: "Redeemed, How I Love To Proclaim It",
    category: "hymn",
    path: [
      require('../assets/hymns/RedeemedHowILoveToProclaimIt-0.jpg'),
      require('../assets/hymns/RedeemedHowILoveToProclaimIt-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Redeemed",
    category: "hymn",
    path: [
      require('../assets/hymns/Redeemedv2-0.jpg'),
      require('../assets/hymns/Redeemedv2-1.jpg'),
      require('../assets/hymns/Redeemedv2-2.jpg')
    ],
  },
  {
    id: "129",
    title: "Rejoice In The Lord Always",
    category: "hymn",
    path: [
      require('../assets/hymns/RejoiceInTheLordAlways-0.jpg'),
      require('../assets/hymns/RejoiceInTheLordAlways-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Rescue The Perishing",
    category: "hymn",
    path: [
      require('../assets/hymns/RescueThePerishing-0.jpg'),
      require('../assets/hymns/RescueThePerishing-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Revive Us Again",
    category: "hymn",
    path: [
      require('../assets/hymns/ReviveUsAgain.jpg')
    ],
  },
  {
    id: "129",
    title: "Ring The Bells Of Heaven",
    category: "hymn",
    path: [
      require('../assets/hymns/RingTheBellsOfHeaven.jpg')
    ],
  },
  {
    id: "129",
    title: "Rise Up O Men Of God",
    category: "hymn",
    path: [
      require('../assets/hymns/RiseUpOMenOfGod.jpg')
    ],
  },
  {
    id: "129",
    title: "Rock Of Ages",
    category: "hymn",
    path: [
      require('../assets/hymns/RockOfAges.jpg')
    ],
  },
  {
    id: "129",
    title: "Satisfied",
    category: "hymn",
    path: [
      require('../assets/hymns/Satisfied.jpg')
    ],
  },
  {
    id: "129",
    title: "Savior Teach Me Day By Day",
    category: "hymn",
    path: [
      require('../assets/hymns/SaviorTeachMeDayByDay.jpg')
    ],
  },
  {
    id: "129",
    title: "Send A Great Revival",
    category: "hymn",
    path: [
      require('../assets/hymns/SendAGreatRevival.jpg')
    ],
  },
  {
    id: "129",
    title: "Send Forth Your Word O God",
    category: "hymn",
    path: [
      require('../assets/hymns/SendForthYourWordOGod.jpg')
    ],
  },
  {
    id: "129",
    title: "Send Me O Lord Send Me",
    category: "hymn",
    path: [
      require('../assets/hymns/SendMeOLordSendMe.jpg')
    ],
  },
  {
    id: "129",
    title: "Send The Light",
    category: "hymn",
    path: [
      require('../assets/hymns/SendTheLight-0.jpg'),
      require('../assets/hymns/SendTheLight-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Serve The Lord With Gladness",
    category: "hymn",
    path: [
      require('../assets/hymns/ServeTheLordWithGladness-0.jpg'),
      require('../assets/hymns/ServeTheLordWithGladness-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Set My Soul Afire",
    category: "hymn",
    path: [
      require('../assets/hymns/SetMySoulAfire-0.jpg'),
      require('../assets/hymns/SetMySoulAfire-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Shall We Gather At The River",
    category: "hymn",
    path: [
      require('../assets/hymns/ShallWeGatherAtTheRiver-0.jpg'),
      require('../assets/hymns/ShallWeGatherAtTheRiver-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Since I Have Been Redeemed",
    category: "hymn",
    path: [
      require('../assets/hymns/SinceIHaveBeenRedeemed.jpg')
    ],
  },
  {
    id: "129",
    title: "Since Jesus Came Into My Heart",
    category: "hymn",
    path: [
      require('../assets/hymns/SinceJesusCameIntoMyHeart-0.jpg'),
      require('../assets/hymns/SinceJesusCameIntoMyHeart-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Sing To The Lord Of Harvest",
    category: "hymn",
    path: [
      require('../assets/hymns/SingToTheLordOfHarvest.jpg')
    ],
  },
  {
    id: "129",
    title: "Soldiers Of Christ In Truth Arrayed",
    category: "hymn",
    path: [
      require('../assets/hymns/SoldiersOfChristInTruthArrayed-0.jpg'),
      require('../assets/hymns/SoldiersOfChristInTruthArrayed-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Something For Thee",
    category: "hymn",
    path: [
      require('../assets/hymns/SomethingForThee.jpg')
    ],
  },
  {
    id: "129",
    title: "Stand Up For Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/StandUpForJesus-0.jpg'),
      require('../assets/hymns/StandUpForJesus-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Stir Your Church O God Our Father",
    category: "hymn",
    path: [
      require('../assets/hymns/StirYourChurchOGodOurFather.jpg')
    ],
  },
  {
    id: "129",
    title: "Sunlight",
    category: "hymn",
    path: [
      require('../assets/hymns/Sunlight.jpg')
    ],
  },
  {
    id: "129",
    title: "Surely Goodness And Mercy",
    category: "hymn",
    path: [
      require('../assets/hymns/SurelyGoodnessAndMercy-0.jpg'),
      require('../assets/hymns/SurelyGoodnessAndMercy-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Sweet Hour Of Prayer",
    category: "hymn",
    path: [
      require('../assets/hymns/SweetHourOfPrayer.jpg')
    ],
  },
  {
    id: "129",
    title: "Take The Name Of Jesus With You",
    category: "hymn",
    path: [
      require('../assets/hymns/TakeTheNameOfJesusWithYou-0.jpg'),
      require('../assets/hymns/TakeTheNameOfJesusWithYou-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Take Time To Be Holy",
    category: "hymn",
    path: [
      require('../assets/hymns/TakeTimeToBeHoly.jpg')
    ],
  },
  {
    id: "129",
    title: "Take Up Your Cross",
    category: "hymn",
    path: [
      require('../assets/hymns/TakeUpYourCross.jpg')
    ],
  },
  {
    id: "129",
    title: "Teach Me O Lord I Pray",
    category: "hymn",
    path: [
      require('../assets/hymns/TeachMeOLordIPray-0.jpg'),
      require('../assets/hymns/TeachMeOLordIPray-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Tell It Out With Gladness",
    category: "hymn",
    path: [
      require('../assets/hymns/TellItOutWithGladness.jpg')
    ],
  },
  {
    id: "129",
    title: "Tell It To Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/TellItToJesus-0.jpg'),
      require('../assets/hymns/TellItToJesus-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Tell The Good News",
    category: "hymn",
    path: [
      require('../assets/hymns/TellTheGoodNews.jpg')
    ],
  },
  {
    id: "129",
    title: "The Bond Of Love",
    category: "hymn",
    path: [
      require('../assets/hymns/TheBondOfLove-0.jpg'),
      require('../assets/hymns/TheBondOfLove-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "The Church Of Christ In Every Age",
    category: "hymn",
    path: [
      require('../assets/hymns/TheChurchOfChristInEveryAge.jpg')
    ],
  },
  {
    id: "129",
    title: "The Church's One Foundation",
    category: "hymn",
    path: [
      require('../assets/hymns/TheChurchsOneFoundation-0.jpg'),
      require('../assets/hymns/TheChurchsOneFoundation-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "The Family Of God",
    category: "hymn",
    path: [
      require('../assets/hymns/TheFamilyOfGod.jpg')
    ],
  },
  {
    id: "129",
    title: "The Family Of God",
    category: "hymn",
    path: [
      require('../assets/hymns/TheFamilyOfGod.jpg')
    ],
  },
  {
    id: "129",
    title: "The First Day Of The Week",
    category: "hymn",
    path: [
      require('../assets/hymns/TheFirstDayOfTheWeek.jpg')
    ],
  },
  {
    id: "129",
    title: "The Church's One Foundation",
    category: "hymn",
    path: [
      require('../assets/hymns/TheMasterHathCome-0.jpg'),
      require('../assets/hymns/TheMasterHathCome-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "There Is A Savior",
    category: "hymn",
    path: [
      require('../assets/hymns/ThereIsASavior.jpg')
    ],
  },
  {
    id: "129",
    title: "There's A Glad New Song",
    category: "hymn",
    path: [
      require('../assets/hymns/TheresAGladNewSong-0.jpg'),
      require('../assets/hymns/TheresAGladNewSong-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "There's A Land That Is Fairer Than Day",
    category: "hymn",
    path: [
      require('../assets/hymns/TheresALandThatIsFairerThanDay-0.jpg'),
      require('../assets/hymns/TheresALandThatIsFairerThanDay-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "There's A Spirit In The Air",
    category: "hymn",
    path: [
      require('../assets/hymns/TheresASpiritInTheAir.jpg')
    ],
  },
  {
    id: "129",
    title: "There Shall Be Showers Of Blessing",
    category: "hymn",
    path: [
      require('../assets/hymns/ThereShallBeShowersOfBlessing.jpg')
    ],
  },
  {
    id: "129",
    title: "The Servant Song",
    category: "hymn",
    path: [
      require('../assets/hymns/TheServantSong.jpg')
    ],
  },
  {
    id: "129",
    title: "The Solid Rock",
    category: "hymn",
    path: [
      require('../assets/hymns/TheSolidRock.jpg')
    ],
  },
  {
    id: "129",
    title: "The Whole World Is Singing",
    category: "hymn",
    path: [
      require('../assets/hymns/TheWholeWorldIsSinging.jpg')
    ],
  },
 
  {
    id: "129",
    title: "This Is The Day",
    category: "hymn",
    path: [
      require('../assets/hymns/ThisIsTheDay.jpg')
    ],
  },
  {
    id: "129",
    title: "This Is The Joy That I Have",
    category: "hymn",
    path: [
      require('../assets/hymns/ThisIsTheJoyThatIHave.jpg')
    ],
  },
  {
    id: "129",
    title: "This Is The Threefold Truth",
    category: "hymn",
    path: [
      require('../assets/hymns/ThisIsTheThreefoldTruth.jpg')
    ],
  },
  {
    id: "129",
    title: "Though I May Speak With Bravest Fire",
    category: "hymn",
    path: [
      require('../assets/hymns/ThoughIMaySpeakWithBravestFire-0.jpg'),
      require('../assets/hymns/ThoughIMaySpeakWithBravestFire-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Tis' So Sweet To Trust In Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/TisSoSweetToTrustInJesus.jpg')
    ],
  },
  {
    id: "129",
    title: "To The Work",
    category: "hymn",
    path: [
      require('../assets/hymns/ToTheWork-0.jpg'),
      require('../assets/hymns/ToTheWork-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "To Worship Work And Finish",
    category: "hymn",
    path: [
      require('../assets/hymns/ToWorshipWorkAndFinish.jpg')
    ],
  },
  {
    id: "129",
    title: "Trust And Obey",
    category: "hymn",
    path: [
      require('../assets/hymns/TrustAndObey-0.jpg'),
      require('../assets/hymns/TrustAndObey-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Trusting Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/TrustingJesus.jpg')
    ],
  },
  {
    id: "129",
    title: "Trust Try And Prove Me",
    category: "hymn",
    path: [
      require('../assets/hymns/TrustTryAndProveMe-0.jpg'),
      require('../assets/hymns/TrustTryAndProveMe-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Tune Your Hearts That All May Hear",
    category: "hymn",
    path: [
      require('../assets/hymns/TuneYourHeartsThatAllMayHear.jpg')
    ],
  },
  {
    id: "129",
    title: "Victory In Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/VictoryInJesus-0.jpg'),
      require('../assets/hymns/VictoryInJesus-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "We Are Called To Be God's People",
    category: "hymn",
    path: [
      require('../assets/hymns/WeAreCalledToBeGodsPeople.jpg')
    ],
  },
  {
    id: "129",
    title: "We Are Climbing Jacob's Ladder",
    category: "hymn",
    path: [
      require('../assets/hymns/WeAreClimbingJacobsLadder-0.jpg'),
      require('../assets/hymns/WeAreClimbingJacobsLadder-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "We Are God's People",
    category: "hymn",
    path: [
      require('../assets/hymns/WeAreGodsPeople.jpg')
    ],
  },
  {
    id: "129",
    title: "We Gather Together",
    category: "hymn",
    path: [
      require('../assets/hymns/WeGatherTogether.jpg')
    ],
  },
  {
    id: "129",
    title: "We Give Thee But Thine Own",
    category: "hymn",
    path: [
      require('../assets/hymns/WeGiveTheeButThineOwn.jpg')
    ],
  },
  {
    id: "129",
    title: "We Have Come Into His House",
    category: "hymn",
    path: [
      require('../assets/hymns/WeHaveComeIntoHisHouse-0.jpg'),
      require('../assets/hymns/WeHaveComeIntoHisHouse-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "We Have Heard The Joyful Sound",
    category: "hymn",
    path: [
      require('../assets/hymns/WeHaveHeardTheJoyfulSound-0.jpg'),
      require('../assets/hymns/WeHaveHeardTheJoyfulSound-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "We Have Heard The Joyful Sound",
    category: "hymn",
    path: [
      require('../assets/hymns/WeHaveHeardTheJoyfulSoundv2.jpg')
    ],
  },
  {
    id: "129",
    title: "We'll Work Till Jesus Comes",
    category: "hymn",
    path: [
      require('../assets/hymns/WellWorkTillJesusComes.jpg')
    ],
  },
  {
    id: "129",
    title: "We Meet Within This Holy Place",
    category: "hymn",
    path: [
      require('../assets/hymns/WeMeetWithinThisHolyPlace.jpg')
    ],
  },
  {
    id: "129",
    title: "We Praise You With Our Minds O Lord",
    category: "hymn",
    path: [
      require('../assets/hymns/WePraiseYouWithOurMindsOLord.jpg')
    ],
  },
  {
    id: "129",
    title: "We're Marching To Zion",
    category: "hymn",
    path: [
      require('../assets/hymns/WereMarchingToZion-0.jpg'),
      require('../assets/hymns/WereMarchingToZion-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "We Stand United In The Truth",
    category: "hymn",
    path: [
      require('../assets/hymns/WeStandUnitedInTheTruth-0.jpg'),
      require('../assets/hymns/WeStandUnitedInTheTruth-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "We Utter Our Cry",
    category: "hymn",
    path: [
      require('../assets/hymns/WeUtterOurCry.jpg')
    ],
  },
  {
    id: "129",
    title: "We've A Story To Tell",
    category: "hymn",
    path: [
      require('../assets/hymns/WeveAStoryToTell.jpg')
    ],
  },
  {
    id: "129",
    title: "We Worship Round This Table",
    category: "hymn",
    path: [
      require('../assets/hymns/WeWorshipRoundThisTable-0.jpg'),
      require('../assets/hymns/WeWorshipRoundThisTable-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "What Can I Give Him",
    category: "hymn",
    path: [
      require('../assets/hymns/WhatCanIGiveHim.jpg')
    ],
  },
  {
    id: "129",
    title: "When I Pray",
    category: "hymn",
    path: [
      require('../assets/hymns/WhenIPray.jpg')
    ],
  },
  {
    id: "129",
    title: "When The Church Of Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/WhenTheChurchOfJesus.jpg')
    ],
  },
  {
    id: "129",
    title: "When The Morning Comes",
    category: "hymn",
    path: [
      require('../assets/hymns/WhenTheMorningComes-0.jpg'),
      require('../assets/hymns/WhenTheMorningComes-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "When The Roll Is Called Up Yonder",
    category: "hymn",
    path: [
      require('../assets/hymns/WhenTheRollIsCalledUpYonder-0.jpg'),
      require('../assets/hymns/WhenTheRollIsCalledUpYonder-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "When We All Get To Heaven",
    category: "hymn",
    path: [
      require('../assets/hymns/WhenWeAllGetToHeaven.jpg')
    ],
  },
  {
    id: "129",
    title: "Whososever Meaneth Me",
    category: "hymn",
    path: [
      require('../assets/hymns/WhososeverMeanethMe.jpg')
    ],
  },
  {
    id: "129",
    title: "Why Do I Sing About Jesus",
    category: "hymn",
    path: [
      require('../assets/hymns/WhyDoISingAboutJesus-0.jpg'),
      require('../assets/hymns/WhyDoISingAboutJesus-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Would You Bless Our Homes And Families",
    category: "hymn",
    path: [
      require('../assets/hymns/WouldYouBlessOurHomesAndFamilies.jpg')
    ],
  },
  {
    id: "129",
    title: "Ye Servants Of God",
    category: "hymn",
    path: [
      require('../assets/hymns/YeServantsOfGod-0.jpg'),
      require('../assets/hymns/YeServantsOfGod-1.jpg'),
    ],
  },
  {
    id: "129",
    title: "Your Love O God Has Called Us Here",
    category: "hymn",
    path: [
      require('../assets/hymns/YourLoveOGodHasCalledUsHere.jpg')
    ],
  },
  {
    id: "129",
    title: "Ye Servants Of God",
    category: "hymn",
    path: [
      require('../assets/hymns/YourSupperLordBeforeUsSpread-0.jpg'),
      require('../assets/hymns/YourSupperLordBeforeUsSpread-1.jpg'),
    ],
  },
];

export default songEntries;




