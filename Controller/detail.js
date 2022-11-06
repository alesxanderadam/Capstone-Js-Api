(function getListProduct() {
    var urlParams = new URLSearchParams(window.location.search);
    var maSP = urlParams.get('maSP');
    var promise = axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${maSP}`,
        method: 'GET',
    });
    promise.then(function (res) {
        var imgSneaker = res.data.content;
        console.log(res.data.content)
        document.getElementById('img-id').src = imgSneaker.image
        document.getElementById('product-name').innerHTML = imgSneaker.name
        document.getElementById('description').innerHTML = imgSneaker.description
        document.getElementById('price').innerHTML = imgSneaker.price + '$'
    })
    promise.catch(function (err) {
        console.log(err)
    })
})();

