/**
 * Cart Model which is going to pull data from MongoDB
 * 
 */
var CartModel = {

  // As a temporary work around, I am mocking the data
  // In real-app this data would be coming from the Backend APIs.
  getData: function() {
    return  {
      items: [
        {
          image: "https://s.yimg.com/cd/resizer/2.0/FIT_TO_WIDTH-w540/6c558bcab86fe5ccec6190baaaeb9a54e607f349.jpg",
          title: "John Kerry: Dollar could suffer if U.S. walks away from Iran deal",
          description: "NEW YORK (Reuters) - If the United States walks away from the nuclear deal struck with Iran last month in Vienna and demands that its allies comply with U.S. sanctions, the dollar may soon cease to be the world’s reserve currency, the top U.S. diplomat said on Monday.",
          provider: "Reuters",
          date: "August 11, 2015"
        }
      ]
    };
  },
  setData: function() {
    
  }
};

module.exports = CartModel;
