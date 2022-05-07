
//show or hide sidebar
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener( 'click', () =>{
    sidebar.style.display = 'block';
}
)


closeBtn.addEventListener( 'click', () =>{
    sidebar.style.display = 'none';
}
)

//change theme
const themeBtn =  document.querySelector('.theme-toggler');

themeBtn.addEventListener('click',  () => {
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');

    themeBtn.querySelector('span:last-child').classList.toggle('active');

}
) 

//fill order in table
Orders.forEach(order => {
    const tr =document.createElement('tr');
    const trContent = `

    <td>${order.productName}</td>
    <td>${order.ProductNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === 'Declined'? 'danger': order.shipping === 'pending'? 'warning' :'primary'}">${order.shipping}</td>
    <td class="primary">Details</td>  
    `;

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);

})

