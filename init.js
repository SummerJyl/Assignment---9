function init() {
    // Display Command Menu
    console.log('The Employee Management Application')
    console.log('-----------------------------------')
    console.log('Command Menu')
    console.log('view - Show all employees')
    console.log('add - Add an employee')
    console.log('delete - Delete an employee')
    console.log('exit - Exit the application')
    console.log('----------------------------------')
    console.log('')
}
// Loading JSON Data
const xhr = new XMLHttpRequest()
xhr.responseType = 'json'
xhr.open('GET', 'data/employees.json')
xhr.addEventListener('readystatechange', () => {
if (xhr.readyState === 4 && xhr.status === 200) {
let employees = xhr.response
for (let employee of employees) {
document.body.innerHTML += `${employee.id}<br>${employee.name}<br>${employee.extension}<br>${employee.email}<br>${employee.department}'
<br><br>'`
}
}
})
xhr.onerror = (e) => {console.error(e.message)}
xhr.send()

 
 async function loadJSONData() {
    try {
       const response = await fetch('https://example.com/api/data.json');
       const jsonData = await response.json();
       return jsonData;
    } catch (error) {
       console.error('Error loading JSON data:', error);
    }
 }
 
 // Accessing the JSON data using the Promise returned by the loadJSONData() function
 loadJSONData().then(buildGrid);