declare global {
  interface Window {
    ShopifyBuy?: {
      buildClient: (config: { domain: string; storefrontAccessToken: string }) => any;
      UI?: {
        onReady: (client: any) => Promise<any>;
      };
    };
  }
}

export {};
