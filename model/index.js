/**
 * Cart Model which is going to pull data from MongoDB
 * 
 */
var CartModel = {

  // As a temporary work around, I am mocking the data
  // In real-app this data would be coming from the Backend APIs.
  getData: function() {
    return  {
      newsItems: [
        {
          image: "https://s.yimg.com/ny/api/res/1.2/BgBW4WL8d_9SbpZhwHgqwQ--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/https://s.yimg.com/ny/api/res/1.2/7OGTMjfaa9prNB77IlRaLg--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTI4MDtoPTg0OQ--/https://s.yimg.com/cd/resizer/2.0/FIT_TO_WIDTH-w1280/72fb548c50e5b6ab87ed9ed95f498f76ece9f1e5.jpg",
          title: "Obama rediscovers audacity",
          description: "When future historians look back, Obama’s recent boldness on Iran and other issues may force a reevaluation of his presidency. (Photo: Jim Lo Scalzo/EPA). It seems to me that at this late stage, Obama has finally gotten back to what some of us thought his improbable presidency was going to be about in the first place: relegating the past to the past and forcing us to confront a more modern reality",
          provider: "Reuters",
          date: "August 11, 2015",
          rSide: [
            {
              rImage: "https://s.yimg.com/ny/api/res/1.2/e09hLknfYSBTeP.OXFmVOw--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/https://s.yimg.com/ny/api/res/1.2/fbTDjUPKF98f5EKxLE5oqA--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTI4MDtoPTg4NA--/https://s.yimg.com/cd/resizer/2.0/FIT_TO_WIDTH-w1280/d5c2c85e234e5678c38801430be17f5628cfd693.jpg",
              rTitle: "What to Read Next",
              rDescription: "John Kasich keeps it real, maybe too real"
            },
            {
              rImage: "https://s.yimg.com/ny/api/res/1.2/eADvPYkrfjcNVJmWU3Sp2g--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/https://s.yimg.com/ny/api/res/1.2/XzDOcy.2jvXI9s9WpUuGMw--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTI4MDtoPTg1Mw--/https://s.yimg.com/cd/resizer/2.0/FIT_TO_WIDTH-w1280/133b40d221eae9b441f07497fd5b5f6b6f273bf0.jpg",
              rTitle: "What to Read Next",
              rDescription: "The myth of Trump’s angry legions"
            }
          ]

        },
        {
          image: "https://s.yimg.com/ny/api/res/1.2/1e4.FZJnjxMpcTycNnfdoQ--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/https://s.yimg.com/ny/api/res/1.2/LMGu67i5paa1Ic3.TURV8Q--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9MTI4MDtoPTk1Mw--/https://s.yimg.com/cd/resizer/2.0/FIT_TO_WIDTH-w1280/6507c0a3bd7fafbb09f6c229fe8be4c4d3dddb21.jpg",
          title: "Whether or not Biden runs, Clinton has a problem",
          description: "Even to those who dismiss him, Vice President Joe Biden is as real and authentic as they come. (Photo: Dennis Van Tine/STAR MAX/IPx via Getty Images). I spent a few hours this week, in my service to all of you, trying to determine how serious Joe Biden might be about running for president. Here what I can now report: I have no clue, and I don’t think anyone else does, either.",
          provider: "Reuters",
          date: "August 11, 2015",
          rSide: [
            {
              rImage: "https://s.yimg.com/cd/resizer/2.0/FIT_TO_WIDTH-w540/2472f5932016286bb2ccd239326b404d56127a98.jpg",
              rTitle: "What to Read Next",
              rDescription: "Unlocking Democracy: Inside the Most Insecure Voting Machines in America"
            }
          ]
        },
        {
          image: "https://s.yimg.com/cd/resizer/2.0/FIT_TO_WIDTH-w540/6c558bcab86fe5ccec6190baaaeb9a54e607f349.jpg",
          title: "John Kerry: Dollar could suffer if U.S. walks away from Iran deal",
          description: "NEW YORK (Reuters) - If the United States walks away from the nuclear deal struck with Iran last month in Vienna and demands that its allies comply with U.S. sanctions, the dollar may soon cease to be the world’s reserve currency, the top U.S. diplomat said on Monday.",
          provider: "Reuters",
          date: "August 11, 2015",
          rSide: []
        }
      ]
    };
  },
  setData: function() {
    
  }
};

module.exports = CartModel;
