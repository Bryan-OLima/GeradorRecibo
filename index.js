import Ticket from "./ticket.js";

const name = document.querySelector(".name");
const price = document.querySelector(".price");
const address = document.querySelector(".address");
const myButton = document.getElementById("myButton");
const content = document.querySelector(".content");
const city = document.querySelector("#cities");

myButton.addEventListener("click", ()=> {
    const ticket = new Ticket(name.value, address.value, price.value, city.value);

    if(ticket.name && ticket.address && ticket.price && ticket.city){
        generateTicket(ticket, formateDate());
    } else {
        alert("Por favor, preencha todos os campos para prosseguir");
    }
});

const formateDate = () => {

    let date = new Date();

    let day = date.getDate();
    let month = date.toLocaleDateString('pt-BR', { month: 'long' });
    let year = date.getFullYear();

    return ` ${day} de ${month} de ${year}`;
}

const formateCurrency = (value) =>{
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value);
}

const generateTicket = (ticket, date) => {
    ticket.price = formateCurrency(ticket.price);

    content.innerHTML = `
        <div class="print-container">
            <div class="receipt-box">
                <div class="receipt-header">
                    <h1>Recibo de Pagamento de Aluguel</h1>
                    <span class="price-tag">Valor: ${ticket.price}</span>
                </div>
                
                <div class="receipt-body">
                    <p>Recebemos de <span style="font-weight: bold">${ticket.name}</span> a importância referente ao aluguel do imóvel situado em: 
                    <br/>
                    <em>${ticket.address} - ${ticket.city}/SP</em></p>
                </div>

                <div class="receipt-footer">
                    <div class="signature">
                        <span>Locatário:</span>
                        <div class="line"></div>
                        <span style="font-weight: bold">${ticket.name}</span>
                    </div>
                </div>

                <div class="date-location">
                    ${ticket.city}, ${date}
                </div>
            </div>

            <div class="cut-line">
                <span>✂ Corte aqui</span>
            </div>

            <div class="receipt-box">
                <div class="receipt-header">
                    <h1>Recibo de Pagamento de Aluguel</h1>
                    <span class="price-tag">Valor: ${ticket.price}</span>
                </div>
                
                <div class="receipt-body">
                    <p>Recebemos de <span style="font-weight: bold">${ticket.name}</span> a importância referente ao aluguel do imóvel situado em:
                    <br/>
                    <em>${ticket.address} - ${ticket.city}/SP</em></p>
                </div>

                <div class="receipt-footer">
                    <div class="signature">
                        <span>Locatário:</span>
                        <div class="line"></div>
                        <span style="font-weight: bold">${ticket.name}</span>
                    </div>
                </div>

                <div class="date-location">
                    ${ticket.city}, ${date}
                </div>
            </div>

        </div>
    `;
    ticket.print();
}