var N1;
(function (N1) {
    var Product = (function () {
        function Product() {
        }
        Product.ProductInfo = function () {
            console.log("Product class from N1 namespace");
        };
        return Product;
    }());
    N1.Product = Product;
    N1.x = 10;
})(N1 || (N1 = {}));
