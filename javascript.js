const priceParagraph = document.querySelector("#averagePrice")
let averagePrice = 0

const renderAveragePrice = () => {
    calculateAveragePrice()
    priceParagraph.innerText = `This is the average price. $${averagePrice}`
}
// This allows us update our list for the freelancers
const freelancersList = document.querySelector("#freelancers")
let freelancers = [{ name: "Alice", occupation: "Writer", price: 30 }, { name: "Bob", occupation: "teacher", price: 50 }, {name:"Carol", occupation: "programmer", price: 70}]
// 
const renderFreelancers = () => {
    freelancersList.innerHTML=""
    // map is a array method that uses a callback functiion(were passing a a parameter to a callback function)
    freelancers.map( (person) => {
        // innerHTml is going to update the text or data to display ("li") a property
const freelancer= document.createElement("li")
freelancer.innerHTML= `name: ${person.name}, occupation: ${person.occupation}, price: $${person.price}`
freelancersList.appendChild(freelancer)
    })
}
// randomize creating a new freelancer in the array, then rerendering the freelancer array
const names = [ "Susan", "Bryce", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hank" ];
const occupations = [ "Engineer", "Doctor", "Artist", "Salesman", "Lawyer", "Pilot", "Chef", "fisherman"];

const addRandomFreelancer= () => {
    const randomNameIndex= Math.round(Math.random()*(names.length-1))
    const randomJobIndex= Math.round(Math.random()*(occupations.length-1))
const freelancer= {name: names[randomNameIndex], occupation: occupations[randomJobIndex], price: Math.round(Math.random()*(90))}
    freelancers.push(freelancer)
    renderFreelancers()
    renderAveragePrice()
    setTimeout(addRandomFreelancer,5000)
}

// Use setTimeOut to run every 10 seconds
setTimeout(addRandomFreelancer,5000)



// Make a average price dynamic
const calculateAveragePrice= () => {
 let average= freelancers.reduce((sum, person) => sum+person.price, 0 )/freelancers.length
 averagePrice= Math.round(average)
}



//call render freelancers 
renderFreelancers()
// call renderAveragePrice
renderAveragePrice()