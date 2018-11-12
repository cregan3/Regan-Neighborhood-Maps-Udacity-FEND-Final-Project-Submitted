import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import MapApp from './Map.js'
import App from './App.js'
//import './style.css';

// This function will loop through the markers array and display them all.

class AppBase extends Component {

  constructor(props) {
      super(props);
      this.state = {
          'locationLIs': '',
          'alllocations': [
            {
                'location_name': 'Om Indian',
                'latitude': 40.7757472,
                'longitude': -73.9556981,
                'description': 'Indian Food',
                'specialtiesDeals': "Amazing Lamb Vindaloo make sure to ask for it spicy.  You'll cry from the heat but love the flavor.  Their takeaway deal of $15 for an entree, apetizer, basmatti rice, and naan is enough for two people." ,
            },
            {
                'location_name': 'Flex Muscles',
                'latitude': 40.7763147,
                'longitude': -73.9586954,
                'description': 'Seafood',
                'specialtiesDeals': "So many great flavors of pots of muscles in the most creative and delicous broths. Save room for the doughnuts for desert, they are spectacular with the vanilla dipping sauce they come with." ,
            },
            {
                'location_name': 'B Side Pizza & Wine Bar',
                'latitude': 40.7638562,
                'longitude': -73.9903763,
                'description': 'Pizza',
                'specialtiesDeals': "Great brick oven pizza. But, what really sets them apart from all the other pizza places is their creative toppings such as Carbonara pizza" ,
            },
            {
                'location_name': 'Agora Turkish',
                'latitude': 40.774956,
                'longitude': -73.9563867,
                'description': 'Mediterranian',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': '2 Bros',
                'latitude': 40.7567791,
                'longitude': -73.9824086,
                'description': 'Pizza',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': 'Taqueria Diana',
                'latitude': 40.728438,
                'longitude': -73.9902087,
                'description': 'Mexican',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': 'Cafe Ollin',
                'latitude': 40.7911861,
                'longitude': -73.9415158,
                'description': 'Mexican',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': 'Coarse NY',
                'latitude': 40.7391548,
                'longitude': -74.005815,
                'description': 'Farm to Table',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': 'Zest Sushi',
                'address': '249 Broome St, New York, NY 10002',
                'latitude': 40.717931,
                'longitude': -73.989905,
                'description': 'Sushi',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': 'JoJu',
                'latitude': 40.740765,
                'longitude': -73.879255,
                'description': 'Vietnameese',
                'specialtiesDeals': "Get their bahn mi fries." ,
                'address': '83-25 Broadway, Elmhurst, NY 11373'
            },
            {
                'location_name': 'Yum Yum Too',
                'latitude': 40.7609944,
                'longitude': -73.9926539,
                'description': 'Thai',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': 'Gaia Italian Cafè',
                'latitude': 40.7216961,
                'longitude': -73.9875148,
                'description': 'Italian',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': "Katz's Delicatessen",
                'latitude': 40.722237,
                'longitude': -73.9896177,
                'description': 'Jewish Delicatessen',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': "Vanessa's Dumpling House",
                'latitude': 40.7183673,
                'longitude': -73.993907,
                'description': 'Chineese',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': 'Black Tap',
                'latitude': 40.7238326,
                'longitude': -74.0064651,
                'description': 'Milk Shakes',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': 'Dominique Ansel Kitchen',
                'latitude': 40.7348068,
                'longitude': -74.0040826,
                'description': 'Pastries and Soft Serve',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': 'Sushi Nakazawa',
                'latitude': 40.7318055,
                'longitude': -74.0066793,
                'description': 'Sushi',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': 'Kashkaval Garden',
                'latitude': 40.7667648,
                'longitude': -73.9883826,
                'description': 'Mediterranian',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': 'Peter Luger Steak House',
                'latitude': 40.709823,
                'longitude': -73.9646557,
                'description': 'Steak House',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': 'Taqueria Tlaxcalli',
                'latitude': 40.836269,
                'longitude': -73.8571387,
                'description': 'Mexican',
                'specialtiesDeals': "Get their meat sampler." ,
            },
            {
                'location_name': 'Pick a Bagel',
                'latitude': 40.771934,
                'longitude': -73.9586679,
                'description': 'Bagels',
                'specialtiesDeals': "Get their meat sampler." ,
            }
          ],
          'map': '',
          'infowindow': '',
          'prevmarker': ''
      };

      // retain object instance when used in the function
      this.initMap = this.initMap.bind(this);
      this.openInfoWindow = this.openInfoWindow.bind(this);
      this.closeInfoWindow = this.closeInfoWindow.bind(this);
      this.showRestaurants = this.showRestaurants.bind(this);
      this.hideRestaurants = this.hideRestaurants.bind(this);
      this.searchRestaurants = this.searchRestaurants.bind(this);
      this.specificSearchRestaurants = this.specificSearchRestaurants.bind(this);
  }

  componentDidMount() {
      // Connect the initMap() function within this class to the global window context,
      // so Google Maps can invoke it
      window.initMap = this.initMap;
      // Asynchronously load the Google Maps script, passing in the callback reference
      loadMapJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAmjI8t-x5OZdt1JbGA76oyGWyCIqI42KA&callback=initMap')
  }

  /**
   * Initialise the map once the google map script is loaded
   */

  initMap() {
            var self = this;
            var markers = [];
            var mapview = document.getElementById('map');
            mapview.style.height = window.innerHeight + "px";
            const map = new window.google.maps.Map(mapview, {
              center: {lat: 40.7813549, lng: -73.9680244},
              zoom: 12,
                mapTypeControl: false
            });
            var InfoWindow = new window.google.maps.InfoWindow({});

            window.google.maps.event.addListener(InfoWindow, 'closeclick', function () {
                self.closeInfoWindow();
            });
                    this.setState({
                        'map': map,
                        'infowindow': InfoWindow
                    });
                    window.google.maps.event.addDomListener(window, "resize", function () {
                        var center = map.getCenter();
                        window.google.maps.event.trigger(map, "resize");
                        self.state.map.setCenter(center);
                    });

                    window.google.maps.event.addListener(map, 'click', function () {
                        self.closeInfoWindow();
                    });

                    var clientID ='SMMMQFPVXOQN05KSHJ0HNKXJKPVXVJQYL3AMCQ32U1JYCVYG';
                    var clientSecret ='QWHLGFNXDLNMVFGXNJ5PYUDYNEQYTPOUBZ4K1FBCH2PUICFP';
                    //format date for authentication
                    var today = new Date();
                    var todaydate = today.getDate();
                    var todaydate = "" + todaydate;
                    if (todaydate.length < 2) {
                      todaydate = "0" + todaydate;
                    }
                    var date = today.getFullYear()+""+(today.getMonth()+1)+todaydate;

      var alllocations = [];
      this.state.alllocations.forEach(function (location, index) {
        //console.log(index);

        //map = this.state.map;
        var marker = new window.google.maps.Marker({
          map: map,
          position: new window.google.maps.LatLng(location.latitude, location.longitude),
          title: location.location_name,
          specialtiesDeals: location.specialtiesDeals,
          animation: window.google.maps.Animation.DROP,
          id: index,
          description: location.description ,
          errorMessage: ""
          // address: alllocations.address
        });

        marker.addListener('click', function () {
            self.openInfoWindow(marker);
        });


        var url =  'https://api.foursquare.com/v2/venues/search?ll='+location.latitude+','+location.longitude+'&client_id='+clientID+'&client_secret='+clientSecret+'&v='+date+'&query='+marker.title+ "&limit=1";
        fetch(url)
          .then(
            function (response) {
              response.json().then(function (data) {
                //console.log(data);
                var location_data = data.response.venues[0];


                var titleMarker = location_data.name
                //console.log(location_data);
                var addressMarker = location_data.location.formattedAddress;
                var positionLatMarker = location_data.location.lat
                var positionLngMarker = location_data.location.lng
                var descrptionMarker = location_data.categories[0].name


                marker.position= new window.google.maps.LatLng(positionLatMarker, positionLngMarker);
                marker.title= titleMarker;
                marker.description= descrptionMarker;
                marker.address= addressMarker;
              })
            }
          ).catch(
                function (response) {
            marker.errorMessage= "ERROR: There was a problem pulling from the Foursquare API.";
          }
          )
          markers.push(marker);
          location.marker = marker;
          alllocations.push(location);

          var locationUL = document.getElementById('listOfRestaurantsUL');


          var listItems = markers.map(function(location){
            return `<li>${location.title}</li>`;
            //onKeyPress=${this.specificSearchRestaurants.bind(this)}
          })

          locationUL.innerHTML = listItems.join('');

          var anchors = document.getElementsByTagName('li');
            for(var i = 0; i < anchors.length; i++) {
              var anchor = anchors[i];
              anchor.onclick = function() {
                document.getElementById("searchInput").value = this.textContent
                document.getElementById("searchButton").click()
              }
            }

        });
        this.setState({
            'alllocations': alllocations
        });







  }

  //     //     //     // var longname = marker.name + ' - ' + marker.type;
  //     //     //     //
  //     //     //     //
  //     //     //     //
  //     //     //     //
  //     //     //     //

  //     //     //     //

  //     //     //     //
  //     //     //     // location.longname = longname;
  //     //     //     // location.marker = marker;
  //     //     //     // location.display = true;
  //     //     //     // alllocations.push(location);
  //     //     // })
  //     //     // // this.setState({
  //     //     // //     'alllocations': alllocations;
  //     //     // // });
  //     // });
  // }
  // }
  /**
   * Open the infowindow for the marker
   * @param {object} location marker
   */
  openInfoWindow(marker) {
      this.closeInfoWindow();
      this.state.infowindow.open(this.state.map, marker);
      marker.setAnimation(window.google.maps.Animation.BOUNCE);
      this.setState({
          'prevmarker': marker
      });
      this.state.infowindow.setContent('Loading Data...');
      this.state.map.setCenter(marker.getPosition());
      this.state.map.panBy(0, -200);
      this.getMarkerInfo(marker);
  }

  /**
   * Retrive the location data from the foursquare api for the marker and display it in the infowindow
   * @param {object} location marker
   */
  getMarkerInfo(marker) {
      var self = this;

      //
      //             // Examine the text in the response
      //             response.json().then(function (data) {
      //                 var location_data = data.response.venues[0];
      //                 console.log(location_data);
                       var titleMarker = marker.title;
                       var addressMarker = marker.address;
                       var specDealsMarker = marker.specialtiesDeals;
                      var descrptionMarker = marker.description;
                       self.state.infowindow.setContent(
                         '<h1>' + titleMarker  + '</h1>' +
                         '<p> Type: '+descrptionMarker+'</p>' +
                         '<p> Address: '+addressMarker+'</p>' +
                         '<p> Specialties/Deals: '+specDealsMarker+'</p>' +
                         '<h3>'+marker.errorMessage+'</h3>'
                       );
      //             });
      //         }
      //     )
      //     .catch(function (err) {
      //         self.state.infowindow.setContent("Sorry data can't be loaded");
      //     });
  }

  /**
   * Close the infowindow for the marker
   * @param {object} location marker
   */
  closeInfoWindow() {
      if (this.state.prevmarker) {
          this.state.prevmarker.setAnimation(null);
      }
      this.setState({
          'prevmarker': ''
      });
      this.state.infowindow.close();
  }

  showRestaurants() {
  var AllLocationsLocal = this.state.alllocations;
  var AllLocationsLocal1 = [];
  var MapLocal = this.state.map;
  AllLocationsLocal.forEach(function (location) {
    location.marker.setVisible(true);
    AllLocationsLocal1.push(location);
  // bounds.extend(markers[i].position);
  });
  this.setState ({
      alllocations: AllLocationsLocal1
  });

  // map.fitbounds(bounds);
  }
  // This function will loop through the listings and hide them all.
  hideRestaurants() {


    var AllLocationsLocal = this.state.alllocations
    var AllLocationsLocal1 = [];
    AllLocationsLocal.forEach(function (location) {
      //console.log(location)
      location.marker.setVisible(false);
      AllLocationsLocal1.push(location);
  });

  this.setState ({
      alllocations: AllLocationsLocal1
  });
  }
  // This function will loop through the listings and show only those that fit the search criteria from the input box
  searchRestaurants(){
      var searchRestaurant = document.getElementById("searchInput").value
      if (searchRestaurant === '') {
      window.alert('You must enter search parameters');
      }
      else{
    var AllLocationsLocal = this.state.alllocations
    var AllLocationsLocal1 = [];
    AllLocationsLocal.forEach(function (location) {
        var starter = location.marker.title + location.marker.description + location.marker.address + location.marker.specialtiesDeals
        var foundOrNot= starter.search(new RegExp(searchRestaurant));
      //console.log(location)
      if (foundOrNot<0){
        location.marker.setVisible(false);
      } else {
        location.marker.setVisible(true);
        location.marker.setAnimation(window.google.maps.Animation.BOUNCE);
        //stopAnimations(location.marker);

      }

      AllLocationsLocal1.push(location);
  });

  this.setState ({
      alllocations: AllLocationsLocal1
  });
  }
  }

  specificSearchRestaurants(){
      document.getElementById("searchInput").value = this.textContent
      this.searchRestaurants()
  }












  render() {
    return (
      <div>
      <div>
        <div id="title-box">
          <h1>Amazing Restaurants in NYC by a Local</h1>
        </div>
        <div id="options-box">
        <div id="content">
        <div id="inputBar" className="flexbox">
          <div id="showHide" className="flexbox">
            <div >
              <input id="show-restaurants" type="button" value="Show All Restaurants" onClick={this.showRestaurants} />
              <input id="hide-restaurants" type="button" value="Hide All Restaurants" onClick={this.hideRestaurants}/>
            </div>
          </div>
          <div id="searchDiv" className="flexbox">

            <div className="flexbox">
              <input aria-label="Search-Input" id="searchInput" placeholder="Enter name of restaurant to search"></input>
              <input id="searchButton" type="button" value="Search" onClick={this.searchRestaurants}/>
            </div>
          </div>
        </div>
        </div>
        <div id="listOfRestaurantsContainer">
          <span id="listOfRestaurantsTitle">List of Restaurants</span>
          <div id="listOfRestaurants">

            <ul id="listOfRestaurantsUL" className="flexbox">

            {this.state.locationLIs}

            </ul>
          </div>
        </div>
        </div>
      </div>
      <div>
        <div id="map">
        <div>
            <div id="map"></div>
        </div>

        </div>
      </div>
      </div>
    );
  }
}








export default AppBase;

function loadMapJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    script.onerror = function () {
        document.write("Google Maps can't be loaded");
    };
    ref.parentNode.insertBefore(script, ref);
}
