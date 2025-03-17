const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "./images/miso.jpeg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "./images/tonkotsu.jpg" }
 ];


 function displayRamens(){
    document.addEventListener('DOMContentLoaded', () => {
        let ramenMenu = document.querySelector('#ramen-menu');
        ramens.forEach( ramen  => {
            let image = document.createElement('img');
            image.src = ramen.image;
            image.alt = ramen.name;
            ramenMenu.appendChild(image);
            image.addEventListener('click', (event) => {
                let ramenPic = document.querySelector('#ramen-pic');
                document.querySelector('#ramen-name').textContent = `${ramen.name}`;
                document.querySelector('#ramen-rating').textContent = `Rating: ${ramen.rating ? ramen.rating : "N/A"} / 10`;
                document.querySelector('#ramen-restaurant').textContent = `Restaurant: ${ramen.restaurant}`;
                document.querySelector('#ramen-comment').textContent = `Comment: ${ramen.comment ? ramen.comment : "N/A"}`;
                ramenPic.src = image.src;
                ramenPic.alt = image.alt;
            }); 
        })
    })
 }
 displayRamens();


 function addSubmitListener() {
    let form = document.querySelector('#new-ramen');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

  
        let name = document.querySelector('#new-name').value;
        let restaurant = document.querySelector('#new-restaurant').value;
        let imageSrc = document.querySelector('#new-image').value;
        let rating = document.querySelector('#new-rating').value;
        let comment = document.querySelector('#new-comment').value;

        let newRamen = {
            id: ramens.length + 1, 
            name: name,
            restaurant: restaurant,
            image: imageSrc,
            rating: rating,
            comment: comment
        };

 
        ramens.push(newRamen);

    
        let newImage = document.createElement('img');
        newImage.src = newRamen.image;
        newImage.alt = newRamen.name;
        document.querySelector('#ramen-menu').appendChild(newImage);


        newImage.addEventListener('click', handleDisplay);


        form.reset();
    });
}

addSubmitListener();


function handleDisplay(event) {
    const selectedRamen = ramens.find(ramen => ramen.image === event.target.src);

    if (selectedRamen) {

        document.querySelector('#ramen-pic').src = selectedRamen.image;
        document.querySelector('#ramen-pic').alt = selectedRamen.name;
        document.querySelector('#ramen-name').textContent = selectedRamen.name;
        document.querySelector('#ramen-restaurant').textContent = `Restaurant: ${selectedRamen.restaurant}`;
        document.querySelector('#ramen-rating').textContent = `Rating: ${selectedRamen.rating ? selectedRamen.rating : "N/A"} / 10`;
        document.querySelector('#ramen-comment').textContent = `Comment: ${selectedRamen.comment ? selectedRamen.comment : "No comment available"}`;
    }
}


 /*
 function addSubmitListener(){
    let input = document.querySelector('#new-ramen');
    input.addEventListener('submit', (e) => {
        let newRamen = document.querySelector('#new-ramen');
        let newImage = document.createElement('img');
        newImage.alt = e.target.newRamen.value;
        newImage.src = `${e.target.newRamen.value}+.jpg`;
        document.querySelector('#ramen-menu').appendChild(newImage);
    })
 }

 addSubmitListener();
*/

