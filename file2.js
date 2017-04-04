var N2;
(function (N2) {
    var Product = (function () {
        function Product() {
        }
        Product.ProductInfo = function () {
            console.log("Product class from N1 namespace");
        };
        return Product;
    }());
    N2.Product = Product;
    N2.x = 10;
})(N2 || (N2 = {}));
