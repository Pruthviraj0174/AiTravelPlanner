/*=============== SHOW MENU ===============*/

const navMenu=document.getElementById('nav-menu'),
      navToggle=  document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

      // const endTime = 0;

// validate if toggle exits

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
} 

// validate if constant exits

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link')

const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))
/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader=()=>{
    const header=document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header'):header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp=document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:3000,
    delay:400,

})


document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.getElementById('country');
    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');

    // Mock API data
    const mockData = {
        countries: [
            { name: { common: "India" } }
        ],
        states: {
            "India": [
                "Delhi",
                "Maharashtra",
                "Karnataka",
                "Tamil Nadu",
                "West Bengal",
                "Uttar Pradesh",
                "Rajasthan",
                "Gujarat",
                "Punjab",
                "Haryana",
                "Bihar",
                "Jharkhand",
                "Assam",
                "Kerala",
                "Odisha",
                "Himachal Pradesh",
                "Uttarakhand",
                "Chhattisgarh",
                "Goa",
                "Tripura",
                "Manipur",
                "Nagaland",
                "Meghalaya",
                "Sikkim",
                "Arunachal Pradesh",
                "Mizoram",
                "Andaman and Nicobar Islands",
                "Dadra and Nagar Haveli and Daman and Diu",
                "Lakshadweep"
            ]
        },
        cities: {
            "Maharashtra": ["Kolhapur","Mumbai", "Pune", "Nagpur", "Aurangabad", "Nashik", "Thane", "Solapur", "Satara"],
            "Delhi": ["Delhi", "New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
            
            "Karnataka": ["Bangalore", "Mysore", "Hubli", "Dharwad", "Belgaum", "Mangalore", "Shimoga", "Tumkur"],
            "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Erode", "Vellore", "Nagercoil"],
            "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Malda", "Bardhaman", "Kharagpur"],
            "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut", "Allahabad", "Bareilly", "Ghaziabad", "Moradabad"],
            "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Kota", "Ajmer", "Bikaner", "Alwar", "Bhilwara", "Sikar"],
            "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Junagadh", "Bhavnagar", "Anand"],
            "Punjab": ["Chandigarh", "Amritsar", "Jalandhar", "Ludhiana", "Patiala", "Mohali", "Bathinda", "Moga"],
            "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Ambala", "Karnal", "Hisar", "Yamunanagar", "Rohtak"],
            "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Munger", "Purnia", "Sasaram"],
            "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Giridih", "Deoghar", "Chaibasa"],
            "Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tezpur", "Nagaon", "Karimganj", "Bongaigaon"],
            "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Palakkad", "Thrissur", "Kannur", "Alappuzha"],
            "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Balasore", "Khurda", "Jharsuguda"],
            "Himachal Pradesh": ["Shimla", "Dharamshala", "Kullu", "Manali", "Solan", "Mandi", "Hamirpur", "Bilaspur"],
            "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Rudrapur", "Roorkee", "Haldwani", "Pithoragarh", "Mussoorie"],
            "Chhattisgarh": ["Raipur", "Bilaspur", "Korba", "Durg", "Jagdalpur", "Raigarh", "Ambikapur", "Brisbane"],
            "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Cortalim", "Bambolim", "Calangute"],
            "Tripura": ["Agartala", "Udaipur", "Kailasahar", "Dharmanagar", "Sepahijala", "Khowai", "Ambassa", "Belonia"],
            "Manipur": ["Imphal", "Thoubal", "Kakching", "Jiribam", "Churachandpur", "Senapati", "Ukhrul", "Tamenglong"],
            "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Wokha", "Tuensang", "Phek", "Mon", "Zunheboto"],
            "Meghalaya": ["Shillong", "Tura", "Jowai", "Williamnagar", "Bongai", "Mawkyrwat", "Nongstoin", "Mairang"],
            "Sikkim": ["Gangtok", "Namchi", "Geyzing", "Pelling", "Jorethang", "Mangan", "Rangpo", "Soreng"],
            "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Ziro", "Bomdila", "Tezu", "Aalo"],
            "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Kolasib", "Mamit", "Serchhip", "Saiha", "Hnahthial"],
            "Andaman and Nicobar Islands": ["Port Blair", "Havelock", "Neil Island", "Diglipur", "Rangat", "Mayabunder", "Campbell Bay", "Long Island"],
            "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa", "Vapi", "Pardi", "Kharadpada", "Narmada"],
            "Lakshadweep": ["Kavaratti", "Agatti", "Minicoy", "Andrott", "Suheli Parali", "Kalapeni", "Kiltan", "Maliku Atoll"]
        }
    };

    // Fetch and populate countries
    function loadCountries() {
        try {
            const countries = mockData.countries.map(country => country.name.common);
            populateDropdown(countrySelect, countries);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    }

    // Fetch and populate states based on selected country
    function loadStates(country) {
        try {
            const states = mockData.states[country] || [];
            populateDropdown(stateSelect, states);
            stateSelect.disabled = false;
            citySelect.innerHTML = '<option value="">Select City</option>';
            citySelect.disabled = true;
        } catch (error) {
            console.error('Error fetching states:', error);
            stateSelect.innerHTML = '<option value="">Select State</option>';
            citySelect.innerHTML = '<option value="">Select City</option>';
            citySelect.disabled = true;
        }
    }

    // Fetch and populate cities based on selected state
    function loadCities(state) {
        try {
            const cities = mockData.cities[state] || [];
            populateDropdown(citySelect, cities);
            citySelect.disabled = false;
        } catch (error) {
            console.error('Error fetching cities:', error);
            citySelect.innerHTML = '<option value="">Select City</option>';
            citySelect.disabled = true;
        }
    }

    // Populate dropdown with options
    function populateDropdown(selectElement, items) {
        selectElement.innerHTML = '<option value="">Select</option>'; // Clear existing options
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            selectElement.appendChild(option);
        });
    }

    // Event listeners
    countrySelect.addEventListener('change', function() {
        const selectedCountry = countrySelect.value;
        console.log('Selected Country:', selectedCountry); // Debugging line
        if (selectedCountry) {
            loadStates(selectedCountry);
        } else {
            stateSelect.innerHTML = '<option value="">Select State</option>';
            citySelect.innerHTML = '<option value="">Select City</option>';
            stateSelect.disabled = true;
            citySelect.disabled = true;
        }
    });

    stateSelect.addEventListener('change', function() {
        const selectedState = stateSelect.value;
        console.log('Selected State:', selectedState); // Debugging line
        if (selectedState) {
            loadCities(selectedState);
        } else {
            citySelect.innerHTML = '<option value="">Select City</option>';
            citySelect.disabled = true;
        }
    });

    // Initial load
    loadCountries();
});

