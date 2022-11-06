(function getListProduct() {
  var promise = axios({
    url: `https://shop.cyberlearn.vn/api/Product`,
    method: 'GET',
  });
  promise.then(function (res) {
    renderListProduct(res.data.content)
    console.log(res.data.content)
  })
  promise.catch(function (err) {
    console.log(err)
  })
})();

function renderListProduct(arrProduct) {
  var contentHTML = ''
  for (var i = 0; i < arrProduct.length; i++) {
    var item = arrProduct[i];
    contentHTML += `
    <div class="col-sm-12 col-md-6 col-xl-4">
      <div class="item">
      <a href="./detail.html?maSP=${item.id}">
        <img class="w-100" src="${item.image}" alt="" />
        <h1>${item.name > '10' ? item.name.substr(0, 12) + '...' : item.name}</h1>
        <p>
        ${item.description > '50' ? item.description.substr(0, 50) + '...' : item.description}
        </P>
        <div class="buy d-flex">
          <button>Buy now</button>
          <button>${item.price}</button>
        </div>
      </a>
    </div>
  </div>   
        `
  }
  document.querySelector('#listProduct').innerHTML = contentHTML;
}
