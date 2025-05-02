let costEst = document.getElementById('costEstimation')
console.log(costEst);

// console.log(st);

// const startTime = 0
// const endTime = 0;


// submit.addEventListener("click" , () => {

// })


// console.log('start time -- > ' + startTime);



costEst.style.width = "200%"
costEst.style.marginLeft="0px"
costEst.style.backgroundColor = 'white'
let Actcost;


var map, direction_plugin;
function initMap1() {
    map = new mappls.Map('map', {
        center: [28.09, 78.3],
        zoom: 5,
    });

    const temp = [
        { label: "Dajipur Wildlife Sanctuary", geoposition: "16.3837901,73.858529", bestTimeVisit: "m", id : 1 },
        { label: 'Shri Chatrapati Shahu Museum (New Palace)', geoposition: "16.7193627,74.2291601", bestTimeVisit: "m",id : 2},
        { label: 'Gaganbawada', geoposition: "16.5447467,73.8285768", bestTimeVisit: "m", id : 3 },
        { label: 'Sagareshwar deer sanctuary', geoposition: "17.1524136,74.3756682", bestTimeVisit: "m", id : 1 },
        { label: 'kopeshwar temple', geoposition: "16.6596834,74.2871117", bestTimeVisit: "m", id : 4},
        { label: 'Narsinhwadi Datta Mandir', geoposition: "16.6943144,74.5992132", bestTimeVisit: "mae", id : 4},
        { label: 'Vishalgad', geoposition: "16.6943144,74.5992132", bestTimeVisit: "mae",  id : 2 },
        { label: 'Mahalaxmi Temple, Kolhapur', geoposition: "16.6949604,74.2203203", bestTimeVisit: "mae", id : 4 },
        { label: 'Binkhambi Ganesh Temple', geoposition: "16.6933161,74.2201783", bestTimeVisit: "mae", id : 4},
        { label: 'Gangagiri Maharaj Math Temple', geoposition: "16.6743388,74.199228", bestTimeVisit: "mae", id : 4},
        { label: 'Jyotiba Temple', geoposition: "16.8022221,74.132763", bestTimeVisit: "m", id : 3},
        { label: 'Temlabai Mandir', geoposition: "16.7017445,74.2109249", bestTimeVisit: "mae", id  : 4 },
        { label: 'Siddhagiri Museum', geoposition: "16.6119358,74.2605189", bestTimeVisit: "mae", id : 2},
        { label: 'Chinmaya Ganadhish', geoposition: "16.7966372,74.2885519", bestTimeVisit: "m", id : 4},
        { label: 'DYP City Mall', geoposition: "16.7036448,74.2479441", bestTimeVisit: "mae", id : 5 },
        { label: 'panhala-Fort', geoposition: "16.8111961,74.1063813", bestTimeVisit: "m", id : 2 },
        { label: 'Sajja Kothi', geoposition: "16.8137417,74.110248", bestTimeVisit: "m", id : 2 },
        { label: 'Bhavani Mandap', geoposition: "16.6949214,74.2216332", bestTimeVisit: "m", id : 4},
        { label: 'Radhanagari Dam', geoposition: "16.4049076,73.9566919", bestTimeVisit: "mae", id : 1 },
        { label: 'Teen Darwaza', geoposition: "16.80727,74.1043053", bestTimeVisit: "mae", id : 2},
        { label: 'Khasbag Maidan', geoposition: "16.6927128,74.2212379", bestTimeVisit: "mae", id : 2},
        { label: 'Shalini Palace', geoposition: "16.6924496,74.2045141", bestTimeVisit: "e", id : 2 }   
    ].filter((item) => {
        if(item.bestTimeVisit === 'e' || item.bestTimeVisit === 'mae'){
            return item
        }
    })

    
    
    map.addListener('load', function () {
        /*direction plugin initialization*/
        var direction_option = {
            map: map,
            divWidth: '350px',
            divHeight: '500px',
            isDraggable: true,
            end: { label: 'Rankala', geoposition: "16.6887228,74.2056566" },
            Profile: ['driving', 'biking', 'walking'],
            via:temp
        }
        mappls.direction(direction_option, function (data) {
            direction_plugin = data;
            console.log(direction_plugin);
            console.log('distance-->' + direction_plugin.data[0].distance);
            const dist = direction_plugin.data[0].distance
            const cost = parseFloat(dist.split("km"));
            console.log('cost --> ' + cost);
            
            Actcost = cost
            costEst.style.width = "160%"
            costEst.style.marginLeft="0px"
            costEst.style.backgroundColor = '#8bd78b'
            costEst.innerText = `The cost estimation would be ${((temp.length / 3 ) * 1000 + cost * 3)}Rs`
            console.log('cost -->' + ((temp.length / 3 ) * 1000 + cost * 3));
        });
    });

    
   

}