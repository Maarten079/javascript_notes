// Create event listener
document.getElementById("button1").addEventListener("click", loadCustomer);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);
      console.log(customer);

      const output = `
      <ul>
        <li>ID: ${customer.id}</li>
        <li>name: ${customer.name}</li>
        <li>company: ${customer.company}</li>
        <li>phone: ${customer.phone}</li>
      `;

      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}
