import people from "./people.js"
const table = document.querySelector("tbody")

const generateTableRow = el => {
	if (el.status === "Active") {
		return `
            <tr>
                  <td>${el.customer}</td>
                  <td>${el.company}</td>
                  <td>${el.phone}</td>
                  <td>${el.email}</td>
                  <td>${el.country}</td>
                  <td ><a class='button_green'>${el.status}</a></td>
            </tr>
            
      `
	} else {
		return `
            <tr>
                  <td>${el.customer}</td>
                  <td>${el.company}</td>
                  <td>${el.phone}</td>
                  <td>${el.email}</td>
                  <td>${el.country}</td>
                  <td><a class='button_red'>${el.status}</a></td>
            </tr>
            
      `
	}
}

people.map(el => table.insertAdjacentHTML("beforeend", generateTableRow(el)))
