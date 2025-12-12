
const menu =async()=> {
    const response = await fetch('/data.json');
    const data = await response.json();
    return data;
}

menu().then(data=>{
    document.querySelector('#select-kind').innerHTML+=data?.map(item=>(`
    <div class="select-width">
        <img src="../img/${item.imgSrc}" alt="" />       
        <span>${item.name}</span>
        <p class="price">$${item.price}</p>
    </div>
    `));
})