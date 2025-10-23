import React from 'react';

const AnnouncementBar = () => {
  return (
    <section className="relative bg-primary text-primary-foreground text-center border-b border-border hover:bg-brand-dusty-rose-hover transition-colors duration-200">
      <a
        href="/pages/international-shipping"
        className="block w-full px-5 py-1 text-sm text-current lg:px-0 lg:py-2"
      >
        Free shipping on all orders!
      </a>
    </section>
  );
};

export default AnnouncementBar;