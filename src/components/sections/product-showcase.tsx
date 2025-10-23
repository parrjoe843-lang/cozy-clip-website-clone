"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Minus, Plus, ChevronDown } from 'lucide-react';

const productImages = [
  { id: 1, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/periwinkle-1-5.png", alt: "The Cloud Clip in Periwinkle held in hand" },
  { id: 2, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/periwinkle-2-7.png", alt: "The Cloud Clip in Periwinkle on hair" },
  { id: 3, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/periwinkle-3-9.png", alt: "The Cloud Clip in Periwinkle close-up" },
  { id: 4, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/periwinkle-4-10.png", alt: "The Cloud Clip in Periwinkle on blonde hair" },
  { id: 5, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/periwinkle-5-8.png", alt: "The Cloud Clip in Periwinkle on a surface" },
  { id: 6, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/periwinkle-6-12.png", alt: "The Cloud Clip in Periwinkle on dark hair" },
  { id: 7, src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/cb4c4474-dbe2-4b57-aa0f-bc26d6bb91bf-thecozyclip-com/assets/images/periwinkle-7-11.png", alt: "The Cloud Clip in Periwinkle being held" },
];

const ProductShowcase = () => {
  const [activeImage, setActiveImage] = useState(productImages[0]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Load Shopify Buy Button script for the new embed
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    
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
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      const client = window.ShopifyBuy.buildClient({
        domain: '6wy0f0-um.myshopify.com',
        storefrontAccessToken: '733749196c94c61f4bbc88e4e1bf1df5',
      });
      
      window.ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '7965755801739',
          node: document.getElementById('product-component-1761169891103'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "50px"
                  },
                  "text-align": "left"
                },
                "title": {
                  "font-size": "32px"
                },
                "button": {
                  ":hover": {
                    "background-color": "#a7b1c2"
                  },
                  "background-color": "#b9c5d7",
                  ":focus": {
                    "background-color": "#a7b1c2"
                  }
                },
                "price": {
                  "font-size": "18px"
                },
                "compareAt": {
                  "font-size": "15.299999999999999px"
                },
                "unitPrice": {
                  "font-size": "15.299999999999999px"
                }
              },
              "layout": "horizontal",
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true,
                "description": true
              },
              "width": "100%",
              "text": {
                "button": "Add to cart"
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
                },
                "button": {
                  ":hover": {
                    "background-color": "#a7b1c2"
                  },
                  "background-color": "#b9c5d7",
                  ":focus": {
                    "background-color": "#a7b1c2"
                  }
                },
                "title": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "bold",
                  "font-size": "26px",
                  "color": "#4c4c4c"
                },
                "price": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "18px",
                  "color": "#4c4c4c"
                },
                "compareAt": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  "color": "#4c4c4c"
                },
                "unitPrice": {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  "color": "#4c4c4c"
                }
              },
              "text": {
                "button": "Add to cart"
              }
            },
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  ":hover": {
                    "background-color": "#a7b1c2"
                  },
                  "background-color": "#b9c5d7",
                  ":focus": {
                    "background-color": "#a7b1c2"
                  }
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "popup": false
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "background-color": "#b9c5d7",
                  ":hover": {
                    "background-color": "#a7b1c2"
                  },
                  ":focus": {
                    "background-color": "#a7b1c2"
                  }
                }
              }
            }
          },
        });
      });
    }
  }, []);

  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const Thumbnail = ({ img }: { img: typeof productImages[0] }) => (
    <button
      onClick={() => setActiveImage(img)}
      className={`w-full aspect-[4/5] relative rounded-lg overflow-hidden border-2 ${activeImage.id === img.id ? 'border-brand-periwinkle' : 'border-transparent'} transition-colors`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="120px"
        className="object-cover"
      />
    </button>
  );

  return (
    <section className="py-12 md:py-24 bg-white font-body">
      <div className="container mx-auto px-4">
        <div id='product-component-1761169891103'></div>
        <div className="rbrFastBundlePage" data-view="automatic" bundle-ids="f0e0626a-fa53-463d-bbf5-4b6472cf057c"></div>
      </div>
    </section>
  );
};

export default ProductShowcase;