
window.addEventListener(`load`, async (event) => {
  // prevents the page from reloading
  event.preventDefault()
  //grab the ul
  const eventUL = document.querySelector(`ul`);
  console.log(eventUL)
  // create a new li
  const eventLI = document.createElement(`li`)
 
  //connect the API
  try {
    const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ft/events`)
    const eventData = await response.json();
    console.log(eventData)

    const eventDates = eventData.data.names.map((eventDay) => {
      return eventDay.data.name
    })

    console.log(eventDates)
    // add the html format into the li
  eventLI.innerHTML = `
    <h2>${eventDates}</h2>
    <p>event info</p>
    <p>event info</p>
    <p>event info</p>
    `
  console.log(eventLI)
  
  eventUL.append(eventLI)
  
  } catch(err) {
  } finally {
    console.log(`done`)
  }
  //sort through the API and find the correct information needed
})