


function spinWheel(){
    const min = 1024
    const max = 9999
    const deg = Math.floor(Math.random() * (max-min +1) + min)
    document.getElementById("box").style.transform = "rotate("+deg+"deg)"
    const element = document.getElementById("mainbox")
    element.classList.remove("animate")

function spinWheel(){
    const min = 1024
    const max = 9999
    const deg = Math.floor(Math.random() * (y-x) + x)
    document.getElementById("box").style.transform = "rotate("+deg+" deg)" 

    const element = document.getElementById("mainbox")
    element.classList.remove("animate")



    setTimeout(function(){
        element.classList.add("animate");
    }, 5000)
}




document.querySelector('.spin-button').addEventListener('animationend', showPopup)

document.querySelector('.spin-wheel').addEventListener('animationend', showPopup)

function showPopup() {
    document.getElementById('popup').style.display = 'block'
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none'
}
}


 document.querySelector("#select").addEventListener("change",(e)=>{

    if(e.target.value==="four"){
        window.open("https://www.airbnb.com/s/Tuscany--Italy/homes?adults=2&tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&query=Tuscany%2C%20Italy&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=23&place_id=ChIJezSAEFMr1BIRq1kgW7rDxro&date_picker_type=calendar&checkin=2023-04-29&checkout=2023-04-30&source=structured_search_input_header&search_type=filter_change&search_mode=flex_destinations_search&location_search=MIN_MAP_BOUNDS&category_tag=Tag%3A8542",'_blank');
        
    
    }
    if(e.target.value==="one"){
        window.open("https://www.airbnb.com/s/New-York-City--New-York--United-States/homes?adults=2&tab_id=home_tab&query=New%20York%20City%2C%20NY&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=23&place_id=ChIJOwg_06VPwokRYv534QaPC8g&date_picker_type=calendar&checkin=2023-03-11&checkout=2023-04-03&source=structured_search_input_header&search_type=unknown&refinement_paths%5B%5D=%2Fhomes",'_blank');       
    }
    if(e.target.value==="two"){
        window.open("https://www.airbnb.com/s/Paris--France/homes?adults=2&tab_id=home_tab&query=Paris%2C%20France&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=23&place_id=ChIJD7fiBh9u5kcRYJSMaMOCCwQ&date_picker_type=calendar&checkin=2023-03-11&checkout=2023-04-03&source=structured_search_input_header&search_type=unknown&refinement_paths%5B%5D=%2Fhomes",'_blank');
    }
    if(e.target.value==="three"){
        window.open("https://www.airbnb.com/s/Bora~Bora--Leeward-Islands--French-Polynesia/homes?tab_id=home_tab&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=5&refinement_paths%5B%5D=%2Fhomes&place_id=ChIJK6Wf3FO8vXYRWcWLFrt275s&query=Bora-Bora%2C%20Leeward%20Islands%2C%20French%20Polynesia&date_picker_type=calendar&checkin=2023-05-24&checkout=2023-06-07&search_type=unknown",'_blank');
    }
    if(e.target.value==="five"){
        window.open("https://www.airbnb.com/s/Aruba/homes?tab_id=home_tab&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=14&place_id=ChIJ23da4s84hY4RL4yBiT6KavE&query=Aruba&date_picker_type=calendar&checkin=2023-06-29&checkout=2023-06-30&search_type=unknown&refinement_paths%5B%5D=%2Fhomes",'_blank');
    }
    if(e.target.value==="six"){
        window.open("https://www.airbnb.com/s/Santorini--Greece/homes?tab_id=home_tab&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=1&place_id=ChIJ6bzjBc7NmRQR26Hvu5LB9Ak&query=Santorini%2C%20Greece&date_picker_type=calendar&checkin=2023-06-29&checkout=2023-06-30&search_type=unknown&refinement_paths%5B%5D=%2Fhomes",'_blank');
    }
    if(e.target.value==="seven"){
        window.open("https://www.airbnb.com/s/Cape-Town--Western-Cape--South-Africa/homes?adults=2&tab_id=home_tab&query=Cape%20Town%2C%20South%20Africa&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=23&place_id=ChIJ1-4miA9QzB0Rh6ooKPzhf2g&date_picker_type=calendar&checkin=2023-05-25&checkout=2023-05-31&source=structured_search_input_header&search_type=unknown&refinement_paths%5B%5D=%2Fhomes", '_blank');
    }
    if(e.target.value==="eight"){
        window.open("https://www.airbnb.com/s/Tokyo--Japan/homes?adults=2&tab_id=home_tab&query=Tokyo%2C%20Japan&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=6&place_id=ChIJ51cu8IcbXWARiRtXIothAS4&date_picker_type=calendar&checkin=2023-06-29&checkout=2023-06-30&source=structured_search_input_header&search_type=unknown&refinement_paths%5B%5D=%2Fhomes", '_blank');
    }
    })




// const comment = document.getElementById("commentsList")

function addComment(e) {
    e.preventDefault()
    const comment = document.getElementById("scrollBox")
    const li = document.createElement("li")
    li.innerText = e.target.commentInput.value

    comment.append(li)

    e.target.reset()
}

document.getElementById("form").addEventListener("submit", (e) => addComment(e))








function hidePopup() {
    document.getElementById('popup').style.display = 'none'
}*/


