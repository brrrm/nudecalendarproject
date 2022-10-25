// 2020
(function() {
	var products = [
		{
			id: '4256713769026', // amsterdam calendar 2019
			product: '1571344433543'
		},
		{
			id: '4256651706434', // amsterdam calendar 2020
			product: '1571344510124'
		},
		{
			id: '4701905027138', // amsterdam calendar 2021
			product: '1602178731128'
		},
		{
			id: '4701904633922', // berlin calendar 2021
			product: '1602178881523'
		},
		{
			id: '6658946007106', // berlin calendar 2022
			product: '1635784095257'
		},
		{
			id: '6673367990338' ,// poster: girl on the buoy
			product: '1635844050645'
		},
		{
			id: '6658948726850', // poster girl in the metro
			product: '1635846234621'
		},
		{
			id: '6673379688514', // poster Leyla & Beer
			product: '1635846921599'
		},
		{
			id: '6673385160770', // Combi deal: The Berlin calendar 2022 + 2021
			product: '1635848528317'
		},
		{
			id: '6683772911682', // year poster Amsterdam 2022
			product: '1638349793832'
		},
		{
			id: '6683762753602', // Mama's plate (Sofie)
			product: '1638350698466'
		},
		{
			id: '6683763114050', // Mama's plate (Lauren & Gijs)
			product: '1638350800098'
		},
		{
			id: '6683763834946', // Onderbroeken
			product: '1638351230374'
		},
		{
			id: '6833058578498', // berlin calendar 2023
			product: '1666693843738'
		},
		{
			id: '6833057398850', // Lowlands calendar 2023
			product: '1666693884758'
		},
		{
			id: '6833060905026', // trio berlin 2021 2022 2023
			product: '1666693924745'
		},
		{
			id: '6833059889218', // LL en Berlin 2023 combi
			product: '1666693978610'
		}
	];


    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = window.ShopifyBuy.buildClient({
            domain: 'de-amsterdamse-naaktkalender.myshopify.com',
            storefrontAccessToken: '654e8e16671673a9936fe0afffe19306',
        });
        products.forEach( function(prod){
            window.ShopifyBuy.UI.onReady(client).then(function(ui) {
                ui.createComponent('product', {
                    id: prod.id,
                    node: document.getElementById('product-component-' + prod.product),
                    moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
                    options: {
                        "product": {
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "calc(25% - 20px)",
                                        "margin-left": "20px",
                                        "margin-bottom": "50px"
                                    }
                                }
                            },
                            "buttonDestination": "modal",
                            "contents": {
                                "img": false,
                                "title": false,
                                "price": false,
                                "options": false
                            },
                            "text": {
                                "button": "View product"
                            }
                        },
                        "productSet": {
                            "styles": {
                                "products": {
                                    "@media (min-width: 601px)": {
                                        "margin-left": "-20px"
                                    }
                                }
                            }
                        },
                        "modalProduct": {
                            "contents": {
                                "img": false,
                                "imgWithCarousel": true,
                                "button": false,
                                "buttonWithQuantity": true
                            },
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "100%",
                                        "margin-left": "0px",
                                        "margin-bottom": "0px"
                                    }
                                }
                            },
                            "text": {
                                "button": "Add to cart"
                            }
                        },
                        "cart": {
                            "text": {
                                "total": "Subtotal",
                                "button": "Checkout"
                            }
                        }
                    },
                });
            });
        });
    }
})();

